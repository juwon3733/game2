// 5장 「편집자」 진행 스크립트. 기획: docs/12_story_plan.md §3 5장

Object.assign(MAPS, {
  koharuroom: {
    img: optionalImg(ASSET.map('koharuroom')),
    label: '코하루의 자취방',
    hallWallRow: -1,
    rows: [
      '##########################',
      '#XXXXXXWWWWWWWWWWWWWXXXXX#',
      '#XXXXXX,,,,,,,,,,,,,XXXXX#',
      '#XXXXXX,,,,,,,,,,,,,XXXXX#',
      '#XXXXXX,,,,,,,,,,,,,XXXXX#',
      '#XXXXXX,,,,,,,,,,,,,XXXXX#',
      '#XXXXXX,,,,,,,,,,,,,XXXXX#',
      '#XXXXXX,,,,,,,,,,,,,XXXXX#',
      '#XXXXXX,,,,,,,,,,,,,XXXXX#',
      '#XXXXXX,,,,,,,,,,,,,XXXXX#',
      '#XXXXXXWWWWWDWWWWWWWXXXXX#',
      '#XXXXXX.............XXXXX#',
      '##########################',
    ],
    objects: [
      { id: 'desk', x: 8, y: 2, w: 2, solid: true, label: '책상' },
      { id: 'frame', x: 12, y: 1, label: '벽의 사진 액자' },
      { id: 'laptop', x: 16, y: 3, solid: true, label: '켜진 노트북' },
      { id: 'bed', x: 16, y: 7, w: 2, h: 2, solid: true, label: '정리된 침대' },
      { id: 'stickers', x: 9, y: 6, label: '바닥에 떨어진 스티커 수첩', walkable: true },
      { id: 'door', x: 12, y: 10, label: '현관문' },
    ],
  },
});

const CH5_SCENES = [
  ['office5', '사라진 날 (8월 30일 아침)'],
  ['explore5a', '탐색: 코하루의 자취방'],
  ['route5', '코하루가 간 길'],
  ['restore5', '원본 복원'],
  ['tanabe', '심문 1: 하쿠요 경비원'],
  ['puzzle5a', '컷 정리: 코하루의 길'],
  ['accuse5', '중간 보고: 코하루를 데려간 사람'],
  ['warehouse5', '항구 끝 폐창고'],
  ['ren', '심문 2: 렌 — 편집 대결'],
  ['kurogane5', '멈춘 시계'],
  ['puzzle5b', '최종 재구성 (오늘과 6년 전)'],
  ['conclusion5', '결론: 폐창고'],
  ['epilogue5', '에필로그: 카페 「여백」'],
];

const C5A = ['5Ae', '6Y1'];
const C5B = [...C5A, '5Be', '5Ce', '5Ee'];
const C5C = [...C5B, '5A', '5B', '5C', '5E'];
const C5D = [...C5C, '5De', '5D', '6Y2', '6Y3'];
const C5E = [...C5D, '5F', '6Y5', '6Y6'];
const C5F = [...C5E, '6Y4'];
const W5A = ['p_ren', 'p_sota'];
const W5B = [...W5A, 'pl_busstop', 'a_drag', 'p_tanabe'];
const W5C = [...W5B, 'p_koharu', 'a_edit', 'a_walk', 'pl_warehouse'];
const W5D = [...W5C, 'p_rei', 'a_rescue', 'a_return'];
const CH5_STATE = {
  office5: {}, explore5a: { words: W5A }, route5: { cuts: C5A, items: ['history'], words: W5A },
  restore5: { cuts: C5B, items: ['history'], words: W5B }, tanabe: { cuts: C5C, items: ['history'], words: [...W5B, 'p_koharu', 'a_edit'] },
  puzzle5a: { cuts: C5C, items: ['history'], words: W5C }, accuse5: { cuts: C5C, items: ['history'], words: W5C },
  warehouse5: { cuts: C5C, items: ['history'], words: W5C }, ren: { cuts: C5D, items: ['history', 'badge'], words: W5C },
  kurogane5: { cuts: C5E, items: ['history', 'badge'], words: W5C }, puzzle5b: { cuts: C5F, items: ['history', 'badge'], words: W5D },
  conclusion5: { cuts: C5F, items: ['history', 'badge'], words: W5D }, epilogue5: { cuts: C5F, items: ['history', 'badge'], words: W5D },
};

