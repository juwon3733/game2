// 1장 「낙하」 데이터: 캐릭터, 배경, 컷, 대사 조각, 증인, 결론 질문.
// 이미지 경로는 assets/ 아래. 파일이 없으면 assets.js가 임시 그림을 그린다.

const CHARACTERS = {
  rei:      { name: '레이',     hair: '#2a2840', outfit: '#8a8d96', accent: '#6b5fa8', faces: ['normal', 'serious', 'surprised'] },
  koharu:   { name: '코하루',   hair: '#c8743a', outfit: '#3c4a6b', accent: '#f2a14a', faces: ['normal', 'happy', 'worried'] },
  kurogane: { name: '쿠로가네', hair: '#77777a', outfit: '#d9d4c7', accent: '#e07a9a', faces: ['normal'] },
  towa:     { name: '토와',     hair: '#d9d1b8', outfit: '#2f5d3a', accent: '#6fdc6f', faces: ['normal'], remote: true },
  asagiri:  { name: '아사기리', hair: '#b7b5b0', outfit: '#e6dcc6', accent: '#8a5a3a', faces: ['normal'] },
  ookubo:   { name: '오오쿠보', hair: '#9a9a9a', outfit: '#5a6b4a', accent: '#6b8a5a', faces: ['normal', 'flustered', 'sad'], alt: { sad: 'flustered' } },
  taiga:    { name: '타이가',   hair: '#e8c450', outfit: '#3d3d3d', accent: '#c9961a', faces: ['angry', 'sad'] },
  himari:   { name: '히마리',   hair: '#5a3a2a', outfit: '#f3b6c9', accent: '#e0679a', faces: ['normal', 'crying'] },
  shiori:   { name: '???',      hair: '#121212', outfit: '#2b3550', accent: '#e9e3d3', faces: ['normal', 'point'], alt: { point: 'normal' } },
  komatsu:  { name: '코마츠',   hair: '#6a4a3a', outfit: '#d9c7a8', accent: '#d98aa0', faces: ['normal'] },
  akari:    { name: '아카리',   hair: '#2a3a3a', outfit: '#3f8f6a', accent: '#4fae96', faces: ['normal'] },
};

const BACKGROUNDS = {
  office:      { label: '잔상과 사무실 (경찰서 별관 창고)', sky: ['#2b2d35', '#4a4740'] },
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
  blank:   { name: '???', color: '#9a9a9a' },
};

const CUTS = {
  A: { owner: 'taiga', title: '초인종', sfx: '♪ ♫',
       desc: '5층 복도. 택배 상자를 옆구리에 낀 타이가가 초인종을 누른다. 문틈으로 피아노 소리, 문 옆엔 우산꽂이.',
       tags: { piano: 'on', box: 'holding', fall: 'before', taiga: 'door' } },
  B: { owner: 'mitsuru', title: '돌아봄',
       desc: '거실의 업라이트 피아노. 의자에 앉은 채 베란다 유리문 쪽으로 돌아보는 미츠루, 두 손은 무릎 위. 보면대에 펼친 악보, 얇은 커튼에 비친 작은 그림자.',
       tags: { piano: 'off', mitsuru: 'inside', fall: 'before' } },
  C: { owner: 'mitsuru', title: '손을 뻗음', bubble: 'burst',
       desc: '활짝 열린 유리문. 베란다로 뛰쳐나와 칸막이 쪽 난간으로 팔을 뻗는 미츠루. 난간 위에 운동화 신은 작은 발, 그 아래 바깥 턱에 반짝이는 것. 멀리 항구 불빛.',
       tags: { piano: 'off', mitsuru: 'reach', himari: 'railing', hairpin: 'ledge', fall: 'before' } },
  D: { owner: 'taiga', title: '쿵', sfx: '쿵!!',
       desc: '5층 복도. 문 앞에서 깜짝 놀라 돌아보는 타이가, 발치에 떨어진 상자. 화면 밖에서 커다란 소리.',
       tags: { box: 'dropped', fall: 'after', taiga: 'door', phone: 'unused' } },
  E: { owner: 'ookubo', title: '외침', bubble: 'burst',
       desc: '1층 현관 홀, 유리문 밖은 깜깜한 밤길. 계단에서 뛰쳐나오며 크게 외치는 타이가. 겁에 질린 얼굴, 빈 두 손.',
       tags: { fall: 'after', taiga: 'stairs' } },
  F: { owner: 'taiga', title: '배터리 0%',
       desc: '계단을 뛰어 내려가며 꺼진 휴대폰을 쥔 손. 화면에 배터리 0%. 이를 악문 타이가.',
       tags: { box: 'dropped', fall: 'after', taiga: 'stairs', phone: 'dead' } },
  G: { owner: 'himari', title: '날아간 머리핀',
       desc: '자기 집 베란다 바닥에 선 히마리가 "앗" 하고 손을 뻗는다. 바람에 음표 머리핀이 머리에서 빠져 하얀 칸막이 쪽으로 날아간다. 아래로 항구 불빛.',
       tags: { hairpin: 'flying', himari: 'floor', mitsuru: 'inside', fall: 'before' } },
  H: { owner: 'himari', title: '난간 위',
       desc: '칸막이 옆 화분을 밟고 난간 위로 올라선 히마리가 바깥 턱의 머리핀으로 손을 뻗는다. 등 뒤엔 닫힌 유리문, 불 켜진 커튼에 피아노 앞에 앉은 사람 그림자. 발아래 항구 야경.',
       tags: { hairpin: 'ledge', himari: 'railing', mitsuru: 'inside', fall: 'before' } },
  I: { owner: 'himari', title: '끌어당김',
       desc: '누군가의 팔이 히마리를 난간 안쪽 바닥으로 끌어당긴다. 히마리 주먹에 머리핀. 팔의 주인은 난간 바깥으로 기울어 있고, 옆에 하얀 칸막이. 발아래 항구 야경.',
       tags: { hairpin: 'hand', himari: 'safe', mitsuru: 'pull', fall: 'before' } },
  // 여백 컷: 아무것도 그려지지 않은 하얀 컷. 그림 파일이 없다(일부러 비어 있음).
  Y1: { owner: 'blank', title: '여백', blank: true,
        desc: '아무것도 그려지지 않은 하얀 칸. 가만히 보고 있으면, 누군가의 목소리가 들린다.', tags: {} },
};

