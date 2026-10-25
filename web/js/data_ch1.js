// 1장 「낙하」 데이터: 캐릭터, 배경, 컷, 대사 조각, 증인, 결론 질문.
// 이미지 경로는 assets/ 아래. 파일이 없으면 assets.js가 임시 그림을 그린다.

const CHARACTERS = {
  rei:      { name: '레이',     hair: '#2a2840', outfit: '#8a8d96', accent: '#6b5fa8', faces: ['normal', 'serious', 'surprised'] },
  koharu:   { name: '코하루',   hair: '#c8743a', outfit: '#3c4a6b', accent: '#f2a14a', faces: ['normal', 'happy', 'worried'] },
  kurogane: { name: '쿠로가네', hair: '#77777a', outfit: '#d9d4c7', accent: '#e07a9a', faces: ['normal'] },
  towa:     { name: '토와',     hair: '#d9d1b8', outfit: '#2f5d3a', accent: '#6fdc6f', faces: ['normal'] },
  asagiri:  { name: '아사기리', hair: '#b7b5b0', outfit: '#e6dcc6', accent: '#8a5a3a', faces: ['normal'] },
  ookubo:   { name: '오오쿠보', hair: '#9a9a9a', outfit: '#5a6b4a', accent: '#6b8a5a', faces: ['normal', 'flustered'] },
  taiga:    { name: '타이가',   hair: '#e8c450', outfit: '#3d3d3d', accent: '#c9961a', faces: ['angry', 'sad'] },
  himari:   { name: '히마리',   hair: '#5a3a2a', outfit: '#f3b6c9', accent: '#e0679a', faces: ['normal', 'crying'] },
  shiori:   { name: '???',      hair: '#121212', outfit: '#2b3550', accent: '#e9e3d3', faces: ['normal'] },
};

const BACKGROUNDS = {
  office:      { label: '잔상과 사무실 (경찰서 지하 창고)', sky: ['#2b2d35', '#4a4740'] },
  guardroom:   { label: '하나미즈키 맨션 1층 경비실', sky: ['#3a4a3a', '#7a8a6a'] },
  interrogate: { label: '경찰서 취조실', sky: ['#25262c', '#54565e'] },
  himari_door: { label: '5층 복도, 옆집 현관', sky: ['#3b4a5a', '#c9a76a'] },
  hospital:    { label: '병원 복도', sky: ['#cfd8dc', '#f2f5f5'] },
  cafe:        { label: '카페 「여백」', sky: ['#5a3a2a', '#e6c79a'] },
  night:       { label: '하나미즈키 맨션 (밤)', sky: ['#141a2e', '#3b3f66'] },
};

// 상태 태그의 시간 순서와 플레이어에게 보여줄 이름
const TAG_ORDER = {
  piano:   ['on', 'off'],
  box:     ['holding', 'dropped'],
  mitsuru: ['inside', 'reach', 'pull'],
  fall:    ['before', 'after'],
  hairpin: ['hair', 'flying', 'ledge', 'hand'],
  himari:  ['floor', 'railing', 'safe'],
  taiga:   ['door', 'stairs'],
  phone:   ['unused', 'dead'],
};
const TAG_NAME = {
  piano: '피아노 소리', box: '택배 상자', mitsuru: '미츠루의 위치', fall: '추락(쿵) 전후',
  hairpin: '머리핀의 위치', himari: '히마리의 위치', taiga: '타이가의 위치', phone: '휴대폰',
};

const OWNERS = {
  taiga:   { name: '타이가', color: '#c9961a' },
  mitsuru: { name: '미츠루', color: '#3b8fd0' },
  himari:  { name: '히마리', color: '#e0679a' },
  ookubo:  { name: '오오쿠보', color: '#6b8a5a' },
};

