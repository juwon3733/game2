// web/assets 폴더의 이미지가 게임이 찾는 파일명·형식·크기와 맞는지 검사한다.
// 사용: node tools/check-assets.mjs
// 빠진 이미지는 오류가 아니다(게임이 임시 그림을 쓴다). 이름이 틀렸거나 PNG가 아닌 파일만 실패로 처리한다.

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const web = path.join(root, 'web');
const assetDir = path.join(web, 'assets');

// 브라우저용 데이터 파일을 그대로 읽어 필요한 이미지 목록을 만든다
const ctx = vm.createContext({});
// 장별 데이터(data_chN.js)와 프롬프트(asset_prompts*.js)를 전부 읽는다
const jsFiles = fs.readdirSync(path.join(web, 'js'));
const dataFiles = jsFiles.filter((f) => /^data_ch\d+\.js$/.test(f)).sort();
const promptFiles = jsFiles.filter((f) => /^asset_prompts(_ch\d+)?\.js$/.test(f)).sort();
for (const f of [...dataFiles, ...promptFiles, 'asset_list.js'].map((x) => 'js/' + x)) {
  vm.runInContext(fs.readFileSync(path.join(web, f), 'utf8'), ctx, { filename: f });
}
const required = JSON.parse(vm.runInContext('JSON.stringify(requiredAssets())', ctx));
const requiredPaths = new Set(required.map((a) => a.path));

const MAX_BYTES = 3 * 1024 * 1024;
const errors = [];
const warnings = [];
const present = [];

function imageInfo(file) {
  const b = fs.readFileSync(file);
  if (b.length >= 24 && b.readUInt32BE(0) === 0x89504e47) {
    return { type: 'png', w: b.readUInt32BE(16), h: b.readUInt32BE(20), bytes: b.length };
  }
  if (b[0] === 0xff && b[1] === 0xd8) return { type: 'jpeg', bytes: b.length };
  if (b.slice(0, 4).toString() === 'RIFF' && b.slice(8, 12).toString() === 'WEBP') return { type: 'webp', bytes: b.length };
  return { type: 'unknown', bytes: b.length };
}

// PNG를 풀어서 쓰인 색 수를 센다(limit+1에서 멈춤). 도트는 색이 적고, 고해상도 일러스트는 수만 색이 나온다.
function countColors(file, limit) {
  const b = fs.readFileSync(file);
  let p = 8, w, h, depth, type, plte, trns;
  const idat = [];
  while (p < b.length) {
    const len = b.readUInt32BE(p), t = b.toString('ascii', p + 4, p + 8), d = b.subarray(p + 8, p + 8 + len);
    if (t === 'IHDR') { w = d.readUInt32BE(0); h = d.readUInt32BE(4); depth = d[8]; type = d[9]; if (d[12]) return null; }
    else if (t === 'PLTE') plte = d;
    else if (t === 'tRNS') trns = d;
    else if (t === 'IDAT') idat.push(d);
    else if (t === 'IEND') break;
    p += 12 + len;
  }
  if (depth !== 8 && type !== 3) return null;
  const ch = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 }[type];
  const bpp = Math.max(1, (ch * depth) >> 3), stride = (w * ch * depth + 7) >> 3;
  const raw = zlib.inflateSync(Buffer.concat(idat));
  let prev = Buffer.alloc(stride), cur = Buffer.alloc(stride);
  const seen = new Set();
  for (let y = 0; y < h; y++) {
    const f = raw[y * (stride + 1)], line = raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1));
    for (let i = 0; i < stride; i++) {
      const a = i >= bpp ? cur[i - bpp] : 0, up = prev[i], c = i >= bpp ? prev[i - bpp] : 0;
      let v = line[i];
      if (f === 1) v += a;
      else if (f === 2) v += up;
      else if (f === 3) v += (a + up) >> 1;
      else if (f === 4) { const pa = Math.abs(up - c), pb = Math.abs(a - c), pc = Math.abs(a + up - 2 * c); v += pa <= pb && pa <= pc ? a : pb <= pc ? up : c; }
      cur[i] = v;
    }
    if (type === 3) {
      for (let x = 0; x < w; x++) seen.add(depth === 8 ? cur[x] : (cur[(x * depth) >> 3] >> (8 - depth - ((x * depth) & 7))) & ((1 << depth) - 1));
    } else {
      for (let x = 0; x < w; x++) {
        const o = x * ch;
        // 완전히 투명한 픽셀은 한 색으로 친다
        seen.add(ch === 4 && cur[o + 3] === 0 ? -1 : cur.readUIntBE(o, ch));
      }
    }
    if (seen.size > limit) return seen.size;
    [prev, cur] = [cur, prev];
  }
  return seen.size;
}

