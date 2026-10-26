// 4장 「지워 드립니다」 진행 스크립트. 기획: docs/12_story_plan.md §3 4장

Object.assign(MAPS, {
  sakurayu: {
    label: '불탄 목욕탕 사쿠라유',
    hallWallRow: -1,
    rows: [
      '##########################',
      '#WWWWWWWWWWWWWWW#WWWWWWWW#',
      '#,,,,,,,,,,,,,,,#________#',
      '#,,,,,,,,,,,,,,,#________#',
      '#,,,,,,,,,,,,,,,D________#',
      '#,,,,,,,,,,,,,,,#________#',
      '#WWWWWWWDWWWWWWW#WWWDWWWW#',
      '#........................#',
      '#........................#',
      '#RRRRRRRRRRRRRR....RRRRRR#',
      '#XXXXXXXXXXXXXX....XXXXXX#',
      '#XXXXXXXXXXXXXX....XXXXXX#',
      '##########################',
    ],
    objects: [
      { id: 'poster', x: 3, y: 1, label: '탈의실 벽의 전단' },
      { id: 'counter', x: 4, y: 3, w: 2, solid: true, label: '그을린 카운터' },
      { id: 'bath', x: 10, y: 3, w: 3, h: 2, solid: true, label: '물이 빠진 탕' },
      { id: 'panel', x: 21, y: 2, solid: true, label: '보일러실 배전반' },
      { id: 'boiler', x: 18, y: 4, w: 2, solid: true, label: '보일러' },
      { id: 'chimney', x: 20, y: 7, label: '보일러실 창 아래 그을음', walkable: true },
      { id: 'fence', x: 10, y: 9, w: 2, label: '뒤편 울타리' },
      { id: 'murase', x: 5, y: 8, solid: true, label: '작업복 차림의 남자' },
      { id: 'okamotowin', x: 17, y: 11, label: '건너편 오카모토 할머니 집', walkable: true },
    ],
  },
  siteoffice: {
    label: '하쿠요 하청 현장사무소',
    hallWallRow: -1,
    rows: [
      '##########################',
      '#WWWWWWWWWWWWWWWWWWWWWWWW#',
      '#,,,,,,,,,,,,,,,,,,,,,,,,#',
      '#,,,,,,,,,,,,,,,,,,,,,,,,#',
      '#,,,,,,,,,,,,,,,,,,,,,,,,#',
      '#,,,,,,,,,,,,,,,,,,,,,,,,#',
      '#,,,,,,,,,,,,,,,,,,,,,,,,#',
      '#,,,,,,,,,,,,,,,,,,,,,,,,#',
      '#,,,,,,,,,,,,,,,,,,,,,,,,#',
      '#,,,,,,,,,,,,,,,,,,,,,,,,#',
      '#WWWWWWWWWWDWWWWWWWWWWWWW#',
      '#........................#',
      '##########################',
    ],
    objects: [
      { id: 'keybox', x: 3, y: 1, label: '벽의 열쇠함' },
      { id: 'helmets', x: 6, y: 1, w: 2, label: '헬멧 걸이' },
      { id: 'desk', x: 11, y: 3, w: 3, solid: true, draw: 'table', label: '현장소장 책상' },
      { id: 'whiteboard', x: 17, y: 1, w: 3, label: '공정표 화이트보드' },
      { id: 'window', x: 22, y: 1, w: 2, label: '사쿠라유가 보이는 창' },
    ],
  },
});

const CH4_SCENES = [
  ['office4', '브리핑 (8월 29일 아침)'],
  ['explore4a', '탐색 1: 불탄 사쿠라유'],
  ['puzzle4a', '컷 정리: 불이 나기까지'],
  ['okamoto', '심문 1: 오카모토 할머니'],
  ['hayaka1', '병원: 기억을 지운 아이'],
  ['accuse4', '중간 보고: 불을 낸 사람'],
  ['hayaka', '심문 2: 하야카의 잘린 칸'],
  ['explore4b', '탐색 2: 하쿠요 현장사무소'],
  ['cross4', '교차 심문: 무라세 × 오카모토'],
  ['hospital4', '병원: 업혀 나온 밤'],
  ['keiko', '심문 3: 케이코'],
  ['puzzle4b', '최종 재구성 (두 페이지)'],
  ['conclusion4', '결론: 사쿠라유 앞'],
  ['epilogue4', '에필로그: 해체 명령'],
];

