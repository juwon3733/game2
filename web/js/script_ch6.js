// 종장 「같은 하루」 진행 스크립트. 기획: docs/05_story.md §5장, docs/12_story_plan.md §3 종장

Object.assign(MAPS, {
  lighthouse: {
    label: '곶 끝, 등대 도서관 터',
    hallWallRow: -1,
    rows: [
      '##########################',
      '#WWWWWWWWWWWWW#WWWWWWWWWW#',
      '#,,,,,,,,,,,,,#__________#',
      '#,,,,,,,,,,,,,#__________#',
      '#,,,,,,,,,,,,,#__________#',
      '#WWWWWW_WWWWWW#__________#',
      '#,,,,,,,,,,,,,#__________#',
      '#,,,,,,,,,,,,,#__________#',
      '#,,,,,,,,,,,,,D__________#',
      '#,,,,,,,,,,,,,#__________#',
      '#WWWWWWWWWWWWW#RRRRRRRRRR#',
      '#XXXXXXXXXXXXX#XXXXXXXXXX#',
      '##########################',
    ],
    objects: [
      { id: 'seat', x: 3, y: 2, w: 2, solid: true, label: '2층 열람석' },
      { id: 'lastpage', x: 6, y: 3, label: '바닥의 원고지 조각', walkable: true },
      { id: 'form', x: 10, y: 3, label: '타다 만 응모 서류', walkable: true },
      { id: 'box', x: 11, y: 2, w: 2, solid: true, label: '2층 서가 아래 철제 상자' },
      { id: 'hairpin', x: 7, y: 4, label: '계단참의 작은 반짝임', walkable: true },
      { id: 'stairs', x: 7, y: 5, label: '나선 계단', walkable: true },
      { id: 'lighter', x: 4, y: 7, label: '1층 서고 바닥', walkable: true },
      { id: 'gate', x: 14, y: 8, label: '도서관 문' },
      { id: 'bench', x: 21, y: 4, w: 2, solid: true, label: '곶 끝 벤치' },
      { id: 'plaque', x: 2, y: 8, label: '그을린 기증자 명판' },
      { id: 'flowers', x: 18, y: 7, label: '철망 앞 국화 다발' },
      { id: 'fence', x: 16, y: 6, label: '철망의 자물쇠' },
    ],
  },
});
// 조사 구역은 explore.js EX_AREAS.lighthouse. 머리핀은 계단참이라 1층 쪽, 명판·자물쇠는 잔상이 없는 물건

const CH6_SCENES = [
  ['offer6', '제안 (8월 31일 아침)'],
  ['explore6', '탐색: 등대 도서관 터'],
  ['asagiri6', '최종 심문 1: 아사기리'],
  ['self6', '최종 심문 2: 레이'],
  ['shiori6', '시오리'],
  ['puzzle6', '두 줄 타임라인'],
  ['conclusion6', '결론: 같은 하루'],
  ['ending6', '엔딩'],
];

const C6A = ['AF', '6Y3', '6Y4']; // 5장에서 얻은 그날의 컷은 종장에도 가져온다
const C6B = [...C6A, 'R1', 'S1', 'R2', 'S2', 'R3', 'S3', 'R4', 'R5', 'S4', 'S5', 'S6', 'S7', 'RF'];
const C6C = [...C6B, 'R6', 'R7', 'R8', 'AC'];
const C6D = [...C6C, 'S8'];
const W6A = ['p_shiori', 'p_kurogane', 'pl_lighthouse', 'a_runaway'];
const W6B = [...W6A, 'pl_bench', 'p_nishi', 'th_backpage', 'a_draw'];
const W6C = [...W6B, 'th_lighter', 'a_runback', 'a_handover'];
const I6 = ['lighter', 'manuscript', 'petition'];
const CH6_STATE = {
  offer6: {}, explore6: { cuts: C6A, words: W6A },
  asagiri6: { cuts: C6B, items: I6, words: W6B }, self6: { cuts: C6B, items: I6, words: [...W6B, 'th_lighter'] },
  shiori6: { cuts: C6C, items: I6, words: W6C }, puzzle6: { cuts: C6D, items: I6, words: W6C },
  conclusion6: { cuts: C6D, items: I6, words: W6C }, ending6: { cuts: C6D, items: I6, words: W6C },
};

