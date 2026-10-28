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
const C4BK = [...C4B, '4K'];
const C4C = [...C4BK, '4E'];
const C4D = [...C4C, '4C', '4J'];
const C4E = [...C4D, '4H', '4G', '4M'];
const W4A = ['p_hayaka', 'p_genzo', 'p_keiko', 'a_fire'];
const W4B = [...W4A, 'th_panel', 'a_tamper', 'pl_boiler'];
const W4C = [...W4B, 'p_murase', 'p_okamoto', 't_2245'];
const W4D = [...W4C, 'pl_fence', 'a_watch', 'a_erase'];
const W4E = [...W4D, 'th_key', 'pl_office4'];
const W4F = [...W4E, 'a_rescue'];
const I4A = ['panel'], I4B = [...I4A, 'receipt'], I4C = [...I4B, 'schedule4', 'helmet4'];
const CH4_STATE = {
  office4: {}, explore4a: { words: W4A },
  puzzle4a: { cuts: C4A, items: I4A, words: W4B }, okamoto: { cuts: C4A, items: I4A, words: W4B },
  hayaka1: { cuts: C4B, items: I4A, words: W4C }, accuse4: { cuts: C4BK, items: I4B, words: W4C },
  hayaka: { cuts: C4BK, items: I4B, words: W4C }, explore4b: { cuts: C4C, items: I4B, words: W4D },
  cross4: { cuts: C4D, items: I4C, words: W4D }, hospital4: { cuts: C4D, items: I4C, words: W4E },
  keiko: { cuts: C4E, items: I4C, words: W4E }, puzzle4b: { cuts: C4E, items: I4C, words: W4F },
  conclusion4: { cuts: C4E, items: I4C, words: W4F }, epilogue4: { cuts: C4E, items: [...I4C, 'record'], words: W4F },
};

// ---------- 장면 ----------

// 컷 머리의 "누군가의 시점"을 걷는다(OWNERS[x].mask). 장면 선택으로 중간부터 시작해도 앞에서 밝혀진 건 켜 둔다
function reveal4(...flags) { flags.forEach((f) => { G.flags[f] = true; }); }

async function sceneOffice4() {
  CHARACTERS.ren.name = '렌';
  await FX.title('CHAPTER 4', '지워 드립니다', '8월 29일 · 항만 재개발 지구', [['hayaka', 'normal'], ['keiko', 'normal']]);
  bg('office');
  await say('', '8월 29일 오전, 잔상과. 코하루가 선반 맨 위 상자를 올려다본다. 옆면에 「6년 전 / 등대」.');
  show('koharu', 'normal', 'right');
  await say('koharu', '과장님, 이 상자 뭐예요?', 'normal');
  show('kurogane', 'normal', 'center');
  await say('kurogane', '손대지 마라. 아직 열 때가 아니다.');
  await say('', '압수품 번호표가 없다. 옆 상자들엔 다 붙어 있는데.');
  await say('', '레이는 자기 책상 서랍을 연다. 안쪽에 고무줄로 묶은 꽃집 영수증 다섯 장. 국화 한 다발씩이고, 날짜는 전부 8월 31일.');
  show('rei', 'serious', 'left');
  await say('rei', '(…산 기억이 없어.)', 'serious');
  hide('rei');
  hideText();
  const c0 = await choice(['"과장님 말 들어."', '"…나중에 같이 열어 보자."'], '코하루에게');
  if (c0 === 1) { G.flags.bond = (G.flags.bond || 0) + 1; await say('koharu', '네. 약속이에요, 선배.', 'happy'); }
  else await say('koharu', '네에….', 'worried');
  hide('koharu');
  await say('', '쿠로가네가 신문을 책상에 툭 내려놓는다. 「재개발 지구 목욕탕 화재, 주인 중상」.');
  show('kurogane', 'normal', 'center');
  await say('kurogane', '어젯밤 11시, 재개발 지구 목욕탕 「사쿠라유」가 탔다. 끝까지 안 팔고 버티던 데다. 주인 사쿠라이 겐조, 일흔여덟. 중상이다.');
  await say('kurogane', '소방 발표는 보일러실 [[배전반 노후 누전]].');
  gainWord('p_genzo');
  await say('kurogane', '강력계는 손녀를 본다. 사쿠라이 하야카, 열일곱. 그날 밤 할아버지랑 크게 싸웠어.');
  await say('kurogane', '그리고 오늘 아침, 구시가 언덕 「기억 상담소」란 데서 [[그 밤의 기억을 지웠다]].');
  gainWord('p_hayaka'); gainWord('a_fire');
  show('koharu', 'worried', 'right');
  await say('koharu', '기억을… 지워요? 그런 게 돼요?', 'worried');
  show('towa', 'normal', 'left');
  await say('towa', '돼. 돈만 내면.');
  hide('towa');
  await say('kurogane', '엄마는 케이코. 하쿠요 하청 일을 하다 그만뒀다. 지금은 아버지 병실에 붙어 있다.');
  gainWord('p_keiko');
  await say('koharu', '불이… 났던 거네요.', 'worried');
  await say('', '코하루가 무릎 위에서 주먹을 꽉 쥔다. 레이는 그 손을 잠깐 본다.');
  clearChars();
}

