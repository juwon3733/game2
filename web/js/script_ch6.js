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
  ['puzzle6', '두 줄 시각표'],
  ['self6', '최종 심문 2: 레이'],
  ['shiori6', '시오리'],
  ['conclusion6', '결론: 같은 하루'],
  ['ending6', '엔딩'],
];

const C6A = ['AF', '6Y3', '6Y4']; // 5장에서 얻은 그날의 컷은 종장에도 가져온다
const C6B = [...C6A, 'R1', 'S1', 'R2', 'S2', 'R3', 'S3', 'R4', 'R5', 'S4', 'S5', 'S6', 'S7', 'RF'];
const C6C = [...C6B, 'R6', 'R7', 'S8', 'R8', 'AC']; // 자기 심문에서 채워지는 빈칸들
const W6A = ['p_shiori', 'p_kurogane', 'pl_lighthouse', 'a_runaway'];
const W6B = [...W6A, 'pl_bench', 'p_nishi', 'th_backpage', 'a_draw'];
const W6P = [...W6B, 'th_lighter', 'a_runback'];
const W6C = [...W6P, 'a_handover'];
const I6 = ['lighter', 'manuscript', 'petition'];
const CH6_STATE = {
  offer6: {}, explore6: { cuts: C6A, words: W6A },
  asagiri6: { cuts: C6B, items: I6, words: W6B }, puzzle6: { cuts: C6B, items: I6, words: [...W6B, 'th_lighter'] },
  self6: { cuts: C6B, items: I6, words: W6P }, shiori6: { cuts: C6C, items: I6, words: W6C },
  conclusion6: { cuts: C6C, items: I6, words: W6C }, ending6: { cuts: C6C, items: I6, words: W6C },
};

const marginCount = () => MARGIN_FLAGS.filter((f) => G.flags[f]).length;

// ---------- 장면 ----------

async function sceneOffer6() {
  await FX.title('FINAL', '같은 하루', '8월 31일 · 곶 끝 등대 도서관 터', [['shiori', 'normal'], ['rei', 'serious']]);
  bg('office');
  FX.mood('dust');
  await say('', '8월 31일 아침. 문에 「해체」 종이가 붙은 잔상과 사무실. 책상 위에 커피 한 잔. 단 커피다.');
  show('asagiri', 'normal', 'center');
  await say('asagiri', '좋은 아침, 레이.');
  await say('asagiri', '어젯밤 한 말, 진심이야. 이번엔 깨끗하게 지워 줄게. 시오리도 이제 놓아주렴.', 'normal');
  await say('asagiri', '대신 편집국 일에선 손 떼. 대답은 오늘 밤까지.', 'cold');
  hide('asagiri');
  await say('', '아사기리가 나가고 커피잔만 남았다. 6년 동안 매일 레이 앞에 놓이던 잔.');
  show('rei', 'serious', 'left');
  await say('rei', '(어젯밤엔 이 잔에서 고친 흔적만 봤어. 내민 사람 쪽은 안 읽었지.)', 'serious');
  await gainCut('AF');
  show('koharu', 'worried', 'right');
  await say('koharu', '선배, 대답 아직 안 했죠? 아, 다행이다.', 'worried');
  await say('rei', '등대 가자. 아직 안 읽은 게 남았어.', 'serious');
  gainWord('p_shiori'); gainWord('p_kurogane'); gainWord('pl_lighthouse'); gainWord('a_runaway');
  clearChars();
}

