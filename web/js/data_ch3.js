// 3장 「둘 중 하나」 데이터. 기획: docs/12_story_plan.md §3 3장, docs/13_deduction_upgrade.md §3-4
// 진실: 마감한 "유키"는 처음부터 동생 나기(유키 행세). 유키는 미술 학원. 봉투를 가져간 건 점술가 마도카.
// 마도카의 "미래 컷" 3장 중 2장은 누군가 나중에 고쳐 그린 가짜.

Object.assign(CHARACTERS, {
  yuki:    { name: '유키',     hair: '#2a2f3a', outfit: '#f2e6d0', accent: '#38a3a5', faces: ['normal', 'crying', 'smile'] },
  nagi:    { name: '나기',     hair: '#2a2f3a', outfit: '#f2e6d0', accent: '#38a3a5', faces: ['normal', 'scared', 'crying'] },
  // 유키 행세를 하는 나기: 유키의 그림을 빌려 쓴다
  yukin:   { name: '유키',     hair: '#2a2f3a', outfit: '#f2e6d0', accent: '#38a3a5', faces: ['normal', 'crying', 'smile'] },
  madoka:  { name: '마도카',   hair: '#4a2a5a', outfit: '#2a1f3a', accent: '#7d4fd1', faces: ['smile', 'normal', 'cornered', 'crying'] },
  tofu:    { name: '두부집 할머니', hair: '#d8d4cc', outfit: '#6a7a8a', accent: '#8f9a4a', faces: ['normal', 'surprised'] },
  ren:     { name: '???',      hair: '#e8e8ee', outfit: '#f4f4f4', accent: '#c8c8d8', faces: ['smile', 'normal'] },
});

Object.assign(BACKGROUNDS, {
  tokiwa_shop: { label: '토키와 양과점 매장 (밤)', sky: ['#2a1f1a', '#8a6a4a'] },
  storage:     { label: '토키와 양과점 2층 창고 계단', sky: ['#1e1e22', '#4a4a44'] },
  arcade:      { label: '츠키미나토 아케이드 상점가 (밤)', sky: ['#141a2e', '#6a4a3a'] },
  booth3:      { label: '아케이드 타로 점술 부스', sky: ['#1a0f22', '#5a3a6a'] },
  academy:     { label: '역 앞 미술 입시 학원', sky: ['#2a2a30', '#9a9a8a'] },
  arcade_exit: { label: '아케이드 출구 (밤)', sky: ['#0e1222', '#4a4a6a'] },
});

Object.assign(TAG_ORDER, {
  clock: ['1500', '2050', '2100', '2105', '2110', '2112', '2115', '2120', '2125'],
});
Object.assign(TAG_NAME, { clock: '시계' });

// 쌍둥이 둘은 시점 색이 같다 (누구 시점인지는 그림 속 손·발목으로 가려낸다)
Object.assign(OWNERS, {
  twin:     { name: '스즈네', color: '#38a3a5' },
  yukin:    { name: '유키', color: '#38a3a5' },
  nagi:     { name: '나기', color: '#38a3a5' },
  hasegawa: { name: '하세가와', color: '#c4703a' },
  madoka:   { name: '마도카', color: '#7d4fd1' },
  tofu:     { name: '두부집 할머니', color: '#8f9a4a' },
});