async function sceneExplore4a() {
  bg('sakurayu');
  await banner('사쿠라유', '8월 29일 오후 · 출입 금지', 1500);
  await say('', '철거 직전의 공터 한가운데, 굴뚝만 멀쩡한 목욕탕. 그을음 냄새가 아직 난다.');
  await say('rei', '(연기 냄새. 발이 저절로 뒤로 빠져. 전에도 이랬던 것 같은데.)', 'serious');
  const req = ['counter', 'fence', 'chimney', 'panel', 'okamotowin', 'poster'];
  let got = 0, metMurase = false;
  const tick = () => { got++; goal(`사쿠라유 잔상 (${got}/6)`); if (got === 6) EX.end(); };
  goal('사쿠라유 잔상 (0/6)');
  await explore('sakurayu', {
    start: [16, 8], required: req,
    on: {
      counter: async () => {
        await say('', '그을린 카운터. 반쯤 탄 서류에 「하쿠요 개발 — 매입 동의서」.');
        await say('rei', '(고함이 남아 있어. 누가 크게 싸웠어.)', 'serious');
        await gainCut('4A'); tick();
      },
      fence: async () => {
        await say('', '뒤편 울타리. 발치에 손전등이 굴러 있다.');
        await gainCut('4B'); tick();
      },
      chimney: async () => {
        await say('', '보일러실 창 아래 벽이 새카맣다. 불은 여기서 났다.');
        gainWord('pl_boiler');
        await gainCut('4F'); tick();
      },
      panel: async () => {
        await say('', '보일러실 배전반. 소매로 그을음을 닦자 전선이 보인다.');
        await gainItem('panel');
        gainWord('th_panel'); gainWord('a_tamper');
        show('rei', 'serious', 'left');
        await say('rei', '(잘린 자리가 반듯해. 공구 자국이야.)', 'serious');
        await say('', '바로 옆 보일러실 뒷문. 자물쇠는 그을리기만 했다. 비튼 자국도, 부순 자국도 없다.');
        tick();
      },
      okamotowin: async () => {
        await say('', '건너편 집 2층 창에서 할머니가 손짓한다. "올라와 봐, 형사 양반."');
        await say('', '할머니 집 2층. 레이는 탁상시계 옆 창틀에 손을 얹는다.');
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
        await say('murase', '경찰분들이시죠? 하쿠요 하청 현장소장 무라세라고 합니다. 뭐든 협조하겠습니다.', 'smile');
        await say('murase', '안타깝게 됐습니다. 배전반이 낡아서 누전이 난 겁니다. 위험하다고 몇 번을 말씀드렸는데.', 'normal');
        await say('murase', '손녀분 일은 들으셨습니까? 오늘 아침에 기억을 지웠다더군요. 저는 그게 마음에 걸려서요.', 'smile');
        show('rei', 'serious', 'left');
        await say('rei', '그 얘긴 어디서 들으셨어요?', 'serious');
        await say('murase', '동네가 좁잖습니까. 그럼 저는 이만.', 'normal');
        hide('rei');
      },
    },
  });
  goal('');
}

