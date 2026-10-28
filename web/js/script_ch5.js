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
  await say('', '잔상과 문에 「해체 — 출입 금지」 종이. 레이는 그걸 떼고 들어간다.');
  await say('', '코하루 책상. 스티커 수첩이 없다. 머그컵은 바싹 말랐다.');
  await say('', '모니터 모서리에 포스트잇. 「내일 아침 커피 담당 = 나!」 어제 날짜다.');
  show('rei', 'normal', 'left');
  await say('rei', '(…조용하네.)', 'normal');
  await say('', '선반 맨 위 「6년 전 / 등대」 상자. 뚜껑이 비뚤다.');
  hide('rei');
  show('towa', 'serious', 'center');
  await say('towa', '코하루 폰. 아침엔 안 받더니 낮부터 꺼져 있어.');
  await say('towa', '이상한 게 하나 더. 코하루가 지나간 길, 잔상이 전부 너무 깔끔해.');
  await say('kurogane', '(전화) 난 직무 정지다. 형사로는 못 움직인다. 시노노메, 네가 찾아라.');
  await say('kurogane', '(전화) 흰 코트 조심해라. 이름은 렌.');
  gainWord('p_ren');
  await say('rei', '과장님. 선반 위 상자, 누가 열었어요.', 'normal');
  await say('kurogane', '(전화) ……그 얘긴 전화로 하지 마라. 서에서도.');
  clearChars();
}

async function sceneExplore5a() {
  bg('koharu_room');
  await banner('코하루의 자취방', '8월 30일 오전', 1400);
  await say('', '항구가 내려다보이는 원룸.');
  const req = ['desk', 'frame', 'laptop'];
  let got = 0;
  const tick = () => { got++; goal(`코하루의 방 (${got}/3)`); if (got === 3) EX.end(); };
  goal('코하루의 방 (0/3)');
  await explore('koharuroom', {
    start: [12, 8], required: req,
    on: {
      desk: async () => {
        await say('', '책상. 뒤집힌 걸 누가 도로 세워 둔 것 같다. 서랍은 죄다 열려 있다.');
        await say('rei', '(쳐들어온 흔적 같은데. 잔상이 이상하게 차가워.)', 'serious');
        await gainCut('5Ae'); tick();
      },
      frame: async () => {
        await say('', '벽에 액자. 경찰 제복 차림 청년 옆에 어린 코하루. 밑에 「오빠랑」.');
        gainWord('p_sota');
        await gainCut('6Y1'); tick();
      },
      laptop: async () => {
        await say('', '노트북이 켜진 채다. 검색 기록도 그대로.');
        await gainItem('history'); tick();
      },
      bed: async () => { await say('', '침대는 반듯하다. 이불 모서리까지.'); },
      stickers: async () => { await say('', '스티커 수첩 마지막 장. 「선배 커피 → 단 거!」 귀퉁이에 작은 하트.'); },
      door: async () => { await say('', '현관 손잡이가 부서져 있다. 그런데 문틀엔 긁힌 데가 하나도 없다.'); },
    },
  });
  goal('');
}

async function sceneRoute5() {
  bg('library');
  await say('', '시립 도서관 신문 열람실. 사서가 기억하고 있었다. 「그 아가씨요? 아침 일찍 와서 6년 전 신문을 찾던데요.」');
  await say('', '책상에 6년 전 9월 1일 자 지역 신문이 펼쳐진 채다. 「등대 도서관 화재 — 여고생 1명·순경 1명 사망, 고등학생 1명 구조」.');
  show('rei', 'serious', 'left');
  await say('rei', '(이 기사. 끝까지 읽은 적이 없어.)', 'serious');
  await say('', '구석 그림책 서가. 바랜 책등마다 같은 도장. 「기증 — 바위산 화재로 떠난 두 사람을 기억하며 · 카페 여백」 12년 전 날짜다.');
  await say('rei', '(사장님은 이런 얘기 한 번도 안 했는데.)', 'normal');
  hide('rei');
  await gainCut('5Be');
  bg('busstop');
  await say('', '하쿠요 본사 앞 버스정류장. 벤치에 코하루의 별 모양 참이 떨어져 있다.');
  gainWord('pl_busstop');
  await gainCut('5Ce');
  gainWord('a_drag');
  await say('', '정문 경비실. 「점심때 그 아가씨요? 이 창 앞에서 봤어요.」 경비원이 날마다 내다보는 창틀에 레이가 손을 얹는다.');
  gainWord('p_tanabe');
  await gainCut('5Ee');
  show('rei', 'serious', 'left');
  await say('rei', '(셋 다 코하루 옆에 누가 있어. 근데 읽을 때마다 손끝이 차가워.)', 'serious');
  clearChars();
}

