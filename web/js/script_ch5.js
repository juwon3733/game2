// 5장 「편집자」 진행 스크립트. 기획: docs/12_story_plan.md §3 5장

Object.assign(MAPS, {
  koharuroom: {
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
  ['harbor5', '방파제'],
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
  harbor5: { cuts: C5C, items: ['history'], words: W5C }, warehouse5: { cuts: C5C, items: ['history'], words: W5C }, ren: { cuts: C5D, items: ['history', 'badge'], words: W5C },
  kurogane5: { cuts: C5E, items: ['history', 'badge'], words: W5C }, puzzle5b: { cuts: C5F, items: ['history', 'badge'], words: W5D },
  conclusion5: { cuts: C5F, items: ['history', 'badge'], words: W5D }, epilogue5: { cuts: C5F, items: ['history', 'badge'], words: W5D },
};

// ---------- 장면 ----------

async function sceneOffice5() {
  CHARACTERS.ren.name = '렌';
  await FX.title('CHAPTER 5', '편집자', '8월 30일 · 코하루가 사라진 날', [['koharu', 'happy'], ['ren', 'smile']]);
  bg('office');
  FX.mood('dust');
  await say('', '8월 30일 아침. 잔상과 사무실. 문에 「해체 — 출입 금지」 종이가 붙어 있다. 레이는 그걸 떼어 내고 들어간다.');
  await say('', '코하루의 책상. 스티커 붙은 수첩이 없다. 머그컵이 말라 있다.');
  await say('', '모니터 모서리에 포스트잇. 「내일 아침 커피 담당 = 나!」 날짜는 어제.');
  show('rei', 'normal', 'left');
  await say('rei', '(…조용하네.)', 'normal');
  await say('', '선반 맨 위, 「6년 전 / 등대」 상자의 뚜껑이 비뚤게 덮여 있다.');
  hide('rei');
  show('towa', 'serious', 'center');
  await say('towa', '코하루 휴대폰, 아침엔 안 받더니 한낮부터는 아예 꺼져 있어.');
  await say('towa', '근데 이상해. 코하루가 지나간 길의 잔상이 하나같이 너무 깔끔해.');
  await say('kurogane', '(전화) 직무 정지다. 형사로는 못 움직여. 시노노메, 그 애를 찾아라.');
  await say('kurogane', '(전화) 흰 코트를 조심해. 렌이라는 이름이다.');
  gainWord('p_ren');
  await say('rei', '과장님. 선반 위 그 상자, 누가 열었어요.', 'normal');
  await say('kurogane', '(전화) ……그 상자 얘긴 전화로 하지 마라. 서에서도 하지 말고.');
  clearChars();
}

async function sceneExplore5a() {
  bg('koharu_room');
  await banner('코하루의 자취방', '8월 30일 오전', 1400);
  await say('', '항구가 내려다보이는 원룸.');
  const req = ['desk', 'frame', 'laptop'];
  let got = 0;
  const tick = () => { got++; goal(`코하루의 방을 살펴라. (${got}/3)`); if (got === 3) EX.end(); };
  goal('코하루의 방을 살펴라. (0/3)');
  await explore('koharuroom', {
    start: [12, 8], required: req,
    on: {
      desk: async () => {
        await say('', '책상. 뒤집혀 있던 걸 누가 세워 놓은 것 같다. 서랍이 다 열려 있다.');
        await say('rei', '(누가 쳐들어온 것처럼 보이는데. 잔상이 이상하게 차가워.)', 'serious');
        await gainCut('5Ae'); tick();
      },
      frame: async () => {
        await say('', '벽의 액자. 경찰 제복을 입은 청년과 어린 코하루. 「오빠랑」.');
        gainWord('p_sota');
        await gainCut('6Y1'); tick();
      },
      laptop: async () => {
        await say('', '켜진 채로 놓인 노트북. 검색 기록이 그대로 남아 있다.');
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
  await say('', '책상에 펼쳐져 있는 6년 전 9월 1일 자 지역 신문. 「등대 도서관 화재 — 여고생 1명·순경 1명 사망, 고등학생 1명 구조」.');
  show('rei', 'serious', 'left');
  await say('rei', '(이 기사. 한 번도 끝까지 읽은 적이 없어.)', 'serious');
  await say('', '열람실 구석 그림책 서가. 책등이 바랜 그림책마다 같은 도장이 찍혀 있다. 「기증 — 바위산 화재로 떠난 두 사람을 기억하며 · 카페 여백」. 날짜는 12년 전.');
  await say('rei', '(사장님은 이런 얘기를 한 번도 한 적이 없어.)', 'normal');
  hide('rei');
  await gainCut('5Be');
  bg('busstop');
  await say('', '하쿠요 본사 앞 버스정류장. 벤치에 코하루의 별 모양 참이 떨어져 있다.');
  gainWord('pl_busstop');
  await gainCut('5Ce');
  gainWord('a_drag');
  await say('', '정문 경비실. 경비원이 창을 가리킨다. 「점심때 그 아가씨, 이 창 앞에서 봤어요.」 레이는 경비원이 매일 내다보는 창틀에 손을 얹는다.');
  gainWord('p_tanabe');
  await gainCut('5Ee');
  show('rei', 'serious', 'left');
  await say('rei', '셋 다 코하루 곁에 누가 붙어 있어. 그런데 읽을 때마다 손끝이 차가워.', 'serious');
  clearChars();
}

async function sceneRestore5() {
  bg('office');
  show('towa', 'serious', 'center');
  await say('towa', '레이. 이건 아케이드 점술가의 미래 컷이랑 같은 솜씨야. 덧칠한 층이 있어.');
  await say('towa', '그 밑에 원본이 남아 있을 거야. 붙인 자리부터 벗겨 봐.');
  await say('tip', '편집된 컷의 [[이음매]]를 짚으면 원본이 드러난다.');
  hide('towa');
  hideText();
  await runRestore(['5Ae', '5Be', '5Ce', '5Ee']);
  gainWord('p_koharu'); gainWord('a_edit');
  show('towa', 'serious', 'center');
  await say('towa', '원본 넷. 경비원 기억도 같은 솜씨로 고쳐져 있을 거야. 마지막으로 코하루를 본 사람이니까.');
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
  await say('towa', '쿠로가네는 정지 중이라 공식으로는 못 움직여. 강력계는 "편집국이 납치했다"는 그림을 믿을 거야. 그렇게 그려져 있으니까.');
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
    await say('towa', '그래, 코하루 자신. 그림은 너를 부르려고 고쳐 놓은 거고.');
    await say('towa', '그럼 렌은 기다리고 있을 거야. 항구 끝 폐창고에서.');
  } else {
    G.stats.accuse = false;
    if (who === 'p_ren') {
      G.flags.renAccused = true;
      await say('towa', '렌을 납치범으로 올렸어. 강력계가 움직이면 편집국이 경계할 거야.');
      FX.glitch(500);
      await say('towa', '창고 안 잔상이 더 단단해졌어. 렌이 더 많이 고쳐 놓을 거야.');
    } else {
      await say('towa', '그건 그림에 속은 거야. 그래도 가야 해. 항구 끝 폐창고.');
    }
  }
  clearChars();
}

async function sceneHarbor5() {
  bg('pier');
  await say('', '항구 끝으로 가는 방파제. 해가 기운다. 레이의 휴대폰 화면에 고양이 귀 아바타가 떠 있다.');
  show('towa', 'serious', 'right');
  await say('towa', '레이. 하나만 미리 말해 둘게.');
  await say('towa', '렌은 나랑 같은 데서 일했어. 거짓말은 해도, 쓸데없는 거짓말은 안 하는 애야.');
  show('rei', 'serious', 'left');
  await say('rei', '같은 데?', 'serious');
  await say('towa', '다녀와서 말할게. 지금은 코하루부터.');
  hide('towa');
  await say('', '방파제 끝에서 항구 등대 불이 켜진다.');
  await say('rei', '(코하루는 왜 혼자 갔을까. 나한테 말하면 말릴 줄 알았겠지.)', 'serious');
  if ((G.flags.bond || 0) >= 2) await say('rei', '(…같이 열어 보자고 했던 상자. 혼자 열었구나.)', 'serious');
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
  await say('', '렌이 코트 주머니에서 하늘색 케이스의 휴대폰을 꺼내 테이블에 내려놓는다. 꺼진 화면.');
  await say('ren', '그 문자, 안 갔어. 방파제에서 보내려는 걸 내가 받아서 꺼 뒀거든. 편집국이 위치를 읽으니까.', 'normal');
  await say('koharu', '에엑?! 그럼 선배는 하루 종일….', 'worried');
  show('rei', 'serious', 'center');
  await say('rei', '방은.', 'serious');
  await say('ren', '그것도 나야. 고친 컷만 두면 너는 방부터 볼 테니까, 방도 그림에 맞춰 놨어. 새벽에 그 아이가 나간 뒤에. 열쇠는 우편함 밑에 있더라.', 'smile');
  await say('koharu', '제 책상 뒤집은 게 렌 씨였어요?!', 'worried');
  await say('rei', '(손잡이만 부서지고 문틀은 멀쩡했던 이유.)', 'serious');
  hide('rei');
  await say('koharu', '그, 그래도 렌 씨는 나쁜 사람 아니에요. 오후 내내 방파제에서 오빠 얘기를 해 줬어요. 근데 그다음은 선배가 직접 들어야 한대요.', 'worried');
  await say('koharu', '오빠는 순경이었어요. 맨날 막대사탕을 물고 다녔어요. 담배 끊는다고.', 'normal');
  await say('koharu', '그날도 주머니에 사탕이 두 개 있었대요. 하나는 저 주려고.', 'worried');
  await say('', '코하루가 그을린 경찰 배지를 레이의 손에 쥐여 준다.');
  await gainItem('badge');
  await gainCut('6Y2');
  await gainCut('6Y3');
  await say('rei', '(계단 아래, 연기 속. 소타 순경은 거기서 누구를 업었을까.)', 'serious');
  clearChars();
}

async function sceneRen() {
  bg('warehouse_in');
  show('ren', 'smile', 'left');
  await say('ren', '읽어 봐. 전부 내가 그린 거야.', 'smile');
  await runTrial('ren');
  bg('warehouse_in');
  show('ren', 'sad', 'left');
  await say('ren', '넌 그날 시오리를 찾으러 되돌아갔어. 그리고 소타 순경이 널 업고 나왔지.', 'sad');
  await say('ren', '소타는 시오리를 데리러 [[다시 들어갔고]], 둘 다 나오지 못했어.', 'sad');
  gainWord('a_return');
  await say('ren', '난 밖에서 한쪽 눈을 잃었고. …그래서 네 부탁을 거절 못 했어.', 'sad');
  await say('ren', '근데 그 뒤로 손본 건 내가 아니야. 왜 해마다였는지는 편집장한테 들어.', 'sad');
  show('koharu', 'crying', 'right');
  await say('koharu', '…역시. 오빠가 업고 나온 사람, 선배였구나.', 'crying');
  await say('', '레이는 대답 대신 자기 오른손을 내려다본다. 검지에 늘 지워지지 않던 잉크 자국.');
  clearChars();
}

async function sceneKurogane5() {
  bg('warehouse_in');
  sfx('door');
  await say('', '창고 문이 열린다. 직무 정지 중인 쿠로가네가 서 있다.');
  show('kurogane', 'sad', 'right');
  await say('kurogane', '다 들었냐.', 'sad');
  await say('kurogane', '형사로 온 거 아니다. 배지는 서에 두고 왔어. 토와가 여기라고 하더라.', 'sad');
  await say('', '쿠로가네가 손목시계를 풀어 레이에게 내민다. 8시 31분에 멈춘 시계.');
  await gainCut('6Y4');
  await say('kurogane', '그날 현장에 너도 있었다. 소타 등에서 널 받아 내린 게 나다. 그때 시계가 멈췄어.');
  await say('kurogane', '잔상과는… 언젠가 누가 그날을 제대로 읽어 낼 때까지 버티려고 만든 거다. 그리고 너를 곁에 두려고.', 'sad');
  await say('', '쿠로가네가 주머니에서 막대사탕을 꺼내다 말고 내려다본다.');
  await say('kurogane', '소타 녀석 버릇이었다. 담배 끊는다고.', 'sad');
  sfx('door');
  await say('', '쿠로가네 뒤에서, 담요를 뒤집어쓴 작은 사람이 걸어 나온다. 모니터 밖에서는 처음 보는 얼굴.');
  show('towa', 'real', 'left', { here: true });
  await say('towa', '나도 말할게. 원래 편집국에 있었어. 이음매 감지기 만들던 사람.');
  await say('towa', '막으려고 만든 건데, 더 감쪽같이 고치는 데 쓰더라. 그래서 나왔어.');
  await say('rei', '진짜 고양이는 아니었네.', 'normal');
  await say('towa', '그 얘긴 왜 해.');
  clearChars();
}

async function scenePuzzle5b() {
  bg('warehouse_in');
  show('rei', 'serious', 'left');
  await say('rei', '두 페이지. 오늘 코하루가 걸어온 길, 그리고 6년 전 그 밤.', 'serious');
  clearChars();
  await runPuzzle('page5b');
}

async function sceneConclusion5() {
  bg('warehouse_in');
  await banner('결론', '폐창고', 1300);
  show('kurogane', 'sad', 'center');
  await say('kurogane', '말해 봐라. 이번엔 강력계도 서장도 없다. 우리만 있어.', 'sad');
  hide('kurogane');
  hideText();
  await runName({ title: '오늘, 그리고 6년 전', sub: '모든 빈칸이 맞아야 확정할 수 있다.', parts: NAME5_FINAL, threshold: 4 });
  await montage(G.lastSolution);
  show('rei', 'serious', 'left');
  await say('rei', '코하루는 혼자 걸어왔어요. 납치처럼 고친 건 렌이고요. 저를 여기 부르려고.', 'serious');
  await say('rei', '그리고 6년 전 그 밤, 계단 아래 연기 속에 쓰러져 있던 고등학생은 저였어요.', 'serious');
  hide('rei');
  bgm('truth');
  show('koharu', 'crying', 'right');
  await say('koharu', '오빠답다, 진짜… 끝까지.', 'crying');
  hideText();
  const c = await choice(['"소타 씨한테, 고맙다고 전해 줘."', '"미안해. 나 때문에."', '(배지를 코하루의 손에 돌려준다)'], '코하루에게 뭐라고 할까?');
  if (c === 0) await say('koharu', '네. 오빠한테 전할게요. 선배 지금 잘 지낸다고.', 'crying');
  if (c === 1) { show('koharu', 'worried', 'right'); await say('koharu', '선배 탓 아니에요. 오빠가 그러기로 한 거예요. 그러니까 사과하지 마요.', 'worried'); }
  if (c === 2) { marginMark('badgeBack'); await say('', '코하루가 배지를 두 손으로 감싸 쥐었다가, 다시 레이의 손에 얹는다. "선배가 갖고 있어요. 오빠도 그게 좋을 거예요."'); }
  clearChars();
}

async function sceneEpilogue5() {
  bg('pier');
  await say('', '해 질 녘. 창고 밖 부두. 바닷바람.');
  FX.ghost(3000);
  show('shiori', 'normal', 'center');
  await say('', '부두 끝에 교복 차림의 여자아이가 서 있다. 이번엔 사라지지 않는다.');
  await say('shiori', '레이.');
  await say('shiori', '이제 그날을 읽을 차례야.');
  hide('shiori');
  show('rei', 'surprised', 'left');
  await say('rei', '…시오리.', 'surprised');
  show('koharu', 'normal', 'right');
  await say('koharu', '선배? 누구랑 얘기해요?', 'worried');
  await say('rei', '내일, 같이 가 줄래. 등대.', 'serious');
  await say('koharu', '당연하죠. 커피 담당도 저예요.', 'happy');
  clearChars();
  bg('cafe_night');
  bgm('epilogue');
  await say('', '카페 「여백」. 문 닫을 시간이 지났는데 불이 켜져 있다.');
  show('asagiri', 'normal', 'center');
  await say('asagiri', '어서 와, 레이. 오늘은 무슨 일이 있었어?');
  await say('', '아사기리가 단 커피를 내민다. 6년 동안 늘 같은 잔이다.');
  show('rei', 'serious', 'left');
  await say('rei', '(6년 동안 마신 잔인데. 읽어 볼 생각을 한 번도 안 했어.)', 'serious');
  await runTrial('asagiri5');
  bg('cafe_night');
  show('asagiri', 'cold', 'center');
  await say('asagiri', '편집국을 만든 건 나야. 렌도, 토와도, 내가 데려왔지.');
  await say('asagiri', '잊는 게 사람을 살린다고 믿었어. 지금도 그렇고.', 'cold');
  bgm(null, 2);
  await say('', '아사기리가 커피잔을 내려놓는다.');
  await say('asagiri', '내일이 8월 31일이네.', 'cold');
  await say('asagiri', '다시 잊게 해 줄까?', 'cold');
  hideText();
  await banner('5장 「편집자」 끝', '', 2200);
  await showRank('5장 「편집자」');
}

const CH5_FN = {
  office5: sceneOffice5, explore5a: sceneExplore5a, route5: sceneRoute5, restore5: sceneRestore5, tanabe: sceneTanabe,
  puzzle5a: scenePuzzle5a, accuse5: sceneAccuse5, harbor5: sceneHarbor5, warehouse5: sceneWarehouse5, ren: sceneRen, kurogane5: sceneKurogane5,
  puzzle5b: scenePuzzle5b, conclusion5: sceneConclusion5, epilogue5: sceneEpilogue5,
};

const CH5_BGM = {
  office5: 'tension', explore5a: 'explore', route5: 'explore', restore5: 'editor', tanabe: 'trial', puzzle5a: 'tension',
  accuse5: 'tension', harbor5: 'epilogue', warehouse5: 'editor', ren: 'editor', kurogane5: 'truth', puzzle5b: 'tension', conclusion5: 'trial',
  epilogue5: 'epilogue',
};

const CH5_CAST = { tanabe: ['tanabe'], warehouse5: ['koharu', 'ren'] };

CHAPTERS[5] = { title: '편집자', scenes: CH5_SCENES, state: CH5_STATE, fn: CH5_FN, bgm: CH5_BGM, cast: CH5_CAST };
