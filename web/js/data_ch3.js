// 3장 「둘 중 하나」 데이터. 기획: docs/12_story_plan.md §3 3장, docs/13_deduction_upgrade.md §3-4
// 진실: 마감한 "유키"는 처음부터 동생 나기(유키 행세). 유키는 미술 학원. 봉투를 가져간 건 점술가 마도카.
// 마도카는 셔터 전 마지막 손님으로 들어와 안쪽 화장실에 남았다가, 불 꺼진 2층 창고 문간에 숨었다.
// 21:10 봉투를 들고 계단을 오르던 점장에게서 봉투를 낚아채고 창고 뒷문 바깥 철계단으로 달아났다. 점장은 쫓으려다 계단 아래로 떨어졌다.
// "미래 컷" 3장은 흰 장갑(렌)이 마도카의 잔상을 꺼내 준 것. F1은 진짜, F2·F3은 마도카가 스크린톤으로 손을 오려 붙인 가짜.

Object.assign(CHARACTERS, {
  yuki:    { name: '유키',     hair: '#2a2f3a', outfit: '#f2e6d0', accent: '#38a3a5', faces: ['normal', 'crying', 'smile'] },
  nagi:    { name: '나기',     hair: '#2a2f3a', outfit: '#f2e6d0', accent: '#38a3a5', faces: ['normal', 'scared', 'crying'] },
  // 유키 행세를 하는 나기: 유키의 그림을 빌려 쓴다
  // yukin_*.png가 아직 없어 유키 그림을 빌린다. 유키 행세 그림(portrait-yukin)이 들어오면 as를 지운다
  yukin:   { name: '유키',     hair: '#2a2f3a', outfit: '#f2e6d0', accent: '#38a3a5', faces: ['normal', 'crying', 'smile'], as: 'yuki' },
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
          desc: '밤의 양과점 앞. 오른쪽에 리본을 단 앞치마 차림 점원이 셔터 손잡이를 끌어내린다. 발치에 「영업 종료」 팻말, 운동화 위로 흰 붕대를 감은 발목. 가게 벽시계 8시 50분.',
          tags: { clock: '2050' },
          spots: [{ id: 'ankle', label: '발목', x: 0.51, y: 0.78, w: 0.19, h: 0.2, word: 'th_bandage' }, { id: 'clock', label: '벽시계', x: 0.32, y: 0.06, w: 0.13, h: 0.22, word: 't_2050' }, { id: 'ribbon', label: '오른쪽 리본', x: 0.57, y: 0.09, w: 0.11, h: 0.13 }, { id: 'handle', label: '셔터를 잡은 손', x: 0.62, y: 0.5, w: 0.13, h: 0.14 }, { id: 'sign', label: '영업 종료 팻말', x: 0.1, y: 0.6, w: 0.17, h: 0.36 }] },
  '3B': { owner: 'twin', title: '정산',
          desc: '셔터가 내려간 매장 안 계산대. 한 손으로 지폐 다발을 누르고, 다른 손의 펜으로 장부에 적는다. 펜은 계산대 오른쪽 끝, 지폐는 왼쪽. 옆에 두툼한 매상 봉투.',
          tags: { clock: '2100' },
          spots: [{ id: 'hand', label: '펜을 쥔 손', x: 0.64, y: 0.5, w: 0.22, h: 0.3, word: 'th_righthand' }, { id: 'bills', label: '지폐를 누른 손', x: 0.1, y: 0.52, w: 0.32, h: 0.32 }, { id: 'envelope', label: '매상 봉투', x: 0.2, y: 0.36, w: 0.3, h: 0.23, word: 'th_envelope' }, { id: 'shutter', label: '내려간 셔터', x: 0.26, y: 0, w: 0.55, h: 0.34 }] },
  '3G': { owner: 'twin', title: '발견',
          desc: '창고 계단 아래 바닥에 남자가 쓰러져 있고, 안경이 떨어져 있다. 앞치마 차림의 점원이 두 손으로 입을 막고 서 있다. 계단 위쪽은 깜깜하다. 점원의 발목에 붕대. 벽시계 9시 15분.',
          tags: { clock: '2115' },
          spots: [{ id: 'clock', label: '벽시계', x: 0.81, y: 0.01, w: 0.14, h: 0.2, word: 't_2115' }, { id: 'ankle', label: '발목', x: 0.26, y: 0.75, w: 0.16, h: 0.16, word: 'th_bandage' }, { id: 'glasses', label: '떨어진 안경', x: 0.61, y: 0.86, w: 0.16, h: 0.13 }, { id: 'stairs', label: '계단 위쪽', x: 0.5, y: 0, w: 0.22, h: 0.25 }, { id: 'mouth', label: '입을 막은 손', x: 0.34, y: 0.11, w: 0.1, h: 0.15 }] },
  '3H': { owner: 'twin', title: '신고',
          desc: '떨리는 손에 쥔 휴대폰. 화면에 「119 통화 중」. 손 너머로 계산대 다리와 붕대 감은 발목.',
          tags: { clock: '2125' } },
  '3K': { owner: 'twin', title: '근무표',
          desc: '낮의 매장. 벽에 이번 주 근무표를 붙이는 오른손. 창으로 햇빛이 들어 쇼케이스가 반짝인다.',
          tags: { clock: '1500' } },
  '3E': { owner: 'twin', title: '학원',
          desc: '미술 학원 실기실. 이젤 앞에서 왼손으로 목탄을 쥐고 석고상을 그린다. 이젤 아래로 샌들 신은 맨발. 벽시계 9시.',
          tags: { clock: '2100' },
          spots: [{ id: 'hand', label: '목탄을 쥔 손', x: 0.52, y: 0.28, w: 0.14, h: 0.16, word: 'th_lefthand' }, { id: 'clock', label: '벽시계', x: 0.85, y: 0.01, w: 0.14, h: 0.2, word: 't_2100' }, { id: 'feet', label: '이젤 아래 발', x: 0.55, y: 0.84, w: 0.15, h: 0.14 }, { id: 'bust', label: '석고상', x: 0.6, y: 0.1, w: 0.2, h: 0.45 }] },
  '3F': { owner: 'twin', title: '막차 전',
          desc: '역 승강장. 화판을 멘 채 왼손으로 휴대폰을 본다. 역 시계 9시 25분. 보내려던 메시지 「오늘도 고마워」. 받는 사람 이름은 엄지에 가려 있다.',
          tags: { clock: '2125' } },
  '3C': { owner: 'hasegawa', title: '계단 위',
          desc: '계단 중간에서 올려다본 2층 창고 문간. 별무늬 숄을 두른 사람이 봉투를 낚아채 돌아선다. 화면 아래에서 빈손이 위로 뻗어 있고, 그 손목의 시계는 9시 10분. 문간은 어둡고, 아래에서 올라온 매장 불빛에 숄 그림자가 천장까지 늘어진다.',
          tags: { clock: '2110' },
          spots: [{ id: 'shawl', label: '별무늬 숄', x: 0.4, y: 0.15, w: 0.3, h: 0.35, word: 'th_shawl' }, { id: 'watch', label: '손목시계', x: 0.24, y: 0.71, w: 0.15, h: 0.19, word: 't_2110' }, { id: 'envelope', label: '봉투', x: 0.43, y: 0.2, w: 0.1, h: 0.15 }, { id: 'door', label: '2층 문간', x: 0.38, y: 0, w: 0.32, h: 0.1 }, { id: 'shadow', label: '천장의 그림자', x: 0.75, y: 0.03, w: 0.21, h: 0.45 }] },
  '3D': { owner: 'hasegawa', title: '바닥에서',
          desc: '흐릿한 시야. 바닥에서 올려다본 앞치마 차림의 점원이 휴대폰을 두 손으로 쥐고 서 있다. 휴대폰 화면은 까맣게 꺼져 있고, 손가락은 화면에 닿지 않았다. 그 뒤로 깜깜한 계단 위쪽.',
          tags: { clock: '2120' } },
  '3J': { owner: 'tofu', title: '뒷골목',
          desc: '두부집 진열대 너머 아케이드. 별무늬 숄을 두른 사람이 양과점 뒷골목에서 뛰어나온다. 진열대 위 두부 물통, 가게 시계 9시 22분.',
          tags: { clock: '2112' } },
  F1: { owner: 'madoka', title: '미래 컷 1',
        desc: '「미래 컷」. 어두운 계단 위에서 내려다본 1층. 계단 아래 밝은 매장에서 오른쪽 리본 점원이 봉투를 내밀고, 남자의 손이 그걸 받는다. 화면 가장자리에 난간 기둥.',
        tags: { clock: '2105' } },
  F2: { owner: 'madoka', title: '미래 컷 2',
        desc: '「미래 컷」. 어두운 창고 문간에서 앞치마 소매의 손이 봉투를 움켜쥔다. 봉투 너머로 계단 아래 매장 불빛. 손과 소매 언저리만 스크린톤 점이 유난히 촘촘하다.',
        tags: { clock: '2110' },
        spots: [{ id: 'seam', label: '봉투를 쥔 손', x: 0.16, y: 0.4, w: 0.14, h: 0.38 }, { id: 'sleeve', label: '앞치마 소매', x: 0.02, y: 0.64, w: 0.21, h: 0.34 }, { id: 'bag', label: '봉투', x: 0.26, y: 0.32, w: 0.13, h: 0.22 }, { id: 'light', label: '계단 아래 불빛', x: 0.43, y: 0.74, w: 0.4, h: 0.24 }] },
  F3: { owner: 'madoka', title: '미래 컷 3',
        desc: '「미래 컷」. 계단 위에서 앞치마 소매의 손이 올라오는 남자의 어깨를 민다. 아래쪽 매장 불빛. 벽에는 난간과 남자의 그림자가 천장 쪽으로 길게 늘어져 있고, 미는 손의 그림자는 짧게 바닥 쪽으로 떨어져 있다.',
        tags: { clock: '2110' },
        spots: [{ id: 'shadow', label: '벽의 그림자', x: 0.7, y: 0.1, w: 0.25, h: 0.36 }, { id: 'hand', label: '미는 손', x: 0.52, y: 0.06, w: 0.18, h: 0.18 }, { id: 'man', label: '남자의 어깨', x: 0.38, y: 0.12, w: 0.24, h: 0.52 }, { id: 'rail', label: '난간', x: 0.2, y: 0.3, w: 0.22, h: 0.55 }] },
});

