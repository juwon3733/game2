// 5장 「편집자」 데이터. 기획: docs/12_story_plan.md §3 5장, docs/13_deduction_upgrade.md §3-5
// 진실: 코하루는 끌려간 게 아니라 스스로 렌을 만나러 걸어갔다(오빠 소타가 마지막에 무엇을 했는지 물으려고).
// 납치처럼 보이게 컷을 고친 건 렌. 레이를 폐창고로 부르려고. 편집장은 아사기리.

Object.assign(CHARACTERS, {
  tanabe: { name: '타나베', hair: '#3a3a3a', outfit: '#3a4a5a', accent: '#5a7a9a', faces: ['normal', 'confused'] },
});
// 앞 장 인물에게 새 표정
CHARACTERS.asagiri.faces.push('cold');
CHARACTERS.ren.faces.push('sad');
CHARACTERS.kurogane.faces.push('sad');
CHARACTERS.towa.faces.push('serious', 'real');
CHARACTERS.towa.alt = { real: 'serious' };
CHARACTERS.koharu.faces.push('crying');
CHARACTERS.koharu.alt = { crying: 'worried' };

Object.assign(BACKGROUNDS, {
  koharu_room:   { label: '코하루의 자취방', sky: ['#2a2a3a', '#7a6a8a'] },
  library:       { label: '시립 도서관 신문 열람실', sky: ['#3a3a30', '#9a8a6a'] },
  busstop:       { label: '하쿠요 본사 앞 버스정류장', sky: ['#2a2e3a', '#8a9aaa'] },
  warehouse:     { label: '항구 끝 폐창고', sky: ['#1a1a22', '#5a4a3a'] },
  warehouse_in:  { label: '폐창고 안', sky: ['#141418', '#4a3a2a'] },
  cafe_night:    { label: '카페 「여백」 (밤)', sky: ['#1a1410', '#6a4a2a'] },
});

Object.assign(TAG_ORDER, {
  day5: ['0410', '0900', '1200', '1210', '1800', '1830'],
  past5: ['2020', '2025', '2028', '2031', '2033', '2040'],
});
Object.assign(TAG_NAME, { day5: '오늘의 시각', past5: '6년 전의 시각' });

Object.assign(OWNERS, {
  koharu:   { name: '코하루', color: '#f2a14a' },
  tanabe:   { name: '타나베', color: '#5a7a9a' },
  sota:     { name: '소타', color: '#3a5aa0' },
  kurogane: { name: '쿠로가네', color: '#e07a9a' },
  ren:      { name: '렌', color: '#6ac0d0' },
  asagiri:  { name: '아사기리', color: '#8a5a3a' },
});