// ---------- 장면 ----------

async function sceneOffice5() {
  await FX.title('CHAPTER 5', '편집자', '8월 30일 · 코하루가 사라진 날', [['koharu', 'happy'], ['ren', 'smile']]);
  bg('office');
  FX.mood('dust');
  await say('', '8월 30일 아침. 잔상과 사무실. 문에 「해체 — 출입 금지」 종이가 붙어 있다. 레이는 그걸 떼어 내고 들어간다.');
  await say('', '코하루의 책상. 스티커 붙은 수첩이 없다. 머그컵이 말라 있다.');
  show('towa', 'serious', 'center');
  await say('towa', '코하루 휴대폰, 오늘 오후 6시에 항구 쪽에서 꺼졌어.');
  await say('towa', '근데 레이. 이상해. 코하루가 지나간 길에 남은 잔상이… 전부 너무 깔끔해.');
  await say('rei', '…….');
  show('kurogane', 'sad', 'right');
  await say('kurogane', '(전화) 나는 직무 정지라 움직일 수가 없다. …시노노메. 그 애를 찾아라.');
  await say('kurogane', '(전화) 흰 코트를 조심해. 렌이라는 이름이다.');
  gainWord('p_ren');
  clearChars();
}

async function sceneExplore5a() {
  bg('koharu_room');
  await banner('코하루의 자취방', '8월 30일 오전', 1400);
  await say('', '항구가 내려다보이는 원룸. 현관문 손잡이가 망가져 있다.');
  const req = ['desk', 'frame', 'laptop'];
  let got = 0;
  const tick = () => { got++; goal(`코하루의 방을 살펴라. (${got}/3)`); if (got === 3) EX.end(); };
  goal('코하루의 방을 살펴라. (0/3)');
  await explore('koharuroom', {
    start: [12, 8], required: req,
    on: {
      desk: async () => {
        await say('', '책상. 뒤집혀 있던 걸 누가 세워 놓은 것 같다. 서랍이 다 열려 있다.');
        await say('rei', '(…누가 쳐들어왔어. 그렇게 보이는데… 감정이 이상하게 차가워.)', 'serious');
        await gainCut('5Ae'); tick();
      },
      frame: async () => {
        await say('', '벽의 액자. 경찰 제복을 입은 청년과 어린 코하루. 「오빠랑」.');
        gainWord('p_sota');
        await gainCut('6Y1'); tick();
      },
      laptop: async () => {
        await say('', '켜진 채인 노트북. 검색 기록이 그대로 남아 있다.');
        await gainItem('history'); tick();
      },
      bed: async () => { await say('', '침대가 반듯하게 정리되어 있다. 이불 모서리까지.'); },
      stickers: async () => { await say('', '스티커 수첩의 마지막 장. 「선배 커피 → 단 거!」. 귀퉁이에 작은 하트.'); },
      door: async () => { await say('', '현관문. 손잡이가 망가져 있다. 그런데 문틀엔 긁힌 자국이 하나도 없다.'); },
    },
  });
  goal('');
}

async function sceneRoute5() {
  bg('library');
  await say('', '시립 도서관 신문 열람실. 사서가 말한다. 「그 아가씨, 아침에 6년 전 신문을 찾았어요.」');
  await gainCut('5Be');
  bg('busstop');
  await say('', '하쿠요 본사 앞 버스정류장. 벤치 위에 코하루의 별 참 하나가 떨어져 있다.');
  gainWord('pl_busstop');
  await gainCut('5Ce');
  gainWord('a_drag');
  await say('', '정문 경비실의 경비원이 모자를 벗어 땀을 닦는다. 레이는 그 모자를 잠깐 빌린다.');
  gainWord('p_tanabe');
  await gainCut('5Ee');
  show('rei', 'serious', 'left');
  await say('rei', '…전부 「끌려가는」 그림이야. 근데 전부 손끝이 차가워.', 'serious');
  clearChars();
}