async function sceneExplore6() {
  bg('lighthouse');
  bgm('final');
  await banner('곶 끝', '등대 도서관 터 · 8월 31일 저녁', 1600);
  await say('', '반쯤 무너진 등대 도서관. 녹슨 철망이 건물을 한 바퀴 두르고 있다.');
  show('kurogane', 'sad', 'center');
  await say('kurogane', '직무 정지든 뭐든. 오늘은 간다.', 'sad');
  show('ren', 'normal', 'left');
  await say('ren', '내가 손댄 건 처음 한 번이야. 그 뒤론 편집장이 직접 쥐고 있었지. 나는 근처에도 못 오게 하고.', 'normal');
  show('towa', 'serious', 'right');
  await say('towa', '드론 띄웠어. …나도 볼게.');
  clearChars();
  const req = ['seat', 'lastpage', 'form', 'box', 'hairpin', 'stairs', 'lighter', 'gate', 'bench', 'flowers'];
  let got = 0;
  const tick = () => { got++; goal(`그날 밤의 잔상 ${got}/${req.length}`); if (got === req.length) EX.end(); };
  goal(`그날 밤의 잔상 0/${req.length}`);
  await explore('lighthouse', {
    start: [16, 9], required: req,
    on: {
      seat: async () => {
        await say('', '2층 열람석. 그을린 책상에 펜으로 눌러 쓴 자국이 깊다. 폐관 뒤에도 사서가 두 사람한테만 내주던 자리.');
        await gainCut('R1'); await gainCut('S1'); tick();
      },
      form: async () => {
        await say('', '타다 만 만화 콘테스트 응모 서류. 「그림」 칸에 시노노메 레이. 「글」 칸은 볼펜으로 죽 그어져 있다.');
        await gainCut('R2'); await gainCut('S2'); tick();
      },
      stairs: async () => {
        await say('', '나선 계단. 그날 뛰어 내려온 계단이다. 레이의 발이 첫 단 앞에서 멈춘다.');
        await gainCut('R3'); tick();
      },
      lastpage: async () => {
        await say('', '바닥에 원고지 귀퉁이. 마지막 장에서 떨어져 나온 것. 아무것도 안 그려져 있다.');
        await gainCut('S3'); tick();
      },
      bench: async () => {
        await say('', '곶 끝 벤치. 항구 쪽 등대 불빛이 한 바퀴 돌 때마다 바다 한쪽이 하얘진다.');
        gainWord('pl_bench');
        await gainCut('R4'); tick();
      },
      gate: async () => {
        await say('', '도서관 문. 경첩만 남았다. 옆 게시판에 빛바랜 전단, 그 위에 덧붙인 새 종이.');
        await gainItem('petition');
        await say('kurogane', '불 난 뒤로 봉쇄. 보존회랑 하쿠요가 땅 갖고 소송 중이라 철거도 못 했다.', 'sad');
        await say('', '전단 속 등대 그림. 펜선이 낯익다. 레이가 그림 귀퉁이를 엄지로 문지른다.');
        await gainCut('R5'); tick();
      },
      lighter: async () => {
        await say('', '1층 서고 바닥. 잿더미 속에 은색 라이터가 녹아 붙어 있다.');
        await gainItem('lighter');
        await say('kurogane', '「H」 각인. 하쿠요 창립 기념품이다. 간부들만 받았지. 감식은 배전반만 보고 하루 만에 「누전」으로 닫았다. 서고 잿더미는 아무도 안 뒤졌고.', 'sad');
        await gainCut('S4');
        await say('rei', '(이 얼굴. 서장실에서 나오던 사람.)', 'serious');
        gainWord('p_nishi');
        await say('kurogane', '니시무라. 그땐 하쿠요 용지 담당이었다. 이 곶 사겠다고 매일 드나들었지.', 'sad');
        tick();
      },
      box: async () => {
        await say('', '2층 서가 아래 철제 상자. 불이 창가에서 멈춰서 겉만 그을렸다. 뚜껑을 비틀어 연다. 가장자리가 탄 원고 다발. 마지막 장 뒷면에 연필 그림.');
        await gainItem('manuscript');
        gainWord('th_backpage'); gainWord('a_draw');
        await gainCut('S5'); tick();
      },
      plaque: async () => {
        await say('', '1층 벽에 그을린 기증자 명판. 「바위산 화재로 떠난 남편과 딸을 기억하며 — 그림책 200권」. 12년 전 날짜. 이름 칸만 타서 안 읽힌다.');
        await say('rei', '(시립 도서관 그림책에 찍혀 있던 도장. 같은 날짜야.)', 'serious');
      },
      flowers: async () => {
        await say('', '철망 앞에 시든 국화 한 다발. 작년 거다. 리본도 쪽지도 없다.');
        await say('kurogane', '난 해마다 9월 1일 아침에 온다. 꽃이 늘 먼저 와 있더군. 다섯 해 동안 한 번도 안 빠지고.', 'sad');
        await say('', '꽃대를 쥔다. 손바닥에 꼭 맞는다.');
        await gainCut('RF');
        await gainItem('receipts');
        tick();
      },
      fence: async () => {
        await say('', '철망 문 자물쇠. 열쇠 구멍까지 녹이 꽉 찼다. 몇 년째 아무도 안 연 문이다.');
      },
      hairpin: async () => {
        await say('', '계단참 틈에 뭔가 끼어 반짝인다. 책갈피 모양 머리핀.');
        FX.ghost(1500);
        await gainCut('S6'); await gainCut('S7'); tick();
      },
    },
  });
  goal('');
}