async function scenePuzzle4a() {
  await runPuzzle('page4a');
  bg('sakurayu');
  show('koharu', 'worried', 'right');
  await say('koharu', '손전등 하나 건네는데 장갑까지 꼈어요. 손 보이기 싫었나 봐요.', 'worried');
  show('rei', 'serious', 'left');
  await say('rei', '건너편 할머니부터. 그 창에선 다 보여.', 'serious');
  clearChars();
}

async function sceneOkamoto() {
  bg('okamoto_house');
  await say('', '오카모토 할머니 집 2층. 벽에 「재개발 반대」 머리띠가 걸려 있다.');
  meet('okamoto', 'left', 'angry');
  await say('okamoto', '하쿠요 놈들 짓이야. 내가 다 봤어! 거인만 한 놈들이 쳐들어가는 걸.', 'angry');
  await runTrial('okamoto');
  clearChars();
}

async function sceneHayaka1() {
  bg('hospital');
  await say('', '시립 병원, 중환자실 앞. 교복 입은 여자아이가 의자 위에서 무릎을 끌어안고 있다.');
  meet('hayaka', 'left', 'normal');
  await say('hayaka', '형사님이세요? 저 아무것도 기억 안 나요. 진짜로요.', 'normal');
  await say('hayaka', '지웠으니까요. 영수증도 있어요.', 'normal');
  await gainItem('receipt');
  await say('', '구겨진 영수증. 받아 드는 순간 손끝이 저릿하다. 오늘 아침의 잔상이다.');
  await gainCut('4K');
  show('koharu', 'worried', 'right');
  await say('koharu', '선배, 이 빈 말풍선 로고요. 크레센트 사장 서랍에 있던 명함이랑 똑같아요.', 'worried');
  hide('koharu');
  await say('', '복도 끝에 흰 코트. 은발에 안대.');
  FX.ghost(1600);
  show('ren', 'smile', 'right');
  await say('ren', '또 만났네, 시노노메.', 'smile');
  await say('ren', '저 애, 지우고 나서야 겨우 잤어. 그걸 도로 펼쳐서 뭐 하게?', 'normal');
  show('rei', 'serious', 'center');
  await say('rei', '그게 진짜 저 애를 위한 건지 보려고.', 'serious');
  await say('ren', '잊는 게 나을 때도 있어. 그건 네가 제일 잘 알 텐데.', 'smile');
  hide('ren');
  await say('', '대답은 듣지도 않고, 흰 코트가 엘리베이터 안으로 사라진다.');
  await say('hayaka', '지금은 싫어요. 이따가… 할아버지 면회 끝나고 와 주세요.', 'crying');
  clearChars();
}

async function sceneAccuse4() {
  bg('office');
  await banner('8월 29일 오후', '잔상과 사무실', 1300);
  show('kurogane', 'normal', 'center');
  await say('kurogane', '강력계가 오늘 저녁 하야카를 정식으로 부른다. 싸웠지, 근처에서 봤다는 사람 있지, 기억까지 지웠지. 그쪽은 그걸로 충분하단다.');
  await say('kurogane', '넌 다르게 보냐. 그럼 그 전에 보고해라.');
  hide('kurogane');
  show('koharu', 'worried', 'right');
  await say('koharu', '하야카 씨, 기억 안 난다면서 계속 울고 있었어요. 그게 좀 마음에 걸려요.', 'worried');
  clearChars();
  hideText();
  const r = await runName({
    title: '중간 보고 — 불을 낸 사람', sub: '틀리면 강력계가 그 사람을 데려간다.',
    parts: NAME4_MID, threshold: 3, report: true, reportLabel: '이대로 보고한다',
  });
  const who = r.picks[1]; // NAME4_MID의 1번 칸이 사람
  G.flags.accused4 = who;
  show('kurogane', 'normal', 'center');
  if (r.ok) {
    G.stats.accuse = true;
    await say('kurogane', '현장소장이라. 잘린 배전반에 하쿠요 헬멧, 멀쩡한 자물쇠, 열쇠 사본. 아직은 정황뿐이다.');
    await say('kurogane', '하야카는 참고인으로만 부르게 막아 두지. 오늘 안에 그 애 잘린 칸부터 채워 와.');
  } else {
    G.stats.accuse = false;
    if (who === 'p_hayaka') {
      G.flags.hayakaTaken = true;
      await say('kurogane', '손녀라. 강력계랑 같은 생각이군.');
      FX.pulse();
      await say('', '그날 저녁, 경찰서. 하야카는 아무도 묻기 전에 먼저 말했다. 「제가 했어요.」');
      await say('', '기억도 못 하는 밤을 통째로 떠안겠다는 얼굴이었다.');
    } else if (who === 'p_keiko') {
      G.flags.keikoTaken = true;
      await say('kurogane', '엄마를? 손전등 하나로?');
      FX.pulse();
      await say('', '그날 저녁, 케이코는 순순히 경찰차에 탔다. 붕대 감은 손으로 문을 닫기 전에, 병원 쪽을 한 번 돌아봤다.');
    } else {
      await say('kurogane', '그걸론 강력계를 못 막아. 하야카는 예정대로 불려 간다.');
    }
  }
  clearChars();
}