const C4A = ['4A', '4B', '4D', '4F', '4L'];
const C4B = [...C4A, '4I'];
const C4C = [...C4B, '4E'];
const C4D = [...C4C, '4C', '4J'];
const C4E = [...C4D, '4H', '4G', '4M'];
const W4A = ['p_hayaka', 'p_genzo', 'p_keiko', 'a_fire'];
const W4B = [...W4A, 'th_panel', 'a_tamper', 'pl_boiler', 'p_murase'];
const W4C = [...W4B, 'p_okamoto', 't_2245'];
const W4D = [...W4C, 'pl_fence', 'a_watch', 'a_erase'];
const W4E = [...W4D, 'th_key', 'pl_office4'];
const W4F = [...W4E, 'a_rescue'];
const I4A = ['panel'], I4B = [...I4A, 'receipt'], I4C = [...I4B, 'schedule4'];
const CH4_STATE = {
  office4: {}, explore4a: { words: W4A },
  puzzle4a: { cuts: C4A, items: I4A, words: W4B }, okamoto: { cuts: C4A, items: I4A, words: W4B },
  hayaka1: { cuts: C4B, items: I4A, words: W4C }, accuse4: { cuts: C4B, items: I4B, words: W4C },
  hayaka: { cuts: C4B, items: I4B, words: W4C }, explore4b: { cuts: C4C, items: I4B, words: W4D },
  cross4: { cuts: C4D, items: I4C, words: W4D }, hospital4: { cuts: C4D, items: I4C, words: W4E },
  keiko: { cuts: C4E, items: I4C, words: W4E }, puzzle4b: { cuts: C4E, items: I4C, words: W4F },
  conclusion4: { cuts: C4E, items: I4C, words: W4F }, epilogue4: { cuts: C4E, items: [...I4C, 'record'], words: W4F },
};

// ---------- 장면 ----------

async function sceneOffice4() {
  CHARACTERS.ren.name = '렌';
  await FX.title('CHAPTER 4', '지워 드립니다', '8월 29일 · 항만 재개발 지구', [['hayaka', 'normal'], ['keiko', 'normal']]);
  bg('office');
  await say('', '8월 29일 오전. 잔상과 사무실. 코하루가 선반 맨 위의 상자를 올려다보고 있다. 「6년 전 / 등대」.');
  show('koharu', 'normal', 'right');
  await say('koharu', '과장님, 이 상자 뭐예요?', 'normal');
  show('kurogane', 'normal', 'center');
  await say('kurogane', '손대지 마라. 아직 열 사람이 없다.');
  hideText();
  const c0 = await choice(['"과장님 말 들어."', '"…나중에 같이 열어 보자."'], '코하루에게');
  if (c0 === 1) { G.flags.bond = (G.flags.bond || 0) + 1; await say('koharu', '…네. 약속이에요, 선배.', 'happy'); }
  else await say('koharu', '네에….', 'worried');
  hide('koharu');
  await say('', '쿠로가네가 신문 한 장을 책상에 내려놓는다. 「재개발 지구 목욕탕 화재, 주인 중상」.');
  show('kurogane', 'normal', 'center');
  await say('kurogane', '어젯밤 11시. 항만 재개발 지구에서 마지막까지 버티던 목욕탕 「사쿠라유」가 탔다. 주인 사쿠라이 겐조, 78세. 중상.');
  await say('kurogane', '공식 발표는 보일러실 [[배전반 노후 누전]].');
  gainWord('p_genzo');
  await say('kurogane', '근데 강력계는 손녀 사쿠라이 하야카를 보고 있다. 그날 밤 할아버지랑 크게 싸웠고…');
  await say('kurogane', '오늘 아침, 구시가 언덕의 「기억 상담소」라는 데서 [[그 밤의 기억을 지웠다]].');
  gainWord('p_hayaka'); gainWord('a_fire');
  show('koharu', 'worried', 'right');
  await say('koharu', '기억을… 지워요? 그런 게 돼요?', 'worried');
  show('towa', 'normal', 'left');
  await say('towa', '돼. 그런 걸 해 주는 데가 있어.');
  hide('towa');
  await say('kurogane', '하야카 엄마는 케이코. 하쿠요 하청에서 일하다 그만뒀다. 아버지 병실을 지키고 있어.');
  gainWord('p_keiko');
  await say('koharu', '불… 이었군요.', 'worried');
  await say('', '코하루의 손이 무릎 위에서 꽉 쥐어진다. 레이는 그걸 본다.');
  clearChars();
}