const marginCount = () => MARGIN_FLAGS.filter((f) => G.flags[f]).length;

// ---------- 장면 ----------

async function sceneOffer6() {
  await FX.title('FINAL', '같은 하루', '8월 31일 · 곶 끝 등대 도서관 터', [['shiori', 'normal'], ['rei', 'serious']]);
  bg('office');
  FX.mood('dust');
  await say('', '8월 31일 아침. 해체된 잔상과 사무실. 누군가 커피를 내려 두었다. 단 커피.');
  show('asagiri', 'normal', 'center');
  await say('asagiri', '좋은 아침, 레이.');
  await say('asagiri', '어젯밤 말, 진심이야. 다시 잊게 해 줄게. 이번엔 흔적도 없이. 시오리도… 이제 그만 놓아주렴.', 'normal');
  await say('asagiri', '대신 편집국 일에선 손을 떼. 대답은 오늘 밤까지.', 'cold');
  hide('asagiri');
  await say('', '아사기리가 나간 뒤, 책상 위에 커피잔 하나가 남아 있다. 6년 동안 레이 앞에 놓이던 그 잔.');
  show('rei', 'serious', 'left');
  await say('rei', '(어젯밤엔 말만 읽었어. 잔은 아직이야.)', 'serious');
  await gainCut('AF');
  show('koharu', 'worried', 'right');
  await say('koharu', '선배, 대답 안 했죠? 다행이다.', 'worried');
  await say('rei', '등대에 가자. 거기 아직 남은 게 있어.', 'serious');
  gainWord('p_shiori'); gainWord('p_kurogane'); gainWord('pl_lighthouse'); gainWord('a_runaway');
  clearChars();
}

