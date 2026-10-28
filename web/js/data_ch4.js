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
  // mask: 정체가 밝혀지기 전엔 "누군가의 시점". 플래그는 script_ch4.js에서 켠다
  keiko:   { name: '케이코', color: '#d4883a', mask: 'k4Lookout' },   // 하야카 심문 뒤(엄마가 손전등을 들고 있었다)
  keiko_in:{ name: '케이코', color: '#d4883a', mask: 'k4Rescue' },    // 케이코 심문 뒤(불 속에 뛰어든 사람)
  genzo:   { name: '겐조', color: '#5a8fbf' },
  okamoto: { name: '오카모토', color: '#7a9a3a' },
  murase:  { name: '무라세', color: '#a03a3a', mask: 'm4Key' },       // 교차 심문 뒤(열쇠함의 잔상)
});

Object.assign(CUTS, {
  '4A': { owner: 'hayaka', title: '다툼',
          desc: '창밖은 깜깜한 밤, 불이 환한 목욕탕 카운터. 손녀에게 소리치는 할아버지. 카운터 위에 하쿠요의 매입 서류, 신발장에 손님 신발 몇 켤레.',
          tags: { time4: '28-2100' } },
  '4B': { owner: 'keiko', title: '손전등',
          desc: '목욕탕 뒤 울타리 앞. 목욕탕 창은 모두 꺼져 있다. 하쿠요 로고가 찍힌 장갑이 손전등을 건넨다. 멀리 축제 등불과 시계탑(10시 30분).',
          tags: { time4: '28-2230' },
          spots: [{ id: 'glove', label: '손전등을 건네는 장갑', x: 0.5, y: 0.35, w: 0.25, h: 0.3, word: 'th_flashlight' }, { id: 'clock', label: '시계탑', x: 0.05, y: 0.05, w: 0.18, h: 0.3, word: 't_2230' },
            { id: 'lantern', label: '멀리 보이는 등불', x: 0.25, y: 0.05, w: 0.2, h: 0.2, word: 'pl_festival' }, { id: 'window', label: '목욕탕 뒤 창', x: 0.75, y: 0.1, w: 0.2, h: 0.25 }] },
  '4C': { owner: 'murase', title: '열쇠',
          desc: '밤, 보일러실 뒷문. 열쇠를 꽂아 돌리는 손. 옆에 다른 사람의 작업화, 바닥에 공구 가방. 멀리 울타리 쪽에 작은 손전등 불빛.',
          tags: { time4: '28-2240' } },
  '4D': { owner: 'okamoto', title: '뒷문',
          desc: '2층 창에서 내려다본 목욕탕 뒷문. 하쿠요 로고 헬멧을 쓴 남자 둘이 열린 문으로 들어간다. 앞사람은 공구 가방, 뒷사람 헬멧엔 흰 「방문자」 스티커. 골목 모퉁이에 교복 입은 아이. 창틀에 탁상시계(10시 45분).',
          tags: { time4: '28-2245' },
          spots: [{ id: 'helmet', label: '헬멧의 로고', x: 0.35, y: 0.35, w: 0.25, h: 0.2, word: 'p_worker' }, { id: 'girl', label: '골목 모퉁이의 교복', x: 0.78, y: 0.5, w: 0.18, h: 0.35, word: 'p_hayaka' }, { id: 'clock', label: '탁상시계', x: 0.02, y: 0.7, w: 0.18, h: 0.28, word: 't_2245' },
            { id: 'door', label: '열린 뒷문', x: 0.4, y: 0.55, w: 0.2, h: 0.3 }, { id: 'bag', label: '앞사람이 든 가방', x: 0.22, y: 0.5, w: 0.15, h: 0.2 }] },
  '4E': { owner: 'hayaka', title: '울타리',
          desc: '골목 모퉁이에서 본 울타리. 손전등을 쥔 엄마가 골목 양쪽을 번갈아 본다. 그 뒤로 반쯤 열린 보일러실 뒷문, 문 밖엔 아무도 없고 보일러실 창 안에서 헤드랜턴 불빛 두 개가 움직인다.',
          tags: { time4: '28-2250' } },
  '4F': { owner: 'keiko', title: '연기',
          desc: '울타리 앞. 보일러실 창에서 연기와 불꽃이 새어 나온다. 굴뚝 위로 연기가 번진다.',
          tags: { time4: '28-2300' },
          spots: [{ id: 'window', label: '불꽃이 나는 창', x: 0.4, y: 0.15, w: 0.3, h: 0.3, word: 'pl_boiler' }, { id: 'smoke', label: '굴뚝 위 연기', x: 0.1, y: 0.0, w: 0.25, h: 0.2, word: 'a_fire' },
            { id: 'fence', label: '울타리 판자', x: 0.0, y: 0.6, w: 0.3, h: 0.35 }, { id: 'door', label: '보일러실 뒷문', x: 0.72, y: 0.4, w: 0.2, h: 0.4 }] },
  '4G': { owner: 'keiko_in', title: '뛰어듦',
          desc: '연기 속 탈의실 포렴을 젖히고 뛰어드는 시점. 안쪽에서 기침 소리 "콜록".',
          tags: { time4: '28-2305' } },
  '4H': { owner: 'genzo', title: '업힌 등',
          desc: '연기로 흐린 시야. 누군가의 등에 업혀 있다. 바로 앞에 그을린 목덜미와 머리끈으로 묶은 머리. 위로 불붙은 들보.',
          tags: { time4: '28-2310' } },
  '4I': { owner: 'okamoto', title: '업고 나옴',
          desc: '2층 창에서 본 불타는 목욕탕 정문. 노인을 업고 걸어 나오는 사람. 얼굴은 연기에 가렸고 뒤로 묶은 머리만 보인다. 아직 소방차는 없다. 창틀을 짚은 내 손에 휴대폰, 119 통화 화면과 23:15.',
          tags: { time4: '28-2315' } },
  '4J': { owner: 'murase', title: '보고',
          desc: '현장사무소 창 너머로 불길과 소방차 경광등. 휴대폰을 귀에 대고 "끝났습니다." 벽 달력에 「9월 전 부지 비움」 빨간 동그라미.',
          tags: { time4: '28-2320' } },
  '4M': { owner: 'keiko', title: '새벽 병실',
          desc: '새벽 병실. 붕대 감은 손으로 아버지의 손을 잡고 있다. 창밖이 막 밝아 온다.',
          tags: { time4: '29-0600' } },
  '4K': { owner: 'hayaka', title: '상담소',
          desc: '창 없는 하얀 방. 빈 말풍선 모양 로고 옆 벽시계가 9시. 맞은편에서 흰 장갑 낀 손이 서류를 내민다.',
          tags: { time4: '29-0900' } },
  '4L': { owner: 'okamoto', title: '반대 모임',
          desc: '창밖이 아직 붉은 저녁, 공민관. "재개발 반대" 현수막 아래 노인들. 맨 앞자리 의자 하나.',
          tags: { time4: '28-1900' } },
});