async function sceneAsagiri6() {
  bg('lighthouse');
  await say('', '해가 진다. 도서관 문 앞에 아사기리가 와 있다.');
  show('asagiri', 'cold', 'left');
  await say('asagiri', '결국 왔구나. 그럼 내 쪽도 읽어 보렴.', 'cold');
  await runTrial('asagiri6');
  clearChars();
}

async function sceneSelf6() {
  bg('lighthouse_in');
  await say('', '불탄 2층. 레이가 그날 앉던 자리에 앉는다.');
  show('towa', 'serious', 'right');
  await say('towa', '레이. 네 증언 띄운다. 비어 있는 칸 앞에 세워서.');
  hide('towa');
  await runTrial('self6');
  clearChars();
}

async function sceneShiori6() {
  bg('lighthouse_in');
  FX.ghost(4000);
  FX.mood('ghost');
  show('shiori', 'smile', 'center');
  await say('', '맞은편 자리에 시오리가 앉아 있다. 그날 입었던 교복.');
  await say('shiori', '오래 걸렸네, 레이.', 'smile');
  show('rei', 'crying', 'left');
  await say('rei', '미안. 네 이름, 내가 그었어.', 'crying');
  await say('shiori', '알아. 그래도 돌아왔잖아. 연기 속으로.', 'smile');
  await say('rei', '상자에 넣고 나서는? 계단은 어떻게 됐어.', 'crying');
  await say('shiori', '몰라. 넌 거기 없었잖아.', 'normal');
  await say('rei', '…너 처음부터 내가 본 것만 가리켰지. 칸막이도, 스케치북도, 부두도.', 'serious');
  await say('shiori', '응. 난 네가 지운 칸이니까.', 'smile');
  await say('', '시오리가 책상 위 원고의 마지막 장을 손끝으로 두드린다. 백지.');
  await say('shiori', '이건 나도 몰라. 아직 아무도 안 그린 칸이야.', 'normal');
  FX.mood(null);
  hide('shiori');
  clearChars();
}

async function scenePuzzle6() {
  bg('lighthouse_in');
  show('rei', 'serious', 'left');
  show('kurogane', 'sad', 'right');
  await say('kurogane', '사무실 선반 맨 위 상자 있지. 「6년 전 / 등대」. 현장에서 내가 몰래 빼 둔 거다.', 'sad');
  await say('kurogane', '네가 열 수 있을 때까지 두려고 했다. 코하루는 첫날부터 그 상자만 쳐다보더군.', 'sad');
  await say('rei', '열 수 있을 것 같아요. 이제.', 'serious');
  hide('kurogane');
  await say('rei', '어젯밤엔 소타 씨 쪽에서 읽었어요. 오늘은 두 줄로 놓을게요. 위엔 저, 아래엔 시오리.', 'serious');
  clearChars();
  // 3장 시각표와 규칙이 달라서 종장용 도움말을 따로 띄운다
  if (!G.flags.timeTut6) {
    G.flags.timeTut6 = true; G.flags.timeTut = true;
    await sayAll([
      ['tip', '[[두 줄 시각표]]: 위는 레이, 아래는 시오리. 같은 높이가 같은 순간이다.'],
      ['tip', '누구 줄인지는 컷 머리 색으로 정해진다. 시각은 컷 속에 시계가 보이는 칸에만 적혀 있다. 나머지는 앞뒤에 무슨 일이 있었는지로 놓고, 컷이 없는 칸은 비워 둔다.'],
    ]);
    hideText();
  }
  await runTimeline('time6');
  show('rei', 'serious', 'left');
  await say('rei', '(8시 20분, 벤치에서 되돌아 뛴 칸. 내 줄은 거기서 끊겨.)', 'serious');
  gainWord('a_runback');
  await say('rei', '(그다음 두 칸엔 시오리 줄에만 내가 있어. 계단에 쓰러진 나, 순경 등에 업히는 나.)', 'serious');
  await say('rei', '(그리고 시오리 줄은 8시 28분에서 끝나. 날 넘긴 뒤 시오리가 어디 있었는지, 아무 칸도 없어.)', 'serious');
  show('towa', 'serious', 'right');
  await say('towa', '비어 있는 데 넷. 네 머릿속에만 남은 칸이야.');
  clearChars();
}