async function sceneHayaka() {
  bg('hospital');
  if (G.flags.hayakaTaken) await say('', '경찰서에서 「제가 했어요」만 되풀이하던 하야카가, 할아버지 병실 앞에서라면 얘기하겠다고 했다.');
  else await say('', '몇 시간 뒤, 병실 앞. 하야카가 의자에 앉아 기다리고 있다.');
  show('hayaka', 'normal', 'left');
  await say('hayaka', '보여 드릴게요. 남은 것만.', 'normal');
  await runTrial('hayaka');
  reveal4('k4Lookout');
  bg('hospital');
  show('hayaka', 'crying', 'left');
  await say('hayaka', '엄마가 진짜… 불을 냈을까요.', 'crying');
  show('rei', 'serious', 'right');
  await say('rei', '네가 본 건 망 보는 데까지야. 그 뒤는 아직 몰라.', 'serious');
  clearChars();
}

async function sceneExplore4b() {
  reveal4('k4Lookout');
  bg('site_office');
  await banner('하쿠요 하청 현장사무소', '8월 29일 저녁', 1400);
  await say('', '재개발 지구 끝, 컨테이너 한 동짜리 사무소.');
  const req = ['keybox', 'desk', 'whiteboard', 'helmets'];
  let got = 0;
  const tick = () => { got++; goal(`현장사무소 단서 (${got}/${req.length})`); if (got === req.length) EX.end(); };
  goal(`현장사무소 단서 (0/${req.length})`);
  await explore('siteoffice', {
    start: [11, 9], required: req,
    on: {
      keybox: async () => {
        await say('', '벽의 열쇠함. 「사쿠라유 보일러실(사본)」 꼬리표 달린 고리만 비었다.');
        await gainCut('4C'); tick();
      },
      desk: async () => {
        await say('', '현장소장 책상. 휴대폰 충전기와 식은 커피.');
        await gainCut('4J'); tick();
      },
      whiteboard: async () => {
        await say('', '공정표 화이트보드. 지운 자국 밑으로 글씨가 비친다.');
        await gainItem('schedule4'); tick();
      },
      helmets: async () => {
        await say('', '헬멧 걸이. 하쿠요 로고 찍힌 노란 헬멧이 다섯. 그중 둘에 보일러실 그을음이 묻었다. 하나는 안쪽에 「무라세」, 하나엔 흰 「방문자」 스티커.');
        await gainItem('helmet4');
        await say('rei', '(방문자용은 아무나 돌려 써. 누가 썼는지 안 남지.)', 'serious');
        tick();
      },
      window: async () => { await say('', '창 정면에 사쿠라유 굴뚝. 그날 밤엔 여기서 불이 훤히 보였겠다.'); },
    },
  });
  goal('');
}

async function sceneCross4() {
  bg('site_office');
  await say('', '무라세는 의자에 느긋하게 앉아 있고, 맞은편에서 오카모토 할머니가 팔짱을 낀다.');
  show('murase', 'smile', 'left');
  show('okamoto', 'angry', 'right');
  await say('okamoto', '이 양반 앞에서 다시 말해 줄게. 똑똑히 들어.', 'angry');
  await say('murase', '얼마든지요.', 'smile');
  await runTrial('cross4');
  reveal4('m4Key');
  clearChars();
  await say('rei', '(「예전에도 이렇게 끝냈다」. 예전이 언제야.)', 'serious');
  await say('kurogane', '(전화) 상무가 나왔다고. …무라세 말 하나론 못 건드린다. 불난 11시에 상무는 축제 본부 귀빈석 사진에 찍혀 있어.');
  await say('kurogane', '(전화) 「예전에도」, 그 말은 당분간 너만 알고 있어라.');
}