const LINES = {
  L1: { text: '택배 왔나?', shape: 'round', from: '초인종 너머 혼잣말' },
  L2: { text: '구급차!', shape: 'burst', from: '오오쿠보가 들은 외침' },
  L3: { text: '히마리, 움직이지 마!', shape: 'burst', from: '히마리의 중얼거림' },
};

const PUZZLES = {
  page1: {
    title: '페이지 1 — 그날 밤, 5층',
    goal: '쿵 소리가 난 순간, 타이가는 어디에 있었나. 컷 4장을 일어난 순서로.',
    cuts: ['A', 'B', 'C', 'D'],
    solution: ['A', 'B', 'C', 'D'],
    bubbles: {},
    hint: '귀를 기울여 봐. 컷마다 들리는 게 달라.',
    rei: '경비원 말이랑 안 맞아. 1층으로 가자.',
  },
  page2: {
    title: '페이지 2 — 칸막이 너머',
    goal: '머리핀이 날아간 순간부터 타이가가 1층에 닿기 전까지. 6장만 쓴다.',
    cuts: ['A', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
    solution: ['G', 'H', 'C', 'I', 'D', 'F'],
    decoys: ['A', 'E'],
    bubbles: { C: 'L3' },
    hint: '작게 반짝이는 게 하나 있어. 컷마다 그게 어디 있는지 찾아 봐.',
    rei: '코하루, 과장님한테 전화해. 병원으로 가.',
  },
};

// 증인 (단간론파/역전재판식). 증언 하나가 모순이고, 거기에 맞는 컷을 들이민다.
const WITNESSES = {
  ookubo: {
    char: 'ookubo', bg: 'guardroom',
    goal: '오오쿠보의 증언에서 순서가 틀린 곳을 찾아라.',
    statements: [
      { text: '나는 그때 순찰 일지를 쓰고 있었지. 성실하게!', cut: 't_ookubo_1', dist: '미화',
        cutDesc: '책상에서 반듯하게 순찰 일지를 쓰는 오오쿠보. 주변에 반짝이와 꽃이 그려져 있다.',
        press: [['koharu', '근데… 뒤에 TV 켜져 있지 않았어요?'], ['ookubo', '야, 야구는 귀로 듣는 거야! 9회 말이었다고. 끝내기 홈런!', 'flustered']] },
      { text: '그 양키 놈이 뛰쳐나가더라고. 무서운 얼굴로!', cut: 't_ookubo_2', dist: '낙서',
        cutDesc: '계단에서 뛰쳐나오는 인물. 얼굴이 뿔 달린 괴물 낙서로 그려져 있다.',
        truthDesc: '겁에 질려 울 것 같은 얼굴로 뭔가 외치며 뛰쳐나오는 타이가.',
        press: [['rei', '그 사람, 뭐라고 하지 않았어요?'], ['ookubo', '뭐라고 소리쳤던 것 같기도 하고… 구급차? 몰라. 양키들은 원래 소리 지르잖아.']],
        gives: 'L2' },
      { text: '그러고 나서 쿵 소리가 났어. 그놈이 도망친 다음에!', cut: 't_ookubo_3',
        cutDesc: '화단 쪽에서 들려온 둔탁한 "쿵".',
        press: [['rei', '그 소리, 어디서 들었어요?'], ['ookubo', '여기 창밖, 화단 쪽! 확실해. 그놈이 나가고, 쿵.']] },
    ],
    answer: { statement: 2, cut: 'D' },
    shout: '순서가 틀렸어!',
    koharu: [['koharu', '오오쿠보 씨, 쿵 소리가 났을 때 타이가 씨가 어디 있었는지… 정말 보셨어요?', 'worried'], ['ookubo', '그, 그야… 음…', 'flustered']],
    rebut: '쿵 소리가 났을 때 이 사람은 5층에 있었어요. 문 밖에.',
    gives: 'L2', // 반박에 성공하면 외침 대사 조각을 확실히 얻는다 (파고들기를 안 했어도)
    success: [
      ['ookubo', '어? 그, 그럴 리가…', 'flustered'],
      ['ookubo', '그때 마침 끝내기 홈런이 터져서… 나도 TV 앞에서 와 하고 소리를 지르고 있었는데…', 'flustered'],
      ['ookubo', '그러고 보니 그 청년, 뛰쳐나오면서 "구급차!"라고 소리쳤던 것 같기도 하고…', 'flustered'],
      ['', '증언 컷의 낙서가 찢어지며 원래 얼굴이 드러난다.'],
      ['koharu', '이 얼굴… 겁에 질려 있어요.', 'worried'],
    ],
    peel: [1],
    // 2라운드: 첫 반박이 통하면 증인이 말을 바꾼다
    round2: {
      statements: [
        { text: '그, 그래도! 그놈이 5층에서 뭘 했는지는 아무도 모르잖아!', cut: 't_ookubo_2_truth',
          cutDesc: '(오오쿠보가 고쳐 본 기억) 겁먹은 얼굴로 외치며 뛰쳐나오는 타이가.',
          press: [['ookubo', '5층엔 사에키 선생이랑 코마츠 씨네밖에 안 살아. 나머지 둘은 빈집이고. 거기서 볼일이 뭐가 있어!', 'flustered']] },
      ],
      answer: { statement: 0, cut: ['A', 'D'] },
      shout: '그건 알 수 있어!',
      rebut: '배달하고 있었어요. 상자를 들고 초인종을 눌렀어요. 문 너머에선 피아노 소리가 났고요.',
      success: [
        ['ookubo', '피아노. 그래, 그 집 선생님 피아노…', 'flustered'],
        ['ookubo', '미안하다. 내가 괜히 그 청년을…', 'sad'],
      ],
      koharu: [['koharu', '(선배, 타이가 씨가 5층 문 앞에서 뭘 하고 있었는지 보여주는 컷이 있잖아요.)', 'worried']],
    },
    rewards: ['E'],
    wrong: [['ookubo', '그게 뭐? 그거랑 이거랑 무슨 상관이야!', 'flustered']],
    close: [['ookubo', '에잇, 됐어! 나 바빠! 다음에 와!', 'flustered'], ['koharu', '(아저씨 삐졌어요… 야구 끝나면 다시 와요, 선배.)', 'worried']],
  },
  taiga: {
    char: 'taiga', bg: 'interrogate', cg: 'cg_taiga_run',
    intro: [['tip', '말풍선이 빈 컷은 그대로는 증거가 안 된다. 반박할 때 대사 조각을 골라 채운다. 조각은 [파고들기]로 모은다.']],
    goal: '타이가가 숨기는 것을 찾아라.',
    statements: [
      { text: '배달 갔어요. 초인종 눌렀고.', cut: 't_taiga_1',
        cutDesc: '5층 초인종을 누르는 손. 문 너머에서 피아노 소리.',
        press: [['taiga', '안에서 피아노 소리가 났어요. 못 들었나 보다 했죠.', 'sad'], ['taiga', '그러다 "택배 왔나?" 하는 혼잣말이 들리고 피아노가 멎었어요. 나오나 보다 하고 계속 서 있었는데, 아무도 안 나왔어요.', 'sad']],
        gives: 'L1' },
      { text: '엄청 큰 소리가 났고.', cut: 't_taiga_2', dist: '과장',
        cutDesc: '화면 전체를 뒤덮는 거대한 "쿵".',
        press: [['taiga', '심장 떨어지는 줄 알았어요. 문 두드렸는데 대답이 없었어요.', 'sad']] },
      { text: '무서워서 도망쳤어요.', cut: 't_taiga_3', dist: '생략',
        cutDesc: '계단을 내려가는 뒷모습. 얼굴과 손 부분이 하얀 여백으로 비어 있다.',
        truthDesc: '꺼진 휴대폰을 쥐고 이를 악문 타이가. 화면에 배터리 0%.',
        press: [['rei', '어디로요?'], ['taiga', '밖으로요. 그게 다예요.', 'angry']] },
    ],
    answer: { statement: 2, cut: 'E', line: 'L2' },
    shout: '구급차를 부르고 있었잖아!',
    koharu: [['koharu', '타이가 씨, 내려가서… 뭘 하려고 했어요? 1층에서 누가 소리 지르는 걸 들은 사람이 있대요.', 'worried'], ['', '타이가가 대답 대신 입술을 깨문다.']],
    rebut: '1층에서 "구급차!"라고 외쳤잖아요. 경비원이 들었어요.',
    success: [
      ['', '타이가의 어깨가 굳는다.'],
      ['taiga', '대답이 없어서 계단으로 내려가는데, 계단참 창으로 화단에 사람이 누워 있는 게 보였어요.', 'sad'],
      ['taiga', '폰을 꺼냈는데 꺼져 있었어요. 배터리가 없어서.', 'sad'],
      ['taiga', '1층에서 경비실에 대고 구급차 부르라고 소리쳤는데 아무도 안 나왔어요. 안에서 TV 소리만 크게 나고.', 'sad'],
      ['taiga', '길 건너 편의점 불이 보여서 거기까지 뛰었어요. 내 폰 하나 못 챙겨서 남의 폰 빌린 거, 그게 쪽팔려서 말 안 했어요.', 'sad'],
      ['akari', '(전화) 네, 밤 9시 26분이요. 금발 남자분이 뛰어 들어와서 "구급차! 5층!" 하고… 폰이 꺼졌다고 해서 제 폰으로 걸었어요.'],
      ['akari', '(전화) 그분 계속 "빨리, 빨리" 했어요. 도망치는 사람 얼굴 아니었어요.'],
      ['kurogane', '(전화) 신고 기록과도 맞다.'],
      ['taiga', '다들 내가 도망쳤다고 하길래… 그냥 그렇게 두는 게 편했어요.', 'sad'],
    ],
    peel: [2],
    rewards: ['F'],
    wrong: [['taiga', '그래서요?', 'angry']],
    close: [['taiga', '나가 주세요.', 'angry'], ['koharu', '(문 닫혔어요. 숨 고르고 다시 해요, 선배.)', 'worried']],
  },
  himari: {
    char: 'himari', bg: 'himari_door', cg: 'cg_rescue', page: ['G', 'H', 'C', 'I'], pageCap: '그날 밤, 5층 베란다.',
    intro: [['tip', '이번에는 [반박!] 대신 [컷 보여주기]. 진실이 담긴 컷 하나를 골라 보여 준다.']],
    goal: '그날 밤 선생님이 히마리에게 무엇을 했는지, 그 순간의 컷을 보여 줘라.',
    gentle: true,
    statements: [
      { text: '계속 숙제했어요.', cut: 't_himari_1', dist: '크레용',
        cutDesc: '크레용으로 그린 책상과 숙제하는 히마리.',
        truthDesc: '숙제하다 말고 창밖을 보는 히마리.',
        press: [['himari', '…산수 숙제. 다 했어요.']] },
      { text: '엄마 기다렸어요.', cut: 't_himari_2', dist: '크레용',
        cutDesc: '창밖을 보며 엄마를 기다리는 히마리. 베란다가 방보다 크게 그려져 있다.',
        truthDesc: '자기 집 베란다 칸막이 옆에서, 칸막이 너머 옆집 난간 바깥 턱에 걸린 머리핀을 보는 히마리.',
        press: [['himari', '…엄마 늦게 와요.'], ['himari', '딩동 소리 나서, 엄마인 줄 알았어요. 근데 옆집이었어요. 그래서 베란다에서 길 내려다봤어요.'], ['himari', '(작게) …움직이지 말라고 했는데…', 'crying'], ['rei', '방금 뭐라고?', 'surprised'], ['himari', '아, 아무것도 아니에요!', 'crying']],
        gives: 'L3' },
      { text: '그리고 잤어요. 아무것도 몰라요.', cut: 't_himari_3', dist: '크레용',
        cutDesc: '새까맣게 칠해진 이불 속. 구석에 꽉 쥔 작은 주먹.',
        truthDesc: '이불 속에서 음표 머리핀을 꼭 쥐고 우는 히마리.',
        press: [['', '히마리가 계속 주먹을 꽉 쥐고 있다. 손가락 사이로 뭔가 반짝인다.']] },
    ],
    answer: { statement: 'any', cut: 'C', line: 'L3' },
    koharu: [['koharu', '히마리, 그거 예쁘다. 손에 쥔 거. 누가 준 거야?', 'happy'], ['himari', '…선생님이.'], ['koharu', '(선배, 그날 밤 선생님이 히마리한테 뭐라고 했을까요…)', 'worried']],
    rebut: '선생님은 네 이름을 불렀어.',
    success: [
      ['himari', '…!', 'crying'],
      ['', '크레용이 눈물처럼 번지며 벗겨진다.'],
      ['himari', '머리핀이… 날아가서… 선생님네 베란다 쪽으로 떨어져서…', 'crying'],
      ['himari', '칸막이 밑으로 기어 들어가서, 화분 밟고 올라갔는데…', 'crying'],
      ['himari', '선생님이 뛰어나와서 움직이지 말라고 하고… 나를 잡아당겼어요… 그리고…', 'crying'],
      ['himari', '나 때문에… 선생님이…', 'crying'],
      ['', '코하루가 히마리를 꼭 안아준다. 히마리가 주먹을 편다. 음표 머리핀.'],
    ],
    peel: [0, 1, 2],
    rewards: ['H', 'I'],
    wrong: [['himari', '…(훌쩍)', 'crying'], ['koharu', '서, 선배! 애를 너무 몰아붙이면…', 'worried']],
    close: [['himari', '으아앙…!', 'crying'], ['koharu', '(잠깐 쉬었다가 다시 해요.)', 'worried']],
  },
};

// choices: 그 질문에서 보여 줄 후보 컷 (정답 + 헷갈릴 만한 것)
const CONCLUSION = [
// answer: 질문에 맞는 컷은 전부 정답으로 받는다 (한 장만 고집하지 않는다)
  { q: '사에키 씨는 떨어지기 직전, 난간 너머로 무엇을 하고 있었나?', answer: ['C', 'I'], choices: ['B', 'G', 'H', 'I', 'C'] },
  { q: '반도 타이가는 사건 순간 어디에 있었나?', answer: ['D'], choices: ['A', 'E', 'D', 'F'] },
  { q: '반도 타이가는 왜 건물 밖으로 뛰쳐나갔나?', answer: ['F', 'E'], choices: ['D', 'A', 'F', 'E'] },
  { q: '사에키 씨가 떨어진 순간, 히마리는 어디에 있었나?', answer: ['I'], choices: ['G', 'H', 'C', 'I'] },
];

// 수첩의 인물 탭
const PROFILES = {
  rei: '잔상과 수사관. 감정이 남은 물건을 만지면 그 순간이 만화 컷처럼 보인다.',
  koharu: '오늘 잔상과에 배치된 신입 형사. 밝고, 사람 말을 잘 들어 준다.',
  kurogane: '잔상과 과장. 늘 막대사탕을 물고 있다.',
  towa: '모니터 너머에서 분석을 돕는 해커. 고양이 아님.',
  ookubo: '하나미즈키 맨션 경비원. 야구 중계를 좋아한다.',
  taiga: '택배 기사 반도 타이가. 쿵 소리 직후 건물을 뛰쳐나갔다.',
  himari: '옆집 코마츠 씨네 아홉 살 딸. 사에키 씨에게 피아노를 배운다.',
  asagiri: '구시가 언덕의 카페 「여백」 주인.',
  shiori: '교복 차림의 여자아이. 레이에게만 보이는 것 같다.',
  komatsu: '히마리의 엄마 코마츠 사키. 혼자 일하며 히마리를 키운다. 그날 밤은 야근이었다.',
  akari: '길 건너 편의점 점원 미나세 아카리. 그날 밤 타이가 대신 119에 전화했다.',
};

// 물증과 단어 조각 (장마다 data_chN.js가 Object.assign으로 더한다)
const ITEMS = {};
const WORDS = {};

// 증인의 모든 증언 (2라운드, 반박 뒤 바뀐 증언 포함). 컷 id가 같으면 처음 것만.
function allStatements(w) {
  const out = [...w.statements, ...((w.round2 || {}).statements || [])];
  (w.answers || []).forEach((a) => Object.values(a.changes || {}).forEach((s) => out.push(s)));
  return out.filter((s, i) => out.findIndex((t) => t.cut === s.cut) === i);
}