async function sceneConclusion6() {
  bg('lighthouse');
  await banner('결론', '같은 하루', 1300);
  show('kurogane', 'sad', 'center');
  await say('kurogane', '말해 봐라, 시노노메. 그날 밤.', 'sad');
  hide('kurogane');
  hideText();
  await runName({ title: '그날 밤', sub: '빈칸이 전부 맞아야 확정된다.', parts: NAME6_FINAL, threshold: 4 });
  // 시각표는 빈칸을 남긴 채 끝났다. 몽타주는 자기 심문으로 채운 16칸 전부를 시각 순서대로
  G.lastSolution = ['R1', 'S1', 'R2', 'S2', 'R3', 'S3', 'R4', 'S4', 'R5', 'S5', 'R6', 'S6', 'R7', 'S7', 'R8', 'S8'];
  await montage(G.lastSolution);
  for (let i = 0; i < CONCLUSION6.length; i++) {
    const q = CONCLUSION6[i];
    for (;;) {
      hideText();
      const c = await pickCut(`질문. ${q.q}`, '물증이나 컷으로 답한다.', { cancel: false, only: q.choices, items: true });
      if (q.answer.includes(c)) { sfx('correct'); break; }
      sfx('wrong'); quake(); G.stats.wrong++;
      await say('kurogane', '그걸로는 안 묶인다. 다시.', 'sad');
    }
  }
  show('kurogane', 'sad', 'center');
  await say('kurogane', '강력계에 넘긴다. 내 이름 말고 네 보고서로. 정지 중인 놈 말은 안 들어 줄 테니까.', 'sad');
  hide('kurogane');
  show('ren', 'normal', 'right');
  await say('ren', '증언할게. 법정에서, 안대 벗고.', 'normal');
  hide('ren');
  show('asagiri', 'sad', 'right');
  bgm('chrysanthemum', 2);
  await say('', '밤. 철망 앞에 아사기리가 국화 한 다발을 들고 서 있다.');
  await say('asagiri', '올해 거야. 네가 꽃집에 안 들렀길래 내가 사 왔어.', 'sad');
  await say('asagiri', '여섯 번 다 같은 대답이었지. 일곱 번째로 물을게.', 'sad');
  await say('asagiri', '다시 지워 줄까?', 'sad');
  hideText();
  const c = await choice(['"…다시 지워 주세요."', '"아니요. 올해는 제가 둘게요. 꽃도, 그날도."'], '최종 선택');
  if (c === 0) G.flags.ending = 'edit';
  else {
    G.flags.ending = marginCount() >= MARGIN_FLAGS.length ? 'margin' : 'truth';
    await say('asagiri', '…그래.', 'sad');
    await say('', '아사기리가 국화를 내민다. 레이가 받는다. 꽃잎이 젖어 있다.');
    await say('rei', '아사기리 씨. 그 커피잔에서 읽은 크레용 그림, 얼굴까지 남아 있었어요.', 'normal');
    await say('', '레이가 수첩에서 컷 한 장을 꺼낸다. 냉장고에 붙은 세 사람. 아사기리는 한참 보다가 제일 작은 얼굴을 손끝으로 짚는다.');
    await say('asagiri', '이렇게 웃었구나.', 'sad');
    await say('asagiri', '내일 커피는 네가 골라.', 'sad');
  }
  clearChars();
}

