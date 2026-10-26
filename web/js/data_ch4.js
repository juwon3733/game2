// 4장 「지워 드립니다」 데이터. 기획: docs/12_story_plan.md §3 4장, docs/13_deduction_upgrade.md §3-5
// 진실: 하쿠요 하청 현장소장 무라세가 배전반을 조작해 불을 냈다(니시무라 지시).
// 빚에 묶인 케이코(겐조의 딸)는 망을 봤지만, 아버지가 안에 있는 걸 알고 불 속에 뛰어들어 업고 나왔다.
// 손녀 하야카는 엄마가 망을 보는 장면까지만 보고 도망쳤고, 엄마를 지키려고 다음 날 그 밤을 지웠다.

Object.assign(CHARACTERS, {
  hayaka:    { name: '하야카',   hair: '#3a2420', outfit: '#2c3a5a', accent: '#e85d75', faces: ['normal', 'crying', 'smile'] },
  keiko:     { name: '케이코',   hair: '#4a3020', outfit: '#6a6a5a', accent: '#d4883a', faces: ['normal', 'crying', 'resolute'] },
  okamoto:   { name: '오카모토', hair: '#c8c4bc', outfit: '#5a6a3a', accent: '#7a9a3a', faces: ['angry', 'normal'] },
  murase:    { name: '무라세',   hair: '#2a2a2a', outfit: '#5a5a62', accent: '#a03a3a', faces: ['smile', 'normal', 'cornered'] },
  nishimura: { name: '니시무라', hair: '#1a1a1a', outfit: '#1e1e28', accent: '#6a6a7a', faces: ['normal'] },
});

Object.assign(BACKGROUNDS, {
  sakurayu:      { label: '불탄 목욕탕 「사쿠라유」', sky: ['#1a1414', '#5a3a2a'] },
  sakurayu_boiler: { label: '사쿠라유 보일러실', sky: ['#141010', '#3a2a22'] },
  okamoto_house: { label: '오카모토 할머니 집 2층', sky: ['#2a2a22', '#7a6a4a'] },
  site_office:   { label: '하쿠요 하청 현장사무소', sky: ['#22262e', '#5a6270'] },
  clinic:        { label: '구시가 언덕 「기억 상담소」', sky: ['#e8e8ee', '#ffffff'] },
  station_chief: { label: '츠키미나토 경찰서 서장실', sky: ['#2a2622', '#6a5a4a'] },
});

Object.assign(TAG_ORDER, {
  time4: ['28-1900', '28-2100', '28-2230', '28-2240', '28-2245', '28-2250', '28-2300', '28-2305', '28-2310', '28-2315', '28-2320', '29-0600', '29-0900'],
});
Object.assign(TAG_NAME, { time4: '시각' });

Object.assign(OWNERS, {
  hayaka:  { name: '하야카', color: '#e85d75' },
  keiko:   { name: '케이코', color: '#d4883a' },
  genzo:   { name: '겐조', color: '#5a8fbf' },
  okamoto: { name: '오카모토', color: '#7a9a3a' },
  murase:  { name: '무라세', color: '#a03a3a' },
});