async function sceneRestore5() {
  bg('office');
  show('towa', 'serious', 'center');
  await say('towa', '이거, 아케이드 점술가 미래 컷이랑 같은 솜씨야. 위에 덧칠했어.');
  await say('towa', '밑에 원본이 남아 있을 거야. 붙인 자리부터 벗겨.');
  await say('tip', '편집된 컷의 [[이음매]]를 짚으면 원본이 드러난다.');
  hide('towa');
  hideText();
  await runRestore(['5Ae', '5Be', '5Ce', '5Ee']);
  gainWord('p_koharu'); gainWord('a_edit');
  show('towa', 'serious', 'center');
  await say('towa', '원본 넷. 경비원 기억도 똑같이 고쳤을 거야. 코하루를 마지막으로 본 사람이잖아.');
  clearChars();
}

async function sceneTanabe() {
  bg('busstop');
  meet('tanabe', 'left', 'normal');
  await say('tanabe', '아까 그 아가씨요? 네, 기억나요. 흰 코트 입은 사람이 끌고 갔어요. …그랬던 것 같은데.', 'confused');
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
  await say('towa', '쿠로가네는 정지 중. 강력계는 그려진 대로 믿을 거야. 편집국이 납치했다고.');
  await say('towa', '보고서는 네가 써. 코하루를 거기로 데려간 게 누군지.');
  clearChars();
  hideText();
  const r = await runName({
    title: '중간 보고 — 코하루는 왜 폐창고에 있었나', sub: '틀리게 보고하면 그 이름이 경찰에 돈다.',
    parts: NAME5_MID, threshold: 2, report: true, reportLabel: '이대로 보고한다',
  });
  const who = r.picks[1];
  G.flags.accused5 = who;
  show('towa', 'serious', 'center');
  if (r.ok) {
    G.stats.accuse = true;
    await say('towa', '맞아. 코하루가 제 발로 갔어. 그림은 너 부르려고 고친 거고.');
    await say('towa', '렌은 기다리고 있겠지. 항구 끝 폐창고에서.');
  } else {
    G.stats.accuse = false;
    if (who === 'p_ren') {
      G.flags.renAccused = true;
      await say('towa', '렌을 납치범으로 올렸네. 강력계가 움직이면 편집국도 눈치챌 거야.');
      FX.glitch(500);
      await say('towa', '창고 안 잔상이 단단해졌어. 렌이 더 고쳐 놨을 거야.');
    } else {
      await say('towa', '그림에 속았어. 그래도 가야 해. 항구 끝 폐창고.');
    }
  }
  clearChars();
}

async function sceneHarbor5() {
  bg('pier');
  await say('', '항구 끝으로 가는 방파제. 해가 기운다. 휴대폰 화면에 고양이 귀 아바타.');
  show('towa', 'serious', 'right');
  await say('towa', '레이. 하나만 먼저 말해 둘게.');
  await say('towa', '렌은 나랑 같은 데서 일했어. 거짓말은 해도 쓸데없는 거짓말은 안 해.');
  show('rei', 'serious', 'left');
  await say('rei', '같은 데?', 'serious');
  await say('towa', '갔다 와서 말할게. 지금은 코하루.');
  hide('towa');
  await say('', '방파제 끝, 항구 등대에 불이 들어온다.');
  await say('rei', '(왜 혼자 갔어. 나한테 말하면 말릴 줄 알았겠지.)', 'serious');
  if ((G.flags.bond || 0) >= 2) await say('rei', '(…같이 열어 보자고 했던 상자. 혼자 열었구나.)', 'serious');
  clearChars();
}

