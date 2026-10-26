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
      { id: 'stairs', x: 7, y: 5, label: '2층으로 오르는 계단', walkable: true },
      { id: 'lighter', x: 4, y: 7, label: '1층 서고 바닥', walkable: true },
      { id: 'gate', x: 14, y: 8, label: '도서관 문' },
      { id: 'bench', x: 21, y: 4, w: 2, solid: true, label: '곶 끝 벤치' },
    ],
  },
});

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

const C6A = ['AF'];
const C6B = [...C6A, 'R1', 'S1', 'R2', 'S2', 'R3', 'S3', 'R4', 'R5', 'S4', 'S5', 'S6', 'S7'];
const C6C = [...C6B, 'R6', 'R7', 'R8'];
const C6D = [...C6C, 'S8'];
const W6A = ['p_shiori', 'p_kurogane', 'pl_lighthouse', 'a_runaway'];
const W6B = [...W6A, 'pl_bench', 'p_nishi', 'th_backpage', 'a_draw'];
const W6C = [...W6B, 'th_lighter', 'a_runback', 'a_handover'];
const I6 = ['lighter', 'manuscript'];
const CH6_STATE = {
  offer6: {}, explore6: { cuts: C6A, words: W6A },
  asagiri6: { cuts: C6B, items: I6, words: W6B }, self6: { cuts: C6B, items: I6, words: [...W6B, 'th_lighter', 'a_runback'] },
  shiori6: { cuts: C6C, items: I6, words: W6C }, puzzle6: { cuts: C6D, items: I6, words: W6C },
  conclusion6: { cuts: C6D, items: I6, words: W6C }, ending6: { cuts: C6D, items: I6, words: W6C },
};

const marginCount = () => MARGIN_FLAGS.filter((f) => G.flags[f]).length;

// ---------- 장면 ----------