Object.assign(CUTS, {
  '4A': { owner: 'hayaka', title: '다툼',
          desc: '목욕탕 카운터. 손녀에게 소리치는 할아버지. 벽시계 9시. 카운터 위에 하쿠요의 매입 서류.',
          tags: { time4: '28-2100' } },
  '4B': { owner: 'keiko', title: '손전등',
          desc: '목욕탕 뒤 울타리 앞. 장갑 낀 손이 손전등을 건넨다. 장갑에 하쿠요 로고. 멀리 축제 등불, 시계탑 10시 30분.',
          tags: { time4: '28-2230' },
          spots: [{ id: 'glove', label: '건네는 장갑', x: 0.5, y: 0.35, w: 0.25, h: 0.3, word: 'th_flashlight' }, { id: 'clock', label: '시계탑', x: 0.05, y: 0.05, w: 0.18, h: 0.3, word: 't_2230' }] },
  '4C': { owner: 'murase', title: '열쇠',
          desc: '보일러실 뒷문. 열쇠로 문을 여는 손, 바닥에 공구 가방. 손목시계 10시 40분.',
          tags: { time4: '28-2240' } },
  '4D': { owner: 'okamoto', title: '뒷문',
          desc: '2층 창에서 내려다본 목욕탕 뒷문. 헬멧 쓴 남자 둘이 들어간다. 헬멧에 하쿠요 로고. 골목 모퉁이에 교복 입은 아이. 탁상시계 10시 45분.',
          tags: { time4: '28-2245' },
          spots: [{ id: 'helmet', label: '헬멧의 로고', x: 0.35, y: 0.35, w: 0.25, h: 0.2, word: 'p_murase' }, { id: 'girl', label: '골목 모퉁이의 교복', x: 0.78, y: 0.5, w: 0.18, h: 0.35, word: 'p_hayaka' }, { id: 'clock', label: '탁상시계', x: 0.02, y: 0.7, w: 0.18, h: 0.28, word: 't_2245' }] },
  '4E': { owner: 'hayaka', title: '울타리',
          desc: '골목 모퉁이에서 본 울타리. 손전등을 쥔 엄마가 망을 보듯 사방을 살핀다. 시계탑 10시 50분.',
          tags: { time4: '28-2250' } },
  '4F': { owner: 'keiko', title: '연기',
          desc: '울타리 앞. 보일러실 창에서 연기와 불꽃이 새어 나온다. 시계탑 11시.',
          tags: { time4: '28-2300' },
          spots: [{ id: 'window', label: '불꽃이 나는 창', x: 0.4, y: 0.15, w: 0.3, h: 0.3, word: 'pl_boiler' }] },
  '4G': { owner: 'keiko', title: '뛰어듦',
          desc: '연기 속 탈의실 포렴을 젖히고 뛰어드는 시점. 안쪽에서 기침 소리 "콜록".',
          tags: { time4: '28-2305' } },
  '4H': { owner: 'genzo', title: '업힌 등',
          desc: '연기로 흐린 시야. 누군가의 등에 업혀 있다. 그을린 목덜미와 낯익은 머리끈. 위로 불붙은 들보.',
          tags: { time4: '28-2310' } },
  '4I': { owner: 'okamoto', title: '업고 나옴',
          desc: '불타는 목욕탕 정문. 노인을 업고 걸어 나오는 여자. 소방차의 붉은 불빛. 손에 쥔 휴대폰에 「119 통화 중 23:15」.',
          tags: { time4: '28-2315' } },
  '4J': { owner: 'murase', title: '보고',
          desc: '현장사무소 창 너머로 불길. 휴대폰을 귀에 대고 "끝났습니다." 벽 달력에 「9월 전 부지 비움」 빨간 동그라미. 23:20.',
          tags: { time4: '28-2320' } },
  '4M': { owner: 'keiko', title: '새벽 병실',
          desc: '새벽 병실. 붕대 감은 손으로 아버지의 손을 잡고 있다. 창밖이 밝아 온다. 6시.',
          tags: { time4: '29-0600' } },
  '4K': { owner: 'hayaka', title: '상담소',
          desc: '하얀 방. 빈 말풍선 모양 로고. 맞은편에서 흰 장갑 낀 손이 서류를 내민다. 벽시계 9시.',
          tags: { time4: '29-0900' } },
  '4L': { owner: 'okamoto', title: '반대 모임',
          desc: '저녁 7시, 공민관. "재개발 반대" 현수막 아래 노인들. 맨 앞자리가 비어 있다.',
          tags: { time4: '28-1900' } },
});

