// 1장 「낙하」 컷 배열 퍼즐 데이터 (docs/06_chapter1.md 기준)

const OWNERS = {
  taiga:   { name: '타이가', color: '#c9961a' },
  mitsuru: { name: '미츠루', color: '#3b8fd0' },
  himari:  { name: '히마리', color: '#e0679a' },
  ookubo:  { name: '오오쿠보', color: '#6b8a5a' },
};

// 상태 태그의 시간 순서. 앞의 값이 항상 먼저 일어난다.
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

const CUTS = {
  A: {
    owner: 'taiga', title: '초인종',
    art: [{ sfx: '♪ ♫ ♪' }, { prop: '상자를 옆구리에 낌' }],
    desc: '택배 상자를 옆구리에 낀 타이가가 5층 초인종을 누른다. 문 너머에서 피아노 소리가 흘러나온다.',
    tags: { piano: 'on', box: 'holding', fall: 'before', taiga: 'door' },
  },
  B: {
    owner: 'mitsuru', title: '피아노를 멈춤',
    art: [{ prop: '건반 위에서 멈춘 손' }, { prop: '커튼 너머 작은 그림자' }],
    desc: '건반에서 손을 떼고 베란다 쪽을 돌아보는 미츠루. 커튼 너머로 작은 그림자가 비친다.',
    tags: { piano: 'off', mitsuru: 'inside', fall: 'before' },
  },
  C: {
    owner: 'mitsuru', title: '손을 뻗음',
    art: [{ prop: '칸막이 틈으로 뻗은 팔' }, { tiny: '난간 위 작은 발끝 · 턱에 반짝임' }],
    desc: '칸막이 틈으로 몸을 내밀어 손을 뻗는 미츠루. 칸막이 너머 난간 위로 작은 발끝이 보인다. 난간 바깥 턱에 뭔가 반짝인다.',
    bubble: 'burst',
    tags: { piano: 'off', mitsuru: 'reach', himari: 'railing', hairpin: 'ledge', fall: 'before' },
  },
  D: {
    owner: 'taiga', title: '쿵',
    art: [{ sfx: '쿵!!' }, { prop: '바닥에 떨어진 상자' }],
    desc: '문 앞에서 깜짝 놀라 돌아보는 타이가. 상자가 바닥에 떨어져 있다. 화면 밖에서 커다란 소리.',
    tags: { box: 'dropped', fall: 'after', taiga: 'door', phone: 'unused' },
  },
  E: {
    owner: 'ookubo', title: '외침',
    art: [{ prop: '계단에서 뛰쳐나오는 타이가' }, { tiny: '입을 크게 벌림 · 울 것 같은 얼굴' }],
    desc: '계단을 뛰쳐나오며 뭔가 크게 외치는 타이가. 겁에 질린 얼굴이다. 손에는 아무것도 없다.',
    bubble: 'burst',
    tags: { fall: 'after', taiga: 'stairs' },
  },
  F: {
    owner: 'taiga', title: '배터리 0%',
    art: [{ prop: '휴대폰 화면: 배터리 0%' }, { prop: '빈 손 · 계단' }],
    desc: '계단을 뛰어 내려가며 꺼진 휴대폰을 쥔 손. 이를 악문 타이가. 상자는 들고 있지 않다.',
    tags: { box: 'dropped', fall: 'after', taiga: 'stairs', phone: 'dead' },
  },
  G: {
    owner: 'himari', title: '날아간 머리핀',
    art: [{ prop: '바람에 날아가는 음표 머리핀' }, { tiny: '옆집은 조용함' }],
    desc: '바람에 음표 머리핀이 머리에서 빠져 날아간다. 베란다 바닥에 선 히마리가 손을 뻗는다.',
    tags: { hairpin: 'flying', himari: 'floor', mitsuru: 'inside', fall: 'before' },
  },
  H: {
    owner: 'himari', title: '난간 위',
    art: [{ prop: '화분을 밟고 난간 위로' }, { tiny: '칸막이 너머 베란다는 비어 있음' }],
    desc: '화분을 밟고 난간에 올라, 바깥 턱에 걸린 머리핀에 손을 뻗는 히마리. 옆 칸막이 너머에는 아무도 없다.',
    tags: { hairpin: 'ledge', himari: 'railing', mitsuru: 'inside', fall: 'before' },
  },
  I: {
    owner: 'himari', title: '끌어당김',
    art: [{ prop: '히마리를 끌어당기는 팔' }, { prop: '손에 쥔 머리핀' }],
    desc: '누군가의 팔이 히마리를 안쪽으로 끌어당긴다. 히마리 손에 머리핀. 팔의 주인은 난간 바깥쪽으로 기울어 있다.',
    tags: { hairpin: 'hand', himari: 'safe', mitsuru: 'pull', fall: 'before' },
  },
};

const LINES = {
  L1: { text: '택배 왔나?', shape: 'round', source: '타이가: "초인종 누를 때 안에서 혼잣말이 들린 것 같았어요."' },
  L2: { text: '구급차!', shape: 'burst', source: '오오쿠보: "그 양키가 뭐라고 소리쳤는데… 구급차?"' },
  L3: { text: '히마리, 움직이지 마!', shape: 'burst', source: '히마리(중얼거림): "…움직이지 말라고 했는데."' },
};

const PAGES = [
  {
    title: '페이지 1 — 그날 밤, 5층',
    subtitle: '택배 기사 타이가는 사건 순간 어디에 있었을까? 컷 4장을 일어난 순서대로 놓아 보자.',
    cols: 2,
    cuts: ['A', 'B', 'C', 'D'],
    solution: ['A', 'B', 'C', 'D'],
    bubbles: {},            // 이 페이지에서는 말풍선을 채우지 않는다
    lines: [],
    hints: [
      '에러. 소리를 봐. 음표가 있는 컷이랑 없는 컷.',
      '이 두 장. 피아노 소리가 나는 쪽이 먼저겠지?',
    ],
    hintPair: ['A', 'B'],
    shiori: 'D',
    reiLine: '…택배 기사는 문 밖에 있었어. 떨어지는 순간에도.',
  },
  {
    title: '페이지 2 — 히마리의 베란다',
    subtitle: '머리핀이 날아간 순간부터 타이가가 계단을 내려갈 때까지. 컷 7장 중 6장만 쓴다. 비어 있는 말풍선도 채울 것.',
    cols: 3,
    cuts: ['A', 'C', 'D', 'F', 'G', 'H', 'I'],
    solution: ['G', 'H', 'C', 'I', 'D', 'F'],
    decoys: ['A'],
    bubbles: { C: 'L3' },
    lines: ['L1', 'L2', 'L3'],
    hints: [
      '에러. 머리핀이 어디 있는지 따라가 봐. 머리 → 공중 → 난간 턱 → 손.',
      '이 두 장. 머리핀이 날아가는 컷과 손에 쥔 컷. 사이에 뭐가 와야 할까?',
    ],
    hintPair: ['G', 'I'],
    shiori: 'C',
    reiLine: '…떨어진 게 아니야. 구한 거야.',
  },
];