Object.assign(ITEMS, {
  roster:  { title: '근무표와 직원 메모', desc: '8/27 마감: 유키. 메모: 「유키 — 왼손잡이라 계산대 왼쪽에. 나기 — 지난주 발목 삠, 무리시키지 말 것.」' },
  ledger:  { title: '매상 장부', desc: '8/27 21:00 정산 42만 엔. 「금고 입금」 칸이 비어 있다. 오른쪽으로 기운 오른손 글씨.' },
  debt:    { title: '독촉장', desc: '점술 부스 서랍 속 소비자 금융 독촉장. 「8/31까지 40만 엔」. 수신: 미즈시마 마도카.' },
  sequin:  { title: '별 스팽글', desc: '양과점 창고 바깥 철계단 바로 아래, 뒷골목 배수구에 걸린 은색 별 스팽글. 마도카의 숄과 같은 모양.' },
  tone:    { title: '오려 낸 스크린톤', desc: '부스 쓰레기통 속 회색 점무늬 스크린톤 조각과 가위 자국. 가운데가 손 모양으로 오려져 나갔다.' },
});

Object.assign(WORDS, {
  p_yuki: { text: '유키', cat: 'person' }, p_nagi: { text: '나기', cat: 'person' }, p_madoka: { text: '마도카', cat: 'person' },
  p_hasegawa: { text: '점장', cat: 'person' }, p_tofu: { text: '두부집 할머니', cat: 'person' },
  t_2050: { text: '20시 50분', cat: 'time' }, t_2100: { text: '21시', cat: 'time' }, t_2110: { text: '21시 10분', cat: 'time' },
  t_2115: { text: '21시 15분', cat: 'time' }, t_10min: { text: '10분', cat: 'time' },
  pl_storage: { text: '창고 계단', cat: 'place' }, pl_counter: { text: '계산대', cat: 'place' }, pl_academy: { text: '미술 학원', cat: 'place' },
  pl_booth3: { text: '점술 부스', cat: 'place' }, pl_alley: { text: '뒷골목', cat: 'place' },
  th_envelope: { text: '매상 봉투', cat: 'thing' }, th_shawl: { text: '별무늬 숄', cat: 'thing' }, th_bandage: { text: '발목 붕대', cat: 'thing' },
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
    hint: '가게는 문을 닫고 나서 뭘 하지? 거기서부터.',
    rei: '신고 접수는 9시 25분이었지.',
  },
  time3: {
    timeline: true,
    title: '시각표 — 8월 27일 밤, 쌍둥이',
    goal: '근무표의 「유키」는 가게에, 영수증의 유키는 학원에. 그날 밤 각자 몇 시에 무엇을 했는지 채운다.',
    times: ['20:50', '21:00', '21:15', '21:25'],
    // 줄 이름은 장소로만 가른다. 가게 쪽이 누구인지는 다음 심문(yukin)에서 손·발목으로 밝힌다
    rows: [{ who: '학원의 유키', cells: [null, '3E', null, '3F'] }, { who: '가게의 「유키」', cells: ['3A', '3B', '3G', '3H'] }],
    cuts: ['3A', '3B', '3G', '3H', '3E', '3F'],
    hint: '시계가 안 보이는 컷은 장부의 정산 시각과 신고 접수 시각으로 끼워.',
    rei: '21시에 「유키」가 두 군데 있어. 한쪽은 유키 씨가 아니야.',
  },
  page3c: {
    discard: true,
    title: '최종 재구성 — 8월 27일, 셔터부터 신고까지',
    goal: '그날 밤을 순서대로. 넓은 칸은 같은 순간의 두 장. 누군가 고쳐 그린 가짜는 파기 칸에 버린다.',
    cuts: ['3A', '3B', '3E', 'F1', '3C', '3J', '3G', '3D', '3H', '3F', 'F2', 'F3'],
    solution: ['3A', ['3B', '3E'], 'F1', '3C', '3J', '3G', '3D', ['3H', '3F'], ['F2', 'F3']],
    bubbles: {},
    hint: '시계가 없는 컷은 앞뒤에 일어난 일로 끼워. 할머니네 시계가 빨랐던 것도.',
    rei: '과장님께 전화해야겠어. 다들 가게로 모이라고.',
  },
});