async function sceneRestore5() {
  bg('office');
  show('towa', 'serious', 'center');
  await say('towa', '레이. 이건 3장 미래 컷이랑 같은 솜씨야. 덧칠한 층이 있어.');
  await say('towa', '[[이음매를 짚어서 긁어내.]] 밑에 원본이 남아 있을 거야.');
  hide('towa');
  hideText();
  await runRestore(['5Ae', '5Be', '5Ce', '5Ee']);
  gainWord('p_koharu'); gainWord('a_edit');
  show('rei', 'surprised', 'left');
  await say('rei', '…「지금 갈게요」. 웃고 있어.', 'surprised');
  show('towa', 'serious', 'right');
  await say('towa', '…코하루, 자기 발로 갔어.');
  clearChars();
}

async function sceneTanabe() {
  bg('busstop');
  meet('tanabe', 'left', 'normal');
  await say('tanabe', '아까 그 아가씨요? 네, 기억해요. 흰 코트가 끌고 갔어요. …그랬던 것 같아요.', 'confused');
  await runTrial('tanabe');
  clearChars();
}

async function scenePuzzle5a() {
  await runPuzzle('page5a');
}

async function sceneAccuse5() {
  bg('office');
  await banner('8월 30일 오후 5시', '아무도 없는 잔상과', 1300);
  show('towa', 'serious', 'center');
  await say('towa', '쿠로가네는 못 움직여. 강력계는 "편집국이 납치했다"는 그림을 믿을 거야. 그렇게 그려져 있으니까.');
  await say('towa', '네가 보고서를 써. 코하루를 거기 데려간 게 누군지.');
  clearChars();
  hideText();
  const r = await runName({
    title: '중간 보고 — 코하루를 데려간 사람', sub: '틀린 채로 보고하면 그 이름이 경찰에 퍼진다.',
    parts: NAME5_MID, threshold: 2, report: true, reportLabel: '이대로 보고한다',
  });
  const who = r.picks[1];
  G.flags.accused5 = who;
  show('towa', 'serious', 'center');
  if (r.ok) {
    G.stats.accuse = true;
    await say('towa', '…코하루 자신. 그래. 편집국은 레이 너를 부르려고 그림만 고친 거야.');
    await say('towa', '그럼 렌은 기다리고 있을 거야. 항구 끝 폐창고에서.');
  } else {
    G.stats.accuse = false;
    if (who === 'p_ren') {
      G.flags.renAccused = true;
      await say('towa', '…렌을 납치범으로 올렸어. 강력계가 움직이면 편집국이 경계할 거야.');
      FX.glitch(500);
      await say('towa', '창고 안 잔상이 더 단단해졌어. 렌이 더 많이 고쳐 놓을 거야.');
    } else {
      await say('towa', '…그건 그림에 속은 거야. 그래도 가야 해. 항구 끝 폐창고.');
    }
  }
  clearChars();
}

async function sceneWarehouse5() {
  bg('warehouse');
  await banner('항구 끝 폐창고', '8월 30일 오후 6시 반', 1400);
  await say('', '녹슨 셔터가 반쯤 열려 있다. 문 앞 바닥에 끌린 자국.');
  await gainCut('5De');
  hideText();
  await runRestore(['5De'], '이음매');
  bg('warehouse_in');
  await say('', '창고 안. 낡은 테이블, 찻잔 둘. 그리고——');
  show('koharu', 'happy', 'right');
  await say('koharu', '선배!', 'happy');
  await say('koharu', '어, 어떻게 알았어요? 저 걱정 마시라고 문자도 보냈는데….', 'worried');
  show('ren', 'smile', 'left');
  await say('ren', '늦었네, 시노노메. 차가 식었어.', 'smile');
  await say('koharu', '선배, 렌 씨는 나쁜 사람 아니에요. 오빠 얘기를 해 줬어요. 근데… 거기서부터는 선배가 들어야 한대요.', 'worried');
  await say('', '코하루가 그을린 경찰 배지를 레이의 손에 쥐여 준다.');
  await gainItem('badge');
  await gainCut('6Y2');
  await gainCut('6Y3');
  await say('rei', '(…계단 아래. 연기. 그리고 이 아이의 손가락.)', 'serious');
  clearChars();
}