const CUTS = {
  A: { owner: 'taiga', title: '초인종', sfx: '♪ ♫',
       desc: '택배 상자를 옆구리에 낀 타이가가 5층 초인종을 누른다. 문 너머에서 피아노 소리.',
       tags: { piano: 'on', box: 'holding', fall: 'before', taiga: 'door' } },
  B: { owner: 'mitsuru', title: '피아노를 멈춤',
       desc: '건반에서 손을 떼고 베란다 쪽을 돌아보는 미츠루. 커튼 너머로 작은 그림자.',
       tags: { piano: 'off', mitsuru: 'inside', fall: 'before' } },
  C: { owner: 'mitsuru', title: '손을 뻗음', bubble: 'burst',
       desc: '칸막이 틈으로 몸을 내밀어 손을 뻗는 미츠루. 칸막이 너머 난간 위에 작은 발끝. 바깥 턱에 반짝이는 것.',
       tags: { piano: 'off', mitsuru: 'reach', himari: 'railing', hairpin: 'ledge', fall: 'before' } },
  D: { owner: 'taiga', title: '쿵', sfx: '쿵!!',
       desc: '문 앞에서 깜짝 놀라 돌아보는 타이가. 상자는 바닥에 떨어져 있다. 화면 밖에서 커다란 소리.',
       tags: { box: 'dropped', fall: 'after', taiga: 'door', phone: 'unused' } },
  E: { owner: 'ookubo', title: '외침', bubble: 'burst',
       desc: '계단을 뛰쳐나오며 뭔가 크게 외치는 타이가. 겁에 질린 얼굴. 손에는 아무것도 없다.',
       tags: { fall: 'after', taiga: 'stairs' } },
  F: { owner: 'taiga', title: '배터리 0%',
       desc: '계단을 뛰어 내려가며 꺼진 휴대폰을 쥔 손. 화면에 배터리 0%. 이를 악문 타이가.',
       tags: { box: 'dropped', fall: 'after', taiga: 'stairs', phone: 'dead' } },
  G: { owner: 'himari', title: '날아간 머리핀',
       desc: '바람에 음표 머리핀이 머리에서 빠져 날아간다. 베란다 바닥의 히마리가 손을 뻗는다.',
       tags: { hairpin: 'flying', himari: 'floor', mitsuru: 'inside', fall: 'before' } },
  H: { owner: 'himari', title: '난간 위',
       desc: '화분을 밟고 난간에 올라 바깥 턱의 머리핀에 손을 뻗는 히마리. 칸막이 너머엔 아무도 없다.',
       tags: { hairpin: 'ledge', himari: 'railing', mitsuru: 'inside', fall: 'before' } },
  I: { owner: 'himari', title: '끌어당김',
       desc: '누군가의 팔이 히마리를 안쪽으로 끌어당긴다. 히마리 손에 머리핀. 팔의 주인은 난간 바깥으로 기울어 있다.',
       tags: { hairpin: 'hand', himari: 'safe', mitsuru: 'pull', fall: 'before' } },
};

const LINES = {
  L1: { text: '택배 왔나?', shape: 'round', from: '초인종 너머 혼잣말' },
  L2: { text: '구급차!', shape: 'burst', from: '오오쿠보가 들은 외침' },
  L3: { text: '히마리, 움직이지 마!', shape: 'burst', from: '히마리의 중얼거림' },
};

const PUZZLES = {
  page1: {
    title: '페이지 1 — 그날 밤, 5층',
    goal: '택배 기사 타이가는 사건 순간 어디에 있었을까? 컷 4장을 일어난 순서대로 놓자.',
    cuts: ['A', 'B', 'C', 'D'],
    solution: ['A', 'B', 'C', 'D'],
    bubbles: {},
    hint: '피아노 소리(♪)가 나는 컷과 안 나는 컷을 비교해 봐.',
    rei: '…택배 기사는 문 밖에 있었어. 떨어지는 순간에도.',
  },
  page2: {
    title: '페이지 2 — 히마리의 베란다',
    goal: '머리핀이 날아간 순간부터 타이가가 계단을 내려갈 때까지. 7장 중 6장만 쓴다. 빈 말풍선도 채우자.',
    cuts: ['A', 'C', 'D', 'F', 'G', 'H', 'I'],
    solution: ['G', 'H', 'C', 'I', 'D', 'F'],
    decoys: ['A'],
    bubbles: { C: 'L3' },
    hint: '머리핀이 어디 있는지 따라가 봐. 머리 → 공중 → 난간 턱 → 손.',
    rei: '…떨어진 게 아니야. 구한 거야.',
  },
};