Object.assign(CUTS, {
  '3A': { owner: 'twin', title: '셔터',
          desc: '밤의 양과점. 오른쪽 리본을 단 점원이 셔터를 내린다. 벽시계 8시 50분. 발목에 흰 반창고.',
          tags: { clock: '2050' },
          spots: [{ id: 'ankle', label: '발목', x: 0.4, y: 0.8, w: 0.15, h: 0.18, word: 'th_bandage' }, { id: 'clock', label: '벽시계', x: 0.75, y: 0.05, w: 0.18, h: 0.25, word: 't_2050' }, { id: 'ribbon', label: '오른쪽 리본', x: 0.45, y: 0.1, w: 0.15, h: 0.15 }] },
  '3B': { owner: 'twin', title: '정산',
          desc: '계산대에서 지폐를 세고 장부에 적는다. 펜을 쥔 건 오른손. 계산대 화면 21:00.',
          tags: { clock: '2100' },
          spots: [{ id: 'hand', label: '펜을 쥔 손', x: 0.35, y: 0.5, w: 0.25, h: 0.3, word: 'th_righthand' }, { id: 'clock', label: '계산대 화면', x: 0.7, y: 0.1, w: 0.25, h: 0.2, word: 't_2100' }] },
  '3G': { owner: 'twin', title: '발견',
          desc: '창고 계단 아래. 쓰러진 사람의 다리. 내려다보는 앞치마 자락이 굳은 듯 멈춰 있다. 벽시계 9시 15분. 발목에 반창고.',
          tags: { clock: '2115' },
          spots: [{ id: 'clock', label: '벽시계', x: 0.05, y: 0.05, w: 0.2, h: 0.25, word: 't_2115' }, { id: 'ankle', label: '발목', x: 0.55, y: 0.78, w: 0.15, h: 0.2, word: 'th_bandage' }] },
  '3H': { owner: 'twin', title: '신고',
          desc: '떨리는 손의 휴대폰 화면. 「119 통화 중」, 위쪽 시계 21:25. 손목 너머로 반창고 붙인 발목.',
          tags: { clock: '2125' } },
  '3K': { owner: 'twin', title: '근무표',
          desc: '낮의 매장. 벽에 이번 주 근무표를 붙이는 오른손. 창으로 햇빛. 벽시계 3시.',
          tags: { clock: '1500' } },
  '3E': { owner: 'twin', title: '학원',
          desc: '미술 학원 실기실. 이젤 앞에서 왼손으로 목탄을 쥐고 석고상을 그린다. 벽시계 9시. 발목엔 아무것도 없다.',
          tags: { clock: '2100' },
          spots: [{ id: 'hand', label: '목탄을 쥔 손', x: 0.3, y: 0.45, w: 0.25, h: 0.3, word: 'th_lefthand' }, { id: 'clock', label: '벽시계', x: 0.75, y: 0.05, w: 0.2, h: 0.22, word: 't_2100' }] },
  '3F': { owner: 'twin', title: '막차 전',
          desc: '역 승강장. 화판을 멘 채 왼손으로 휴대폰을 본다. 역 시계 9시 25분. 나기에게 보내는 메시지 「오늘도 고마워」.',
          tags: { clock: '2125' } },
  '3C': { owner: 'hasegawa', title: '계단 위',
          desc: '계단 아래에서 올려다본 2층. 별무늬 숄을 두른 사람이 봉투를 낚아채 돌아선다. 손목시계 9시 10분.',
          tags: { clock: '2110' },
          spots: [{ id: 'shawl', label: '별무늬 숄', x: 0.4, y: 0.15, w: 0.3, h: 0.35, word: 'th_shawl' }, { id: 'watch', label: '손목시계', x: 0.05, y: 0.7, w: 0.2, h: 0.25, word: 't_2110' }] },
  '3D': { owner: 'hasegawa', title: '바닥에서',
          desc: '흐릿한 시야. 바닥에서 올려다본 앞치마 차림. 휴대폰을 쥔 채 떨며 서 있다. 벽시계 9시 20분. 발목의 반창고.',
          tags: { clock: '2120' } },
  '3J': { owner: 'tofu', title: '뒷골목',
          desc: '두부집 진열대 너머 아케이드. 별무늬 숄을 두른 사람이 양과점 뒷골목에서 뛰어나온다. 가게 시계 9시 22분.',
          tags: { clock: '2112' } },
  F1: { owner: 'madoka', title: '미래 컷 1',
        desc: '「미래 컷」. 오른쪽 리본 점원이 상자를 안고 창고 계단을 오른다. 계단참 시계 9시 5분.',
        tags: { clock: '2105' } },
  F2: { owner: 'madoka', title: '미래 컷 2',
        desc: '「미래 컷」. 오른쪽 리본 점원이 창고에서 봉투를 움켜쥔다. 손 둘레만 스크린톤 점이 촘촘하다.',
        tags: { clock: '2110' },
        spots: [{ id: 'seam', label: '봉투를 쥔 손 둘레', x: 0.35, y: 0.4, w: 0.3, h: 0.3, word: 'a_edit' }, { id: 'ribbon', label: '오른쪽 리본', x: 0.5, y: 0.08, w: 0.15, h: 0.15 }] },
  F3: { owner: 'madoka', title: '미래 컷 3',
        desc: '「미래 컷」. 계단 위에서 누군가의 등을 미는 손. 손 그림자만 아래쪽으로 떨어진다.',
        tags: { clock: '2110' },
        spots: [{ id: 'shadow', label: '손 그림자', x: 0.45, y: 0.15, w: 0.25, h: 0.2, word: 'a_push3' }, { id: 'hand', label: '미는 손', x: 0.35, y: 0.35, w: 0.25, h: 0.3 }] },
});