Object.assign(ITEMS, {
  receipt:  { title: '상담 영수증', desc: '「기억 상담소」 8/29 09:00 — 사쿠라이 하야카. 로고는 글자 없는 빈 말풍선. 주소: 구시가 언덕 3-1.' },
  panel:    { title: '보일러실 배전반', desc: '「노후 누전」이라던 배전반. 그을음 아래 전선이 공구로 깔끔하게 잘려 서로 이어져 있다. 누가 이어 붙인 자국.' },
  schedule4:{ title: '하쿠요 공정표', desc: '「사쿠라유 부지 — 9월 전 비움. 방법은 현장 판단. 니시무라」. 현장사무소 화이트보드 사진.' },
  record:   { title: '6년 전 화재 기록', desc: '등대 도서관 화재 공식 기록 사본. 「원인: 보일러실 배전반 노후 누전」. 사쿠라유 소방 보고서와 한 글자도 다르지 않다.' },
});

Object.assign(WORDS, {
  p_hayaka: { text: '하야카', cat: 'person' }, p_keiko: { text: '케이코', cat: 'person' }, p_okamoto: { text: '오카모토', cat: 'person' },
  p_murase: { text: '무라세', cat: 'person' }, p_genzo: { text: '겐조', cat: 'person' },
  t_2230: { text: '22시 30분', cat: 'time' }, t_2245: { text: '22시 45분', cat: 'time' }, t_2300: { text: '23시', cat: 'time' },
  pl_boiler: { text: '보일러실', cat: 'place' }, pl_fence: { text: '울타리', cat: 'place' }, pl_office4: { text: '현장사무소', cat: 'place' },
  th_panel: { text: '배전반', cat: 'thing' }, th_flashlight: { text: '손전등', cat: 'thing' }, th_key: { text: '보일러실 열쇠', cat: 'thing' },
  a_tamper: { text: '조작해', cat: 'act' }, a_watch: { text: '망을 봤다', cat: 'act' }, a_rescue: { text: '업고 나왔다', cat: 'act' },
  a_erase: { text: '지웠다', cat: 'act' }, a_fire: { text: '불을 질렀다', cat: 'act' },
});

Object.assign(PUZZLES, {
  page4a: {
    title: '페이지 1 — 불이 나기까지',
    goal: '말다툼부터 불이 날 때까지. 4장만 쓴다.',
    cuts: ['4A', '4B', '4D', '4F', '4L'],
    solution: ['4A', '4B', '4D', '4F'],
    decoys: ['4L'],
    bubbles: {},
    hint: '시계탑, 탁상시계, 벽시계. 그리고 범위를 다시 읽어.',
    rei: '…불이 나기 30분 전, 누군가 손전등을 건넸어. 하쿠요 장갑으로.',
  },
  page4b: {
    title: '최종 재구성 — 8월 28일, 사쿠라유의 밤',
    goal: '두 페이지. 1쪽은 불이 나기 전, 2쪽은 불이 난 뒤. 페이지가 넘어가는 자리도 맞아야 한다.',
    cuts: ['4A', '4B', '4C', '4D', '4E', '4F', '4G', '4H', '4I', '4J', '4M', '4K', '4L'],
    solution: ['4A', '4B', '4C', '4D', '4E', '4F', '4G', '4H', '4I', '4J', '4M', '4K'],
    decoys: ['4L'],
    pageBreak: 6,
    bubbles: {},
    hint: '1쪽 끝은 불이 처음 보인 순간. 2쪽은 그 사람이 무엇을 했는지부터.',
    rei: '…망을 본 사람이, 불 속에 뛰어든 사람이었어.',
  },
});

