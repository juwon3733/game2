// 1장 「낙하」 진행 스크립트.

const SCENES = [
  ['office', '브리핑 (잔상과 사무실)'],
  ['explore1', '탐색 1: 5층 조사'],
  ['puzzle1', '컷 정리: 페이지 1'],
  ['ookubo', '심문 1: 경비원 오오쿠보'],
  ['taiga', '심문 2: 배달부 타이가'],
  ['explore2', '탐색 2: 다시 5층'],
  ['himari', '심문 3: 옆집 아이 히마리'],
  ['puzzle2', '컷 정리: 페이지 2'],
  ['conclusion', '결론'],
  ['epilogue', '에필로그: 카페 「여백」'],
];

// 장면별로 그 시점까지 가지고 있어야 하는 것
const STATE_AT = {
  office: { cuts: [], lines: [] },
  explore1: { cuts: [], lines: [] },
  puzzle1: { cuts: ['A', 'B', 'C', 'D'], lines: [] },
  ookubo: { cuts: ['A', 'B', 'C', 'D'], lines: [] },
  taiga: { cuts: ['A', 'B', 'C', 'D', 'E'], lines: ['L2'] },
  explore2: { cuts: ['A', 'B', 'C', 'D', 'E', 'F'], lines: [], fills: { E: 'L2' } },
  himari: { cuts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], lines: [], fills: { E: 'L2' } },
  puzzle2: { cuts: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'], lines: [], fills: { E: 'L2', C: 'L3' } },
  conclusion: { cuts: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'], lines: [], fills: { E: 'L2', C: 'L3' } },
  epilogue: { cuts: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'], lines: [], fills: { E: 'L2', C: 'L3' } },
};

// ---------- 장면 ----------

async function sceneOffice() {
  await banner('1장', '「낙하」', 2000);
  bg('office');
  await say('', '츠키미나토 경찰서 지하. 압수품 상자 사이에 소파 하나와 전기포트. 「잔상과」의 사무실이다.');
  show('rei', 'normal', 'left');
  await say('rei', '…….');
  show('koharu', 'happy', 'right');
  await say('koharu', '오늘부터 잔상과에 배치된 히나타 코하루입니다! 선배! 잘 부탁드립니다!');
  await say('rei', '…시끄러워.');
  show('kurogane', 'normal', 'center');
  await say('kurogane', '자, 일이다. 구시가 하나미즈키 맨션 추락 사건.');
  await say('kurogane', '피아노 강사 사에키 미츠루, 31세. 어젯밤 5층 베란다에서 떨어져 의식불명.');
  await say('kurogane', '경비원이 "쿵 소리 직후 택배 기사가 도망치는 걸 봤다"고 했다. 강력계는 그 택배 기사를 범인으로 몰고 있지.');
  await say('kurogane', '본인은 "무서워서 도망쳤다"는 말만 반복하고. …확인해 와.');
  await say('koharu', '잔상… 이라는 걸로 확인하는 거죠? 선배가 그걸 볼 수 있다고 들었어요!', 'happy');
  await say('rei', '강한 감정이 남은 물건을 만지면, 그 순간이 만화 컷처럼 보여.', 'serious');
  await say('rei', '근데 컷에는 시간이 안 적혀 있어. …순서는 우리가 맞춰야 해.', 'serious');
  hide('kurogane');
  show('towa', 'normal', 'center');
  await say('towa', '현장에선 내가 원격으로 분석해 줄게. 귀찮지만.');
  await say('koharu', '고, 고양이…?', 'worried');
  await say('towa', '고양이 아니야. 토와야.');
  clearChars();
  hideText();
}

async function sceneExplore1() {
  await banner('하나미즈키 맨션 5층', '8월 24일 밤', 1500);
  goal('사에키 씨 집과 주변을 조사해 잔상(컷)을 모으자. 노란 ! 가 단서. (0/4)');
  const req = ['parcel', 'door', 'piano', 'pot'];
  let got = 0;
  const found = async (cut) => {
    await gainCut(cut);
    got++;
    goal(`사에키 씨 집과 주변을 조사해 잔상(컷)을 모으자. 노란 ! 가 단서. (${got}/4)`);
    if (got === 4) {
      show('koharu', 'happy', 'right');
      await say('koharu', '선배! 컷 4장 다 모았어요! 이제 순서를 맞춰 봐요!', 'happy');
      EX.end();
    }
  };
  await explore('mansion5f', {
    start: [3, 3], required: req,
    on: {
      parcel: async () => {
        await say('', '현관 앞에 놓인 택배 상자. 증거품 태그가 붙어 있다.');
        await say('rei', '…강한 감정이 남아 있어. 놀람이랑, 초조함.');
        await found('A');
      },
      door: async () => {
        await say('rei', '문고리… 누군가 여기서 엄청 놀랐어.');
        await found('D');
      },
      piano: async () => {
        await say('', '덮개가 열린 채인 피아노. 보면대에 악보가 펼쳐져 있다.');
        await found('B');
      },
      pot: async () => {
        await say('', '베란다 화분. 흙이 쏟아져 있고… 작은 신발 자국이 찍혀 있다.');
        show('koharu', 'worried', 'right');
        await say('koharu', '어린애 발자국 같아요. 사에키 씨는 혼자 사는데…', 'worried');
        await found('C');
      },
      partition: async () => {
        await say('rei', '비상 칸막이. 아래에 틈이 있어. 아이 하나 지나갈 만한.');
        show('koharu', 'normal', 'right');
        await say('koharu', '옆집 베란다랑 붙어 있네요.');
      },
      potPink: async () => { await say('', '칸막이 너머 옆집 화분. 여기선 손이 닿지 않는다.'); },
      calendar: async () => {
        await say('', '8월 달력. 24일 칸에 「히마리 레슨 → 쉬는 날」이라고 적혀 있다.');
        show('koharu', 'normal', 'right');
        await say('koharu', '히마리…? 피아노 학생 이름일까요?');
      },
      sofa: async () => {
        await say('rei', '…앉고 싶다.');
        show('koharu', 'worried', 'right');
        await say('koharu', '선배, 일해요.', 'worried');
      },
      table: async () => { await say('', '악보와 레슨 노트. 「히마리: 음표 머리핀 좋아함. 다음 발표회 선물」이라는 메모.'); },
      railing: async () => {
        await say('', '난간 아래로 1층 화단이 보인다. 한쪽이 움푹 패어 있다.');
        show('koharu', 'worried', 'right');
        await say('koharu', '…여기서.', 'worried');
      },
      shoes: async () => { await say('', '현관의 신발. 남자 구두와 레슨용 아이 실내화 한 켤레.'); },
      nbdoor: async () => { await say('', '옆집. 「코마츠」 문패. 안은 조용하다.'); },
      stairs: async () => { await say('rei', '…아직 덜 읽었어. 돌아가는 건 나중에.'); },
    },
  });
  goal('');
}

async function scenePuzzle1() {
  await runPuzzle('page1');
  bg('night');
  show('koharu', 'worried', 'right');
  await say('koharu', '타이가 씨는 쿵 소리가 났을 때 문 밖에 있었다… 그럼 범인이 아니라는 거죠?', 'worried');
  show('rei', 'serious', 'left');
  await say('rei', '…경비원 증언이랑 안 맞아. 경비원부터 읽자.', 'serious');
  clearChars();
}

async function sceneOokubo() {
  bg('guardroom');
  await say('', '하나미즈키 맨션 1층 경비실. 작은 TV에서 야구 하이라이트가 흘러나온다.');
  show('ookubo', 'normal', 'left');
  await say('ookubo', '아이고, 형사님들! 내가 다 봤다니까. 그 양키 놈이 범인이야!');
  show('koharu', 'normal', 'right');
  await say('koharu', '그날 밤 기억을 다시 보여주실 수 있을까요? 컷으로요.');
  await say('ookubo', '컷? 뭔진 모르겠지만 얼마든지! 난 거짓말 안 해.');
  hide('koharu');
  await runTrial('ookubo');
}

async function sceneTaiga() {
  bg('interrogate');
  await say('', '츠키미나토 경찰서 취조실. 금발의 청년이 팔짱을 끼고 앉아 있다.');
  show('taiga', 'angry', 'left');
  await say('taiga', '…도망쳤다니까요. 그게 다예요.');
  show('koharu', 'normal', 'right');
  await say('koharu', '타이가 씨, 기억을 보여주실 수 있을까요? 저희가 확인하고 싶어서요.');
  await say('taiga', '싫어요. 볼 것도 없어요.', 'angry');
  for (;;) {
    hideText();
    const c = await choice(['"당신이 안 했다는 거 알아요."', '"왜 거짓말해요."', '(말없이 기다린다)'], '레이: 뭐라고 말할까?');
    if (c === 0) { await say('taiga', '…뭘 안다고.', 'sad'); await say('taiga', '…맘대로 해요.', 'sad'); break; }
    if (c === 1) { await say('taiga', '거짓말 아니라고요!', 'angry'); await say('koharu', '서, 선배…! 그렇게 말하면…', 'worried'); continue; }
    await say('koharu', '저기, 타이가 씨. 저희 타이가 씨 편이에요. 진짜로요.', 'happy');
    await say('taiga', '…하아. 알았어요.', 'sad');
    break;
  }
  hide('koharu');
  await runTrial('taiga');
}

async function sceneExplore2() {
  bg('night');
  await say('', '타이가는 풀려났다. 레이는 다시 맨션으로 돌아갔다.');
  show('rei', 'serious', 'left');
  await say('rei', '…아직 한 명이 안 읽혔어.', 'serious');
  clearChars();
  goal('다시 5층. 아직 읽지 못한 잔상이 있다. 베란다를 살펴보자.');
  let shiori = true;
  await explore('mansion5f', {
    start: [9, 6], required: ['partition'],
    examined: ['parcel', 'door', 'piano', 'pot'],
    extras: [{ who: 'shiori', x: 15, y: 11, dir: 'right' }],
    on: {
      partition: async () => {
        if (shiori) {
          const art = await cg('cg_shiori');
          if (!art) show('shiori', 'normal', 'center');
          sfx('ghost');
          await say('', '칸막이 앞에 교복 차림의 여자아이가 서 있다. 옆집 쪽을 가리키더니——');
          if (art) cgEnd(); else hide('shiori');
          EX.extras = [];
          shiori = false;
          await say('', '——사라졌다.');
          show('rei', 'surprised', 'left');
          await say('rei', '(…피곤한가.)', 'surprised');
          show('koharu', 'worried', 'right');
          await say('koharu', '선배? 왜 그래요?', 'worried');
          await say('rei', '…아무것도.', 'normal');
          clearChars();
        }
        await say('', '칸막이 아래 틈으로 손을 넣자, 옆집 화분에 손끝이 닿았다.');
        await gainCut('G');
        show('koharu', 'normal', 'right');
        await say('koharu', '옆집… 「코마츠」 씨네요. 달력에 있던 히마리라는 아이가…');
        show('rei', 'serious', 'left');
        await say('rei', '가 보자.', 'serious');
        EX.end();
      },
      nbdoor: async () => { await say('rei', '…그 전에 베란다.'); },
      stairs: async () => { await say('rei', '…아직이야.'); },
    },
  });
  goal('');
}

async function sceneHimari() {
  bg('himari_door');
  sfx('door');
  await say('', '옆집 문이 조금 열리고, 양갈래 머리의 아이가 얼굴만 내민다.');
  show('himari', 'normal', 'left');
  await say('himari', '…아무것도 몰라요.');
  show('koharu', 'happy', 'right');
  await say('koharu', '괜찮아, 히마리. 천천히. 그날 밤 기억, 언니한테 보여줄 수 있어?', 'happy');
  await say('himari', '…응.');
  hide('koharu');
  show('towa', 'normal', 'right');
  await say('towa', '아이 기억은 크레용 그림이야. 몰아붙이지 마. 진실이 담긴 컷 하나를 골라서 보여주기만 해.');
  hide('towa');
  await runTrial('himari');
}

async function scenePuzzle2() {
  bg('night');
  show('rei', 'serious', 'left');
  await say('rei', '…이제 다 읽혔어. 순서만 맞추면 돼.', 'serious');
  clearChars();
  await runPuzzle('page2');
}

async function sceneConclusion() {
  bg('hospital');
  await banner('결론', '병원 복도', 1300);
  show('kurogane', 'normal', 'center');
  await say('kurogane', '강력계도, 피해자 가족도 와 있다. 정리해 봐라, 시노노메.');
  const replies = [
    '난간에 올라간 히마리를 칸막이 너머로 끌어당기려고. …그러다 반동으로 떨어졌어요.',
    '5층 문 앞. 쿵 소리가 났을 때 문 밖에 서 있었어요.',
    '휴대폰이 꺼져서. 신고하려고 길 건너 편의점까지 뛰었어요.',
  ];
  for (let i = 0; i < CONCLUSION.length; i++) {
    const q = CONCLUSION[i];
    for (;;) {
      hideText();
      const c = await pickCut(`질문 ${i + 1}. ${q.q}`, '대답이 되는 컷을 고르자.', { cancel: false, only: q.choices });
      if (q.answer.includes(c)) { sfx('correct'); break; }
      sfx('wrong'); quake();
      await say('kurogane', '…그 컷으론 설명이 안 되지. 다시.');
    }
    show('rei', 'serious', 'left');
    await say('rei', replies[i], 'serious');
    hide('rei');
  }
  await say('kurogane', '…됐다. 강력계엔 내가 말하지.');
  clearChars();
  bgm('truth');
  if (await cg('cg_page')) {
    await say('', '여섯 칸짜리 원고. 그날 밤 일어난 일의, 진짜 순서.');
    cgEnd();
  }
  show('himari', 'crying', 'left');
  await say('', '복도 끝 의자에, 엄마 손을 잡은 히마리가 앉아 있다.');
  hideText();
  const c = await choice(['"네 잘못 아니야."', '"선생님은 너를 지키고 싶었던 거야."', '(말없이 「끌어당김」 컷을 보여준다)'], '히마리에게 뭐라고 할까?');
  if (c === 0) await say('', '히마리가 엄마 품에 얼굴을 묻고 소리 내어 운다. 엄마가 등을 토닥인다.');
  if (c === 1) { await say('himari', '…선생님이?', 'normal'); await say('', '히마리가 쥐고 있던 음표 머리핀을 천천히 다시 꽂는다.'); }
  if (c === 2) await say('', '히마리가 컷 속, 자신을 끌어당기며 웃고 있는 선생님을 오래 바라본다.');
  clearChars();
}

async function sceneEpilogue() {
  bg('cafe');
  await say('', '구시가 언덕의 작은 카페 「여백」.');
  show('asagiri', 'normal', 'center');
  await say('asagiri', '어서 와요. 처음 보는 얼굴이네. 레이 짱 후배?');
  show('koharu', 'happy', 'right');
  await say('koharu', '네! 히나타 코하루입니다!', 'happy');
  show('rei', 'normal', 'left');
  const cafe = await cg('cg_cafe');
  await say('', '아사기리는 말없이 레이 앞에 단 커피를 놓는다.');
  await say('koharu', '어? 선배 단 거 싫어하지 않았어요?', 'normal');
  await say('rei', '…이건 괜찮아.');
  if (cafe) cgEnd();
  await say('asagiri', '오늘은 무슨 일이 있었어?');
  await say('rei', '…떨어진 게 아니라, 구한 거였어요.');
  await say('asagiri', '그래. …괜찮아. 힘든 건 잊어도 돼.');
  clearChars();
  show('shiori', 'normal', 'center');
  sfx('ghost');
  await say('', '창밖, 길 건너에 교복 차림의 여자아이가 서 있다가——');
  hide('shiori');
  await say('', '——사라졌다.');
  hideText();
  await banner('1장 「낙하」 끝', '여기까지 플레이해 주셔서 고마워요', 3000);
}

const SCENE_FN = {
  office: sceneOffice, explore1: sceneExplore1, puzzle1: scenePuzzle1, ookubo: sceneOokubo, taiga: sceneTaiga,
  explore2: sceneExplore2, himari: sceneHimari, puzzle2: scenePuzzle2, conclusion: sceneConclusion, epilogue: sceneEpilogue,
};

// 장면마다 흐르는 곡
const SCENE_BGM = {
  office: 'office', explore1: 'explore', puzzle1: 'tension', ookubo: 'trial', taiga: 'trial',
  explore2: 'explore', himari: 'tension', puzzle2: 'tension', conclusion: 'trial', epilogue: 'epilogue',
};

const SCENE_CAST = { office: ['rei', 'koharu', 'kurogane', 'towa'], ookubo: ['ookubo'], taiga: ['taiga'], explore2: ['shiori'], himari: ['himari'] };

// ---------- 저장 ----------
// 장면이 시작될 때마다 자동 저장. 타이틀의 [이어하기]가 그 장면부터 다시 시작한다.
const SAVE_KEY = 'gaha-ch1-save';
function saveProgress(scene) {
  saveJSON(SAVE_KEY, { scene, cuts: G.cuts, lines: G.lines, fills: G.fills, koharuLeft: G.koharuLeft, flags: G.flags, at: Date.now() });
}

async function playFrom(scene, saved) {
  const s = saved || STATE_AT[scene];
  G.cuts = s.cuts.slice();
  G.lines = s.lines.slice();
  G.fills = Object.assign({}, s.fills || {});
  G.koharuLeft = saved ? saved.koharuLeft : 2;
  G.flags = Object.assign({}, saved ? saved.flags : {});
  LOG.length = 0;
  const start = SCENES.findIndex(([id]) => id === scene);
  // 장면 선택으로 중간부터 시작하면 앞 장면에서 만난 인물을 수첩에 미리 넣는다
  if (!saved) G.flags.met = SCENES.slice(0, start).flatMap(([id]) => SCENE_CAST[id] || []);
  for (let i = start; i < SCENES.length; i++) {
    const id = SCENES[i][0];
    saveProgress(id);
    await fade(true, 400);
    clearChars(); hideText(); goal('');
    bgm(SCENE_BGM[id]);
    const run = SCENE_FN[id]();
    setTimeout(() => fade(false, 600), 60);
    await run;
  }
  try { localStorage.removeItem(SAVE_KEY); localStorage.setItem('gaha-ch1-clear', '1'); } catch { /* 저장 불가 */ }
  await fade(true, 800);
  titleScreen();
  fade(false, 600);
}

// ---------- 타이틀 ----------

function titleScreen() {
  clearChars();
  hideText();
  goal('');
  hud(false);
  bgm('title');
  const save = loadJSON(SAVE_KEY);
  const t = document.createElement('div');
  t.className = 'title-screen';
  t.innerHTML = `
    <div class="ts-bg" style="background-image:url(${ASSET.bg('night')})"></div>
    <div class="ts-shade"></div>
    <img class="ts-char ts-koharu" src="${ASSET.portrait('koharu', 'happy')}" alt="">
    <img class="ts-char ts-rei" src="${ASSET.portrait('rei', 'normal')}" alt="">
    <div class="ts-logo">
      <div class="ts-chapter">CHAPTER 1 · 낙하</div>
      <h1><span>같은 하루,</span><span class="ts-l2">다른 칸</span></h1>
      <div class="ts-tag">같은 밤, 서로 다르게 기억된 네 장면</div>
    </div>
    <nav class="ts-menu">
      ${save ? `<button id="t-cont" class="ts-btn primary">이어하기<small>${(SCENES.find(([id]) => id === save.scene) || [, ''])[1]}</small></button>` : ''}
      <button id="t-start" class="ts-btn${save ? '' : ' primary'}">처음부터</button>
      <button id="t-select" class="ts-btn">장면 선택</button>
      <a class="ts-btn small" href="assets.html">에셋 현황</a>
    </nav>
    <div class="ts-scenes hidden">
      <div class="ts-scenes-head">장면 선택 <button class="ts-close" aria-label="닫기">✕</button></div>
      <ol>${SCENES.map(([id, label], i) => `<li><button data-scene="${id}"><b>${String(i + 1).padStart(2, '0')}</b>${label}</button></li>`).join('')}</ol>
    </div>
    <div class="ts-hint">대사 넘기기 클릭 · Space　　탐색 방향키 · WASD · 클릭</div>`;
  $('#stage').appendChild(t);
  // 키아트(GPT 이미지)가 있으면 배경과 캐릭터를 그걸로 바꾼다
  const key = new Image();
  key.onload = () => { t.classList.add('has-key'); t.querySelector('.ts-bg').style.backgroundImage = `url(${key.src})`; };
  key.src = ASSET.title();
  const go = (scene, saved) => {
    sfx('select');
    t.classList.add('leaving');
    setTimeout(() => { t.remove(); hud(true); playFrom(scene, saved); }, 450);
  };
  const list = t.querySelector('.ts-scenes');
  t.querySelector('#t-start').onclick = () => go('office');
  if (save) t.querySelector('#t-cont').onclick = () => go(save.scene, save);
  t.querySelector('#t-select').onclick = () => list.classList.remove('hidden');
  t.querySelector('.ts-close').onclick = () => list.classList.add('hidden');
  list.querySelectorAll('[data-scene]').forEach((b) => (b.onclick = () => go(b.dataset.scene)));
}

hud(true);
const jump = location.hash.slice(1);
if (SCENE_FN[jump]) playFrom(jump); else titleScreen();