// edited: 편집된 컷. original: 이음매(restore)를 긁어내면 나오는 원본
// 그림이 없을 때 목록에 이름이 보이므로, 이음매 자리도 그림 속 물건 이름으로 부른다
const SEAM = (label, x, y, w, h) => ({ id: 'seam', label, x, y, w, h, restore: true });
Object.assign(CUTS, {
  '5Ae': { owner: 'koharu', title: '어질러진 방 (편집)', edited: true, original: '5A',
           desc: '부서진 문, 뒤집힌 책상. 누가 쳐들어온 방. 그런데 문 그림자만 반대쪽으로 떨어진다.',
           tags: { day5: '0410' }, spots: [{ id: 'desk', label: '뒤집힌 책상', x: 0.1, y: 0.5, w: 0.4, h: 0.4 }, SEAM('부서진 문과 그 그림자', 0.6, 0.1, 0.3, 0.5), { id: 'window', label: '창', x: 0.3, y: 0.05, w: 0.25, h: 0.3 }, { id: 'papers', label: '흩어진 종이', x: 0.3, y: 0.7, w: 0.3, h: 0.25 }] },
  '5A':  { owner: 'koharu', title: '메모',
           desc: '새벽 4시 10분. 정돈된 책상에서 메모를 쓰는 손. 「선배한테는 비밀」. 옆에 그을린 경찰 배지.',
           tags: { day5: '0410' } },
  '5Be': { owner: 'koharu', title: '검은 옷 (편집)', edited: true, original: '5B',
           desc: '열람실. 신문을 보는 코하루 뒤로 검은 옷의 남자 둘. 남자들 둘레만 스크린톤 점이 굵다.',
           tags: { day5: '0900' }, spots: [{ id: 'paper', label: '신문', x: 0.1, y: 0.5, w: 0.4, h: 0.4 }, { id: 'clock', label: '벽시계', x: 0.05, y: 0.05, w: 0.15, h: 0.2 }, SEAM('뒤에 선 남자들', 0.55, 0.1, 0.4, 0.6), { id: 'shelf', label: '서가', x: 0.3, y: 0, w: 0.25, h: 0.3 }] },
  '5B':  { owner: 'koharu', title: '신문',
           desc: '열람실 벽시계 9시. 6년 전 신문. 「등대 도서관 화재 — 순경 히나타 소타(24) 순직, 아이 한 명 구조」.',
           tags: { day5: '0900' } },
  '5Ce': { owner: 'koharu', title: '끌려감 (편집)', edited: true, original: '5C',
           desc: '정류장. 흰 장갑 낀 손들이 코하루를 승합차로 끌어당긴다. 손들만 선이 매끈하다.',
           tags: { day5: '1200' }, spots: [{ id: 'van', label: '승합차', x: 0.6, y: 0.4, w: 0.4, h: 0.5 }, { id: 'sign', label: '정류장 표지판', x: 0.05, y: 0.1, w: 0.15, h: 0.5 }, SEAM('끌어당기는 손들', 0.45, 0.25, 0.35, 0.45), { id: 'building', label: '본사 건물', x: 0.2, y: 0, w: 0.5, h: 0.25 }] },
  '5C':  { owner: 'koharu', title: '문자',
           desc: '하쿠요 본사 앞 정류장, 정오. 휴대폰 화면, 저장 안 된 번호로 보내는 문자 「지금 갈게요」. 웃고 있다.',
           tags: { day5: '1200' } },
  '5Ee': { owner: 'tanabe', title: '경비실 창 (편집)', edited: true, original: '5E',
           desc: '경비실 창 너머. 흰 코트가 아가씨의 팔을 잡아끈다. 흰 코트만 그림자가 없다.',
           tags: { day5: '1210' }, spots: [{ id: 'gate', label: '정문', x: 0.05, y: 0.3, w: 0.3, h: 0.6 }, SEAM('흰 코트', 0.4, 0.15, 0.3, 0.6), { id: 'girl', label: '끌려가는 아가씨', x: 0.7, y: 0.3, w: 0.25, h: 0.6 }] },
  '5E':  { owner: 'tanabe', title: '길 묻기',
           desc: '경비실 창 너머, 혼자 선 아가씨가 묻는다. 「항구 끝 폐창고가 어디예요?」 손목시계 12시 10분.',
           tags: { day5: '1210' } },
  '5De': { owner: 'koharu', title: '묶인 의자 (편집)', edited: true, original: '5D',
           desc: '폐창고 안, 의자에 묶인 코하루. 천장 전등 하나인데 그림자가 두 방향으로 진다.',
           tags: { day5: '1800' }, spots: [{ id: 'lamp', label: '천장 전등', x: 0.4, y: 0, w: 0.2, h: 0.2 }, SEAM('의자 아래 그림자', 0.3, 0.55, 0.4, 0.4), { id: 'rope', label: '밧줄', x: 0.4, y: 0.35, w: 0.2, h: 0.2 }, { id: 'crates', label: '쌓인 상자', x: 0.7, y: 0.2, w: 0.3, h: 0.5 }] },
  '5D':  { owner: 'koharu', title: '창고 문',
           desc: '해 질 녘, 혼자 폐창고로 걸어가는 시점. 문 앞에 흰 코트가 기다리고 있다. 6시.',
           tags: { day5: '1800' } },
  '5F':  { owner: 'ren', title: '찻잔',
           desc: '폐창고 안. 낡은 테이블에 찻잔 둘. 맞은편의 코하루가 그을린 배지를 내밀며 묻는다. 6시 반.',
           tags: { day5: '1830' } },
  '6Y1': { owner: 'sota', title: '연기',
           desc: '6년 전. 자전거 순찰 중 올려다본 곶의 등대 도서관. 창에서 연기. 손목시계 8시 20분.',
           tags: { past5: '2020' } },
  '6Y2': { owner: 'sota', title: '뛰어듦',
           desc: '도서관 문을 걷어차고 들어가는 시점. 서가 사이로 연기. 8시 25분.',
           tags: { past5: '2025' } },
  '6Y3': { owner: 'sota', title: '아이',
           desc: '계단 아래, 연기 속에서 아이를 안아 올린다. 아이의 오른손 검지에 잉크 얼룩. 8시 28분.',
           tags: { past5: '2028' } },
  '6Y4': { owner: 'kurogane', title: '멈춘 시계',
           desc: '도서관 입구. 순경에게서 아이를 받아 안는다. 손목시계가 8시 31분에 멈춰 있다.',
           tags: { past5: '2031' } },
  '6Y5': { owner: 'sota', title: '한 명 더',
           desc: '다시 연기 속으로 돌아서는 시점. 계단 위로 뛰어 올라가는 여자아이의 뒷모습. 8시 33분.',
           tags: { past5: '2033' } },
  '6Y6': { owner: 'ren', title: '불타는 창',
           desc: '도서관 밖 잔디밭. 한쪽 눈을 감싼 손. 불길이 위층 창을 삼킨다. 8시 40분.',
           tags: { past5: '2040' } },
});