// 증인 (단간론파/역전재판식). 증언 하나가 모순이고, 거기에 맞는 컷을 들이민다.
const WITNESSES = {
  ookubo: {
    char: 'ookubo', bg: 'guardroom',
    goal: '오오쿠보의 증언 중 틀린 곳에서 [반박!]을 누르고, 그걸 깨뜨릴 컷을 들이밀자.',
    statements: [
      { text: '나는 그때 순찰 일지를 쓰고 있었지. 성실하게!', cut: 't_ookubo_1', dist: '미화',
        cutDesc: '책상에서 반듯하게 순찰 일지를 쓰는 오오쿠보. 주변이 이상하게 반짝인다.',
        press: [['koharu', '근데… 뒤에 TV 켜져 있지 않았어요?'], ['ookubo', '야, 야구는 귀로 듣는 거야! 9회 말이었다고. 끝내기 홈런!', 'flustered']] },
      { text: '그 양키 놈이 뛰쳐나가더라고. 무서운 얼굴로!', cut: 't_ookubo_2', dist: '낙서',
        cutDesc: '계단에서 뛰쳐나오는 인물. 얼굴이 뿔 달린 괴물 낙서로 그려져 있다.',
        truthDesc: '겁에 질려 울 것 같은 얼굴로 뭔가 외치며 뛰쳐나오는 타이가.',
        press: [['rei', '…뭐라고 하지 않았어요?'], ['ookubo', '뭐라고 소리쳤던 것 같기도 하고… 구급차? 몰라. 양키들은 원래 소리 지르잖아.']],
        gives: 'L2' },
      { text: '그리고 나서 쿵 소리가 났어. 그놈이 도망친 다음에!', cut: 't_ookubo_3',
        cutDesc: '화단 쪽에서 들려온 둔탁한 "쿵".',
        press: [['ookubo', '확실해. 그놈이 나가고, 쿵. 순서가 딱 그랬어.'], ['rei', '(…순서.)', 'serious']] },
    ],
    answer: { statement: 2, cut: 'D' },
    koharu: [['koharu', '오오쿠보 씨, 쿵 소리가 났을 때 타이가 씨가 어디 있었는지… 정말 보셨어요?', 'worried'], ['ookubo', '그, 그야… 음…', 'flustered']],
    rebut: '쿵 소리가 났을 때 이 사람은 5층에 있었어요. 문 밖에.',
    success: [
      ['ookubo', '…어? 그, 그럴 리가…', 'flustered'],
      ['ookubo', '…야구가 끝내기였거든. 와 하고 소리 지르고 있었는데… 그 소리랑 헷갈렸나…', 'flustered'],
      ['', '증언 컷의 낙서가 찢어지며 원래 얼굴이 드러난다.'],
      ['koharu', '이 얼굴… 도망치는 사람 얼굴이 아니에요.', 'worried'],
    ],
    peel: [1],
    rewards: ['E'],
    wrong: [['ookubo', '그게 뭐? 그거랑 이거랑 무슨 상관이야!', 'flustered']],
    close: [['ookubo', '에잇, 됐어! 나 바빠! 다음에 와!', 'flustered'], ['koharu', '(…처음부터 다시 들어 봐요, 선배.)', 'worried']],
  },
  taiga: {
    char: 'taiga', bg: 'interrogate',
    goal: '타이가가 숨기는 게 있다. 틀린 증언에 컷을 들이밀자. 말풍선이 빈 컷은 대사를 채워야 증거가 된다.',
    statements: [
      { text: '배달 갔어요. 초인종 눌렀고.', cut: 't_taiga_1',
        cutDesc: '5층 초인종을 누르는 손. 문 너머에서 피아노 소리.',
        press: [['taiga', '안에서 피아노 소리가 났어요. 못 들었나 보다 했죠.', 'sad'], ['taiga', '혼잣말도 들린 것 같고. "택배 왔나?" 그런 거.', 'sad']] },
      { text: '엄청 큰 소리가 났고.', cut: 't_taiga_2', dist: '과장',
        cutDesc: '화면 전체를 뒤덮는 거대한 "쿵".',
        press: [['taiga', '…심장 떨어지는 줄 알았어요. 문 두드렸는데 대답이 없었어요.', 'sad']] },
      { text: '…무서워서 도망쳤어요.', cut: 't_taiga_3', dist: '생략',
        cutDesc: '계단을 내려가는 뒷모습. 얼굴과 손 부분이 하얀 여백으로 비어 있다.',
        truthDesc: '꺼진 휴대폰을 쥐고 이를 악문 타이가. 화면에 배터리 0%.',
        press: [['rei', '손에 뭐 들고 있었어요?'], ['taiga', '…기억 안 나요.', 'angry'], ['koharu', '(선배, 저 여백… 말하기 싫은 게 있는 것 같아요.)', 'worried']] },
    ],
    answer: { statement: 2, cut: 'E', line: 'L2' },
    koharu: [['koharu', '타이가 씨, 내려가서… 뭘 하려고 했어요? 1층에서 누가 소리 지르는 걸 들은 사람이 있대요.', 'worried'], ['taiga', '…', 'sad']],
    rebut: '도망친 사람은 구급차를 부르지 않아요.',
    success: [
      ['taiga', '…!', 'sad'],
      ['taiga', '…폰이 꺼져서. 아무것도 못 해서.', 'sad'],
      ['taiga', '그게 쪽팔려서… 길 건너 편의점까지 뛰어가서 신고해 달라고 했어요.', 'sad'],
      ['kurogane', '(전화) 편의점 신고 기록 확인했다. 21시 26분, 신고자는 점원. 옆에 금발 청년.'],
      ['koharu', '타이가 씨는 도망친 게 아니라 도우려고 뛴 거예요.', 'happy'],
    ],
    peel: [2],
    rewards: ['F'],
    wrong: [['taiga', '…그래서요?', 'angry']],
    close: [['taiga', '…나가 주세요.', 'angry'], ['koharu', '(…처음부터 다시요, 선배.)', 'worried']],
  },
  himari: {
    char: 'himari', bg: 'himari_door',
    goal: '히마리는 겁먹었다. 몰아붙이지 말고, 진실을 보여 줄 컷 하나를 골라 [보여주기]. 빈 말풍선을 채우는 걸 잊지 말자.',
    gentle: true,
    statements: [
      { text: '계속 숙제했어요.', cut: 't_himari_1', dist: '크레용',
        cutDesc: '크레용으로 그린 책상과 숙제하는 히마리.',
        truthDesc: '숙제하다 말고 창밖을 보는 히마리.',
        press: [['himari', '…산수 숙제. 다 했어요.']] },
      { text: '엄마 기다렸어요.', cut: 't_himari_2', dist: '크레용',
        cutDesc: '창밖을 보며 엄마를 기다리는 히마리. 베란다 쪽이 이상하게 크게 그려져 있다.',
        truthDesc: '베란다 난간 바깥 턱에 걸린 머리핀을 보는 히마리.',
        press: [['himari', '…엄마 늦게 와요.'], ['himari', '(작게) …움직이지 말라고 했는데…', 'crying'], ['rei', '…방금 뭐라고?', 'surprised'], ['himari', '아, 아무것도 아니에요!', 'crying']],
        gives: 'L3' },
      { text: '그리고 잤어요. 아무것도 몰라요.', cut: 't_himari_3', dist: '크레용',
        cutDesc: '새까맣게 칠해진 이불 속. 구석에 꽉 쥔 작은 주먹.',
        truthDesc: '이불 속에서 음표 머리핀을 꼭 쥐고 우는 히마리.',
        press: [['', '히마리가 계속 주먹을 꽉 쥐고 있다. 손가락 사이로 뭔가 반짝인다.'], ['koharu', '(선배, 저 손… 뭔가 쥐고 있어요.)', 'worried']] },
    ],
    answer: { statement: 'any', cut: 'C', line: 'L3' },
    koharu: [['koharu', '히마리, 그거 예쁘다. 손에 쥔 거. 누가 준 거야?', 'happy'], ['himari', '…선생님이.'], ['koharu', '(선배, 선생님이 나오는 컷이에요. 선생님이 뭐라고 했는지 채워서 보여줘요.)', 'worried']],
    rebut: '선생님은 네 이름을 불렀어.',
    success: [
      ['himari', '…!', 'crying'],
      ['', '크레용이 눈물처럼 번지며 벗겨진다.'],
      ['himari', '머리핀이… 날아가서… 주우려고 했는데…', 'crying'],
      ['himari', '선생님이 움직이지 말라고 하고… 나를 잡아당겼어요… 그리고…', 'crying'],
      ['himari', '나 때문에… 선생님이…', 'crying'],
      ['', '코하루가 히마리를 꼭 안아준다. 히마리가 주먹을 편다. 음표 머리핀.'],
    ],
    peel: [0, 1, 2],
    rewards: ['H', 'I'],
    wrong: [['himari', '…(훌쩍)', 'crying'], ['koharu', '서, 선배! 애한테 너무 몰아붙이면…', 'worried']],
    close: [['himari', '으아앙…!', 'crying'], ['koharu', '(…잠깐 쉬었다가 다시 해요.)', 'worried']],
  },
};

const CONCLUSION = [
  { q: '사에키 씨는 왜 베란다 난간에 몸을 내밀었나?', answer: ['C', 'H', 'I'] },
  { q: '반도 타이가는 사건 순간 어디에 있었나?', answer: ['D'] },
  { q: '반도 타이가는 왜 건물을 뛰쳐나갔나?', answer: ['F', 'E'] },
];