Object.assign(ITEMS, {
  roster:  { title: '근무표와 직원 메모', desc: '8/27 마감: 유키. 메모: 「유키 — 왼손잡이라 계산대 왼쪽에. 나기 — 지난주 발목 삠, 무리시키지 말 것.」' },
  ledger:  { title: '매상 장부', desc: '8/27 21:00 정산 42만 엔. 「금고 입금」 칸이 비어 있다. 글씨는 오른쪽으로 기운 오른손 글씨.' },
  debt:    { title: '독촉장', desc: '점술 부스 서랍 속 소비자 금융 독촉장. 「8/31까지 40만 엔」. 수신: 미즈시마 마도카.' },
  sequin:  { title: '별 스팽글', desc: '양과점 뒷문 앞 배수구에 걸린 은색 별 스팽글. 마도카의 숄과 같은 모양.' },
  tone:    { title: '오려 낸 스크린톤', desc: '부스 쓰레기통 속 스크린톤 조각. 손 모양으로 오려 낸 구멍이 나 있다. 미래 컷 2의 이음매와 점 간격이 같다.' },
});

Object.assign(WORDS, {
  p_yuki: { text: '유키', cat: 'person' }, p_nagi: { text: '나기', cat: 'person' }, p_madoka: { text: '마도카', cat: 'person' },
  p_hasegawa: { text: '점장', cat: 'person' }, p_tofu: { text: '두부집 할머니', cat: 'person' },
  t_2050: { text: '20시 50분', cat: 'time' }, t_2100: { text: '21시', cat: 'time' }, t_2110: { text: '21시 10분', cat: 'time' },
  t_2115: { text: '21시 15분', cat: 'time' }, t_10min: { text: '10분', cat: 'time' },
  pl_storage: { text: '창고 계단', cat: 'place' }, pl_counter: { text: '계산대', cat: 'place' }, pl_academy: { text: '미술 학원', cat: 'place' },
  pl_booth3: { text: '점술 부스', cat: 'place' }, pl_alley: { text: '뒷골목', cat: 'place' },
  th_envelope: { text: '매상 봉투', cat: 'thing' }, th_shawl: { text: '별무늬 숄', cat: 'thing' }, th_bandage: { text: '발목 반창고', cat: 'thing' },
  th_righthand: { text: '오른손 글씨', cat: 'thing' }, th_lefthand: { text: '왼손 목탄', cat: 'thing' },
  a_take: { text: '가져갔다', cat: 'act' }, a_push3: { text: '밀었다', cat: 'act' }, a_hesitate: { text: '망설였다', cat: 'act' },
  a_edit: { text: '고쳐 그렸다', cat: 'act' }, a_swap: { text: '대신 일했다', cat: 'act' },
});