Object.assign(ITEMS, {
  history: { title: '노트북 검색 기록', desc: '「등대 도서관 화재 6년 전」 「히나타 소타 순직」 「흰 명함 빈 말풍선」 「하쿠요 본사 위치」. 마지막 검색 새벽 3시 58분.' },
  badge:   { title: '그을린 경찰 배지', desc: '이름표 「히나타 소타」. 잔상과 선반의 「6년 전 / 등대」 상자에 있던 것. 코하루가 들고 나갔다.' },
});

Object.assign(WORDS, {
  p_koharu: { text: '코하루 자신', cat: 'person' }, p_ren: { text: '렌', cat: 'person' }, p_tanabe: { text: '경비원', cat: 'person' },
  p_sota: { text: '히나타 소타', cat: 'person' }, p_rei: { text: '어린 레이', cat: 'person' },
  pl_busstop: { text: '본사 앞 정류장', cat: 'place' }, pl_warehouse: { text: '폐창고', cat: 'place' },
  a_walk: { text: '혼자 걸어갔다', cat: 'act' }, a_drag: { text: '끌려갔다', cat: 'act' }, a_return: { text: '다시 들어갔다', cat: 'act' },
});

Object.assign(PUZZLES, {
  page5a: {
    title: '페이지 1 — 코하루가 간 길',
    goal: '새벽부터 오후까지, 코하루가 지나간 길. 편집된 컷은 쓰지 않는다.',
    cuts: ['5A', '5B', '5C', '5E', '5Ae', '5Be', '5Ce', '5Ee'],
    solution: ['5A', '5B', '5C', '5E'],
    decoys: ['5Ae', '5Be', '5Ce', '5Ee'],
    decoyMsg: '번 컷은 편집된 컷이야. 원고에는 원본만 써.',
    bubbles: {},
    hint: '편집된 컷엔 이음매가 있어. 그리고 같은 장면의 원본이 꼭 하나 있어.',
    rei: '정류장에서도, 경비실 앞에서도 혼자야. 웃고 있어.',
  },
  page5b: {
    title: '최종 재구성 — 오늘, 그리고 6년 전',
    goal: '두 페이지. 1쪽은 오늘 코하루가 간 길, 2쪽은 6년 전 등대 도서관의 밤.',
    cuts: ['5A', '5B', '5C', '5E', '5D', '5F', '6Y1', '6Y2', '6Y3', '6Y4', '6Y5', '6Y6', '5Ce', '5De'],
    solution: ['5A', '5B', '5C', '5E', '5D', '5F', '6Y1', '6Y2', '6Y3', '6Y4', '6Y5', '6Y6'],
    decoys: ['5Ce', '5De'],
    decoyMsg: '번 컷은 편집된 컷이야. 원고에는 원본만 써.',
    pageBreak: 6,
    bubbles: {},
    hint: '6년 전 쪽은 손목시계 둘. 순경의 시계와, 멈춘 시계.',
    rei: '불 속에서 나를 업고 나온 사람이 있었어. 그 사람은 다시 들어갔고.',
  },
});