async function sceneExplore6() {
  bg('lighthouse');
  bgm('final');
  await banner('곶 끝', '등대 도서관 터 · 8월 31일 저녁', 1600);
  await say('', '바다를 향해 튀어나온 곶 끝. 반쯤 무너진 등대 모양의 도서관. 녹슨 철망이 건물을 빙 둘러싸고 있다.');
  show('kurogane', 'sad', 'center');
  await say('kurogane', '직무 정지지만, 오늘은 같이 간다.', 'sad');
  show('ren', 'normal', 'left');
  await say('ren', '이 밤만은 편집장이 직접 붙들고 있었어. 나한텐 손도 못 대게 했지.', 'normal');
  show('towa', 'serious', 'right');
  await say('towa', '드론 띄웠어. …나도 같이 읽을게.');
  clearChars();
  const req = ['seat', 'lastpage', 'form', 'box', 'hairpin', 'stairs', 'lighter', 'gate', 'bench', 'flowers'];
  let got = 0;
  const tick = () => { got++; goal(`그날 밤의 잔상을 모아라. (${got}/${req.length})`); if (got === req.length) EX.end(); };
  goal(`그날 밤의 잔상을 모아라. (0/${req.length})`);
  await explore('lighthouse', {
    start: [16, 9], required: req,
    on: {
      seat: async () => {
        await say('', '2층 열람석. 그을린 책상에 펜 자국이 깊이 패어 있다. 문 닫을 시간이 지나도 사서가 두 사람에게만 열어 두던 자리.');
        await gainCut('R1'); await gainCut('S1'); tick();
      },
      form: async () => {
        await say('', '타다 만 만화 콘테스트 응모 서류. 「그림」 칸에 시노노메 레이. 「글」 칸이 볼펜으로 그어져 있다.');
        await gainCut('R2'); await gainCut('S2'); tick();
      },
      stairs: async () => {
        await say('', '1층에서 올려다본 나선 계단. 그날 레이가 뛰어 내려온 계단이다. 첫 단에서 발이 저절로 멈춘다.');
        await gainCut('R3'); tick();
      },
      lastpage: async () => {
        await say('', '바닥에 원고지 조각. 마지막 장의 귀퉁이. 아무것도 그려져 있지 않다.');
        await gainCut('S3'); tick();
      },
      bench: async () => {
        await say('', '곶 끝 벤치. 멀리 항구 등대 불빛이 돌 때마다 바다가 하얗게 빛난다.');
        gainWord('pl_bench');
        await gainCut('R4'); tick();
      },
      gate: async () => {
        await say('', '도서관 문. 경첩만 남았다. 옆 게시판에 빛바랜 전단과, 그 위를 덮은 새 종이.');
        await gainItem('petition');
        await say('kurogane', '불 난 뒤로 봉쇄된 채 그대로다. 보존회랑 하쿠요가 땅을 두고 소송 중이라 철거도 못 했지.', 'sad');
        await say('', '전단의 등대 그림. 펜선이 낯익다. 레이의 숨이 가빠진다.');
        await gainCut('R5'); tick();
      },
      lighter: async () => {
        await say('', '1층 서고 바닥. 잿더미 속에서 녹아 붙은 은색 라이터.');
        await gainItem('lighter');
        await say('kurogane', '「H」 각인. 하쿠요가 창립 기념으로 간부들한테만 돌린 거다. 감식은 배전반만 보고 하루 만에 「누전」으로 닫았지. 서고 잿더미는 아무도 안 뒤졌다.', 'sad');
        await gainCut('S4');
        await say('rei', '(이 얼굴. 서장실에서 나오던 사람.)', 'serious');
        gainWord('p_nishi');
        await say('kurogane', '니시무라. 그때는 하쿠요 용지 담당이었다. 이 곶을 사겠다고 매일 드나들었지.', 'sad');
        tick();
      },
      box: async () => {
        await say('', '2층 서가 아래 철제 상자. 불은 2층 창가에서 멈췄고, 상자는 서가째 그을리기만 했다. 뚜껑이 열린다. 안에 가장자리가 탄 원고 다발. 마지막 장 뒷면에 연필 그림.');
        await gainItem('manuscript');
        gainWord('th_backpage'); gainWord('a_draw');
        await gainCut('S5'); tick();
      },
      plaque: async () => {
        await say('', '1층 벽의 그을린 기증자 명판. 「바위산 화재로 떠난 남편과 딸을 기억하며 — 그림책 200권」. 날짜는 12년 전. 기증자 이름 칸만 까맣게 타 읽을 수 없다.');
        await say('rei', '(시립 도서관 그림책에 찍혀 있던 도장. 같은 날짜야.)', 'serious');
      },
      flowers: async () => {
        await say('', '철망 앞에 시든 국화 한 다발. 작년 것이다. 리본도 쪽지도 없다.');
        await say('kurogane', '해마다 8월 31일 밤이면 누가 두고 간다. 다섯 해째 한 번도 거른 적이 없지.', 'sad');
        await say('', '시든 꽃대를 쥐자, 손바닥에 낯익은 감각이 남는다.');
        await gainCut('RF'); tick();
      },
      fence: async () => {
        await say('', '철망 문에 녹슨 자물쇠. 열쇠 구멍까지 녹이 슬어 몇 년은 아무도 연 적이 없다.');
      },
      hairpin: async () => {
        await say('', '계단참 틈에 낀 작은 반짝임. 책갈피 모양의 머리핀.');
        FX.ghost(1500);
        await gainCut('S6'); await gainCut('S7'); tick();
      },
    },
  });
  goal('');
}

async function sceneAsagiri6() {
  bg('lighthouse');
  await say('', '해가 진다. 등대 도서관 앞에 아사기리가 서 있다.');
  show('asagiri', 'cold', 'left');
  await say('asagiri', '여기까지 왔구나. 그럼 마지막으로, 내 그림도 읽어 봐.', 'cold');
  await runTrial('asagiri6');
  clearChars();
}