async function sceneExplore4a() {
  bg('sakurayu');
  await banner('사쿠라유', '8월 29일 오후 · 출입 금지', 1500);
  await say('', '철거를 기다리는 공터 한가운데, 굴뚝만 그대로 선 목욕탕. 그을음 냄새가 아직 짙다.');
  const req = ['counter', 'fence', 'chimney', 'panel', 'okamotowin', 'poster'];
  let got = 0, metMurase = false;
  const tick = () => { got++; goal(`사쿠라유에서 잔상을 찾아라. (${got}/6)`); if (got === 6) EX.end(); };
  goal('사쿠라유에서 잔상을 찾아라. (0/6)');
  await explore('sakurayu', {
    start: [16, 8], required: req,
    on: {
      counter: async () => {
        await say('', '그을린 카운터. 반쯤 탄 서류에 「하쿠요 개발 — 매입 동의서」.');
        await say('rei', '목소리가 남아 있어. 크게 다퉜어.');
        await gainCut('4A'); tick();
      },
      fence: async () => {
        await say('', '목욕탕 뒤편 울타리. 발치에 손전등 하나가 떨어져 있다.');
        await gainCut('4B'); tick();
      },
      chimney: async () => {
        await say('', '보일러실 창 아래 벽이 새카맣게 그을렸다. 불은 여기서 시작됐다.');
        gainWord('pl_boiler');
        await gainCut('4F'); tick();
      },
      panel: async () => {
        await say('', '보일러실 배전반. 그을음을 닦아 내자 전선이 드러난다.');
        await gainItem('panel');
        gainWord('th_panel'); gainWord('a_tamper');
        show('rei', 'serious', 'left');
        await say('rei', '(…잘린 자리가 너무 깔끔해. 공구 자국이야.)', 'serious');
        tick();
      },
      okamotowin: async () => {
        await say('', '건너편 집 2층 창에서 할머니가 손짓한다. "올라와 봐, 형사 양반."');
        await say('', '창가 탁상시계 옆에서, 레이는 창틀을 짚는다.');
        await gainCut('4D'); tick();
      },
      poster: async () => {
        await say('', '탈의실 벽의 전단. 「재개발 반대 주민 모임 — 8/28 19:00 공민관」.');
        await gainCut('4L'); tick();
      },
      bath: async () => { await say('', '물이 빠진 탕. 벽의 후지산 그림이 반쯤 그을렸다.'); },
      boiler: async () => { await say('', '할아버지가 매일 닦았다는 보일러. 지금은 차갑다.'); },
      murase: async () => {
        if (metMurase) { show('murase', 'smile', 'right'); await say('murase', '안전 테이프 안쪽은 위험합니다. 조심하세요.', 'smile'); return; }
        metMurase = true;
        meet('murase', 'right', 'smile');
        await say('murase', '경찰분들이시군요. 하쿠요 하청 현장소장 무라세입니다. 협조하겠습니다.', 'smile');
        await say('murase', '안타까운 일이지요. 노후 배전반 누전입니다. 몇 번이나 위험하다고 말씀드렸는데.', 'normal');
        await say('murase', '손녀분 일은 들으셨습니까? 오늘 아침에 기억을 지웠다더군요. 저는 그게 마음에 걸려서요.', 'smile');
      },
    },
  });
  goal('');
}