Object.assign(WITNESSES, {
  tanabe: {
    char: 'tanabe', bg: 'busstop', face: 'normal',
    goal: '경비원의 기억도 고쳐져 있다. 원본으로 깨라.',
    statements: [
      { text: '흰 코트가 아가씨 팔을 잡아끌고 갔습니다. 똑똑히 봤어요.', cut: '5Ee', truthCut: '5E',
        press: [['tanabe', '근데 이상하게 그 장면만 생각하면 머리가 아파요.', 'confused']] },
      { text: '아가씨는 겁에 질려 울고 있었고요.', cut: 't_tanabe_2',
        cutDesc: '정류장 벤치. 우는 얼굴의 아가씨. 얼굴 부분만 다른 그림처럼 매끈하다.',
        press: [['tanabe', '그랬던… 것 같아요.', 'confused']] },
    ],
    answers: [
      { statement: 0, cut: '5E', shout: '혼자였어!',
        rebut: '경비실 창에 남은 원본이에요. 아가씨는 혼자 서서 길을 물었어요. "폐창고가 어디예요?"',
        success: [['tanabe', '아. 그랬어요. 길을 물었어요. 제가 손가락으로 항구 쪽을 가리켰고.', 'confused']],
        peel: [0], words: ['a_walk', 'pl_warehouse'] },
      { statement: 1, cut: '5C', shout: '웃고 있었어!',
        rebut: '정류장에서 문자를 보내는 아가씨. 「지금 갈게요」. 웃고 있었어요.',
        success: [['tanabe', '그러게요. 웃고 있었어요. 이상하다… 분명히….', 'confused'], ['towa', '누가 이 사람 기억에도 손을 댔어. 깔끔하게.']] },
    ],
    koharu: [['towa', '원본 복원한 컷 중에 정류장 근처가 있었지.']],
    wrong: [['tanabe', '그, 그런가요?', 'confused']],
    close: [['tanabe', '죄송합니다. 근무 중이라….', 'normal']],
  },
  ren: {
    char: 'ren', bg: 'warehouse_in', face: 'smile', bgm: 'editor', editor: true, inkPenalty: 'renAccused',
    goal: '편집 대결. 렌은 증언 컷을 눈앞에서 고쳐 그린다. 고칠 때마다 생기는 이음매를 짚어라.',
    intro: [['towa', '렌이 고치는 건 내가 따라잡을 수 있어.'], ['tip', '렌이 증언 컷을 실시간으로 고친다. 고칠 때마다 생기는 이음매를 바로 짚는다.'], ['ren', '오랜만에 같이 읽자, 시노노메.', 'smile']],
    statements: [
      { text: '코하루는 내가 데려왔어. 억지로.', cut: 't_ren_1', dist: '편집',
        cutDesc: '흰 코트가 코하루의 손목을 끌고 창고로 들어간다. 손목 둘레만 선이 굵다.',
        spots: [{ id: 'wrist', label: '손목 둘레', x: 0.4, y: 0.35, w: 0.25, h: 0.25 }, { id: 'door', label: '창고 문', x: 0.7, y: 0.1, w: 0.25, h: 0.7 }, { id: 'sky', label: '하늘', x: 0, y: 0, w: 0.6, h: 0.25 }],
        press: [['ren', '납치범은 원래 이렇게 말하잖아?', 'smile']] },
      { text: '6년 전? 그 불은 사고야. 너는 감기로 집에 누워 있었지.', cut: 't_ren_2', dist: '편집',
        cutDesc: '이불 속에서 열에 시달리는 어린아이. 벽 달력의 날짜 칸만 종이 질감이 다르다.',
        spots: [{ id: 'calendar', label: '달력 날짜 칸', x: 0.7, y: 0.05, w: 0.2, h: 0.25 }, { id: 'bed', label: '이불', x: 0.1, y: 0.5, w: 0.6, h: 0.45 }],
        press: [['ren', '다들 그렇게 기억하잖아. 너도.', 'normal']] },
    ],
    answers: [
      { statement: 0, spot: 'wrist', shout: '거기 붙였어!',
        rebut: '손목 둘레만 선 굵기가 달라. 끌고 가는 손은 나중에 붙인 거야.',
        success: [['ren', '역시 눈은 좋네.', 'smile']],
        editLines: [['ren', '그럼 이렇게 고치지.', 'smile']],
        changes: { 0: { text: '좋아, 스스로 왔다고 쳐. 근데 돌려보낼 생각은 없었어.', cut: 't_ren_1b', dist: '편집',
          cutDesc: '창고 안, 쇠창살 너머의 코하루. 창살의 그림자만 바닥과 어긋난다.',
          spots: [{ id: 'bars', label: '창살 그림자', x: 0.3, y: 0.6, w: 0.4, h: 0.35 }, { id: 'face', label: '코하루 얼굴', x: 0.4, y: 0.2, w: 0.2, h: 0.25 }],
          press: [['ren', '창살은 마음에 들어?', 'smile']] } } },
      { statement: 0, spot: 'bars', requires: [0], shout: '그림자가 어긋났어!',
        rebut: '창살은 서 있는데 그림자는 바닥에 비스듬해. 창살도 나중에 그렸어. 코하루는 갇힌 적 없어.',
        success: [['ren', '그래. 차를 내줬지. 그 아이가 오빠 얘길 물어서.', 'normal']],
        editLines: [['ren', '그럼 6년 전 얘기로 넘어가자.', 'normal']] },
      { statement: 1, spot: 'calendar', requires: [1], shout: '날짜를 고쳤어!',
        rebut: '달력 날짜 칸만 종이 질감이 달라. 다른 날 앓아누운 그림에 「8월 31일」만 덧붙인 거야.',
        success: [['ren', '…….', 'sad']],
        editLines: [['ren', '알았어. 그럼 네가 믿어 온 대로 그려 줄게.', 'sad']],
        changes: { 1: { text: '그래, 너도 거기 있었어. 그리고 시오리를 두고 도망쳤지.', cut: 't_ren_2b', dist: '편집',
          cutDesc: '불타는 서가 사이로 혼자 달아나는 아이의 뒷모습.',
          press: [['ren', '그게 네가 믿는 그림이잖아. 6년 동안.', 'sad']] } } },
      { statement: 1, cut: '6Y3', requires: [2], shout: '그 아이, 계단 아래에 있었어!',
        rebut: '소타 순경 배지에 남은 컷이야. 계단 아래에서 안아 올린 아이, 오른손 검지에 잉크가 묻어 있어. …나야. 그때 나는 거기, 연기 속에 있었어.',
        success: [
          ['ren', '…….', 'sad'],
          ['ren', '6년 전 네 하루를 지운 건 나야.', 'sad'],
          ['ren', '네가 부탁했어. 병원에서. 「다 잊게 해 줘」라고.', 'sad'],
        ], words: ['p_rei', 'a_rescue'], cg: 'cg_sota' },
    ],
    rewards: ['5F', '6Y5', '6Y6'],
    koharu: [['koharu', '(선배, 오빠 배지에서 읽은 컷… 아이를 안아 올리는 거.)', 'worried']],
    wrong: [['ren', '틀렸어. 다시 고쳐 줄까?', 'smile']],
    close: [['ren', '오늘은 여기까지. 지쳤잖아.', 'normal'], ['koharu', '(선배, 다시 해요!)', 'worried']],
  },
  asagiri5: {
    char: 'asagiri', bg: 'cafe_night', face: 'normal',
    goal: '6년 동안 똑같던 말. 그 이음매를 짚어라.',
    intro: [['towa', '레이. 이 컷, 이음매가 거의 없어. 근데 거의, 야.']],
    statements: [
      { text: '힘든 건 잊어도 돼.', cut: 't_asagiri_1',
        cutDesc: '카운터 너머로 단 커피를 내미는 손. 6년 동안 매번 같은 각도, 같은 김.',
        spots: [{ id: 'cup', label: '커피잔', x: 0.4, y: 0.5, w: 0.2, h: 0.25 }, { id: 'ring', label: '약지의 하얀 자국', x: 0.55, y: 0.4, w: 0.12, h: 0.12 }, { id: 'steam', label: '김', x: 0.4, y: 0.25, w: 0.2, h: 0.2 }],
        press: [['asagiri', '레이한테는 늘 이 말을 하고 싶었어.', 'normal']] },
    ],
    answers: [
      { statement: 0, spot: 'ring', shout: '그 자국!',
        rebut: '약지의 반지 자국. 6년 동안 같은 장면을 붙여 쓴 컷인데, 이 자국만 해마다 옅어져요. 아사기리 씨도 뭔가를 계속 지우고 있었던 거예요.',
        success: [
          ['asagiri', '…….', 'cold'],
          ['asagiri', '잘 읽네, 레이. 내가 가르친 대로.', 'cold'],
        ] },
    ],
    koharu: [['towa', '손가락. 약지를 봐.']],
    wrong: [['asagiri', '커피 식겠다.', 'normal']],
    close: [['asagiri', '오늘은 문 닫을 시간이야.', 'normal']],
  },
});

const NAME5_MID = [
  '코하루를 폐창고로 데려간 사람은 ', { cat: 'person', a: 'p_koharu' }, '. ', { cat: 'place', a: 'pl_busstop' }, '에서 ', { cat: 'act', a: 'a_walk' }, '.',
];
const NAME5_FINAL = [
  '그날 코하루는 ', { cat: 'place', a: 'pl_busstop' }, '에서 폐창고까지 ', { cat: 'act', a: 'a_walk' }, '. 컷을 ', { cat: 'act', a: 'a_edit' }, ' 사람은 ', { cat: 'person', a: 'p_ren' }, '.\n',
  '6년 전, ', { cat: 'person', a: 'p_sota' }, '는 불 속에서 ', { cat: 'person', a: 'p_rei' }, '를 ', { cat: 'act', a: 'a_rescue' }, '. 그리고 ', { cat: 'act', a: 'a_return' }, '.',
];

Object.assign(PROFILES, {
  tanabe: '하쿠요 본사 정문 경비원 타나베. 코하루를 마지막으로 본 사람.',
});