Object.assign(WITNESSES, {
  okamoto: {
    char: 'okamoto', bg: 'okamoto_house', face: 'angry',
    goal: '할머니의 겁먹은 기억에서 착각을 걷어 내라.',
    statements: [
      { text: '밤 10시 45분, 거인 같은 놈들이 목욕탕 뒷문으로 쳐들어갔어!', cut: 't_okamoto_1', dist: '과장', truthCut: '4D',
        cutDesc: '뒷문을 부수고 들어가는 거대한 그림자 둘. 집채만 하다.',
        press: [['okamoto', '하쿠요 놈들이 몇 달째 밤마다 어슬렁거렸어. 겐조 영감 혼자 버티니까.', 'angry']], words: ['p_genzo'] },
      { text: '그리고 교복 입은 계집애가 도망치더라. 그 집 손녀야. 불 지르고 도망친 거지!', cut: 't_okamoto_2',
        cutDesc: '골목을 달려가는 교복 차림의 뒷모습. 뒤로 불길.',
        press: [['okamoto', '그날 저녁에 할아버지랑 대판 싸웠다더라고. 가게 팔자고.', 'angry']], words: ['p_hayaka'] },
      { text: '불이 나자마자 내가 119에 전화했어. 그건 확실해.', cut: 't_okamoto_3',
        cutDesc: '휴대폰을 귀에 댄 손. 창밖이 붉다.',
        press: [['okamoto', '소방차보다 먼저 겐조 영감이 업혀 나왔지. 누가 업었는지는… 연기 때문에.', 'normal']] },
    ],
    answers: [
      { statement: 0, cut: '4D', shout: '거인이 아니에요!',
        rebut: '할머니 창에서 본 그대로예요. 헬멧 쓴 남자 둘. 헬멧에 하쿠요 로고가 있어요.',
        success: [['okamoto', '그래, 헬멧이었지. 무라세네 인부들 헬멧.', 'normal'], ['okamoto', '무서워서 집채만 하게 기억했나 봐.', 'normal']],
        peel: [0], words: ['p_murase', 'p_okamoto', 't_2245'] },
      { statement: 1, cut: '4F', shout: '그 아이는 불을 지르지 않았어요!',
        rebut: '불이 처음 보인 건 11시. 아이가 골목에 있던 건 할머니 탁상시계로 10시 45분이에요. 불은 아이가 떠난 뒤에 났어요.',
        success: [['okamoto', '그럼 그 애는 불 나기 전에 갔단 말이야?', 'normal'], ['okamoto', '아이고. 내가 그 애한테 몹쓸 소리를 했네.', 'normal']] },
    ],
    rewards: ['4I'],
    koharu: [['koharu', '(선배, 할머니 창문에서 읽은 컷… 그 시각이 적혀 있었죠.)', 'worried']],
    wrong: [['okamoto', '뭐야? 노인네라고 무시하는 거야?', 'angry']],
    close: [['okamoto', '에잇, 오늘은 그만. 혈압 올라.', 'angry'], ['koharu', '(…다시 들어 봐요, 선배.)', 'worried']],
  },
  hayaka: {
    char: 'hayaka', bg: 'hospital', face: 'normal', gentle: true,
    goal: '잘려 나간 칸. 남의 컷을 이식해 그 아이의 밤을 되찾아라. 동의를 구하고.',
    intro: [['towa', '이 아이 증언 페이지, 가운데 칸이 잘려 나갔어. 누가 깔끔하게 오려 냈어.'], ['tip', '잘린 칸에는 다른 사람의 컷을 끼울 수 있다. 끼우기 전에 증인에게 "이게 네 밤이었을 수 있어?"라고 묻는다.']],
    statements: [
      { text: '그날 밤엔 할아버지랑 싸우고, 바로 집에 갔어요.', cut: 't_hayaka_1',
        cutDesc: '목욕탕을 나서는 뒷모습. 문 닫히는 소리.',
        press: [['hayaka', '가게 팔자고 했어요. 할아버지 혼자 고생하는 거 싫어서. 근데 그게 싸움이 됐어요.', 'normal']] },
      { text: '……', cut: 't_hayaka_2', dist: '삭제',
        cutDesc: '가위로 오려 낸 듯 칸이 통째로 비어 있다. 가장자리에 하얀 장갑 자국.',
        press: [['hayaka', '거기, 아무것도 없어요. 지웠으니까.', 'normal']] },
      { text: '……', cut: 't_hayaka_3', dist: '삭제',
        cutDesc: '오려 낸 빈 칸. 귀퉁이에 손전등 빛 같은 노란 자국이 조금 남았다.',
        press: [['hayaka', '지운 덕분에, 어젯밤엔 잠을 잤어요. 처음으로.', 'crying']] },
      { text: '그러니까 그냥 두세요. 아무도 안 다치게.', cut: 't_hayaka_4',
        cutDesc: '하얀 방. 빈 말풍선 로고. 서류에 서명하는 손.',
        press: [['hayaka', '상담소 사람이 그랬어요. 잊는 것도 용기라고.', 'normal']] },
    ],
    answers: [
      { statement: 1, cut: '4D',
        rebut: '오카모토 할머니 창에서 본 컷이야. 골목 모퉁이에 교복 입은 아이가 있어. …이게 네 밤이었을 수 있어?',
        success: [['hayaka', '교복. 저예요.', 'crying'], ['hayaka', '사과하러 돌아갔었어요. 할아버지한테. 근데 뒷문 쪽에서…', 'crying']],
        words: ['pl_fence'] },
      { statement: 2, cut: '4B', requires: [0],
        rebut: '울타리 앞에서 손전등을 받는 사람의 컷이야. …이게, 네가 본 거였을 수 있어?',
        success: [
          ['hayaka', '엄마.', 'crying'],
          ['hayaka', '엄마가 손전등을 들고 망을 보고 있었어요. 하쿠요 사람이랑 같이.', 'crying'],
          ['hayaka', '그리고 불이 났어요. 엄마가 할아버지 가게에 불을 지른 거라고… 그렇게밖에 생각이 안 났어요.', 'crying'],
          ['hayaka', '엄마를 고발할 수 없었어요. 할아버지가 알면 안 됐어요. 그래서… 지웠어요.', 'crying'],
        ],
        choice: { prompt: '레이: 하야카에게 뭐라고 할까?', options: ['"그래서 숨긴 거구나."', '"지키려고 지운 거구나."', '"지우면 안 됐어."'], answer: 1,
          success: [['hayaka', '네.', 'crying']],
          wrong: [['hayaka', '…….', 'crying'], ['koharu', '(선배, 몰아붙이지 말아요…)', 'worried']] },
        rewards: ['4E'], words: ['a_watch', 'a_erase'] },
    ],
    koharu: [['koharu', '(선배, 할머니 창문 컷에… 교복 입은 아이가 있었잖아요.)', 'worried']],
    wrong: [['hayaka', '그건 제 밤이 아니에요.', 'normal']],
    close: [['hayaka', '그만해 주세요.', 'crying'], ['koharu', '(…천천히 다시 해요.)', 'worried']],
  },
  cross4: {
    char: 'murase', char2: 'okamoto', bg: 'site_office', face: 'smile', erode: true,
    goal: '교차 심문. 같은 밤을 본 두 사람. 한 사람은 착각했고, 한 사람은 거짓말을 한다.',
    intro: [['towa', '조심해. 현장이 지금도 지워지고 있어.'], ['tip', '교차 심문: 두 사람의 증언이 번갈아 나온다. 거짓말한 쪽을 골라 깨야 한다. 세 번 틀릴 때마다 수첩의 컷이 하나씩 흐려진다.']],
    statements: [
      { char: 'okamoto', text: '10시 45분에 헬멧 쓴 놈 둘이 뒷문으로 들어갔어. 이번엔 똑바로 말하는 거야.', cut: 't_cross_1',
        cutDesc: '할머니 창에서 본 뒷문. 헬멧 둘.',
        press: [['okamoto', '탁상시계 보고 말하는 거야.', 'normal']] },
      { char: 'murase', text: '그 시각 저는 현장사무소에 혼자 있었습니다. 한 발짝도 안 나갔어요.', cut: 't_cross_2', dist: '생략',
        cutDesc: '현장사무소. 책상 앞 의자 자리만 하얗게 비어 있다.',
        press: [['murase', '야근이었죠. 공정표 정리하느라.', 'smile']] },
      { char: 'okamoto', text: '불은 보일러실 쪽에서 났어. 펑 하고.', cut: 't_cross_3',
        cutDesc: '보일러실 창에서 튀는 불꽃.',
        press: [['okamoto', '그 보일러, 겐조 영감이 매일 닦던 거야.', 'normal']] },
      { char: 'murase', text: '보일러실 배전반이 낡아서 누전된 겁니다. 소방 보고서에도 그렇게 나와요.', cut: 't_cross_4',
        cutDesc: '그을린 배전반. 깔끔하게 정리된 전선.',
        press: [['murase', '노후 시설은 위험하다고 몇 번이나 말씀드렸는데요.', 'smile']] },
    ],
    answers: [
      { statement: 1, cut: '4C', shout: '사무소에 없었어!',
        rebut: '10시 40분, 보일러실 뒷문을 여는 열쇠. 현장사무소 열쇠함에 남은 당신의 잔상이에요.',
        success: [['murase', '…….', 'normal'], ['murase', '점검차 들렀을 수도 있죠. 기억이 안 나네요.', 'smile']],
        peel: [1], words: ['th_key', 'pl_office4'] },
      { statement: 3, cut: 'panel', requires: [0], shout: '누전이 아니야!',
        rebut: '그을음 아래 전선이 공구로 잘려 서로 이어 붙여져 있어요. 낡아서는 이렇게 안 돼요.',
        success: [['murase', '…….', 'cornered']],
        choice: { prompt: '누가 착각했고, 누가 거짓말을 했나?', options: ['오카모토가 거짓말, 무라세가 착각', '오카모토가 착각, 무라세가 거짓말', '둘 다 거짓말'], answer: 1,
          success: [['rei', '할머니는 무서워서 크게 기억했을 뿐이에요. 당신은 알면서 자기 자리를 지웠고요.', 'serious'],
            ['murase', '위에서 시킨 겁니다. 「9월 전에 비워라」. 니시무라 상무가.', 'cornered'],
            ['murase', '영감은 축제에 간 줄 알았어요. 케이코 씨도 그렇게 알고 망을 봤고.', 'cornered']],
          wrong: [['towa', '아니야. 다시 봐. 누가 자기 컷을 지웠는지.']] },
        words: ['a_tamper', 'th_panel'] },
    ],
    koharu: [['koharu', '(선배, 현장사무소 열쇠함… 거기서 읽은 컷이 있었죠.)', 'worried']],
    wrong: [['murase', '그게 저랑 무슨 상관이죠?', 'smile']],
    close: [['murase', '오늘은 바쁩니다. 변호사 통해 주시죠.', 'normal'], ['koharu', '(…처음부터 다시요, 선배.)', 'worried']],
  },
  keiko: {
    char: 'keiko', bg: 'hospital', face: 'normal',
    goal: '연기로 흐려진 기억. 다른 눈으로 본 컷을 끼워 넣어라.',
    statements: [
      { text: '그날 밤 저는 가게 근처에도 안 갔어요.', cut: 't_keiko_1',
        cutDesc: '집 부엌. 혼자 앉은 식탁. 너무 깔끔하다.',
        press: [['keiko', '하쿠요 일은 그만뒀어요. 빚은… 남았지만.', 'normal']] },
      { text: '불이 났을 땐 이미 집에 있었어요. 아무것도 몰라요.', cut: 't_keiko_2', dist: '흐림',
        cutDesc: '연기처럼 뿌옇게 흐린 컷. 형체를 알아볼 수 없다.', truthCut: '4G',
        press: [['keiko', '손은 요리하다 데었어요.', 'normal'], ['koharu', '(두 손에 붕대를 감고 계세요….)', 'worried']] },
    ],
    answers: [
      { statement: 0, cut: '4B', shout: '울타리 앞에 있었어요!',
        rebut: '10시 30분, 울타리 앞. 하쿠요 장갑이 건네는 손전등을 받은 건 당신의 손이에요.',
        success: [
          ['keiko', '…….', 'crying'],
          ['keiko', '망만 보면 빚을 줄여 준다고 했어요. 아버지는 축제에 가셨다고. 빈 가게라고.', 'crying'],
        ],
        peel: [0] },
      { statement: 1, cut: '4H', with: '4I', requires: [0], shout: '당신은 불 속에 있었어요!', cg: 'cg_carry',
        rebut: '할아버지 눈에 남은 등. 그을린 목덜미와 그 머리끈. 5분 뒤, 오카모토 할머니가 본 사람. 불 속에서 아버지를 업고 나온 건 당신이에요.',
        success: [
          ['keiko', '안에서 기침 소리가 났어요. 아버지 기침.', 'crying'],
          ['keiko', '생각할 틈도 없었어요. 들어가서, 업고, 나왔어요.', 'crying'],
          ['hayaka', '엄마.', 'crying'],
          ['keiko', '하야카. 미안해. 망을 본 건 사실이야. 그건 지우지 마.', 'crying'],
        ],
        peel: [1], words: ['a_rescue', 'p_keiko'] },
    ],
    koharu: [['koharu', '(선배, 할아버지 손목시계에서 읽은 컷… 누군가의 등이었잖아요.)', 'worried']],
    wrong: [['keiko', '모르겠어요.', 'normal']],
    close: [['keiko', '조금만 쉬게 해 주세요.', 'crying'], ['koharu', '(…다시 해요, 선배.)', 'worried']],
  },
});