Object.assign(ITEMS, {
  receipt:  { title: '상담 영수증', desc: '「기억 상담소」 8/29 09:00 — 사쿠라이 하야카. 로고는 글자 없는 빈 말풍선. 주소: 구시가 언덕 3-1.' },
  panel:    { title: '보일러실 배전반', desc: '「노후 누전」이라던 배전반. 그을음 아래, 공구로 깔끔하게 잘라 엇갈려 이어 붙인 전선.' },
  schedule4:{ title: '하쿠요 공정표', desc: '「사쿠라유 부지 — 9월 전 비움. 방법은 현장 판단. 니시무라」. 현장사무소 화이트보드 사진.' },
  record:   { title: '6년 전 화재 기록', desc: '등대 도서관 화재 공식 기록 사본. 「원인: 보일러실 배전반 노후 누전」. 사쿠라유 소방 보고서와 한 글자도 다르지 않다.' },
});

Object.assign(WORDS, {
  p_hayaka: { text: '하야카', cat: 'person' }, p_keiko: { text: '케이코', cat: 'person' }, p_okamoto: { text: '오카모토', cat: 'person' },
  p_murase: { text: '무라세', cat: 'person' }, p_genzo: { text: '겐조', cat: 'person' }, p_worker: { text: '하쿠요 인부', cat: 'person' },
  t_2230: { text: '22시 30분', cat: 'time' }, t_2245: { text: '22시 45분', cat: 'time' }, t_2300: { text: '23시', cat: 'time' },
  pl_boiler: { text: '보일러실', cat: 'place' }, pl_fence: { text: '울타리', cat: 'place' }, pl_office4: { text: '현장사무소', cat: 'place' }, pl_festival: { text: '축제', cat: 'place' },
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
    hint: '시계가 보이는 컷은 둘뿐이야. 나머지는 목욕탕 불이 켜졌는지 꺼졌는지 봐. 범위도 다시 읽고.',
    rei: '(장갑의 로고. 아까 그 현장소장 작업복에도 있었지.)',
  },
  page4b: {
    title: '최종 재구성 — 8월 28일, 사쿠라유의 밤',
    goal: '말다툼부터 두 페이지. 1쪽은 불길이 처음 보일 때까지, 2쪽은 그 뒤. 페이지가 넘어가는 자리도 맞아야 한다.',
    cuts: ['4A', '4B', '4C', '4D', '4E', '4F', '4G', '4H', '4I', '4J', '4M', '4K', '4L'],
    solution: ['4A', '4B', '4C', '4D', '4E', '4F', '4G', '4H', '4I', '4J', '4M', '4K'],
    decoys: ['4L'],
    pageBreak: 6,
    bubbles: {},
    hint: '시계는 몇 장에만 있어. 문이 잠겼는지 열렸는지, 소방차가 왔는지, 하늘이 밝은지로 사이를 채워.',
    rei: '다 불러 모으자. 사쿠라유 앞으로.',
  },
});