Object.assign(PUZZLES, {
  page3a: {
    title: '페이지 1 — 마감 뒤',
    goal: '셔터를 내린 때부터 신고까지. 4장만 쓴다.',
    cuts: ['3A', '3B', '3G', '3H', '3K'],
    solution: ['3A', '3B', '3G', '3H'],
    decoys: ['3K'],
    bubbles: {},
    hint: '시계를 봐. 벽시계, 계산대 화면, 휴대폰.',
    rei: '…발견이 9시 15분. 신고는 25분. 그 사이 10분이 비어 있어.',
  },
  time3: {
    timeline: true,
    title: '시각표 — 8월 27일 밤, 쌍둥이',
    goal: '유키와 나기, 둘의 그날 밤. 컷 속 시계와 손·발목으로 누구의 몇 시인지 채운다.',
    times: ['20:50', '21:00', '21:15', '21:25'],
    rows: [{ who: '유키', cells: [null, '3E', null, '3F'] }, { who: '나기', cells: ['3A', '3B', '3G', '3H'] }],
    cuts: ['3A', '3B', '3G', '3H', '3E', '3F'],
    hint: '유키 씨는 왼손잡이. 나기 씨는 지난주 발목을 삐었어. 그림 속 손과 발을 봐.',
    rei: '…유키 씨는 그 시각 학원에 있었어. 가게의 「유키」는 처음부터 나기 씨였어.',
  },
  page3c: {
    discard: true,
    title: '최종 재구성 — 8월 27일, 셔터부터 신고까지',
    goal: '그날 밤을 순서대로. 넓은 칸은 같은 순간의 두 장. 누군가 고쳐 그린 가짜는 파기 칸에 버린다.',
    cuts: ['3A', '3B', '3E', 'F1', '3C', '3J', '3G', '3D', '3H', '3F', 'F2', 'F3'],
    solution: ['3A', ['3B', '3E'], 'F1', '3C', '3J', '3G', '3D', ['3H', '3F'], ['F2', 'F3']],
    bubbles: {},
    hint: '시계가 전부 말해 줘. 두부집 시계만 10분 빨라. 그리고 가짜는 이음매가 있어.',
    rei: '…누구의 하루였는지, 이제 알겠어. 둘이 하나의 하루를 나눠 살았어.',
  },
});