const NAME4_MID = [
  '그날 밤 사쿠라유의 ', { cat: 'thing', a: 'th_panel' }, '을(를) ', { cat: 'act', a: 'a_tamper' }, ' 불을 낸 사람은 ', { cat: 'person', a: 'p_murase' }, '.\n',
  { cat: 'time', a: 't_2245' }, '쯤 ', { cat: 'place', a: 'pl_boiler' }, '에 들어갔다.',
];
const NAME4_FINAL = [
  { cat: 'person', a: 'p_murase' }, '가 ', { cat: 'thing', a: 'th_panel' }, '을 조작해 불을 냈다. ', { cat: 'person', a: 'p_keiko' }, '는 ', { cat: 'act', a: 'a_watch' }, '.\n',
  '그리고 불 속에 뛰어들어 아버지를 ', { cat: 'act', a: 'a_rescue' }, '.\n',
  { cat: 'person', a: 'p_hayaka' }, '는 ', { cat: 'place', a: 'pl_fence' }, '에서 엄마를 보고 도망쳤고, 다음 날 그 밤을 ', { cat: 'act', a: 'a_erase' }, '.',
];
const CONCLUSION4 = [
  { q: '불은 누전이 아니었다. 그 물증은?', answer: ['panel'], choices: ['panel', 'record', 'receipt', '4F', '4L'] },
  { q: '누가, 왜 서둘러 이 땅을 비우려 했나? (물증으로)', answer: ['schedule4'], choices: ['schedule4', 'receipt', 'record', '4J', 'panel'] },
];

Object.assign(PROFILES, {
  hayaka: '사쿠라이 하야카(17). 겐조의 손녀. 불이 난 다음 날 아침 「기억 상담소」에서 그 밤의 기억을 지웠다.',
  keiko: '사쿠라이 케이코(44). 하야카의 엄마, 겐조의 딸. 하쿠요 하청에서 일하다 빚을 졌다. 두 손에 붕대.',
  okamoto: '오카모토 할머니(68). 재개발 반대 모임 대표. 사쿠라유 건너편 집 2층에서 그날 밤을 봤다.',
  murase: '무라세(50). 하쿠요 하청 현장소장. "노후 배전반 누전"이라고 설명한다.',
  nishimura: '니시무라 고로. 하쿠요 계열사 상무.',
});