Object.assign(WITNESSES, {
  tofu: {
    char: 'tofu', bg: 'arcade', face: 'normal',
    goal: '할머니가 본 시각을 바로잡아라.',
    intro: [['towa', '할머니는 자기 시계를 믿어. 넌 뭘 믿을 건데.']],
    statements: [
      { text: '양과점 셔터 내린 게 딱 9시야. 우리 집 시계로 똑똑히 봤어.', cut: 't_tofu_1',
        cutDesc: '두부집 벽시계가 9시를 가리킨다. 건너편에서 드르륵 셔터 소리.',
        press: [['tofu', '아이고, 우리 집 시계는 틀린 적이 없어. 영감이 맞춰 둔 거라니까.', 'normal']] },
      { text: '그러고 한참 있다가, 9시 20분쯤 별무늬 숄 걸친 아가씨가 뒷골목에서 뛰어나왔어.', cut: 't_tofu_2',
        cutDesc: '두부집 시계 9시 20분 무렵. 반짝이는 숄 자락이 골목으로 사라진다.',
        press: [['tofu', '반짝반짝한 숄이었어. 점 보는 아가씨들이 그런 걸 두르잖아.', 'normal']], words: ['th_shawl', 'pl_alley'] },
      { text: '그날 가게 본 건 오른쪽 리본 아가씨야. 쌍둥이 중 누군지는 몰라도 리본은 똑똑히 봤어.', cut: 't_tofu_3',
        cutDesc: '오른쪽 리본을 단 점원이 웃으며 손을 흔든다.',
        press: [['tofu', '언니가 유키, 동생이 나기. 언니는 리본이 오른쪽, 동생은 왼쪽이고.', 'normal'], ['tofu', '동생은 지난주에 발목 삐었다던데. 그래서 요새 언니만 나오나 봐.', 'normal']],
        words: ['p_nagi', 'th_bandage'] },
    ],
    answers: [
      { statement: 0, cut: '3A', shout: '셔터는 8시 50분이에요!',
        rebut: '셔터를 내릴 때 가게 벽시계는 8시 50분이었어요. 할머니 댁 시계가 10분 빨라요.',
        success: [
          ['tofu', '아이고. 그럼 우리 집 시계가 10분 빨랐던 거야?', 'surprised'],
          ['tofu', '그럼 숄 아가씨 뛰어나온 것도 9시 20분 말고 10분쯤이겠네.', 'surprised'],
        ],
        peel: [0], words: ['t_2110', 'p_tofu'] },
    ],
    rewards: ['3J'],
    koharu: [['koharu', '(선배, 셔터 내리는 컷… 가게 벽에도 시계가 있었죠.)', 'worried']],
    wrong: [['tofu', '응? 그게 뭐 어쨌다고?', 'normal']],
    close: [['tofu', '아이고, 두부 다 굳겠네. 다음에 와.', 'normal'], ['koharu', '(처음부터 다시 들어요, 선배.)', 'worried']],
  },
  yukin: {
    char: 'yukin', bg: 'interrogate', face: 'normal',
    goal: '가게의 「유키」는 자기가 진짜 유키라고 한다. 학원에 있던 건 누구인가.',
    intro: [['towa', '쌍둥이라며. 얼굴로는 못 가려.']],
    statements: [
      { text: '그날 마감은 제가 했어요. 학원에 다니는 건 동생 나기고요.', cut: 't_yukin_1',
        cutDesc: '셔터 앞에 선 오른쪽 리본의 점원. 셔터 손잡이를 잡은 손, 앞치마 주머니의 볼펜, 붕대 감은 발목 옆에 「영업 종료」 팻말. 구석에 벽시계.',
        press: [['yukin', '동생이 그림을 좋아해요. 집에서 반대하니까 제 이름으로 등록해 줬어요.', 'normal'], ['yukin', '학원에서 형사님들이 만난 것도 나기예요. 저 대신 아니라고 해 준 거고요.', 'normal']] },
      { text: '정산하고, 봉투는 금고에 넣었어요.', cut: 't_yukin_2', dist: '미화',
        cutDesc: '반짝이는 금고에 봉투를 넣는 손. 너무 깔끔하다.',
        press: [['yukin', '넣었어요. 넣었다니까요.', 'crying']] },
      { text: '점장님을 발견하고 바로 신고했어요. 그게 다예요.', cut: 't_yukin_3', dist: '생략',
        cutDesc: '119를 누르는 손. 그 앞이 하얀 여백으로 비어 있다.', truthCut: '3G',
        press: [['yukin', '바로요. 몇 번을 말해요.', 'crying']] },
    ],
    answers: [
      // 시각표는 "21시에 둘"까지만 알려 준다. 어느 쪽이 누구인지는 같은 21시의 두 손을 겹쳐서 가린다
      { statement: 0, cut: '3E', with: 'ledger', shout: '학원에 있던 건 유키 씨예요!',
        rebut: '21시, 학원에서 목탄을 쥔 손은 왼손이에요. 같은 21시에 가게 장부를 적은 건 오른손이고요. 메모판엔 왼손잡이가 유키 씨라고 적혀 있어요.',
        success: [['yukin', '저 양손 다 써요. 장부는 오른손으로 쓰는 버릇이 있을 뿐이에요.', 'crying']],
        choice: {
          prompt: '양손을 다 쓴다고 한다. 무엇으로 받아칠까?',
          options: ['"리본이 오른쪽이잖아요. 그건 유키 씨 자리예요."', '"두부집 할머니는 요새 언니만 나온다고 했어요."', '"그 발목. 셔터 내릴 때부터 붕대를 감고 있었죠."'],
          answer: 2,
          success: [
            ['rei', '지난주에 발목을 삔 건 나기 씨예요. 메모판에도 적혀 있어요. 학원의 유키 씨는 샌들에 맨발이었고요.', 'serious'],
            ['', '「유키」가 입술을 깨문다. 오른쪽 리본이 풀리고, 그걸 왼쪽에 다시 묶는다.'],
            ['yukin', '나기예요. 한 달 전부터 언니 대신 나왔어요.', 'crying'],
            ['yukin', '언니, 미술 학원 다녀요. 점장님한텐 비밀로요. 언니가 그만두면 가게가 힘들어지잖아요. 그래서 제가 언니인 척….', 'crying'],
          ],
          wrong: [['yukin', '그걸로 제가 누군지 어떻게 알아요?', 'normal']],
        },
        peel: [0], words: ['a_swap', 'p_nagi'] },
      { statement: 1, cut: ['ledger', 'F1'], requires: [0], shout: '봉투는 금고에 없었어!',
        rebut: '장부에 「금고 입금」 칸이 비어 있어요. 봉투는 금고에 안 들어갔어요.',
        success: [
          ['yukin', '넣으려고 했어요. 근데 점장님이 사무실에서 나오셔서 「내가 넣을게, 너 발목 아프잖아」 하고…', 'crying'],
          ['yukin', '계단 앞에서 봉투를 받아 들고 2층으로 올라가셨어요. 금고가 창고에 있어서요. 저는 계산대 닦고 있었는데… 쿵 소리가.', 'crying'],
        ],
        peel: [1], words: ['pl_storage'] },
    ],
    hold: { statement: 2, lines: [
      ['rei', '(이 10분은 아직 못 벗겨. 다른 사람 눈에 남은 게 있어야 해.)', 'serious'],
    ] },
    koharu: [['koharu', '(선배, 메모판에 왼손잡이라고 적혀 있던 게 누구였죠?)', 'worried']],
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
        cutDesc: '아무도 없는 창고 계단. 매장 불빛이 아래 몇 칸만 비추고, 위쪽 2층은 깜깜하다.',
        press: [['nagi', '계단이 가팔라서 늘 위험하다고 하셨어요. 위쪽 전구도 며칠째 나가 있었고요.', 'scared']] },
    ],
    answers: [
      { statement: 0, cut: ['3D', '3G'], with: '3H', shout: '바로가 아니야!',
        rebut: '발견이 9시 15분, 신고 접수가 9시 25분이에요. 그동안 점장님 눈에 남은 건 휴대폰만 쥐고 서 있는 나기 씨예요.',
        success: [
          ['', '나기가 앞치마 자락을 두 손으로 움켜쥔다.'],
          ['nagi', '무서웠어요. 신고하면 경찰이 오고, 그럼 제가 유키가 아니란 게 들키고.', 'crying'],
          ['nagi', '언니 학원 일도, 점장님한테 거짓말한 것도 다 들키고….', 'crying'],
          ['nagi', '10분 동안 아무것도 못 했어요. 점장님이 저를 보고 계셨는데.', 'crying'],
        ],
        peel: [0], words: ['t_10min', 'a_hesitate'], cg: 'cg_twins', page: ['3G', '3D', '3H'], pageCap: '그 10분.' },
      { statement: 1, cut: ['3C', '3J', 'F1'], shout: '혼자가 아니었어요!',
        rebut: '점장님은 계단을 오르다 위를 봤어요. 2층 문간에 별무늬 숄을 두른 사람이 있었고, 그 사람이 점장님 손에서 봉투를 낚아챘어요.',
        success: [
          ['nagi', '별무늬 숄.', 'scared'],
          ['nagi', '점술가 마도카 씨가 늘 두르는 거예요. 그날도 셔터 내리기 직전에 케이크 사러 오셨어요.', 'scared'],
          ['nagi', '화장실 좀 쓰겠다고 안쪽으로 가셨는데… 나가시는 걸 못 봤어요. 셔터 내리느라 정신이 없어서, 벌써 가신 줄 알았어요.', 'scared'],
        ],
        words: ['th_shawl', 'p_madoka'] },
    ],
    koharu: [['koharu', '(선배, 점장님 안경에서 읽은 컷… 바닥에서 올려다본 거 있었죠.)', 'worried']],
    wrong: [['nagi', '그게… 무슨 상관이에요?', 'scared']],
    close: [['nagi', '죄송해요. 조금만….', 'crying'], ['koharu', '(천천히 다시요, 선배.)', 'worried']],
  },
  madoka: {
    char: 'madoka', bg: 'booth3', face: 'smile', bgm: 'madoka',
    goal: '미래 컷의 이음매. 그리고 그 시각 마도카는 어디 있었나.',
    intro: [['towa', '미래는 없다고 했지. 그럼 이건 누가 만든 거야.'], ['tip', '증언 컷 속 한 곳을 짚어 반박할 수 있다.']],
    statements: [
      { text: '제 미래 컷에 나왔잖아요. 리본 아가씨 손이 봉투를 움켜쥐는 거.', cut: 'F2',
        spots: [{ id: 'seam', label: '봉투를 쥔 손', x: 0.16, y: 0.4, w: 0.14, h: 0.38 }, { id: 'sleeve', label: '앞치마 소매', x: 0.02, y: 0.64, w: 0.21, h: 0.34 }, { id: 'bag', label: '봉투', x: 0.26, y: 0.32, w: 0.13, h: 0.22 }, { id: 'light', label: '계단 아래 불빛', x: 0.43, y: 0.74, w: 0.4, h: 0.24 }],
        press: [['madoka', '미래는 못 바꿔요. 카드가 그렇게 나왔으니까요.', 'smile']] },
      { text: '계단에서 누가 점장님을 미는 것도 봤어요. 그건 리본 아가씨 손이에요.', cut: 'F3',
        spots: [{ id: 'shadow', label: '벽의 그림자', x: 0.7, y: 0.1, w: 0.25, h: 0.36 }, { id: 'hand', label: '미는 손', x: 0.52, y: 0.06, w: 0.18, h: 0.18 }, { id: 'man', label: '남자의 어깨', x: 0.38, y: 0.12, w: 0.24, h: 0.52 }, { id: 'rail', label: '난간', x: 0.2, y: 0.3, w: 0.22, h: 0.55 }, { id: 'stairs', label: '계단', x: 0.56, y: 0.55, w: 0.3, h: 0.42 }],
        press: [['madoka', '무섭죠? 저도 그래서 미리 말씀드린 거예요.', 'normal']] },
      { text: '그 시각엔 저, 부스에서 손님을 보고 있었어요. 9시부터 한 시간.', cut: 't_madoka_3',
        cutDesc: '점술 부스. 테이블 위 타로 카드, 맞은편 손님의 손.',
        press: [['madoka', '손님 이름요? 손님 비밀은 말 못 해요.', 'normal']] },
    ],
    answers: [
      { statement: 0, spot: 'seam', cut: 'tone', shout: '이 컷, 누가 고쳤어!',
        rebut: '부스 쓰레기통에 있던 스크린톤이에요. 손 모양으로 구멍이 났죠. 이 컷의 손이 딱 그 모양이에요. 손만 오려 붙였어요.',
        success: [
          ['madoka', '무슨 소리예요. 그건 제가 본 미래예요.', 'normal'],
          ['towa', '사람 손으로 고친 거야. 가위랑 풀로. …누가 가르쳤는지 알 것 같아.'],
        ],
        words: ['a_edit'] },
      { statement: 1, spot: 'shadow', requires: [0], shout: '그림자가 거꾸로예요!',
        rebut: '그날 2층 전구는 나가 있었어요. 빛은 아래 매장에서만 올라왔으니까 그림자는 다 위로 늘어져야 해요. 근데 이 손 그림자만 바닥으로 떨어져 있어요. 이 손도 붙인 거예요.',
        success: [['', '마도카의 웃음이 굳는다. 카드를 섞던 손이 멈춘다.'], ['madoka', '그림자 같은 걸… 누가 봐요.', 'cornered']],
        words: ['a_push3'] },
      { statement: 2, cut: ['3C', 'F1'], with: ['3J', 'sequin'], requires: [1], shout: '부스엔 없었어!',
        rebut: '9시 10분, 점장님 눈에 별무늬 숄이 남아 있어요. 2분 뒤엔 두부집 할머니가 뒷골목에서 뛰어나오는 숄을 봤고요. 그 시각 마도카 씨는 부스에 없었어요. 양과점 창고 계단에 있었죠.',
        success: [
          ['', '마도카가 숄 자락을 여민다. 스팽글 하나가 떨어져 테이블 위를 구른다.'],
          ['madoka', '그 계단에 있었던 건 맞아요. 화장실에서 나오다 길을 잘못 들었어요.', 'cornered'],
          ['madoka', '점장님이 저를 보고 놀라서 헛디디셨어요. 무서워서 뒷문으로 나왔고요.', 'cornered'],
          ['madoka', '봉투요? 계단에 떨어진 걸 누가 주웠겠죠. 제가 가져갔으면 그 돈이 지금 어디 있는데요?', 'normal'],
        ],
        peel: [2] },
    ],
    koharu: [['koharu', '(선배, 쓰레기통에서 나온 스크린톤… 이 컷 점 무늬랑 닮지 않았어요?)', 'worried']],
    // 점장의 컷은 마지막 증언을 깨는 열쇠. 미래 컷 두 장을 먼저 무너뜨려야 통한다
    wrongBy: { '3C': [['madoka', '점장님이 본 건 그림자뿐이잖아요. 제 카드엔 리본 아가씨 손이 또렷한데요?', 'smile'], ['rei', '(숄은 찍혀 있어. 근데 그 전에 미래 컷부터 무너뜨려야 해.)', 'serious']] },
    wrong: [['madoka', '어머, 그건 카드가 말하는 거랑 다른데요?', 'smile']],
    close: [['madoka', '오늘은 운세가 별로네요. 다음에 오세요.', 'normal'], ['koharu', '(처음부터 다시 봐요, 선배.)', 'worried']],
  },
});

// 숄·스팽글·스크린톤은 심문에서 이미 썼다. 결론에선 아직 안 쓴 독촉장으로 "돈이 지금 어디 있나"를 맞힌다
const CONCLUSION3 = [
  { q: '봉투는 아직 한 장도 안 쓴 채 마도카 손에 있다. 그렇게 볼 근거는?', answer: ['debt'], choices: ['sequin', 'ledger', 'debt', 'tone', '3C'] },
];

const NAME3_MID = [
  '그날 밤, ', { cat: 'person', a: 'p_madoka' }, '이(가) 가게에서 ', { cat: 'thing', a: 'th_envelope' }, '을(를) ', { cat: 'act', a: 'a_take' }, '.\n',
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
  madoka: '아케이드 타로 점술가 미즈시마 마도카(26). "미래 컷"이 보인다며 수사에 협조한다. 양과점 단골.',
  tofu: '양과점 건너편 두부집 할머니. 아케이드 사람들은 「아케이드의 시계」라고 부른다. 자기 집 벽시계를 한 번도 의심한 적이 없다.',
  ren: '은발에 안대, 흰 코트. 레이를 안다고 한다.',
});