async function sceneRen() {
  bg('warehouse_in');
  show('ren', 'smile', 'left');
  await say('ren', '읽어 봐. 내가 그린 대로 읽을지, 네가 읽고 싶은 대로 읽을지.', 'smile');
  await runTrial('ren');
  bg('warehouse_in');
  show('ren', 'sad', 'left');
  await say('ren', '…넌 그날 시오리를 찾으러 되돌아갔어. 그리고 소타 순경이 널 업고 나왔지.', 'sad');
  await say('ren', '소타는 시오리를 데리러 [[다시 들어갔고]], 둘 다 나오지 못했어.', 'sad');
  gainWord('a_return');
  await say('ren', '난 그 밖에서 한쪽 눈을 잃었고. …그래서 지워 줬어. 네가 울면서 부탁하길래.', 'sad');
  show('koharu', 'crying', 'right');
  await say('koharu', '…오빠가 업고 나온 아이가, 선배였어요?', 'crying');
  await say('rei', '…….', 'serious');
  clearChars();
}

async function sceneKurogane5() {
  bg('warehouse_in');
  sfx('door');
  await say('', '창고 문이 열린다. 직무 정지 중인 쿠로가네가 막대사탕도 없이 서 있다.');
  show('kurogane', 'sad', 'right');
  await say('kurogane', '…다 들었냐.', 'sad');
  await say('', '쿠로가네가 손목시계를 풀어 레이에게 내민다. 8시 31분에 멈춘 시계.');
  await gainCut('6Y4');
  await say('kurogane', '그날 현장에 너도 있었다. 소타한테서 널 받아 안은 게 나다. 그때 시계가 멈췄어.');
  await say('kurogane', '잔상과는… 언젠가 그날을 제대로 읽어 줄 독자를 기다리려고 만든 거다. 그리고 너를 곁에 두려고.', 'sad');
  show('towa', 'serious', 'left');
  await say('towa', '…나도 말할게. 나, 원래 편집국에 있었어. 「이음매 감지」 시스템 만들던 엔지니어.');
  await say('towa', '편집을 막으려고 만든 건데, 편집을 더 감쪽같이 하는 데 쓰이더라. 그래서 나왔어.');
  await say('rei', '…그래서 고양이 아니라고 했구나.', 'normal');
  await say('towa', '…그건 상관없잖아.');
  clearChars();
}

async function scenePuzzle5b() {
  bg('warehouse_in');
  show('rei', 'serious', 'left');
  await say('rei', '…두 페이지. 오늘 코하루가 걸어온 길, 그리고 6년 전 그 밤.', 'serious');
  clearChars();
  await runPuzzle('page5b');
}