async function sceneWarehouse5() {
  bg('warehouse');
  await banner('항구 끝 폐창고', '8월 30일 오후 6시 반', 1400);
  await say('', '녹슨 셔터가 반쯤 올라가 있다. 문 앞 바닥에 끌린 자국.');
  await gainCut('5De');
  hideText();
  await runRestore(['5De'], '이음매');
  bg('warehouse_in');
  await say('', '창고 안. 낡은 테이블, 찻잔 둘. 그리고——');
  show('koharu', 'happy', 'right');
  await say('koharu', '선배!', 'happy');
  await say('koharu', '어, 어떻게 알았어요? 걱정 마시라고 문자도 보냈는데….', 'worried');
  show('ren', 'smile', 'left');
  await say('ren', '늦었네, 시노노메. 차 다 식었어.', 'smile');
  await say('', '렌이 코트 주머니에서 하늘색 케이스 휴대폰을 꺼내 테이블에 놓는다. 화면은 꺼져 있다.');
  await say('ren', '그 문자 안 갔어. 방파제에서 보내려는 걸 내가 받아서 꺼 버렸거든. 편집국이 위치를 읽으니까.', 'normal');
  await say('koharu', '에엑?! 그럼 선배는 하루 종일….', 'worried');
  show('rei', 'serious', 'center');
  await say('rei', '방은.', 'serious');
  await say('ren', '그것도 나. 고친 컷만 있으면 넌 방부터 볼 테니까 방도 그림에 맞춰 놨지. 새벽에 그 애가 나간 다음에. 열쇠는 우편함 밑에 있더라.', 'smile');
  await say('koharu', '제 책상 뒤집은 거 렌 씨였어요?!', 'worried');
  await say('rei', '(그래서 문틀이 멀쩡했구나.)', 'serious');
  hide('rei');
  await say('koharu', '그, 그래도 렌 씨 나쁜 사람 아니에요! 오후 내내 방파제에서 오빠 얘기 해 줬어요. 그다음은 선배가 직접 들어야 한대요.', 'worried');
  await say('koharu', '오빠, 순경이었어요. 맨날 막대사탕 물고 다녔어요. 담배 끊는다고.', 'normal');
  await say('koharu', '그날도 주머니에 사탕이 두 개 있었대요. 하나는 제 거.', 'worried');
  await say('', '코하루가 그을린 경찰 배지를 레이 손에 쥐여 준다.');
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
  await say('ren', '넌 그날 시오리를 찾으러 도로 들어갔어. 소타 순경이 널 업고 나왔지.', 'sad');
  await say('ren', '소타는 시오리를 데리러 [[다시 들어갔고]], 둘 다 못 나왔어.', 'sad');
  gainWord('a_return');
  await say('ren', '난 밖에서 한쪽 눈을 잃었고. …그래서 네 부탁을 거절 못 했어.', 'sad');
  await say('ren', '그다음 해부터 손본 건 내가 아니야. 왜 해마다였는지는 편집장한테 물어.', 'sad');
  show('koharu', 'crying', 'right');
  await say('koharu', '역시. 오빠가 업고 나온 사람… 선배였어요.', 'crying');
  await say('', '레이는 대답 대신 오른손을 내려다본다. 검지에 늘 남아 있던 잉크 자국.');
  clearChars();
}

async function sceneKurogane5() {
  bg('warehouse_in');
  sfx('door');
  await say('', '창고 문이 열린다. 쿠로가네가 서 있다.');
  show('kurogane', 'sad', 'right');
  await say('kurogane', '다 들었냐.', 'sad');
  await say('kurogane', '형사로 온 거 아니다. 배지는 서에 두고 왔다. 여긴 토와가 알려 줬고.', 'sad');
  await say('', '쿠로가네가 손목시계를 풀어 내민다. 바늘이 8시 31분에 멈춰 있다.');
  await gainCut('6Y4');
  await say('kurogane', '그날 현장에 너도 있었다. 소타 등에서 널 받아 내린 게 나다. 시계는 그때 멈췄어.');
  await say('kurogane', '잔상과는, 누가 그날을 제대로 읽어 낼 때까지 버티려고 만들었다. …널 곁에 둘 핑계도 됐고.', 'sad');
  await say('', '쿠로가네가 주머니에서 막대사탕을 꺼내다 만다.');
  await say('kurogane', '소타 녀석이 늘 물고 있던 거다. 나까지 옮았어.', 'sad');
  sfx('door');
  await say('', '그 뒤에서 담요를 뒤집어쓴 작은 사람이 걸어 나온다. 모니터 밖에서 보는 건 처음이다.');
  show('towa', 'real', 'left', { here: true });
  await say('towa', '나도 말할게. 원래 편집국에 있었어. 이음매 감지기 만든 게 나.');
  await say('towa', '막으려고 만든 건데 더 감쪽같이 고치는 데 쓰더라. 그래서 나왔어.');
  await say('rei', '진짜 고양이는 아니었네.', 'normal');
  await say('towa', '그 얘긴 왜 해.');
  clearChars();
}