async function sceneHospital4() {
  reveal4('k4Lookout', 'm4Key');
  bg('hospital');
  await say('', '중환자실. 겐조는 아직 눈을 못 떴다. 협탁 위에 그을린 손목시계.');
  show('koharu', 'worried', 'right');
  await say('koharu', '할아버지 시계에도 뭔가 남아 있을까요?', 'worried');
  show('rei', 'serious', 'left');
  await say('rei', '읽어 볼게.', 'serious');
  hideText();
  await gainCut('4H');
  await say('', '침대 옆 의자 위에 그을린 작업 장갑 한 켤레. 손바닥 쪽이 녹아 있다.');
  await gainCut('4G');
  await say('', '창가 보호자 의자. 담요가 개켜 있고, 앉았던 자리가 아직 따뜻하다.');
  await gainCut('4M');
  await say('rei', '(장갑 주인을 만나야겠어.)', 'serious');
  clearChars();
}

async function sceneKeiko() {
  bg('hospital');
  if (G.flags.keikoTaken) await say('', '참고인 조사를 마치고 케이코가 병실로 돌아왔다. 두 손 붕대는 새로 감았다. 하야카는 몇 걸음 떨어져 서 있다.');
  else await say('', '병실 앞 복도. 케이코가 붕대 감은 두 손을 무릎에 얹고 앉아 있다. 하야카는 몇 걸음 떨어져 서 있다.');
  meet('keiko', 'left', 'normal');
  await say('keiko', '하야카가 기억을 지웠다는 거, 저도 오늘 알았어요.', 'normal');
  await runTrial('keiko');
  reveal4('k4Rescue');
  clearChars();
}

async function scenePuzzle4b() {
  reveal4('k4Lookout', 'm4Key', 'k4Rescue');
  bg('sakurayu');
  show('rei', 'serious', 'left');
  await say('rei', '불나기 전이 한 페이지, 그 뒤가 한 페이지.', 'serious');
  clearChars();
  await runPuzzle('page4b');
}

async function sceneConclusion4() {
  bg('sakurayu');
  await banner('결론', '사쿠라유 앞', 1300);
  await say('', '그을린 굴뚝 아래로 다 모였다. 강력계 형사, 변호사를 데려온 무라세, 오카모토 할머니, 케이코와 하야카. 쿠로가네는 맨 뒤에 섰다.');
  show('kurogane', 'normal', 'center');
  await say('kurogane', '시작해.');
  hide('kurogane');
  hideText();
  await runName({ title: '8월 28일 밤 — 사쿠라유', sub: '빈칸이 다 맞아야 확정된다.', parts: NAME4_FINAL, threshold: 5 });
  await montage(G.lastSolution);
  show('murase', 'smile', 'left');
  await say('murase', '그림 몇 장으로 사람을 방화범 만드시겠다? 증거는 있습니까?', 'smile');
  hide('murase');
  for (let i = 0; i < CONCLUSION4.length; i++) {
    const q = CONCLUSION4[i];
    if (q.pre) { show('murase', q.pre[0][2] || 'smile', 'left'); await sayAll(q.pre); hide('murase'); }
    for (;;) {
      hideText();
      const c = await pickCut(`질문 ${i + 1}. ${q.q}`, '답이 될 물증이나 컷.', { cancel: false, only: q.choices, items: true });
      if (q.answer.includes(c)) { sfx('correct'); break; }
      sfx('wrong'); quake();
      G.stats.wrong++;
      show('murase', 'smile', 'left');
      await say('murase', '그게 증거라고요?', 'smile');
      hide('murase');
    }
  }
  show('murase', 'cornered', 'left');
  await say('murase', '공정표대로 했을 뿐입니다. 나머진 위에 물어보시죠.', 'cornered');
  hide('murase');
  show('kurogane', 'normal', 'center');
  await say('kurogane', '무라세는 강력계가 데려간다. 상무는… 아직이다. 사진 한 장이 그 사람 편이야.');
  hide('kurogane');
  bgm('truth');
  show('hayaka', 'crying', 'left');
  show('keiko', 'crying', 'right');
  await say('hayaka', '지우면 다 괜찮아질 줄 알았어요. 엄마도, 할아버지도.', 'crying');
  hideText();
  const c = await choice(['"지운 밤은 엄마한테 다시 들으면 돼."', '"이제 지우지 않아도 돼."', '(엄마가 불 속에 뛰어드는 컷을 하야카에게 보여 준다)'], '하야카에게 뭐라고 할까?');
  if (c === 0) await say('keiko', '응. 하나도 안 빼고. 망 본 것까지.', 'resolute');
  if (c === 1) await say('hayaka', '네. 이번엔 안 지울게요.', 'crying');
  if (c === 2) {
    marginMark('rescueShown');
    await say('', '하야카는 연기 속으로 뛰어드는 등을 한참 들여다본다. 그러다 엄마의 붕대 감은 손을 잡는다.');
  }
  clearChars();
}