Object.assign(WITNESSES, {
  okamoto: {
    char: 'okamoto', bg: 'okamoto_house', face: 'angry',
    goal: '겁먹은 기억 속 착각을 걷어 내라.',
    statements: [
      { text: '밤 10시 45분이야. 거인 같은 놈들이 목욕탕 뒷문으로 쳐들어갔다니까!', cut: 't_okamoto_1', dist: '과장', truthCut: '4D',
        cutDesc: '뒷문을 부수고 들어가는 거대한 그림자 둘. 집채만 하다.',
        press: [['okamoto', '하쿠요 놈들이 몇 달째 밤마다 어슬렁거렸어. 겐조 영감 혼자 버티니까.', 'angry']], words: ['p_genzo'] },
      { text: '교복 입은 계집애도 그놈들이랑 같이 그 뒷문으로 들어갔어. 그 집 손녀야. 그 애가 불 지른 거지!', cut: 't_okamoto_2', truthCut: '4D',
        cutDesc: '헬멧 둘 사이에 끼어 열린 뒷문으로 들어가는 교복 차림의 작은 뒷모습.',
        press: [['okamoto', '그날 저녁에 할아버지랑 대판 싸웠다더라고. 가게 팔자고.', 'angry'],
          ['okamoto', '7시 반대 모임에도 영감이 안 왔어. 맨 앞자리가 늘 영감 자리인데. 가게 문을 못 닫겠다더라고.', 'normal']], words: ['p_hayaka'] },
      { text: '119엔 내가 전화했어. 영감이 업혀 나오는 걸 보자마자. 그건 확실해.', cut: 't_okamoto_3',
        cutDesc: '휴대폰을 귀에 댄 손. 창밖이 붉다.',
        press: [['okamoto', '처음엔 무서워서 커튼 뒤에 숨어만 있었어. 그사이에 불이 그렇게 커질 줄은.', 'normal'], ['okamoto', '업고 나온 사람 얼굴은 연기 때문에 못 봤어. 머리를 뒤로 묶은 여자였던 것만 기억나.', 'normal']] },
    ],
    answers: [
      { statement: 0, cut: '4D', shout: '거인이 아니에요!',
        rebut: '할머니 창에 남은 건 헬멧 쓴 남자 둘이에요. 헬멧엔 하쿠요 로고가 있고요.',
        success: [['okamoto', '그래, 헬멧이었지. 그 밤엔 다 집채만 해 보였어.', 'normal'],
          ['rei', '보일러실 뒷문 자물쇠는 멀쩡했어요. 그 문 열쇠, 누가 갖고 있어요?', 'serious'],
          ['okamoto', '겐조 영감 거 하나. 그리고 하청 현장소장 무라세가 「안전 점검」이라면서 사본을 받아 갔어. 영감이 얼마나 투덜댔는데.', 'angry']],
        peel: [0], words: ['p_murase', 'p_okamoto', 't_2245'] },
      { statement: 1, cut: '4D', shout: '그 아이는 문 밖에 있었어요!',
        rebut: '같은 10시 45분이에요. 뒷문으로 들어간 건 헬멧 둘뿐이고, 교복 입은 애는 그때 골목 모퉁이에 서 있어요.',
        success: [['okamoto', '모퉁이…. 그래, 모퉁이였어. 문으로 들어간 건 그놈들뿐이고.', 'normal'],
          ['okamoto', '애가 같이 들어간 건… 내가 멋대로 붙였나 봐. 아이고, 그 애한테 몹쓸 소리를 했네.', 'normal']] },
    ],
    rewards: ['4I'],
    koharu: [['koharu', '(선배, 할머니 창문에서 읽은 컷… 창틀에 시계가 있었죠.)', 'worried']],
    wrong: [['okamoto', '뭐야? 노인네라고 무시하는 거야?', 'angry']],
    wrongBy: {
      '4B': [['okamoto', '손전등? 그게 뭐. 난 창에서 본 것만 말해.', 'angry']],
    },
    close: [['okamoto', '에잇, 오늘은 그만. 혈압 올라.', 'angry'], ['koharu', '(다시 들어 봐요, 선배.)', 'worried']],
  },
  hayaka: {
    char: 'hayaka', bg: 'hospital', face: 'normal', gentle: true,
    goal: '잘린 칸에 남의 컷을 끼워 하야카의 밤을 되찾아라. 먼저 동의를 구할 것.',
    intro: [['towa', '가운데 칸 두 개, 잘려 나갔어. 칼질이 깔끔해.'], ['tip', '잘린 칸에는 다른 사람의 컷을 끼울 수 있다. 끼우기 전에 증인에게 "이게 네 밤이었을 수 있어?"라고 묻는다.']],
    statements: [
      { text: '그날 밤엔 할아버지랑 싸우고 가게를 나왔어요.', cut: 't_hayaka_1',
        cutDesc: '목욕탕을 나서는 뒷모습. 문 닫히는 소리.',
        press: [['hayaka', '가게 팔자고 했어요. 할아버지 혼자 고생하는 게 싫어서요. 그러다 싸움이 됐어요.', 'normal']] },
      { text: '거기는 기억 안 나요.', cut: 't_hayaka_2', dist: '삭제',
        cutDesc: '가위로 오려 낸 듯 칸이 통째로 비어 있다. 가장자리에 흰 장갑 자국, 귀퉁이에 담벼락 한 조각이 남았다.',
        press: [['hayaka', '없어요. 지웠으니까요.', 'normal']] },
      { text: '여기도요. 아무것도 없어요.', cut: 't_hayaka_3', dist: '삭제',
        cutDesc: '오려 낸 빈 칸. 귀퉁이에 손전등 빛 같은 노란 자국이 조금 남았다.',
        press: [['hayaka', '지우고 나서, 아까 처음으로 잠깐 잤어요.', 'crying']] },
      { text: '그러니까 그냥 두세요. 아무도 안 다치게.', cut: 't_hayaka_4',
        cutDesc: '하얀 방. 빈 말풍선 로고. 서류에 서명하는 손.',
        press: [['hayaka', '상담소 사람이 그랬어요. 잊는 것도 용기라고.', 'normal']] },
    ],
    answers: [
      { statement: 1, cut: '4D',
        rebut: '오카모토 할머니가 창에서 본 거야. 골목 모퉁이에 교복 입은 애가 있지. 이거, 네 밤일 수도 있어?',
        success: [['hayaka', '교복. 저예요.', 'crying'], ['hayaka', '사과하러 돌아갔었어요. 할아버지한테.', 'crying'],
          ['hayaka', '근데 헬멧 쓴 아저씨 둘이 뒷문으로 들어가는 게 보여서, 모퉁이에 숨었어요.', 'crying']],
        words: ['pl_fence'] },
      { statement: 2, cut: '4B', requires: [0],
        rebut: '네가 모퉁이에 오기 조금 전에, 울타리 앞에서 누가 이 손전등을 받았어. 네가 숨어 있을 때 이 불빛, 누가 들고 있었어?',
        success: [
          ['hayaka', '엄마.', 'crying'],
          ['hayaka', '엄마가 그 손전등 들고 울타리 앞에 혼자 서 있었어요. 골목을 자꾸 이쪽저쪽 보면서요. 헬멧 아저씨들이 들어간 문 바로 앞에서.', 'crying'],
          ['hayaka', '무서워서 집까지 뛰었어요. 밤늦게 가게에 불났다고 전화가 왔고요. 엄마가 불 지른 거라고… 그 생각밖에 안 났어요.', 'crying'],
          ['hayaka', '엄마를 신고할 순 없잖아요. 할아버지가 알아도 안 되고. 그래서… 지웠어요.', 'crying'],
        ],
        choice: { prompt: '레이: 하야카에게 뭐라고 할까?', options: ['"엄마가 불을 냈으니 숨길 수밖에 없었겠지."', '"지키려고 지운 거구나."', '"지우면 안 됐어."'], answer: 1,
          success: [['hayaka', '네.', 'crying']],
          wrong: [['hayaka', '혼나려고 보여 준 거 아니에요.', 'crying'], ['koharu', '(선배, 몰아붙이지 마요…)', 'worried']] },
        rewards: ['4E'], words: ['a_watch', 'a_erase'] },
    ],
    koharu: [['koharu', '(선배, 할머니 창문 컷에… 교복 입은 아이가 있었잖아요.)', 'worried']],
    wrong: [['hayaka', '그건 제 밤이 아니에요.', 'normal']],
    close: [['hayaka', '그만해 주세요.', 'crying'], ['koharu', '(천천히 다시 해요.)', 'worried']],
  },
  cross4: {
    char: 'murase', char2: 'okamoto', bg: 'site_office', face: 'smile', erode: true,
    goal: '같은 밤, 두 사람의 증언. 거짓말하는 쪽을 깨라.',
    intro: [['towa', '서둘러. 현장, 지금도 지워지고 있어.'], ['tip', '교차 심문: 두 사람의 증언이 번갈아 나온다. 거짓말한 쪽을 골라 깨야 한다. 세 번 틀릴 때마다 수첩의 컷이 하나씩 흐려진다.']],
    statements: [
      { char: 'okamoto', text: '10시 45분에 헬멧 쓴 놈 둘이 뒷문으로 들어갔어. 이번엔 똑바로 말하는 거야.', cut: 't_cross_1',
        cutDesc: '할머니 창에서 본 뒷문. 헬멧 둘.',
        press: [['okamoto', '탁상시계 보고 하는 말이야.', 'normal']] },
      { char: 'murase', text: '그 시각 저는 현장사무소에 혼자 있었습니다. 한 발짝도 안 나갔어요.', cut: 't_cross_2', dist: '생략',
        cutDesc: '현장사무소. 책상 앞 의자 자리만 하얗게 비어 있다.',
        press: [['murase', '야근이었죠. 공정표 정리하느라.', 'smile']] },
      { char: 'okamoto', text: '불은 보일러실 쪽에서 났어. 펑 하고.', cut: 't_cross_3',
        cutDesc: '보일러실 창에서 튀는 불꽃.',
        press: [['okamoto', '그 보일러, 겐조 영감이 매일 닦던 거야.', 'normal']] },
      { char: 'murase', text: '보일러실 배전반이 낡아서 누전된 겁니다. 소방 보고서에도 그렇게 나와요.', cut: 't_cross_4',
        cutDesc: '그을린 배전반. 깔끔하게 정리된 전선.',
        press: [['murase', '낡은 시설은 위험하다고 그렇게 말씀드렸는데요.', 'smile']] },
    ],
    answers: [
      { statement: 1, cut: ['4C', '4D'], shout: '사무소에 없었어!',
        rebut: '할머니가 헬멧 둘을 본 10시 45분 직전에, 보일러실 뒷문을 열쇠로 연 손이 있어요. 그 잔상, 무라세 씨 열쇠함 빈 고리에서 읽었어요. 그 문 열쇠 사본을 받아 간 사람은 무라세 씨 하나고요.',
        success: [['murase', '점검차 들렀을 수도 있죠. 기억이 안 나네요.', 'smile']],
        peel: [1], words: ['th_key', 'pl_office4'] },
      { statement: 3, cut: 'panel', requires: [0], shout: '누전이 아니야!',
        rebut: '그을음 밑 전선, 공구로 잘라서 엇갈려 이어 놨어요. 낡아서 이렇게 되진 않아요.',
        success: [['murase', '불이 나면 전선이야 다 녹습니다. 그걸로 뭘….', 'cornered']],
        choice: { prompt: '할머니가 본 헬멧 둘. 앞사람이 무라세라면, 뒷사람은?', options: ['현장 인부 중 한 명', '하쿠요 바깥에서 온 사람', '망을 보던 케이코'], answer: 1,
          success: [['rei', '뒷사람 헬멧엔 「방문자」 스티커가 있었어요. 사무소 걸이에서 같이 그을려 있던 거요. 인부면 자기 이름 붙은 걸 쓰죠.', 'serious'],
            ['murase', '위에서 시킨 겁니다. 「9월 전에 비워라」. 니시무라 상무가.', 'cornered'],
            ['rei', '그 방문자 헬멧은요?', 'serious'],
            ['murase', '상무님 본인입니다. 직접 헬멧 쓰고 오셔서 배전반 어딜 자를지 손가락으로 짚어 주셨어요. 「예전에도 이렇게 끝냈다」면서요.', 'cornered'],
            ['rei', '예전이라뇨. 언제, 어디서요?', 'serious'],
            ['murase', '모릅니다. 그 말만 들었어요. 정말입니다.', 'cornered'],
            ['murase', '자르는 것까지 보고 먼저 가셨습니다. 축제 본부에 얼굴을 내밀어야 한다고. 끝나면 전화하라고.', 'cornered'],
            ['murase', '영감님은 축제에 간 줄 알았어요. 케이코 씨도 그렇게 듣고 망을 본 거고요.', 'cornered'],
            ['rei', '하야카가 기억을 지운 건 오늘 아침이에요. 그런데 아까 사쿠라유에서 무라세 씨가 그 얘길 먼저 꺼냈죠. 어떻게 아셨어요?', 'serious'],
            ['murase', '「기억 상담소」 전단, 그거 저희가 이 동네에 돌린 겁니다. 위에서 내려보낸 거고요.', 'cornered'],
            ['murase', '오늘 아침에 「사쿠라유 손녀가 다녀갔다」고 전화가 왔습니다. 번호는 안 뜨더군요.', 'cornered']],
          wrong: [['towa', '틀렸어. 할머니 컷 뒷사람 헬멧. 사무소 걸이랑 비교해.']] },
        words: ['a_tamper', 'th_panel'] },
    ],
    koharu: [['koharu', '(선배, 현장사무소 열쇠함… 거기서 읽은 컷이 있었죠.)', 'worried']],
    wrong: [['murase', '그게 저랑 무슨 상관이죠?', 'smile']],
    wrongBy: {
      '4C': [['murase', '어디서 나온 그림인지도 모르는 걸로 뭘 하시려고요.', 'smile']],
      '4J': [['murase', '그 시각에 전화 한 통 한 게 죄입니까?', 'smile']],
    },
    close: [['murase', '오늘은 바쁩니다. 변호사 통해 주시죠.', 'normal'], ['koharu', '(빠져나가려고 해요, 선배. 처음부터 다시요.)', 'worried']],
  },
  keiko: {
    char: 'keiko', bg: 'hospital', face: 'normal',
    goal: '연기로 흐려진 기억에 다른 눈으로 본 컷을 끼워라.',
    statements: [
      { text: '하쿠요 사람은 그만둔 뒤로 만난 적도 없어요.', cut: 't_keiko_1',
        cutDesc: '집 부엌. 혼자 앉은 식탁. 컵 하나와 꺼진 휴대폰. 의자 등에 회사 패치를 뜯어낸 작업복.',
        press: [['keiko', '하쿠요 일은 그만뒀어요. 빚은… 남았지만.', 'normal']] },
      { text: '아버지 일은 밤늦게 연락받고서야 알았어요.', cut: 't_keiko_2', dist: '흐림',
        cutDesc: '연기처럼 뿌옇게 흐린 컷. 형체를 알아볼 수 없다.', truthCut: '4G',
        press: [['keiko', '병원에 와 보니 아버지는 벌써 중환자실에 계셨어요.', 'normal']] },
    ],
    answers: [
      { statement: 0, cut: '4B', shout: '하쿠요 사람을 만났어요!',
        rebut: '10시 30분, 울타리 앞. 하쿠요 로고 장갑이 건넨 손전등을 받은 건 케이코 씨 손이에요.',
        success: [
          ['keiko', '망만 봐 주면 빚을 줄여 준다고 했어요. 아버지는 축제 가셨다고, 가게는 비었다고.', 'crying'],
        ],
        peel: [0] },
      { statement: 1, cut: ['4H', '4G'], with: '4I', requires: [0], shout: '케이코 씨는 불 속에 있었어요!', cg: 'cg_carry', page: ['4G', '4H', '4I'], pageCap: '불 속으로.',
        rebut: '할아버지 눈에 남은 건 그을린 목덜미랑 그 머리끈이에요. 조금 뒤 오카모토 할머니는 정문으로 노인을 업고 나오는 여자를 봤고요. 아버지를 업고 나온 사람, 케이코 씨죠.',
        success: [
          ['keiko', '안에서 기침 소리가 났어요. 아버지 기침.', 'crying'],
          ['keiko', '아무 생각도 안 났어요. 정신 차려 보니까 아버지를 업고 밖이었어요.', 'crying'],
          ['hayaka', '엄마.', 'crying'],
          ['keiko', '하야카, 미안해. 망 본 건 진짜야. 그건 지우지 마.', 'crying'],
        ],
        peel: [1], words: ['a_rescue', 'p_keiko'] },
    ],
    koharu: [['koharu', '(선배, 할아버지 손목시계에서 읽은 컷… 누군가의 등이었잖아요.)', 'worried']],
    wrong: [['keiko', '모르겠어요.', 'normal']],
    close: [['keiko', '조금만 쉬게 해 주세요.', 'crying'], ['koharu', '(다시 해요, 선배.)', 'worried']],
  },
});