// 진실·여백 엔딩 공통 에필로그: 인물을 한 줄씩 나열하지 않고, 하루를 세 장면으로 묶는다
async function epilogueMontage() {
  bgm('epilogue');
  // 낮: 병원
  bg('hospital');
  await say('', '9월 첫 주. 병원 4층 휴게실 앞. 코하루가 커피 두 잔을 들고 멈춰 선다.');
  await say('', '안에서 키보드 소리. 한 소절이 틀리고, 같은 소절이 다시 나온다. 이번엔 맞게. 레이는 문을 열지 않고 돌아선다.');
  // 저녁: 상점가
  bg('arcade');
  await say('', '해 질 무렵 상점가. 양과점 셔터 앞에서 리본 색이 다른 둘이 스케치북 한 권을 같이 들여다본다. 크레센트 포스터 귀퉁이엔 연필 글씨. 「핀 조명 하나」.');
  await say('koharu', '다들 잘 지내네요, 선배.', 'happy');
  await say('rei', '응.', 'normal');
  await say('', '돌아오는 길. 카페 「여백」 문에 손글씨 쪽지. 「잠시 휴업」.');
  // 밤: 사무실
  bg('office');
  await say('', '사무실 문의 「해체」 종이는 떼어졌다. 텔레비전에 법원 앞이 잠깐 비친다. 안대를 벗은 얼굴.');
  await say('', '쿠로가네가 담요를 던져 준다. 걷어 올린 소매 아래로 손목시계 초침이 돌아간다.');
  await say('towa', '…나 고양이 아니야.');
}

// 여백 엔딩: 1~5장에서 말 대신 건넨 것들을 한 번씩 떠올린다
const MARGIN_RECALL = [
  ['yohaku1', '컷 속 선생님 팔을 보고, 머리핀을 다시 꽂던 히마리.'],
  ['yohaku2', '수첩의 「앙코르 — 루루 솔로」를 손가락으로 따라 쓰던 루루.'],
  ['sketch3', '스케치북을 넘기다 「매일 고마워」에서 손이 멈춘 나기.'],
  ['rescueShown', '연기 속으로 뛰어드는 엄마 등을 보고, 붕대 감은 손을 잡던 하야카.'],
  ['badgeBack', '그을린 배지를 레이 손바닥에 도로 얹어 주던 코하루.'],
];