async function sceneSelf6() {
  bg('lighthouse_in');
  await say('', '불탄 2층. 레이가 그날 앉던 자리에 앉는다.');
  show('towa', 'serious', 'right');
  await say('towa', '레이. 네 증언 페이지를 띄울게. 네가 지금까지 믿어 온 순서 그대로.');
  hide('towa');
  await runTrial('self6');
  clearChars();
}

async function sceneShiori6() {
  bg('lighthouse_in');
  FX.ghost(4000);
  FX.mood('ghost');
  show('shiori', 'smile', 'center');
  await say('', '열람석 맞은편에 시오리가 앉아 있다. 그날 밤의 교복 그대로.');
  await say('shiori', '오래 걸렸네, 레이.', 'smile');
  show('rei', 'crying', 'left');
  await say('rei', '미안. 그 칸, 내가 그었어. 네 이름.', 'crying');
  await say('shiori', '알아. 그래도 돌아왔잖아. 연기 속으로.', 'smile');
  await say('shiori', '마지막 한 칸은 머리핀에 남아 있어. 읽어 봐.', 'normal');
  await gainCut('S8');
  await say('', '계단 아래에서 위층을 올려다보는 시점. 등 뒤로 순경이 뛰어 들어오는 발소리.');
  await say('rei', '상자에 넣어 둔 그 장. 불 꺼지고 누가 열어 볼지 몰라서, 네 손으로 건네고 싶었구나.', 'crying');
  await say('shiori', '응.', 'smile');
  await say('rei', '…시오리. 너, 처음부터 내가 본 것만 가리켰지. 칸막이도, 스케치북도, 부두도.', 'serious');
  await say('shiori', '나는 네가 지운 칸이니까. 네가 본 것밖에 몰라.', 'smile');
  await say('shiori', '그래서 하나 남은 건 나도 못 가리켜. 아직 아무도 안 그린 칸.', 'normal');
  await say('', '시오리의 손가락이 열람석 위 원고의 마지막 장을 가리킨다. 백지.');
  FX.mood(null);
  hide('shiori');
  clearChars();
}

async function scenePuzzle6() {
  bg('lighthouse_in');
  show('rei', 'serious', 'left');
  show('kurogane', 'sad', 'right');
  await say('kurogane', '사무실 선반 맨 위의 그 상자. 「6년 전 / 등대」. 현장에서 내가 몰래 빼 둔 거다.', 'sad');
  await say('kurogane', '네가 언젠가 열 수 있을 때까지 두려고 했다. 코하루는 첫날부터 그 상자만 보더라.', 'sad');
  await say('rei', '열 수 있을 것 같아요. 이제.', 'serious');
  hide('kurogane');
  await say('rei', '두 줄로 놓자. 내 밤이랑, 시오리의 밤.', 'serious');
  clearChars();
  // 3장 시각표와 규칙이 달라서 종장용 도움말을 따로 띄운다
  if (!G.flags.timeTut6) {
    G.flags.timeTut6 = true; G.flags.timeTut = true;
    await sayAll([
      ['tip', '[[두 줄 시각표]]: 위는 레이, 아래는 시오리. 같은 높이가 같은 순간이다.'],
      ['tip', '누구 줄인지는 컷 머리 색으로 정해진다. 시계가 보이는 칸은 몇 개뿐. 나머지는 앞뒤에 무슨 일이 있었는지로 놓는다. 16칸은 전부 찬다.'],
    ]);
    hideText();
  }
  await runTimeline('time6');
}

