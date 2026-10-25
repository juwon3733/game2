// web/assets 폴더의 이미지가 게임이 찾는 파일명·형식·크기와 맞는지 검사한다.
// 사용: node tools/check-assets.mjs
// 빠진 이미지는 오류가 아니다(게임이 임시 그림을 쓴다). 이름이 틀렸거나 PNG가 아닌 파일만 실패로 처리한다.

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const web = path.join(root, 'web');
const assetDir = path.join(web, 'assets');

// 브라우저용 데이터 파일을 그대로 읽어 필요한 이미지 목록을 만든다
const ctx = vm.createContext({});
for (const f of ['js/data_ch1.js', 'js/asset_prompts.js', 'js/asset_list.js']) {
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

const norm = (s) => s.toLowerCase().replace(/\s*\(\d+\)/g, '').replace(/[\s-]+/g, '_').replace(/\.(png|jpe?g|webp)$/, '');

for (const folder of ['portraits', 'bg', 'cuts']) {
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