// 종류별 최대 색 수. 흑백 컷만 엄격하게 본다(회색 8단계 + 포인트 1).
// 타이틀·CG·UI는 GPT 원본 화질 그대로 쓰므로 제한 없음. 색을 줄이면(양자화) 화질이 떨어진다.
const colorLimit = (a) => (a.kind === 'cut' && !/crayon/i.test(a.prompt) ? 12
  : ['title', 'cg', 'ui'].includes(a.kind) ? Infinity : a.kind === 'cut' ? 64 : 256);

const norm = (s) => s.toLowerCase().replace(/\s*\(\d+\)/g, '').replace(/[\s-]+/g, '_').replace(/\.(png|jpe?g|webp)$/, '');

for (const folder of ['portraits', 'bg', 'cuts', 'maps', 'sprites', 'title', 'ui', 'cg']) {
  const dir = path.join(assetDir, folder);
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => !f.startsWith('.')) : [];
  for (const f of files) {
    const rel = `${folder}/${f}`;
    const file = path.join(dir, f);
    const info = imageInfo(file);

    if (!requiredPaths.has(rel)) {
      const guess = required.find((a) => a.path.startsWith(folder + '/') && norm(a.path.split('/')[1]) === norm(f));
      errors.push({ file: rel, msg: guess ? `게임이 모르는 파일명이에요. \`${guess.path.split('/')[1]}\`(으)로 바꾸세요.` : '게임이 모르는 파일명이에요. 에셋 현황 페이지의 파일명을 확인하세요.' });
      continue;
    }
    if (info.type !== 'png') {
      errors.push({ file: rel, msg: `확장자는 .png인데 실제 형식은 ${info.type}이에요. PNG로 다시 저장하세요.` });
      continue;
    }
    const a = required.find((x) => x.path === rel);
    const want = a.spec.w / a.spec.h;
    const ratio = info.w / info.h;
    if (Math.abs(ratio - want) / want > 0.08) {
      warnings.push({ file: rel, msg: `크기 ${info.w}×${info.h} — 권장 비율은 ${a.spec.w}×${a.spec.h}이에요. 화면에서 잘릴 수 있어요.` });
    }
    const limit = colorLimit(a);
    const colors = limit === Infinity ? 0 : countColors(file, limit);
    if (colors > limit) {
      errors.push({ file: rel, msg: `색이 ${limit}개보다 많아요. 저해상도 도트가 아니라 일반 일러스트로 나온 것 같아요.${a.kind === 'cut' ? ' 컷은 회색 8단계와 포인트 색 1개만 써요.' : ''}` });
      continue;
    }
    if (info.bytes > MAX_BYTES) {
      warnings.push({ file: rel, msg: `용량 ${(info.bytes / 1048576).toFixed(1)}MB — 3MB 이하로 줄이면 로딩이 빨라져요.` });
    }
    present.push(rel);
  }
}

const missing = required.filter((a) => !present.includes(a.path));
const byKind = (k) => `${required.filter((a) => a.kind === k && present.includes(a.path)).length}/${required.filter((a) => a.kind === k).length}`;

const out = [];
out.push('## 에셋 검사');
out.push('');
out.push(`| 종류 | 들어감 |`);
out.push('|---|---|');
out.push(`| 캐릭터 상반신 | ${byKind('portrait')} |`);
out.push(`| 배경 | ${byKind('bg')} |`);
out.push(`| 컷 | ${byKind('cut')} |`);
out.push(`| 탐색 맵 | ${byKind('map')} |`);
out.push(`| 걷는 캐릭터 | ${byKind('sprite')} |`);
out.push(`| 타이틀 | ${byKind('title')} |`);
out.push(`| UI 스킨 | ${byKind('ui')} |`);
out.push(`| 이벤트 CG | ${byKind('cg')} |`);
out.push(`| **합계** | **${present.length}/${required.length}** |`);
out.push('');
if (errors.length) {
  out.push('### ❌ 고쳐야 할 것');
  errors.forEach((e) => out.push(`- \`web/assets/${e.file}\` — ${e.msg}`));
  out.push('');
}
if (warnings.length) {
  out.push('### ⚠️ 확인하면 좋은 것');
  warnings.forEach((w) => out.push(`- \`web/assets/${w.file}\` — ${w.msg}`));
  out.push('');
}
if (!errors.length && !warnings.length) out.push('✅ 들어간 이미지는 모두 문제없어요.\n');
out.push(`<details><summary>아직 없는 이미지 ${missing.length}장</summary>\n`);
missing.forEach((a) => out.push(`- \`${a.path}\``));
out.push('\n</details>');

const md = out.join('\n');
console.log(md);
if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, md + '\n');
if (process.env.GITHUB_ACTIONS) {
  errors.forEach((e) => console.log(`::error file=web/assets/${e.file}::${e.msg}`));
  warnings.forEach((w) => console.log(`::warning file=web/assets/${w.file}::${w.msg}`));
}
process.exit(errors.length ? 1 : 0);