async function scenePuzzle5b() {
  bg('warehouse_in');
  show('rei', 'serious', 'left');
  await say('rei', '(두 페이지. 오늘 코하루가 걸어온 길하고, 6년 전 그 밤.)', 'serious');
  clearChars();
  await runPuzzle('page5b');
}

async function sceneConclusion5() {
  bg('warehouse_in');
  await banner('결론', '폐창고', 1300);
  show('kurogane', 'sad', 'center');
  await say('kurogane', '말해 봐라. 이번엔 강력계도 서장도 없다.', 'sad');
  hide('kurogane');
  hideText();
  await runName({ title: '오늘, 그리고 6년 전', sub: '빈칸이 다 맞아야 확정된다.', parts: NAME5_FINAL, threshold: 4 });
  await montage(G.lastSolution);
  show('rei', 'serious', 'left');
  await say('rei', '코하루는 혼자 걸어왔어요. 납치처럼 고친 건 렌이고요. 저를 여기로 부르려고.', 'serious');
  await say('rei', '6년 전 그 밤, 계단 아래 쓰러져 있던 고등학생은… 저였어요.', 'serious');
  hide('rei');
  bgm('truth');
  show('koharu', 'crying', 'right');
  await say('koharu', '진짜 오빠답다… 끝까지.', 'crying');
  hideText();
  const c = await choice(['"소타 씨한테, 고맙다고 전해 줘."', '"미안해. 나 때문에."', '(배지를 코하루의 손에 돌려준다)'], '코하루에게 뭐라고 할까?');
  if (c === 0) await say('koharu', '네. 전할게요. 선배 잘 지낸다고, 커피는 아직도 단 거 마신다고.', 'crying');
  if (c === 1) { show('koharu', 'worried', 'right'); await say('koharu', '선배 탓 아니에요. 오빠가 그러기로 한 거예요. 그러니까 사과하지 마세요.', 'worried'); }
  if (c === 2) { marginMark('badgeBack'); await say('', '코하루가 배지를 두 손으로 감싸 쥐었다가 레이 손에 도로 얹는다. "선배가 갖고 있어요. 오빠도 그러라고 할 거예요."'); }
  clearChars();
}

async function sceneEpilogue5() {
  bg('pier');
  await say('', '창고 밖 부두. 바닷바람이 분다.');
  FX.ghost(3000);
  show('shiori', 'normal', 'center');
  await say('', '부두 끝에 교복 차림 여자아이가 서 있다. 이번엔 사라지지 않는다.');
  await say('shiori', '레이.');
  await say('shiori', '그날을 읽어. 이번엔.');
  hide('shiori');
  show('rei', 'surprised', 'left');
  await say('rei', '…시오리.', 'surprised');
  CHARACTERS.shiori.name = '시오리';
  show('koharu', 'normal', 'right');
  await say('koharu', '선배? 누구랑 얘기해요?', 'worried');
  await say('rei', '내일, 같이 가 줄래. 등대.', 'serious');
  await say('koharu', '당연하죠. 커피 담당도 저고요.', 'happy');
  clearChars();
  bg('cafe_night');
  bgm('epilogue');
  await say('', '카페 「여백」. 문 닫을 시간이 지났는데 불이 켜져 있다.');
  show('asagiri', 'normal', 'center');
  await say('asagiri', '어서 오렴, 레이. 오늘은 무슨 일이 있었니?');
  await say('', '아사기리가 단 커피를 내민다. 늘 쓰던 그 잔.');
  show('rei', 'serious', 'left');
  await say('rei', '(6년을 마신 잔인데. 한 번도 읽어 볼 생각을 안 했어.)', 'serious');
  await runTrial('asagiri5');
  bg('cafe_night');
  show('asagiri', 'cold', 'center');
  await say('asagiri', '편집국을 만든 건 나야. 렌도 토와도 내가 데려왔지.');
  await say('asagiri', '잊어야 살 수 있는 사람도 있어. 지금도 그렇게 믿고.', 'cold');
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