async function sceneEnding6() {
  const end = G.flags.ending || 'truth';
  if (end === 'edit') {
    bg('lighthouse');
    bgm('chrysanthemum');
    show('asagiri', 'sad', 'center');
    await say('asagiri', '그래. 일곱 번째네.', 'sad');
    show('koharu', 'crying', 'right');
    await say('koharu', '선배, 그거 지우면… 오빠가 선배 업고 나온 것도 없어져요.', 'crying');
    await say('koharu', '오빠가 마지막으로 한 일인데. 선배가 그것도 모르는 채로 옆에 있는 거, 저는… 못 해요.', 'crying');
    hide('koharu');
    hideText();
    await FX.erase(2600);
    await fade(true, 900);
    FX.eraseEnd();
    clearChars();
    bg('office');
    await fade(false, 900);
    await say('', '9월 1일 아침. 사무실 소파에서 레이가 눈을 뜬다. 책상 위 커피에서 김이 오른다.');
    show('shiori', 'normal', 'right');
    await say('', '창가에 교복 입은 여자애가 서 있다. 아무 말도 없다.');
    hide('shiori');
    await say('', '신문 귀퉁이. 「하쿠요 상무 니시무라, 6년 전 등대 도서관 방화 혐의로 구속」. 레이는 그 이름에서 잠깐 멈춘다. 이번 주에 들은 것 같은데, 어디서였는지 모르겠다. 신문을 접는다.');
    await say('', '맞은편 책상은 비어 있다. 쪽지 한 장. 「선배, 잘 지내요.」');
    await say('', '둥근 글씨. 레이는 두 번 읽고 쪽지를 내려놓는다. 커피를 마신다. 달다.');
    hideText();
    await banner('편집 엔딩', '「아무 일도 없었던 하루」', 2600);
  } else {
    bg('lighthouse_dawn');
    bgm('dawn');
    await say('', '새벽, 곶 끝. 차 라디오에서 뉴스가 흘러나온다. 하쿠요 본사 압수 수색, 니시무라 상무 연행.');
    await say('', '해 뜰 무렵, 아사기리가 제 발로 경찰서에 갔다는 연락이 온다.');
    show('rei', 'normal', 'left');
    await say('', '레이가 철망 앞에 국화를 내려놓는다. 이번엔 휴대폰을 꺼내지 않는다.');
    show('koharu', 'normal', 'right');
    await say('', '코하루의 가방에서 수첩이 떨어져 펼쳐진다. 첫 장, 8월 24일. 둥근 글씨.');
    await say('', '「오빠가 업고 나온 사람. 시노노메 레이. 잔상과.」');
    await say('koharu', '아, 그, 그거… 첫날 쓴 거예요.', 'worried');
    await say('rei', '처음부터 알았어?', 'serious');
    await say('koharu', '오빠 마지막 무전 녹음에 있었어요. 「고등학생 한 명 업고 나갑니다, 이름은 시노노메.」 보고서엔 없는 이름이고요. 만나면 미워질 줄 알았는데… 선배가 커피 캔 들고 졸고 있더라고요.', 'normal');
    await say('koharu', '그래서 그냥 옆에 있었어요. 선배가 먼저 기억해 낼 때까지는 말 안 하려고요.', 'happy');
    await say('', '레이가 수첩을 주워 흙을 털고, 첫 장을 펼친 채 코하루에게 돌려준다.');
    clearChars();
    if (end === 'margin') {
      show('rei', 'serious', 'left');
      await say('', '원고 마지막 장. 칸 하나가 비어 있다.');
      await gainCut('Y6');
      const art = await cg('cg_margin');
      await say('', '레이가 6년 만에 펜을 쥔다. 종이에 대기 전에 손이 잠깐 멈춘다.');
      for (const [f, l] of MARGIN_RECALL) if (G.flags[f]) await say('', l);
      await say('', '검지 굳은살이 펜대에 맞는다. 빈 칸에 열람석에 마주 앉은 둘을 그린다. 말풍선도 하나.');
      if (art) cgEnd();
      FX.ghost(3000);
      show('shiori', 'smile', 'right');
      await say('shiori', '「레이, 다음 칸은 네가 그려.」', 'smile');
      await say('rei', '응. 그릴게.', 'crying');
      await say('shiori', '박수 소리도 그려 줘.', 'smile');
      hide('shiori');
      await say('', '시오리가 손을 한 번 흔든다. 그리고 없다.');
      clearChars();
    } else {
      FX.ghost(3000);
      const art = await cg('cg_farewell');
      if (!art) show('shiori', 'smile', 'center');
      await say('', '등대 앞에 시오리가 서 있다.');
      await say('shiori', '고마워, 레이.', 'smile');
      if (art) cgEnd(); else hide('shiori');
      await say('', '잔상이 아침 볕에 흩어진다.');
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
      await say('koharu', '지, 진짜요? 네!', 'happy');
      if ((G.flags.bond || 0) >= 3) await say('koharu', '그럼 모레도 제가 할게요. 글피도요.', 'happy');
      clearChars();
    }
    hideText();
    await banner(end === 'margin' ? '여백 엔딩' : '진실 엔딩', end === 'margin' ? '「다음 칸」' : '「같은 하루」', 2600);
  }
  hideText();
  await banner('같은 하루, 다른 칸', '— 끝 —', 3000);
  await showRank('종장 「같은 하루」'); // 평가를 먼저, 크레딧으로 끝낸다
  await credits(G.flags.ending || 'truth');
  if (G.flags.ending === 'truth') await say('tip', `여백 조건 ${marginCount()} / ${MARGIN_FLAGS.length}. 1~5장 끝의 감정 선택에서 말 대신 컷·물건을 건네는 [[세 번째 보기]]를 모두 고르면 다른 결말이 열린다.`);
  hideText();
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