async function scenePuzzle4a() {
  await runPuzzle('page4a');
  bg('sakurayu');
  show('koharu', 'worried', 'right');
  await say('koharu', '손전등을 받은 사람… 누굴까요. 울타리 앞에서 망을 보고 있었던 것 같아요.', 'worried');
  show('rei', 'serious', 'left');
  await say('rei', '건너편 할머니부터. 그 창에서 다 보였어.', 'serious');
  clearChars();
}

async function sceneOkamoto() {
  bg('okamoto_house');
  await say('', '오카모토 할머니 집 2층. 창 너머로 그을린 굴뚝이 보인다. 「재개발 반대」 머리띠가 벽에 걸려 있다.');
  meet('okamoto', 'left', 'angry');
  await say('okamoto', '하쿠요 놈들이야. 내가 다 봤어. 거인 같은 놈들이 쳐들어가는 걸!', 'angry');
  await runTrial('okamoto');
  clearChars();
}

async function sceneHayaka1() {
  bg('hospital');
  await say('', '시립 병원 복도. 중환자실 앞 의자에 교복 차림의 여자아이가 무릎을 끌어안고 앉아 있다.');
  meet('hayaka', 'left', 'normal');
  await say('hayaka', '형사님이에요? 저, 아무것도 기억 안 나요. 정말로.', 'normal');
  await say('hayaka', '지웠으니까요. 영수증도 있어요.', 'normal');
  await gainItem('receipt');
  show('koharu', 'worried', 'right');
  await say('koharu', '빈 말풍선 로고. 선배, 이거 크레센트 사장 서랍에 있던 명함이랑 같아요.', 'worried');
  hide('koharu');
  await say('', '복도 끝에서 흰 코트 자락이 흔들린다. 은발, 안대.');
  FX.ghost(1600);
  show('ren', 'smile', 'right');
  await say('ren', '또 만났네, 시노노메.', 'smile');
  await say('ren', '그 아이는 지운 덕분에 잠들 수 있었어. 그걸 다시 펼쳐서 뭘 하려고?', 'normal');
  show('rei', 'serious', 'center');
  await say('rei', '그게 정말 그 애를 위한 건지 보려고.', 'serious');
  await say('ren', '잊는 게 구원일 때도 있어. 넌 누구보다 잘 알 텐데.', 'smile');
  hide('ren');
  await say('', '흰 코트는 대답을 기다리지 않고 엘리베이터에 오른다. 문이 닫힌다.');
  await say('hayaka', '지금은 싫어요. 이따가… 할아버지 면회 끝나고 와 주세요.', 'crying');
  clearChars();
}

async function sceneAccuse4() {
  bg('office');
  await banner('8월 29일 오후', '잔상과 사무실', 1300);
  show('kurogane', 'normal', 'center');
  await say('kurogane', '강력계가 오늘 저녁 하야카를 정식으로 부른다. 말다툼, 기억 삭제, 현장 근처 목격. 세 가지가 맞아떨어진다고.');
  await say('kurogane', '네 생각은 다르냐. 그 전에 보고해.');
  hide('kurogane');
  show('koharu', 'worried', 'right');
  await say('koharu', '하야카 씨, 아무것도 기억 못 한다고 하면서 계속 울고 있었어요. 뭘 지웠는지는 몸이 기억하나 봐요.', 'worried');
  clearChars();
  hideText();
  const r = await runName({
    title: '중간 보고 — 불을 낸 사람', sub: '틀린 채로 보고하면 강력계가 그 사람을 부른다.',
    parts: NAME4_MID, threshold: 3, report: true, reportLabel: '이대로 보고한다',
  });
  const who = r.picks[5];
  G.flags.accused4 = who;
  show('kurogane', 'normal', 'center');
  if (r.ok) {
    G.stats.accuse = true;
    await say('kurogane', '하청 현장소장. 근거는 배전반하고 헬멧 로고뿐이군.');
    await say('kurogane', '그래도 하야카는 참고인으로만 부르게 하지. 오늘 안에, 그 아이 잘린 칸부터 채워 봐라.');
  } else {
    G.stats.accuse = false;
    if (who === 'p_hayaka') {
      G.flags.hayakaTaken = true;
      await say('kurogane', '역시 손녀인가. 강력계도 그렇게 본다.');
      FX.pulse();
      await say('', '그날 저녁. 경찰서에 불려 온 하야카는 아무것도 묻기도 전에 말했다. 「제가 했어요.」');
      await say('', '무슨 일이 있었는지도 기억 못 하면서, 다 떠안겠다는 얼굴이었다.');
    } else if (who === 'p_keiko') {
      G.flags.keikoTaken = true;
      await say('kurogane', '엄마를? 손전등 하나로?');
      FX.pulse();
      await say('', '그날 저녁. 케이코는 붕대 감은 손으로 순순히 경찰차에 올랐다. 병실의 아버지를 한 번 돌아보고.');
    } else {
      await say('kurogane', '그걸로는 강력계를 못 막는다. 하야카는 예정대로 불려 간다.');
    }
  }
  clearChars();
}