Object.assign(WITNESSES, {
  tofu: {
    char: 'tofu', bg: 'arcade', face: 'normal',
    goal: '할머니의 기억 속 시각을 바로잡아라.',
    intro: [['towa', '시계가 나오는 증언이야. 사람 기억보다 그림 속 시계를 믿어.']],
    statements: [
      { text: '양과점 셔터 내리는 소리가 9시 정각이었어. 우리 집 시계로 똑똑히 봤지.', cut: 't_tofu_1',
        cutDesc: '두부집 벽시계가 9시를 가리킨다. 건너편에서 드르륵 셔터 소리.',
        press: [['tofu', '우리 집 시계는 한 번도 안 틀렸어. 남편이 맞춰 둔 거야.', 'normal']] },
      { text: '그러고 한참 뒤, 9시 20분쯤엔 별무늬 숄 걸친 아가씨가 뒷골목에서 뛰어나왔지.', cut: 't_tofu_2',
        cutDesc: '두부집 시계 9시 20분 무렵. 반짝이는 숄 자락이 골목으로 사라진다.',
        press: [['tofu', '반짝반짝한 숄이었어. 점 보는 아가씨들이 그런 걸 두르잖아.', 'normal']], words: ['th_shawl', 'pl_alley'] },
      { text: '그날 가게 본 건 오른쪽 리본 단 아가씨였어. 쌍둥이 중 누군지는 몰라도 리본은 똑똑히 봤어.', cut: 't_tofu_3',
        cutDesc: '오른쪽 리본을 단 점원이 웃으며 손을 흔든다.',
        press: [['tofu', '언니가 유키, 동생이 나기. 리본이 언니는 오른쪽, 동생은 왼쪽.', 'normal'], ['tofu', '동생은 지난주에 발목 삐었다던데. 그래서 요새 언니만 나오나 봐.', 'normal']],
        words: ['p_nagi', 'th_bandage'] },
    ],
    answers: [
      { statement: 0, cut: '3A', shout: '셔터는 8시 50분이에요!',
        rebut: '셔터를 내릴 때 가게 벽시계는 8시 50분이었어요. 할머니 댁 시계가 10분 빨라요.',
        success: [
          ['tofu', '아이고. 그럼 우리 집 시계가 10분 빨랐던 거야?', 'surprised'],
          ['tofu', '그럼 그 숄 아가씨가 뛰어나온 것도 9시 20분이 아니라 9시 10분쯤이네.', 'surprised'],
        ],
        peel: [0], words: ['t_2110', 'p_tofu'] },
    ],
    rewards: ['3J'],
    koharu: [['koharu', '(선배, 셔터 내리는 컷… 가게 벽에도 시계가 있었죠.)', 'worried']],
    wrong: [['tofu', '응? 그게 뭐 어쨌다고?', 'normal']],
    close: [['tofu', '아이고, 두부 다 굳겠네. 다음에 와.', 'normal'], ['koharu', '(…처음부터 다시 들어요, 선배.)', 'worried']],
  },
  yukin: {
    char: 'yukin', bg: 'interrogate', face: 'normal',
    goal: '지금 말하고 있는 「유키」는 누구인가.',
    intro: [['towa', '이 사람이 누구인지는 얼굴 말고 다른 데에 그려져 있어.'], ['tip', '반박할 때 증언 컷 속 한 곳을 직접 짚을 수 있다.']],
    statements: [
      { text: '그날 마감은 제가 했어요. 근무표대로요.', cut: 't_yukin_1',
        cutDesc: '셔터 앞에 선 오른쪽 리본의 점원. 화면 아래쪽에 발목이 걸쳐 있다.',
        spots: [{ id: 'ankle', label: '화면 아래 발목', x: 0.35, y: 0.78, w: 0.25, h: 0.2 }, { id: 'ribbon', label: '오른쪽 리본', x: 0.45, y: 0.05, w: 0.2, h: 0.15 }, { id: 'clock', label: '벽시계', x: 0.78, y: 0.05, w: 0.18, h: 0.22 }],
        press: [['yukin', '마감은 늘 제가 해요.', 'normal']] },
      { text: '정산하고, 봉투는 금고에 넣었어요.', cut: 't_yukin_2', dist: '미화',
        cutDesc: '반짝이는 금고에 봉투를 넣는 손. 너무 깔끔하다.',
        press: [['yukin', '넣었어요. 넣었다니까요.', 'crying']] },
      { text: '점장님을 발견하고… 그다음 10분은 잘 기억이 안 나요.', cut: 't_yukin_3', dist: '생략',
        cutDesc: '가게 문을 나서는 뒷모습. 그 앞 10분이 하얀 여백.', truthCut: '3G',
        press: [['yukin', '몰랐어요.', 'crying']] },
    ],
    answers: [
      { statement: 0, spot: 'ankle', cut: ['3E', 'ledger'], shout: '당신은 유키 씨가 아니야!',
        rebut: '학원에 있던 유키 씨 발목엔 반창고가 없었어요. 왼손잡이인 유키 씨와 달리 장부는 오른손 글씨였고요. 당신은 나기 씨죠.',
        success: [
          ['yukin', '…….', 'crying'],
          ['', '오른쪽 리본이 풀린다. 「유키」가 그걸 왼쪽에 다시 묶는다.'],
          ['yukin', '나기예요. 한 달 전부터 언니 대신 나왔어요.', 'crying'],
          ['yukin', '언니는 미술 학원에 다녀요. 점장님한텐 비밀로. 언니가 그만두면 가게가 힘들어지니까… 제가 언니인 척하기로 했어요.', 'crying'],
        ],
        peel: [0], words: ['a_swap', 'p_nagi'] },
      { statement: 1, cut: 'ledger', requires: [0], shout: '봉투는 금고에 없었어!',
        rebut: '장부의 「금고 입금」 칸이 비어 있어요. 봉투는 금고에 들어가지 않았어요.',
        success: [
          ['yukin', '넣으려고 했어요. 근데 점장님이 「내가 넣을게, 너 발목 아프잖아」 하고…', 'crying'],
          ['yukin', '봉투를 들고 2층 창고로 올라가셨어요. 금고가 창고에 있으니까요.', 'crying'],
        ],
        peel: [1], words: ['pl_storage'] },
    ],
    hold: { statement: 2, lines: [
      ['rei', '(이 10분은 아직 못 벗겨. 다른 사람 눈에 남은 게 있어야 해.)', 'serious'],
    ] },
    koharu: [['koharu', '(선배, 할머니가 그랬잖아요. 동생은 지난주에 발목을…)', 'worried']],
    wrong: [['yukin', '무슨 말인지 모르겠어요.', 'normal']],
    close: [['yukin', '그만해 주세요.', 'crying'], ['koharu', '(울려 버렸어요… 천천히 다시 가요.)', 'worried']],
  },
  nagi: {
    char: 'nagi', bg: 'tokiwa_shop', face: 'scared',
    goal: '나기의 10분. 하얀 여백을 다른 눈으로 채워라.',
    statements: [
      { text: '점장님을 발견하고 바로 신고했어요.', cut: 't_nagi_1', dist: '생략',
        cutDesc: '휴대폰을 귀에 댄 나기. 벽시계 자리가 하얗게 비어 있다.',
        truthCut: '3D',
        press: [['nagi', '바로요. 정말이에요.', 'scared']] },
      { text: '점장님은 혼자 계단에서 미끄러지신 거예요.', cut: 't_nagi_2',
        cutDesc: '아무도 없는 창고 계단. 2층 불이 켜져 있다.',
        press: [['nagi', '계단이 가팔라서… 늘 위험하다고 하셨어요.', 'scared']] },
    ],
    answers: [
      { statement: 0, cut: ['3D', '3G'], with: '3H', shout: '바로가 아니야!',
        rebut: '발견은 9시 15분이에요. 그런데 9시 20분에도 당신은 휴대폰을 쥔 채 서 있었어요. 점장님 눈에 남아 있어요. 신고는 9시 25분이고요.',
        success: [
          ['nagi', '…….', 'crying'],
          ['nagi', '무서웠어요. 신고하면 경찰이 오고, 그럼 제가 유키가 아니란 게 들키고.', 'crying'],
          ['nagi', '언니 학원 일도, 점장님한테 거짓말한 것도 다 들키고….', 'crying'],
          ['nagi', '10분 동안 아무것도 못 했어요. 점장님이 저를 보고 계셨는데.', 'crying'],
        ],
        peel: [0], words: ['t_10min', 'a_hesitate'], cg: 'cg_twins', page: ['3G', '3D', '3H'], pageCap: '그 10분.' },
      { statement: 1, cut: ['3C', '3J'], shout: '점장님은 누군가를 쫓고 있었어!',
        rebut: '점장님이 계단 아래에서 올려다본 컷이에요. 위에서 별무늬 숄을 두른 사람이 봉투를 낚아채고 있어요.',
        success: [
          ['nagi', '별무늬 숄.', 'scared'],
          ['nagi', '그거… 아케이드 점술가 마도카 씨가 늘 두르는 거예요. 저녁에 가끔 케이크 사러 오셨어요.', 'scared'],
        ],
        words: ['th_shawl', 'p_madoka'] },
    ],
    koharu: [['koharu', '(선배, 점장님 안경에서 읽은 컷… 바닥에서 올려다본 거 있었죠.)', 'worried']],
    wrong: [['nagi', '…….', 'scared']],
    close: [['nagi', '죄송해요. 조금만….', 'crying'], ['koharu', '(…천천히 다시요, 선배.)', 'worried']],
  },
  madoka: {
    char: 'madoka', bg: 'booth3', face: 'smile', bgm: 'madoka',
    goal: '미래 컷의 이음매를 찾아라. 그리고 그 시각, 마도카는 어디 있었나.',
    intro: [['towa', '웃는 얼굴에 속지 마. 이 미래 컷, 손댄 흔적이 있어.'], ['tip', '컷을 크게 보고 이음매를 짚는다.']],
    statements: [
      { text: '제 미래 컷에 나왔잖아요. 오른쪽 리본 아가씨가 봉투를 움켜쥐는 거.', cut: 'F2',
        spots: [{ id: 'seam', label: '봉투를 쥔 손 둘레', x: 0.35, y: 0.4, w: 0.3, h: 0.3 }, { id: 'ribbon', label: '오른쪽 리본', x: 0.5, y: 0.08, w: 0.15, h: 0.15 }, { id: 'bag', label: '봉투', x: 0.45, y: 0.5, w: 0.15, h: 0.15 }],
        press: [['madoka', '미래는 바꿀 수 없어요. 카드가 그렇게 말하니까.', 'smile']] },
      { text: '계단에서 누가 점장님 등을 미는 것도 봤어요. 그건 리본 아가씨 손이에요.', cut: 'F3',
        spots: [{ id: 'shadow', label: '손 그림자', x: 0.45, y: 0.15, w: 0.25, h: 0.2 }, { id: 'hand', label: '미는 손', x: 0.35, y: 0.35, w: 0.25, h: 0.3 }, { id: 'stairs', label: '계단', x: 0.1, y: 0.5, w: 0.4, h: 0.45 }],
        press: [['madoka', '무섭죠? 저도 그래서 미리 말씀드린 거예요.', 'normal']] },
      { text: '그 시각엔 저, 부스에서 손님을 보고 있었어요. 9시부터 한 시간.', cut: 't_madoka_3',
        cutDesc: '점술 부스. 테이블 위 타로 카드, 맞은편 손님의 손.',
        press: [['madoka', '손님 이름요? 손님 비밀은 말 못 해요.', 'normal']] },
    ],
    answers: [
      { statement: 0, spot: 'seam', cut: 'tone', shout: '이 컷, 누가 고쳤어!',
        rebut: '봉투를 쥔 손 둘레만 스크린톤 점 간격이 달라요. 나중에 오려 붙인 거예요.',
        success: [
          ['madoka', '무슨 소리예요. 그건 제가 본 미래예요.', 'normal'],
          ['towa', '이건 사람이 고친 거야. 가위랑 풀로. 누가 이런 짓을 가르쳤는지 알 것 같아.'],
        ],
        words: ['a_edit'] },
      { statement: 1, spot: 'shadow', requires: [0], shout: '그림자가 거꾸로야!',
        rebut: '창고 불은 계단 아래에서 비춰요. 다른 그림자는 다 위로 늘어지는데, 미는 손 그림자만 아래로 떨어져요. 이 손도 붙인 거예요.',
        success: [['madoka', '…….', 'cornered']],
        words: ['a_push3'] },
      { statement: 2, cut: '3C', with: ['3J', 'sequin'], requires: [1], shout: '부스엔 없었어!',
        rebut: '9시 10분, 점장님 눈에 별무늬 숄이 남아 있어요. 2분 뒤엔 두부집 할머니가 뒷골목에서 뛰어나오는 숄을 봤고요. 그 시각 당신은 부스가 아니라 양과점 계단에 있었어요.',
        success: [
          ['madoka', '…….', 'cornered'],
          ['madoka', '이번 달 말까지 갚아야 할 빚이 있었어요.', 'crying'],
          ['madoka', '케이크 사러 갔다가, 점장님이 봉투 들고 2층 올라가는 걸 봤어요. 뒷문이 열려 있었고….', 'crying'],
          ['madoka', '쫓아오시길래 뿌리쳤는데… 넘어지시는 소리가 났어요. 돌아보지도 않았어요.', 'crying'],
          ['madoka', '컷은 제가 고친 거 아니에요. 흰 장갑 낀 사람이 찾아와서, 이렇게 바꿔 두면 잔상과가 헛다리 짚을 거라고.', 'crying'],
        ],
        peel: [2] },
    ],
    koharu: [['koharu', '(선배, 봉투 쥔 손 둘레… 점 무늬가 거기만 촘촘해요.)', 'worried']],
    wrong: [['madoka', '어머, 그건 카드가 말하는 거랑 다른데요?', 'smile']],
    close: [['madoka', '오늘은 운세가 별로네요. 다음에 오세요.', 'normal'], ['koharu', '(…처음부터 다시 봐요, 선배.)', 'worried']],
  },
});