async function sceneEpilogue4() {
  bg('office');
  await say('', '그날 저녁. 잔상과 사무실.');
  show('rei', 'normal', 'left');
  show('kurogane', 'normal', 'center');
  await say('kurogane', '「예전에도 이렇게 끝냈다」. 그게 걸려서.');
  await say('', '쿠로가네가 사쿠라유 소방 보고서 옆에 누렇게 바랜 사본 한 장을 놓는다. 서랍 맨 안쪽에서 꺼낸 것이다.');
  FX.zoom('center');
  await say('kurogane', '「원인: 보일러실 배전반 노후 누전」.');
  show('kurogane', 'sad', 'center');
  await say('', '쿠로가네의 얼굴이 굳는다. 레이는 처음 보는 얼굴이다.');
  FX.zoom(null);
  FX.pulse();
  await say('kurogane', '6년 전 등대 도서관이랑 한 글자도 안 틀려.');
  await say('kurogane', '시노노메, 이건 네가 갖고 있어라. 여기 두면 내일은 없어진다. 상무 영장은 방금 신청했다.');
  await gainItem('record');
  clearChars();
  bg('station_chief');
  await say('', '밤 9시, 경찰서 서장실 앞 복도. 반쯤 열린 문틈으로 안이 보인다.');
  show('nishimura', 'normal', 'left');
  await say('', '서장 옆 소파에 검은 정장 차림의 남자. 하쿠요 계열사 상무, 니시무라다.');
  show('kurogane', 'normal', 'right');
  await say('', '서장이 낮은 목소리로 읽는다. 「영장 신청은 반려. 잔상과는 오늘부로 해체. 쿠로가네 과장은 직무 정지.」');
  await say('kurogane', '알겠습니다.');
  await say('nishimura', '잔상과라. 재미있는 걸 보는 분들이었다죠.', 'normal');
  clearChars();
  await say('', '니시무라가 복도로 나온다. 레이 앞을 지나며 은색 라이터 뚜껑을 딸깍 튕긴다.');
  show('nishimura', 'normal', 'center');
  FX.zoom('center');
  await say('', '그 얼굴을 보는 순간 오른손 검지가 욱신거린다. 왜인지는 모르겠다.');
  FX.zoom(null);
  hide('nishimura');
  bg('office');
  FX.mood('dust');
  await say('', '같은 밤, 불 꺼진 잔상과.');
  await say('', '코하루가 선반 맨 위 상자를 내린다. 「6년 전 / 등대」.');
  FX.memory(true);
  await say('', '상자 안에는 그을린 경찰 배지 하나. 이름표에 「히나타 소타」.');
  FX.memory(false);
  await say('', '코하루는 배지를 주머니에 넣고 상자를 도로 올려놓는다.');
  bgm(null, 2);
  await say('', '새벽 4시 12분. 레이의 휴대폰이 짧게 울린다.');
  await say('koharu', '(전화) 선배, 오빠 일 알아보러 갔다 올게요. 걱정 마세요!', 'normal');
  hide('koharu');
  FX.glitch(600);
  await say('', '그 뒤로 연락이 없다.');
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