async function sceneHayaka() {
  bg('hospital');
  if (G.flags.hayakaTaken) await say('', '경찰서에서 "제가 했어요"를 되풀이하던 하야카는, 할아버지 병실 앞에서만 이야기하겠다고 했다.');
  else await say('', '몇 시간 뒤. 하야카는 할아버지 병실 앞 의자에서 기다리고 있었다.');
  show('hayaka', 'normal', 'left');
  await say('hayaka', '보여 드릴게요. 남은 것만.', 'normal');
  await runTrial('hayaka');
  bg('hospital');
  show('hayaka', 'crying', 'left');
  await say('hayaka', '엄마가… 정말로 불을 질렀을까요.', 'crying');
  show('rei', 'serious', 'right');
  await say('rei', '엄마가 망을 보는 데까지만 봤잖아. 그 뒤는 아직 몰라.', 'serious');
  clearChars();
}

async function sceneExplore4b() {
  bg('site_office');
  await banner('하쿠요 하청 현장사무소', '8월 29일 저녁', 1400);
  await say('', '재개발 지구 가장자리의 컨테이너 사무소. 창 너머로 사쿠라유의 굴뚝이 정면으로 보인다.');
  const req = ['keybox', 'desk', 'whiteboard'];
  let got = 0;
  const tick = () => { got++; goal(`현장사무소에서 단서를 찾아라. (${got}/3)`); if (got === 3) EX.end(); };
  goal('현장사무소에서 단서를 찾아라. (0/3)');
  await explore('siteoffice', {
    start: [11, 9], required: req,
    on: {
      keybox: async () => {
        await say('', '벽의 열쇠함. 「사쿠라유 보일러실(사본)」 꼬리표가 붙은 고리가 비어 있다.');
        await gainCut('4C'); tick();
      },
      desk: async () => {
        await say('', '현장소장 책상. 휴대폰 충전기와 식은 커피.');
        await gainCut('4J'); tick();
      },
      whiteboard: async () => {
        await say('', '공정표 화이트보드. 지운 자국 위에 글씨가 비쳐 보인다.');
        await gainItem('schedule4'); tick();
      },
      helmets: async () => { await say('', '헬멧 걸이. 하쿠요 로고가 찍힌 노란 헬멧 다섯 개. 두 개가 그을려 있다.'); },
      window: async () => { await say('', '창 너머 정면에 사쿠라유의 굴뚝. 그날 밤 이 창에서는 불이 다 보였을 것이다.'); },
    },
  });
  goal('');
}

async function sceneCross4() {
  bg('site_office');
  await say('', '현장사무소. 무라세가 의자에 앉아 있고, 오카모토 할머니가 그 맞은편에서 팔짱을 낀다.');
  show('murase', 'smile', 'left');
  show('okamoto', 'angry', 'right');
  await say('okamoto', '이 사람 앞에서 다시 말해 주지. 똑바로.', 'angry');
  await say('murase', '얼마든지요.', 'smile');
  await runTrial('cross4');
  clearChars();
}