async function sceneConclusion6() {
  bg('lighthouse');
  await banner('결론', '같은 하루', 1300);
  show('kurogane', 'sad', 'center');
  await say('kurogane', '읽어 봐라, 시노노메. 그날을.', 'sad');
  hide('kurogane');
  hideText();
  await runName({ title: '그날 밤', sub: '모든 빈칸이 맞아야 확정할 수 있다.', parts: NAME6_FINAL, threshold: 4 });
  await montage(G.lastSolution);
  for (let i = 0; i < CONCLUSION6.length; i++) {
    const q = CONCLUSION6[i];
    for (;;) {
      hideText();
      const c = await pickCut(`질문. ${q.q}`, '대답이 되는 물증이나 컷을 고르자.', { cancel: false, only: q.choices, items: true });
      if (q.answer.includes(c)) { sfx('correct'); break; }
      sfx('wrong'); quake(); G.stats.wrong++;
      await say('kurogane', '그걸로는 안 묶인다. 다시.', 'sad');
    }
  }
  show('kurogane', 'sad', 'center');
  await say('kurogane', '영장 청구한다. 이번엔 서장 결재 안 기다린다.', 'sad');
  hide('kurogane');
  show('ren', 'normal', 'right');
  await say('ren', '증언할게. 법정에서. 안대도 벗고.', 'normal');
  hide('ren');
  show('asagiri', 'sad', 'right');
  bgm(null, 2);
  await say('', '밤이 깊었다. 철망 앞, 아사기리가 국화 한 다발을 들고 서 있다.');
  await say('asagiri', '올해 것. 네가 꽃집에 안 들러서, 내가 사 왔어.', 'sad');
  await say('asagiri', '여섯 번, 같은 대답이었지. 그래도 일곱 번째로 물을게.', 'sad');
  await say('asagiri', '다시 지워 줄까?', 'sad');
  hideText();
  const c = await choice(['"…다시 지워 주세요."', '"아니요. 올해는 제가 둘게요. 꽃도, 그날도."'], '최종 선택');
  if (c === 0) G.flags.ending = 'edit';
  else {
    G.flags.ending = marginCount() >= MARGIN_FLAGS.length ? 'margin' : 'truth';
    await say('asagiri', '…그래.', 'sad');
    await say('', '아사기리가 국화 다발을 내민다. 레이가 받는다. 젖은 꽃잎에서 6년 치 같은 냄새가 난다.');
    await say('asagiri', '쓴 커피, 생각보다 마실 만해. 내일 아침엔 그걸로 마셔.', 'sad');
  }
  clearChars();
}

// 진실·여백 엔딩 공통 에필로그: 인물을 한 줄씩 나열하지 않고, 하루를 세 장면으로 묶는다
async function epilogueMontage() {
  bgm('epilogue');
  // 낮: 병원
  bg('hospital');
  await say('', '9월 첫 주. 코하루가 커피 두 잔을 들고 병원 4층 휴게실 문 앞에서 멈춘다.');
  await say('', '안에서 키보드 소리. 한 소절이 틀리고, 작은 손이 같은 소절을 틀리지 않고 다시 친다. 레이는 문을 열지 않고 돌아선다.');
  // 저녁: 상점가
  bg('arcade');
  await say('', '해 질 무렵 상점가. 양과점 셔터 앞에서 리본 색이 다른 두 사람이 한 장의 스케치북을 들여다본다. 크레센트 포스터 귀퉁이엔 연필 글씨 하나, 「핀 조명 하나」.');
  await say('koharu', '선배, 다들 잘 지내요.', 'happy');
  await say('rei', '응.', 'normal');
  await say('', '돌아오는 길, 카페 「여백」 문엔 손글씨 쪽지가 붙어 있다. 「잠시 휴업」.');
  // 밤: 사무실
  bg('office');
  await say('', '잔상과 사무실 문에 「해체」 종이는 다시 붙지 않았다. 텔레비전에서 법원 앞 화면이 지나간다. 안대를 벗은 얼굴 하나.');
  await say('', '쿠로가네가 담요를 던져 준다. 걷어 올린 소매 아래로 손목시계 초침이 돌아간다.');
  await say('towa', '…나 고양이 아니야.');
}