async function sceneOffer6() {
  await FX.title('FINAL', '같은 하루', '8월 31일 · 곶 끝 등대 도서관 터', [['shiori', 'normal'], ['rei', 'serious']]);
  CHARACTERS.shiori.name = '시오리';
  bg('office');
  FX.mood('dust');
  await say('', '8월 31일 아침. 해체된 잔상과 사무실. 누군가 커피를 내려 두었다. 단 커피.');
  show('asagiri', 'normal', 'center');
  await say('asagiri', '좋은 아침, 레이.');
  await say('asagiri', '제안하러 왔어. 다시 잊게 해 줄게. 이번엔 완벽하게. 시오리도… 이제 그만 놓아주렴.', 'normal');
  await say('asagiri', '대가는 편집국 수사를 멈추는 것. 오늘 밤까지 대답해 줘.', 'cold');
  hide('asagiri');
  await say('', '아사기리가 나간 뒤, 책상 위에 그녀의 커피잔이 남아 있다. 6년 동안 레이 앞에 놓이던 그 잔.');
  show('rei', 'serious', 'left');
  await say('rei', '(…한 번도 읽어 본 적이 없어.)', 'serious');
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
  await say('', '바다를 향해 튀어나온 곶 끝. 반쯤 무너진 등대 모양의 도서관. 6년 동안 아무도 손대지 않았다.');
  show('kurogane', 'sad', 'center');
  await say('kurogane', '직무 정지지만, 오늘은 같이 간다.', 'sad');
  show('ren', 'normal', 'left');
  await say('ren', '편집국이 여기만은 못 지웠어. 너무 많은 사람이 너무 세게 기억해서.', 'normal');
  show('towa', 'serious', 'right');
  await say('towa', '드론 띄웠어. …나도 같이 읽을게.');
  clearChars();
  const req = ['seat', 'lastpage', 'form', 'box', 'hairpin', 'stairs', 'lighter', 'gate', 'bench'];
  let got = 0;
  const tick = () => { got++; goal(`그날 밤의 잔상을 모아라. (${got}/9)`); if (got === 9) EX.end(); };
  goal('그날 밤의 잔상을 모아라. (0/9)');
  await explore('lighthouse', {
    start: [16, 9], required: req,
    on: {
      seat: async () => {
        await say('', '2층 열람석. 그을린 책상에 펜 자국이 깊이 패어 있다. 두 사람이 마주 앉던 자리.');
        await gainCut('R1'); await gainCut('S1'); tick();
      },
      form: async () => {
        await say('', '타다 만 만화 콘테스트 응모 서류. 「그림」 칸에 시노노메 레이. 「글」 칸이 볼펜으로 그어져 있다.');
        await gainCut('R2'); await gainCut('S2'); tick();
      },
      stairs: async () => {
        await say('', '2층에서 내려가는 계단. 레이의 발이 저절로 멈춘다.');
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
        await say('', '도서관 문. 경첩만 남았다. 레이의 숨이 가빠진다.');
        await gainCut('R5'); tick();
      },
      lighter: async () => {
        await say('', '1층 서고 바닥. 잿더미 속에서 녹아 붙은 은색 라이터.');
        await gainItem('lighter');
        await gainCut('S4');
        await say('rei', '(이 얼굴. 서장실 소파에 앉아 있던 사람.)', 'serious');
        gainWord('p_nishi');
        tick();
      },
      box: async () => {
        await say('', '2층 서가 아래 철제 상자. 안에 반쯤 탄 원고 다발. 마지막 장 뒷면에 연필 그림.');
        await gainItem('manuscript');
        gainWord('th_backpage'); gainWord('a_draw');
        await gainCut('S5'); tick();
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
  await say('towa', '레이. 네 증언 페이지를 띄울게. 6년 동안 네가 믿어 온 순서 그대로.');
  hide('towa');
  await runTrial('self6');
  clearChars();
}

async function sceneShiori6() {
  bg('lighthouse_in');
  FX.ghost(4000);
  FX.mood('ghost');
  show('shiori', 'smile', 'center');
  await say('', '열람석 맞은편. 교복 차림의 여자아이가 앉아 있다. 6년 전 그대로.');
  await say('shiori', '오래 걸렸네, 레이.', 'smile');
  show('rei', 'crying', 'left');
  await say('rei', '미안. 그 칸, 내가 그었어. 네 이름.', 'crying');
  await say('shiori', '알아. 그래도 돌아왔잖아. 연기 속으로.', 'smile');
  await say('shiori', '마지막 한 칸은 내가 줄게. 내가 왜 다시 들어갔는지.', 'normal');
  await gainCut('S8');
  await say('shiori', '그 얼굴을 그린 장을 두고 나왔거든. 그게 없으면 아무도 그 사람을 못 찾으니까.', 'normal');
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
  await say('rei', '두 줄로. 나의 밤과, 시오리의 밤.', 'serious');
  clearChars();
  await runTimeline('time6');
}

async function sceneConclusion6() {
  bg('lighthouse');
  await banner('결론', '같은 하루', 1300);
  show('kurogane', 'sad', 'center');
  await say('kurogane', '읽어 봐라, 시노노메. 6년 전 그날을.', 'sad');
  hide('kurogane');
  hideText();
  await runName({ title: '6년 전 8월 31일', sub: '모든 빈칸이 맞아야 확정할 수 있다.', parts: NAME6_FINAL, threshold: 4 });
  await montage(G.lastSolution);
  for (let i = 0; i < CONCLUSION6.length; i++) {
    const q = CONCLUSION6[i];
    for (;;) {
      hideText();
      const c = await pickCut(`질문. ${q.q}`, '대답이 되는 물증이나 컷을 고르자.', { cancel: false, only: q.choices, items: true });
      if (q.answer.includes(c)) { sfx('correct'); break; }
      sfx('wrong'); quake(); G.stats.wrong++;
    }
  }
  show('rei', 'serious', 'left');
  await say('rei', '원고 뒷면의 얼굴. 녹은 라이터. 렌과 쿠로가네 반장의 증언. 그날 불을 지른 사람은 니시무라예요.', 'serious');
  show('ren', 'normal', 'right');
  await say('ren', '증언할게. 법정에서. 안대도 벗고.', 'normal');
  hide('ren');
  show('asagiri', 'normal', 'right');
  bgm(null, 2);
  await say('asagiri', '그래도 물을게, 레이.', 'normal');
  await say('asagiri', '다시 잊게 해 줄까? 아프지 않게. 시오리도, 소타 순경도, 오늘도.', 'normal');
  hideText();
  const c = await choice(['"…잊게 해 줘."', '"아니. 기억할게."'], '최종 선택');
  if (c === 0) G.flags.ending = 'edit';
  else G.flags.ending = marginCount() >= MARGIN_FLAGS.length ? 'margin' : 'truth';
  clearChars();
}

// 진실·여백 엔딩 공통 에필로그
async function epilogueMontage() {
  bg('cafe');
  bgm('epilogue');
  const lines = [
    '——병원. 깨어난 사에키 미츠루가 침대 옆 키보드로 서툴게 한 소절을 친다. 히마리가 음표 머리핀을 꽂고 따라 친다.',
    '——새 소속사. 아마네 루루의 데뷔곡 제목은 「앙코르」.',
    '——유키는 미대에, 나기는 토키와 양과점에. 둘은 각자 제 쪽에 리본을 매고 같은 날 집을 나선다.',
    '——사쿠라유 터. 겐조가 휠체어에서 손녀에게 보일러 닦는 법을 가르친다. 케이코의 붕대는 풀렸다.',
    '——법정. 렌이 안대를 벗고 증언대에 선다.',
    '——크레센트. 쿠라모치가 새 큐 시트 맨 위에 적는다. 「앙코르: 핀 조명 하나」.',
    '——아케이드. 비어 있던 점술 부스 자리에 두부집 할머니가 화분을 내놓았다.',
    '——잔상과 사무실. 담요를 두른 토와가 모니터 대신 소파에 앉아 있다. "…나 고양이 아니야."',
    '——쿠로가네의 손목시계가 다시 간다. 8시 31분에서, 오늘로.',
    '——카페 「여백」의 문에 손글씨 메모. 「잠시 휴업」.',
  ];
  for (const l of lines) await say('', l);
}

async function sceneEnding6() {
  const end = G.flags.ending || 'truth';
  if (end === 'edit') {
    bg('lighthouse');
    show('asagiri', 'normal', 'center');
    await say('asagiri', '그래. 이번엔 아프지 않게.', 'normal');
    hideText();
    await FX.erase(2600);
    await fade(true, 900);
    FX.eraseEnd();
    clearChars();
    bg('office');
    await fade(false, 900);
    await say('', '9월 1일 아침. 잔상과 사무실 소파에서 레이가 눈을 뜬다.');
    show('shiori', 'normal', 'right');
    await say('', '창가에 교복 차림의 여자아이가 서 있다. 더 이상 아무 말도 하지 않는다.');
    hide('shiori');
    await say('', '코하루의 책상은 비어 있다. 쪽지 한 장. 「선배, 잘 지내요.」');
    await say('rei', '…….');
    hideText();
    await banner('편집 엔딩', '「아무 일도 없었던 하루」', 2600);
  } else {
    bg('lighthouse_dawn');
    bgm('truth');
    await say('', '새벽. 곶 끝. 하쿠요 본사에 수색 영장이 집행되고, 니시무라가 연행되었다는 소식이 라디오로 흘러나온다.');
    await say('', '아사기리는 그날 아침 스스로 경찰서에 들어갔다.');
    if (end === 'margin') {
      show('rei', 'serious', 'left');
      await say('', '최종 페이지 끝에, 칸이 하나 더 남아 있다. 아무것도 그려지지 않은 칸.');
      await gainCut('Y6');
      const art = await cg('cg_margin');
      await say('', '레이가 6년 만에 펜을 쥔다. 오른손 검지의 굳은살이 펜대에 꼭 맞는다.');
      await say('', '빈 칸에, 열람석에 마주 앉은 두 아이를 그린다. 그리고 말풍선 하나.');
      if (art) cgEnd();
      FX.ghost(3000);
      show('shiori', 'smile', 'right');
      await say('shiori', '「레이, 다음 칸은 네가 그려.」', 'smile');
      await say('rei', '…응. 그릴게.', 'crying');
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
      bg('office');
      show('koharu', 'happy', 'right');
      show('rei', 'normal', 'left');
      await say('koharu', '선배! 원고 다 됐어요? 마감 오늘이에요!', 'happy');
      await say('rei', '글 칸에 이름 하나 더 써야 해.', 'normal');
      await say('', '응모 서류의 「글」 칸. 레이가 천천히 쓴다. 「아이자와 시오리」.');
      clearChars();
    }
    if (end === 'truth') {
      bg('office');
      show('koharu', 'happy', 'right');
      show('rei', 'normal', 'left');
      await say('', '9월 1일 아침. 잔상과 사무실 문에 붙어 있던 「해체」 종이가 없다.');
      await say('koharu', '선배, 오늘 커피 담당 저예요. 단 거죠?', 'happy');
      await say('rei', '응. 단 거.', 'normal');
      clearChars();
    }
    hideText();
    await banner(end === 'margin' ? '여백 엔딩' : '진실 엔딩', end === 'margin' ? '「다음 칸」' : '「같은 하루」', 2600);
  }
  await banner('같은 하루, 다른 칸', '— 끝 —', 3000);
  await credits(G.flags.ending || 'truth');
  await showRank('종장 「같은 하루」');
  CHARACTERS.shiori.name = '???';
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