async function sceneHospital4() {
  bg('hospital');
  await say('', '중환자실. 겐조는 아직 눈을 뜨지 않았다. 협탁에 그을린 손목시계.');
  show('koharu', 'worried', 'right');
  await say('koharu', '할아버지 시계에도 뭔가 남아 있을까요?', 'worried');
  show('rei', 'serious', 'left');
  await say('rei', '읽어 볼게.', 'serious');
  hideText();
  await gainCut('4H');
  await say('', '침대 옆 의자 위에 그을린 작업 장갑 한 켤레. 손바닥 쪽이 녹아 있다.');
  await gainCut('4G');
  await gainCut('4M');
  await say('rei', '(…연기 속으로 들어간 사람이 있어.)', 'serious');
  clearChars();
}

async function sceneKeiko() {
  bg('hospital');
  if (G.flags.keikoTaken) await say('', '참고인 조사를 마친 케이코가 병실로 돌아왔다. 두 손의 붕대가 새로 감겨 있다. 하야카가 조금 떨어져 서 있다.');
  else await say('', '병실 앞 복도. 케이코가 붕대 감은 손을 무릎 위에 올려놓고 앉아 있다. 조금 떨어져 하야카가 서 있다.');
  meet('keiko', 'left', 'normal');
  await say('keiko', '하야카가 기억을 지웠다는 거, 저도 오늘 알았어요.', 'normal');
  await runTrial('keiko');
  clearChars();
}

async function scenePuzzle4b() {
  bg('sakurayu');
  show('rei', 'serious', 'left');
  await say('rei', '두 페이지야. 불이 나기 전, 그리고 그 뒤.', 'serious');
  clearChars();
  await runPuzzle('page4b');
}

async function sceneConclusion4() {
  bg('sakurayu');
  await banner('결론', '사쿠라유 앞', 1300);
  await say('', '그을린 굴뚝 아래. 강력계 형사, 무라세와 하쿠요 변호사, 오카모토 할머니, 케이코와 하야카. 뒤쪽에 쿠로가네.');
  show('kurogane', 'normal', 'center');
  await say('kurogane', '시작해.');
  hide('kurogane');
  hideText();
  await runName({ title: '8월 28일 밤 — 사쿠라유', sub: '모든 빈칸이 맞아야 확정할 수 있다.', parts: NAME4_FINAL, threshold: 5 });
  await montage(G.lastSolution);
  show('rei', 'serious', 'left');
  await say('rei', '불을 낸 건 무라세 씨예요. 케이코 씨는 망을 봤지만, 불이 나자 아버지를 업고 나왔어요.', 'serious');
  await say('rei', '하야카는 망을 보는 엄마까지만 봤어요.', 'serious');
  hide('rei');
  for (let i = 0; i < CONCLUSION4.length; i++) {
    const q = CONCLUSION4[i];
    for (;;) {
      hideText();
      const c = await pickCut(`질문 ${i + 1}. ${q.q}`, '대답이 되는 물증이나 컷을 고르자.', { cancel: false, only: q.choices, items: true });
      if (q.answer.includes(c)) { sfx('correct'); break; }
      sfx('wrong'); quake();
      G.stats.wrong++;
      show('murase', 'smile', 'left');
      await say('murase', '그게 증거가 됩니까?', 'smile');
      hide('murase');
    }
  }
  show('murase', 'cornered', 'left');
  await say('murase', '저는 시키는 대로 했을 뿐입니다.', 'cornered');
  hide('murase');
  bgm('truth');
  show('hayaka', 'crying', 'left');
  show('keiko', 'crying', 'right');
  await say('hayaka', '지우면 다 괜찮아질 줄 알았어요. 엄마도, 할아버지도.', 'crying');
  hideText();
  const c = await choice(['"지운 밤은 엄마가 다시 이야기해 줄 거야."', '"이제 지우지 않아도 돼."', '(엄마가 불 속에 뛰어드는 컷을 하야카에게 보여 준다)'], '하야카에게 뭐라고 할까?');
  if (c === 0) await say('keiko', '응. 하나도 빼놓지 않고. 망을 본 것도.', 'resolute');
  if (c === 1) await say('hayaka', '네. 이번엔, 기억할게요.', 'crying');
  if (c === 2) {
    marginMark('rescueShown');
    await say('', '하야카가 컷 속 연기로 뛰어드는 등을 오래 바라본다. 그리고 엄마의 붕대 감은 손을 잡는다.');
  }
  clearChars();
}