const NAME4_MID = [
  '그날 밤, ', { cat: 'person', a: 'p_murase' }, '이(가) 사쿠라유의 ', { cat: 'thing', a: 'th_panel' }, '을(를) ', { cat: 'act', a: 'a_tamper' }, ' 불을 냈다.\n',
  { cat: 'time', a: 't_2245' }, '쯤 ', { cat: 'place', a: 'pl_boiler' }, '에 들어갔다.',
];
const NAME4_FINAL = [
  { cat: 'person', a: 'p_murase' }, '이(가) ', { cat: 'thing', a: 'th_panel' }, '을(를) 조작해 불을 냈다. ', { cat: 'person', a: 'p_keiko' }, '은(는) ', { cat: 'act', a: 'a_watch' }, '.\n',
  '그리고 불 속에 뛰어들어 아버지를 ', { cat: 'act', a: 'a_rescue' }, '.\n',
  { cat: 'person', a: 'p_hayaka' }, '은(는) ', { cat: 'place', a: 'pl_fence' }, ' 앞에 선 엄마를 보고 도망쳤고, 다음 날 그 밤을 ', { cat: 'act', a: 'a_erase' }, '.',
];
const CONCLUSION4 = [
  { q: '사람이 불을 냈다는 물증은?', answer: ['panel'], choices: ['panel', 'record', 'receipt', '4F', '4L'] },
  { q: '「9월 전에 비워라」. 그렇게 지시한 사람 이름이 적힌 물증은?', answer: ['schedule4'], choices: ['schedule4', 'receipt', 'record', '4J', 'panel'] },
];

Object.assign(PROFILES, {
  hayaka: '사쿠라이 하야카(17). 겐조의 손녀. 불이 난 다음 날 아침 「기억 상담소」에서 그 밤의 기억을 지웠다.',
  keiko: '사쿠라이 케이코(44). 하야카의 엄마, 겐조의 딸. 하쿠요 하청에서 일하다 빚을 졌다. 두 손에 붕대.',
  okamoto: '오카모토 할머니(68). 재개발 반대 모임 대표. 사쿠라유 건너편 집 2층에서 그날 밤을 봤다.',
  murase: '무라세(50). 하쿠요 하청 현장소장. 불은 "노후 배전반 누전"이라고 한다.',
  nishimura: '니시무라 고로. 하쿠요 계열사 상무.',
});