const CONCLUSION3 = [
  { q: '봉투를 가져간 사람이 그 자리에 있었다는 물증은?', answer: ['sequin'], choices: ['sequin', 'roster', 'ledger', 'debt', '3K'] },
  { q: '미래 컷 두 장이 가짜라는 물증은?', answer: ['tone'], choices: ['tone', 'F1', 'ledger', 'debt', 'roster'] },
];

const NAME3_MID = [
  '그날 밤, ', { cat: 'person', a: 'p_madoka' }, '이(가) 점장에게서 ', { cat: 'thing', a: 'th_envelope' }, '을(를) ', { cat: 'act', a: 'a_take' }, '.\n',
  { cat: 'time', a: 't_2110' }, '쯤, ', { cat: 'place', a: 'pl_storage' }, '에서.',
];
const NAME3_FINAL = [
  '21시, 가게에서 마감을 한 건 ', { cat: 'person', a: 'p_nagi' }, '. ', { cat: 'person', a: 'p_yuki' }, '은(는) ', { cat: 'place', a: 'pl_academy' }, '에 있었다.\n',
  { cat: 'time', a: 't_2110' }, ', ', { cat: 'person', a: 'p_madoka' }, '이(가) 점장에게서 봉투를 ', { cat: 'act', a: 'a_take' }, '. 점장은 쫓다가 ', { cat: 'place', a: 'pl_storage' }, '에서 넘어졌다.\n',
  '나기는 ', { cat: 'time', a: 't_10min' }, ' 동안 ', { cat: 'act', a: 'a_hesitate' }, '. 미래 컷 두 장은 누군가 ', { cat: 'act', a: 'a_edit' }, '.',
];

Object.assign(PROFILES, {
  yuki: '토키와 양과점 점원 스즈네 유키(19). 쌍둥이 언니. 오른쪽 리본. 왼손잡이.',
  nagi: '스즈네 나기(19). 쌍둥이 동생. 왼쪽 리본. 그날은 쉬는 날이었다고 한다.',
  yukin: '토키와 양과점 점원 「유키」. 근무표상 그날 밤 마감 담당.',
  madoka: '아케이드 타로 점술가 미즈시마 마도카(26). "미래 컷"이 보인다며 수사에 협조한다.',
  tofu: '양과점 건너편 두부집 할머니. 아케이드의 시계 같은 사람이라고 스스로 말한다.',
  ren: '은발에 안대, 흰 코트. 레이를 안다고 한다.',
});