async function sceneConclusion5() {
  bg('warehouse_in');
  await banner('결론', '폐창고', 1300);
  show('kurogane', 'sad', 'center');
  await say('kurogane', '…네 네임으로 말해 봐라. 이번엔 강력계도 서장도 없다. 우리만 있어.', 'sad');
  hide('kurogane');
  hideText();
  await runName({ title: '오늘, 그리고 6년 전', sub: '모든 빈칸이 맞아야 확정할 수 있다.', parts: NAME5_FINAL, threshold: 4 });
  show('rei', 'serious', 'left');
  await say('rei', '…코하루는 혼자 걸어왔어요. 납치처럼 고친 건 렌. 나를 여기 부르려고.', 'serious');
  await say('rei', '6년 전, 소타 순경은 나를 업고 나왔고… 시오리를 데리러 다시 들어갔어요.', 'serious');
  hide('rei');
  bgm('truth');
  show('koharu', 'crying', 'right');
  await say('koharu', '…오빠, 마지막까지 오빠였네요.', 'crying');
  hideText();
  const c = await choice(['"…고마워. 소타 씨한테."', '"미안해. 나 때문에."', '(배지를 코하루의 손에 돌려준다)'], '코하루에게 뭐라고 할까?');
  if (c === 0) await say('koharu', '…네. 오빠한테 전할게요. 선배 지금 잘 지낸다고.', 'crying');
  if (c === 1) { show('koharu', 'worried', 'right'); await say('koharu', '선배 때문 아니에요. 오빠가 선택한 거예요. 그러니까 사과하지 마요.', 'worried'); }
  if (c === 2) { G.flags.badgeBack = true; await say('', '코하루가 배지를 두 손으로 감싼다. "…선배가 들고 있어요. 오빠도 그게 좋을 거예요."'); }
  clearChars();
}

async function sceneEpilogue5() {
  bg('warehouse');
  await say('', '밤. 창고 밖 부두. 바닷바람.');
  FX.ghost(3000);
  show('shiori', 'normal', 'center');
  await say('', '부두 끝에 교복 차림의 여자아이가 서 있다. 이번엔 사라지지 않는다.');
  await say('shiori', '레이.');
  await say('shiori', '이제 그날을 읽을 차례야.');
  hide('shiori');
  show('rei', 'surprised', 'left');
  await say('rei', '…시오리.', 'surprised');
  clearChars();
  bg('cafe_night');
  bgm('epilogue');
  await say('', '카페 「여백」. 문 닫을 시간이 지났는데 불이 켜져 있다.');
  show('asagiri', 'normal', 'center');
  await say('asagiri', '어서 와, 레이 짱. 오늘은 무슨 일이 있었어?');
  await say('', '아사기리가 단 커피를 내민다. 6년 동안 같은 잔, 같은 각도, 같은 김.');
  show('rei', 'serious', 'left');
  await say('rei', '(…이 커피잔. 한 번도 읽어 본 적이 없어.)', 'serious');
  await runTrial('asagiri5');
  bg('cafe_night');
  show('asagiri', 'cold', 'center');
  await say('asagiri', '편집국을 만든 건 나야. 렌도, 토와도, 내가 데려왔지.');
  await say('asagiri', '잊는 게 사람을 살린다고 믿었어. 나도 그렇게 살아남았으니까.', 'cold');
  bgm(null, 2);
  await say('', '아사기리가 커피잔을 내려놓는다.');
  await say('asagiri', '8월 31일이네.', 'cold');
  await say('asagiri', '…다시 잊게 해 줄까?', 'cold');
  hideText();
  await banner('5장 「편집자」 끝', '', 2200);
  await showRank('5장 「편집자」');
}

const CH5_FN = {
  office5: sceneOffice5, explore5a: sceneExplore5a, route5: sceneRoute5, restore5: sceneRestore5, tanabe: sceneTanabe,
  puzzle5a: scenePuzzle5a, accuse5: sceneAccuse5, warehouse5: sceneWarehouse5, ren: sceneRen, kurogane5: sceneKurogane5,
  puzzle5b: scenePuzzle5b, conclusion5: sceneConclusion5, epilogue5: sceneEpilogue5,
};

const CH5_BGM = {
  office5: 'tension', explore5a: 'explore', route5: 'explore', restore5: 'editor', tanabe: 'trial', puzzle5a: 'tension',
  accuse5: 'tension', warehouse5: 'editor', ren: 'editor', kurogane5: 'truth', puzzle5b: 'tension', conclusion5: 'trial',
  epilogue5: 'epilogue',
};

const CH5_CAST = { tanabe: ['tanabe'], warehouse5: ['koharu', 'ren'] };

CHAPTERS[5] = { title: '편집자', scenes: CH5_SCENES, state: CH5_STATE, fn: CH5_FN, bgm: CH5_BGM, cast: CH5_CAST };