// 여백 엔딩: 1~5장에서 말 대신 건넨 것들을 한 번씩 떠올린다
const MARGIN_RECALL = [
  ['yohaku1', '컷 속 선생님의 팔을 보고 머리핀을 다시 꽂던 히마리의 손가락.'],
  ['yohaku2', '수첩의 「앙코르 — 루루 솔로」를 따라 쓰던 루루의 손가락.'],
  ['sketch3', '스케치북을 넘기다 「매일 고마워」에서 멈춘 나기의 손.'],
  ['rescueShown', '연기로 뛰어드는 엄마의 등을 본 뒤, 붕대 감은 손을 잡던 하야카.'],
  ['badgeBack', '그을린 배지를 레이 손바닥에 도로 얹던 코하루의 두 손.'],
];

async function sceneEnding6() {
  const end = G.flags.ending || 'truth';
  if (end === 'edit') {
    bg('lighthouse');
    show('asagiri', 'sad', 'center');
    await say('asagiri', '그래. 일곱 번째네.', 'sad');
    show('koharu', 'crying', 'right');
    await say('koharu', '선배, 그날을 지우면 오빠가 선배를 업고 나온 것도 같이 없어져요.', 'crying');
    await say('koharu', '오빠가 마지막으로 한 일이에요. 그걸 선배가 모르는 채로 옆에 있는 건, 저 못 하겠어요.', 'crying');
    hide('koharu');
    hideText();
    await FX.erase(2600);
    await fade(true, 900);
    FX.eraseEnd();
    clearChars();
    bg('office');
    await fade(false, 900);
    await say('', '9월 1일 아침. 잔상과 사무실 소파에서 레이가 눈을 뜬다. 책상 위에 단 커피가 김을 올린다.');
    show('shiori', 'normal', 'right');
    await say('', '창가에 교복 차림의 여학생이 서 있다. 아무 말도 하지 않는다.');
    hide('shiori');
    await say('', '책상 위 신문 귀퉁이. 「하쿠요 상무 니시무라, 6년 전 등대 도서관 방화 혐의로 구속」. 레이는 낯선 이름을 한 번 훑고 신문을 접는다.');
    await say('', '맞은편 책상은 비어 있다. 쪽지 한 장. 「선배, 잘 지내요.」');
    await say('', '레이는 쪽지를 두 번 읽고, 누구 글씨인지 끝내 떠올리지 못한다. 커피는 달다. 늘 그랬듯이.');
    hideText();
    await banner('편집 엔딩', '「아무 일도 없었던 하루」', 2600);
  } else {
    bg('lighthouse_dawn');
    bgm('truth');
    await say('', '새벽. 곶 끝. 하쿠요 본사에 수색 영장이 집행되고, 니시무라가 연행되었다는 소식이 라디오로 흘러나온다.');
    await say('', '날이 밝자, 아사기리가 스스로 경찰서를 찾아갔다는 소식도 들린다.');
    show('rei', 'normal', 'left');
    await say('', '철망 앞. 레이가 국화를 내려놓는다. 처음으로, 다음 날에도 기억할 채로.');
    show('koharu', 'normal', 'right');
    await say('', '코하루의 가방에서 수첩이 떨어져 펼쳐진다. 첫 장, 8월 24일. 둥근 글씨.');
    await say('', '「오빠가 업고 나온 사람. 시노노메 레이. 잔상과.」');
    await say('koharu', '…아. 그거, 첫날 쓴 거예요.', 'worried');
    await say('rei', '처음부터 알았어?', 'serious');
    await say('koharu', '오빠 사건 기록에 이름이 있었어요. 보면 원망할 줄 알았는데, 선배가 커피 캔 들고 졸고 있더라고요.', 'normal');
    await say('koharu', '그래서 그냥 옆에 있기로 했어요. 선배가 기억해 낼 때까지는 제 얘기가 아니니까.', 'happy');
    await say('rei', '…고마워.', 'normal');
    clearChars();
    if (end === 'margin') {
      show('rei', 'serious', 'left');
      await say('', '최종 페이지 끝에, 칸이 하나 더 남아 있다. 아무것도 그려지지 않은 칸.');
      await gainCut('Y6');
      const art = await cg('cg_margin');
      await say('', '레이가 6년 만에 펜을 쥔다. 펜 끝이 종이에 닿기 전, 손이 먼저 떠올리는 것들이 있다.');
      for (const [f, l] of MARGIN_RECALL) if (G.flags[f]) await say('', l);
      await say('', '오른손 검지의 굳은살이 펜대에 꼭 맞는다. 빈 칸에, 열람석에 마주 앉은 두 사람을 그린다. 그리고 말풍선 하나.');
      if (art) cgEnd();
      FX.ghost(3000);
      show('shiori', 'smile', 'right');
      await say('shiori', '「레이, 다음 칸은 네가 그려.」', 'smile');
      await say('rei', '응. 그릴게.', 'crying');
      await say('shiori', '박수 소리도 그려 줘.', 'smile');
      hide('shiori');
      await say('', '시오리가 웃으며 손을 한 번 흔들고 흩어진다.');
      clearChars();
    } else {
      FX.ghost(3000);
      const art = await cg('cg_farewell');
      if (!art) show('shiori', 'smile', 'center');
      await say('', '등대 앞에 시오리가 서 있다. 마지막으로 웃는다.');
      await say('shiori', '고마워, 레이.', 'smile');
      if (art) cgEnd(); else hide('shiori');
      await say('', '잔상이 아침 햇빛 속으로 흩어진다.');
    }
    await epilogueMontage();
    if (end === 'margin') {
      show('koharu', 'happy', 'right');
      show('rei', 'normal', 'left');
      await say('koharu', '선배! 그 원고, 이번 신인 만화상에 내요. 접수 금요일까지래요!', 'happy');
      await say('rei', '글 칸에 이름 하나 더 써야 해.', 'normal');
      await say('', '새 응모 서류의 「글」 칸. 레이가 천천히 쓴다. 「아이자와 시오리」.');
      clearChars();
    }
    if (end === 'truth') {
      show('koharu', 'happy', 'right');
      show('rei', 'normal', 'left');
      await say('koharu', '선배, 내일 커피 담당 저예요. 단 거죠?', 'happy');
      await say('rei', '아니. 쓴 거.', 'normal');
      await say('koharu', '…진짜요? 네!', 'happy');
      if ((G.flags.bond || 0) >= 3) await say('koharu', '6년 치 따라잡으려면 아직 멀었네요. 모레도 제가 할게요.', 'happy');
      clearChars();
    }
    hideText();
    await banner(end === 'margin' ? '여백 엔딩' : '진실 엔딩', end === 'margin' ? '「다음 칸」' : '「같은 하루」', 2600);
    if (end === 'truth') await say('tip', `여백 조건 ${marginCount()} / ${MARGIN_FLAGS.length}. 1~5장 끝의 감정 선택에서 말 대신 컷·물건을 건네는 [[세 번째 보기]]를 모두 고르면 다른 결말이 열린다.`);
  }
  await banner('같은 하루, 다른 칸', '— 끝 —', 3000);
  await showRank('종장 「같은 하루」'); // 평가를 먼저, 크레딧으로 끝낸다
  await credits(G.flags.ending || 'truth');
}

const CH6_FN = {
  offer6: sceneOffer6, explore6: sceneExplore6, asagiri6: sceneAsagiri6, self6: sceneSelf6, shiori6: sceneShiori6,
  puzzle6: scenePuzzle6, conclusion6: sceneConclusion6, ending6: sceneEnding6,
};

const CH6_BGM = {
  offer6: 'office', explore6: 'final', asagiri6: 'editor', self6: 'truth', shiori6: 'final', puzzle6: 'tension',
  conclusion6: 'trial', ending6: 'final',
};

const CH6_CAST = { offer6: ['asagiri'], explore6: ['kurogane', 'ren', 'towa'] };

CHAPTERS[6] = { title: '같은 하루', scenes: CH6_SCENES, state: CH6_STATE, fn: CH6_FN, bgm: CH6_BGM, cast: CH6_CAST };