async function sceneEpilogue4() {
  bg('office');
  await say('', '그날 저녁. 잔상과 사무실.');
  show('kurogane', 'normal', 'center');
  await say('', '쿠로가네가 사쿠라유 소방 보고서를 넘기다 손을 멈춘다. 서랍에서 오래된 사본 한 장을 꺼내 나란히 놓는다.');
  await gainItem('record');
  FX.zoom('center');
  await say('kurogane', '「원인: 보일러실 배전반 노후 누전」.');
  show('kurogane', 'sad', 'center');
  await say('', '쿠로가네의 얼굴에서 표정이 사라진다. 처음 보는 얼굴이다.');
  FX.zoom(null);
  FX.pulse();
  await say('kurogane', '6년 전 등대 도서관이랑 한 글자도 안 틀려.');
  clearChars();
  bg('station_chief');
  await say('', '그날 밤 9시. 경찰서 서장실.');
  show('nishimura', 'normal', 'left');
  await say('', '서장 옆 소파에 검은 정장의 남자가 앉아 있다. 하쿠요 계열사 상무, 니시무라.');
  show('kurogane', 'normal', 'right');
  await say('', '서장의 목소리가 낮다. 「잔상과는 오늘부로 해체. 쿠로가네 과장은 직무 정지.」');
  await say('kurogane', '알겠습니다.');
  await say('nishimura', '잔상이라. 재미있는 걸 보는 분들이었죠.', 'normal');
  await say('', '복도에서 그 얼굴을 본 순간, 레이의 오른손 검지가 욱신거린다. 이유는 모른다.');
  clearChars();
  bg('office');
  FX.mood('dust');
  await say('', '그날 밤. 아무도 없는 잔상과 사무실.');
  await say('', '코하루가 선반 맨 위 상자를 내린다. 「6년 전 / 등대」.');
  FX.memory(true);
  await say('', '상자 안에는 그을린 경찰 배지 하나. 이름표에 「히나타 소타」.');
  FX.memory(false);
  await say('', '코하루는 배지를 주머니에 넣고, 상자를 제자리에 올려놓는다.');
  bgm(null, 2);
  await say('', '새벽 4시 12분. 레이의 휴대폰이 짧게 울린다.');
  await say('koharu', '(전화) 선배, 오빠 일 알아보러 갔다 올게요. 걱정 마세요!', 'normal');
  hide('koharu');
  FX.glitch(600);
  await say('', '그 뒤로, 연락이 끊겼다.');
  hideText();
  await banner('4장 「지워 드립니다」 끝', '', 2200);
  await showRank('4장 「지워 드립니다」');
}

const CH4_FN = {
  office4: sceneOffice4, explore4a: sceneExplore4a, puzzle4a: scenePuzzle4a, okamoto: sceneOkamoto, hayaka1: sceneHayaka1,
  accuse4: sceneAccuse4, hayaka: sceneHayaka, explore4b: sceneExplore4b, cross4: sceneCross4, hospital4: sceneHospital4,
  keiko: sceneKeiko, puzzle4b: scenePuzzle4b, conclusion4: sceneConclusion4, epilogue4: sceneEpilogue4,
};

const CH4_BGM = {
  office4: 'office', explore4a: 'explore', puzzle4a: 'tension', okamoto: 'trial', hayaka1: 'fire', accuse4: 'tension',
  hayaka: 'fire', explore4b: 'explore', cross4: 'trial', hospital4: 'truth', keiko: 'trial', puzzle4b: 'tension',
  conclusion4: 'trial', epilogue4: 'fire',
};

const CH4_CAST = { explore4a: ['murase'], okamoto: ['okamoto'], hayaka1: ['hayaka', 'ren'], keiko: ['keiko'], epilogue4: ['nishimura'] };

CHAPTERS[4] = { title: '지워 드립니다', scenes: CH4_SCENES, state: CH4_STATE, fn: CH4_FN, bgm: CH4_BGM, cast: CH4_CAST };
