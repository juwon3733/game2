// 5장 「편집자」 데이터. 기획: docs/12_story_plan.md §3 5장, docs/13_deduction_upgrade.md §3-5
// 진실: 코하루는 끌려간 게 아니라 스스로 렌을 만나러 걸어갔다(오빠 소타가 마지막에 무엇을 했는지 물으려고).
// 납치처럼 보이게 컷을 고치고 방까지 그림에 맞춰 어지른 건 렌. 레이를 폐창고로 부르려고. 편집장은 아사기리.
// 시간 줄: 04:10 메모 → 09:00 도서관 → 12:00 정류장에서 렌에게 「지금 갈게요」 → 12:10 경비원에게 길을 묻고 걸어감(30분)
// → 12:40쯤 방파제에서 렌을 만남. 렌이 휴대폰을 받아 꺼 둠(편집국이 위치를 읽으므로) → 오후 내내 소타 얘기
// → 렌이 먼저 창고를 열어 둠 → 18:00 코하루 혼자 창고로 걸어감 → 18:30 찻잔.

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
  pier:          { label: '항구 방파제 (해 질 녘)', sky: ['#2a2a40', '#c98a5a'] },
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
  '5Ae': { owner: 'koharu', title: '어질러진 방', edited: true, original: '5A',
           desc: '새벽. 경첩이 떨어진 문, 뒤집힌 책상, 빠진 서랍, 바닥 가득 흩어진 종이. 가로등은 왼편 창 쪽. 책상 그림자는 문 쪽으로, 문 그림자는 창 쪽으로 눕는다.',
           tags: { day5: '0410' }, spots: [{ id: 'desk', label: '뒤집힌 책상', x: 0.1, y: 0.5, w: 0.4, h: 0.4 }, SEAM('부서진 문', 0.6, 0.1, 0.3, 0.5), { id: 'drawer', label: '빠진 서랍', x: 0.8, y: 0.62, w: 0.2, h: 0.25 }, { id: 'papers', label: '흩어진 종이', x: 0.3, y: 0.7, w: 0.3, h: 0.25 }] },
  '5A':  { owner: 'koharu', title: '메모',
           desc: '창밖은 아직 깜깜하다. 스탠드 불빛 아래 정돈된 책상에서 메모를 쓰는 손. 「선배한테는 비밀」. 옆에 그을린 경찰 배지.',
           tags: { day5: '0410' } },
  '5Be': { owner: 'koharu', title: '열람실', edited: true, original: '5B',
           desc: '열람실. 서가와 벽시계, 신문을 펼친 코하루. 바로 뒤에 검은 옷의 남자 둘. 화면 가득 스크린톤 점이 깔렸다. 코하루 어깨의 점은 쌀알만 하고, 남자들 어깨의 점은 콩알만 하다.',
           tags: { day5: '0900' }, spots: [{ id: 'paper', label: '펼친 신문', x: 0.1, y: 0.55, w: 0.62, h: 0.4 }, { id: 'lamp', label: '스탠드', x: 0.0, y: 0.28, w: 0.13, h: 0.22 }, SEAM('뒤에 선 두 남자', 0.18, 0.0, 0.8, 0.45), { id: 'koharu', label: '코하루', x: 0.38, y: 0.5, w: 0.25, h: 0.15 }] },
  '5B':  { owner: 'koharu', title: '신문',
           desc: '열람실 벽시계 9시. 6년 전 신문. 「등대 도서관 화재 — 여고생 1명·순경 1명 사망, 고등학생 1명 구조」. 순경 사진 밑에 「히나타 소타(24)」.',
           tags: { day5: '0900' } },
  '5Ce': { owner: 'koharu', title: '흰 승합차', edited: true, original: '5C',
           desc: '본사 앞 정류장. 흰 장갑 낀 손 넷이 코하루를 흰 승합차로 끌어당긴다. 바닥에 끌리는 운동화. 코하루와 정류장 표지판은 펜이 떨린 거친 선. 장갑 낀 손들은 자로 그은 듯 매끈하다.',
           tags: { day5: '1200' }, spots: [{ id: 'van', label: '흰 승합차', x: 0.72, y: 0, w: 0.28, h: 0.9 }, { id: 'sign', label: '정류장 표지판', x: 0.3, y: 0.15, w: 0.07, h: 0.4 }, SEAM('끌어당기는 손들', 0.25, 0.4, 0.4, 0.42), { id: 'shoes', label: '끌리는 운동화', x: 0.3, y: 0.8, w: 0.3, h: 0.2 }] },
  '5C':  { owner: 'koharu', title: '문자',
           desc: '하쿠요 본사 앞 정류장 벤치. 휴대폰 화면, 저장 안 된 번호로 보내는 문자 「지금 갈게요」. 웃고 있다. 무릎 위 가방에 별 모양 참.',
           tags: { day5: '1200' } },
  '5Ee': { owner: 'tanabe', title: '정문 앞', edited: true, original: '5E',
           desc: '경비실 창 너머 한낮. 흰 코트가 아가씨의 팔을 잡아끈다. 정문 기둥과 아가씨, 아가씨 가방 아래로 짧은 그림자가 진다.',
           tags: { day5: '1210' }, spots: [{ id: 'gate', label: '정문 기둥', x: 0.05, y: 0.3, w: 0.3, h: 0.6 }, SEAM('흰 코트', 0.4, 0.15, 0.3, 0.6), { id: 'girl', label: '끌려가는 아가씨', x: 0.7, y: 0.3, w: 0.25, h: 0.6 }, { id: 'arm', label: '붙잡힌 팔', x: 0.6, y: 0.25, w: 0.15, h: 0.2 }] },
  '5E':  { owner: 'tanabe', title: '길 묻기',
           desc: '경비실 창 너머, 점심 인파 사이에 혼자 선 아가씨가 또박또박 묻는다. 「항구 끝 폐창고가 어디예요?」 한 손에 휴대폰, 가방 고리는 비어 있다. 경비원 손목시계 12시 10분.',
           tags: { day5: '1210' } },
  '5De': { owner: 'koharu', title: '묶인 의자', edited: true, original: '5D',
           desc: '폐창고 안, 의자에 묶인 코하루. 천장에 전등 하나. 상자도 의자도 그림자가 진하다. 의자 다리 그림자를 세면 여덟 개.',
           tags: { day5: '1800' }, spots: [{ id: 'lamp', label: '천장 전등', x: 0.28, y: 0, w: 0.12, h: 0.14 }, SEAM('의자 아래 그림자', 0.38, 0.72, 0.4, 0.28), { id: 'rope', label: '밧줄 매듭', x: 0.43, y: 0.35, w: 0.18, h: 0.18 }, { id: 'crates', label: '쌓인 상자', x: 0, y: 0.28, w: 0.2, h: 0.52 }] },
  '5D':  { owner: 'koharu', title: '창고 문',
           desc: '해 질 녘 부두. 방파제 쪽에서 혼자 폐창고로 걸어가는 시점. 발밑 그림자가 앞으로 길게 눕는다. 셔터 앞에 흰 코트가 기다리고 있다.',
           tags: { day5: '1800' } },
  '5F':  { owner: 'ren', title: '찻잔',
           desc: '폐창고 안. 낡은 테이블에 찻잔 둘, 하나는 비었다. 맞은편의 코하루가 그을린 배지를 내밀며 묻는다. 셔터 틈으로 보랏빛 하늘.',
           tags: { day5: '1830' } },
  '6Y1': { owner: 'sota', title: '연기',
           desc: '6년 전 밤. 자전거 순찰 중 올려다본 곶의 등대 도서관. 1층 창 하나에서 연기. 손목시계 8시 20분.',
           tags: { past5: '2020' } },
  '6Y2': { owner: 'sota', title: '뛰어듦',
           desc: '도서관 정문을 걷어차고 들어가는 시점. 문 옆 안내판 「비상구 공사 중 — 출입은 이 문으로만」. 서가 사이로 연기가 낮게 깔렸다. 안쪽 깊숙이 위층으로 오르는 계단.',
           tags: { past5: '2025' } },
  '6Y3': { owner: 'sota', title: '계단 아래',
           desc: '연기 속, 정문에서 가장 먼 계단 아래. 계단 첫 단에 쓰러진 교복 차림 고등학생을 일으켜 업는다. 오른손 검지에 잉크 얼룩. 계단 위쪽이 붉게 밝다.',
           tags: { past5: '2028' } },
  '6Y4': { owner: 'kurogane', title: '멈춘 시계',
           desc: '도서관 정문 밖. 순경 등에 업힌 고등학생을 받아 내려 부축한다. 손목시계가 8시 31분에 멈춰 있다.',
           tags: { past5: '2031' } },
  '6Y5': { owner: 'sota', title: '한 명 더',
           desc: '빈손으로 다시 연기 속에 돌아서는 시점. 정문 안쪽 서가까지 불이 번졌다. 위층에서 여자아이 목소리.',
           tags: { past5: '2033' } },
  '6Y6': { owner: 'ren', title: '불타는 창',
           desc: '도서관 밖 잔디밭. 한쪽 눈을 감싼 손. 불길이 위층 창을 모두 삼켰다. 소방차 경광등 불빛이 잔디에 번진다.',
           tags: { past5: '2040' } },
});

Object.assign(ITEMS, {
  history: { title: '노트북 검색 기록', desc: '「등대 도서관 화재 6년 전」 「히나타 소타 순직」 「흰 명함 빈 말풍선」 「하쿠요 본사 위치」. 마지막 검색 새벽 3시 58분.' },
  badge:   { title: '그을린 경찰 배지', desc: '이름표 「히나타 소타」. 잔상과 선반 「6년 전 / 등대」 상자에 있던 것. 코하루가 들고 나갔다.' },
});

Object.assign(WORDS, {
  p_koharu: { text: '코하루 자신', cat: 'person' }, p_ren: { text: '렌', cat: 'person' }, p_tanabe: { text: '경비원', cat: 'person' },
  p_sota: { text: '히나타 소타', cat: 'person' }, p_rei: { text: '열여섯 살 레이', cat: 'person' },
  pl_busstop: { text: '본사 앞 정류장', cat: 'place' }, pl_warehouse: { text: '폐창고', cat: 'place' },
  a_walk: { text: '혼자 걸어갔다', cat: 'act' }, a_drag: { text: '끌려갔다', cat: 'act' }, a_return: { text: '다시 들어갔다', cat: 'act' },
});

Object.assign(PUZZLES, {
  page5a: {
    title: '페이지 1 — 코하루가 간 길',
    goal: '새벽부터 오후까지 코하루가 지나간 길. 편집된 컷은 빼고.',
    cuts: ['5A', '5B', '5C', '5E', '5Ae', '5Be', '5Ce', '5Ee'],
    solution: ['5A', '5B', '5C', '5E'],
    decoys: ['5Ae', '5Be', '5Ce', '5Ee'],
    decoyMsg: '편집된 컷이 원고에 섞여 있어. 원고에는 원본만 써.',
    bubbles: {},
    hint: '같은 장면이 두 장씩이야. 하나는 덧칠한 거.',
    rei: '정류장, 경비실 앞. 그다음은 해 질 녘까지 한 장도 없네.',
  },
  page5b: {
    title: '최종 재구성 — 오늘, 그리고 6년 전',
    goal: '두 페이지. 1쪽은 오늘 코하루가 간 길, 2쪽은 6년 전 등대 도서관의 밤.',
    cuts: ['5A', '5B', '5C', '5E', '5D', '5F', '6Y1', '6Y2', '6Y3', '6Y4', '6Y5', '6Y6', '5Ce', '5De'],
    solution: ['5A', '5B', '5C', '5E', '5D', '5F', '6Y1', '6Y2', '6Y3', '6Y4', '6Y5', '6Y6'],
    decoys: ['5Ce', '5De'],
    decoyMsg: '편집된 컷이 원고에 섞여 있어. 원고에는 원본만 써.',
    pageBreak: 6,
    bubbles: {},
    hint: '시계 없는 컷은 앞뒤랑 뭐가 달라졌는지 봐. 불이 얼마나 번졌는지 같은 거.',
    rei: '연기 냄새는 아직도 안 떠올라. 이만큼이나 비어 있었네.',
  },
});

Object.assign(WITNESSES, {
  tanabe: { noKoharu: true, // 코하루 실종 중
    char: 'tanabe', bg: 'busstop', face: 'normal',
    goal: '고쳐진 경비원의 기억. 원본으로 깨라.',
    statements: [
      { text: '점심시간이라 정문 앞이 붐볐어요. 12시 조금 넘어서요.', cut: 't_tanabe_0',
        cutDesc: '경비실 창 너머 정문 앞. 사원증을 목에 건 회사원들이 점심 먹으러 줄지어 나간다. 창틀에 놓인 경비원의 손목시계.',
        press: [['tanabe', '그 시간엔 길 묻는 사람이 많아요. 본사 건물이 워낙 커서 다들 헤매거든요.', 'normal']] },
      { text: '흰 코트가 아가씨 팔을 끌고 갔어요. 제가 똑똑히 봤다니까요.', cut: '5Ee', truthCut: '5E',
        press: [['tanabe', '코트가 엄청 길었어요. 발목까지 오는 거요. 이 더위에 저걸 입나 했죠.', 'normal']] },
      { text: '아가씨는 겁에 질려 울고 있었고요.', cut: 't_tanabe_2',
        cutDesc: '정류장 벤치. 가방을 끌어안고 우는 아가씨. 벤치 옆 버스 시간표, 발치에 굴러간 음료 캔.',
        press: [['tanabe', '벤치에 앉아서요. 가방을 꼭 끌어안고.', 'confused']] },
    ],
    answers: [
      { statement: 1, cut: '5E', shout: '혼자였어!',
        rebut: '경비실 창에 남은 원본이에요. 아가씨는 혼자였어요. 직접 길을 물었죠. 「항구 끝 폐창고가 어디예요?」',
        success: [['tanabe', '아. 맞다, 길을 물었어요. 제가 손가락으로 항구 쪽을 가리켰고….', 'confused']],
        peel: [1], words: ['a_walk', 'pl_warehouse'] },
      { statement: 2, cut: ['5C', '5E'], shout: '웃고 있었어!',
        rebut: '정류장 벤치에서 「지금 갈게요」 문자를 보내던 아가씨는 웃고 있었어요. 10분 뒤 경비실 앞에서도 또박또박 길을 물었고요.',
        success: [['tanabe', '그러게요… 웃고 있었네. 이상하다, 분명히 울었는데.', 'confused'], ['towa', '누가 이 사람 기억에도 손댔어. 깔끔하게.']] },
    ],
    koharu: [['towa', '복원한 원본, 다시 봐.']],
    wrong: [['tanabe', '그, 그런가요?', 'confused']],
    close: [['tanabe', '죄송합니다, 근무 중이라서….', 'normal']],
  },
  ren: {
    char: 'ren', bg: 'warehouse_in', face: 'smile', bgm: 'editor', editor: true, inkPenalty: 'renAccused',
    goal: '편집 대결. 렌이 고쳐 그린 자리를 짚어라.',
    intro: [['towa', '렌 손은 내가 따라잡아.'], ['tip', '렌이 증언 컷을 실시간으로 고친다. 고칠 때마다 생기는 이음매를 바로 짚는다.'], ['ren', '오랜만에 같이 읽자, 시노노메.', 'smile']],
    statements: [
      { text: '코하루는 내가 데려왔어. 억지로.', cut: 't_ren_1', dist: '편집',
        cutDesc: '흰 코트가 코하루의 손목을 쥐고 창고 안으로 이끈다. 반쯤 열린 셔터, 창고 안 전등 하나, 흰 코트 자락.',
        spots: [{ id: 'wrist', label: '손목을 쥔 손', x: 0.56, y: 0.56, w: 0.13, h: 0.2 }, { id: 'door', label: '반쯤 열린 셔터', x: 0.0, y: 0.0, w: 0.12, h: 1.0 }, { id: 'lamp', label: '창고 안 전등', x: 0.65, y: 0.08, w: 0.12, h: 0.12 }, { id: 'coat', label: '흰 코트 자락', x: 0.05, y: 0.45, w: 0.3, h: 0.55 }],
        press: [['ren', '납치범은 원래 이렇게 말하잖아?', 'smile']] },
      { text: '코하루는 오후 내내 방파제에서 내 얘길 들었어. 소타 얘기.', cut: 't_ren_3',
        cutDesc: '오후의 방파제. 테트라포드에 나란히 앉은 흰 코트와 코하루. 코하루 무릎 위에 그을린 배지. 갈매기, 낮은 해.',
        press: [['ren', '해 질 때까지 질문을 멈추질 않더라. 오빠가 담배를 피웠냐, 사탕은 무슨 맛이었냐.', 'normal'], ['ren', '정류장에서 문자가 왔어. 「지금 갈게요」. 걸어서 삼십 분이면 방파제야.', 'normal'], ['ren', '창고는 내가 먼저 가서 열어 뒀어. 마음 정해지면 오라고. 그 애는 해 질 녘에 혼자 왔고.', 'normal']] },
      { text: '6년 전? 그 불은 사고야. 너는 감기로 집에 누워 있었지.', cut: 't_ren_2', dist: '편집',
        cutDesc: '이불 속에서 열에 시달리는 열여섯 살 레이. 머리맡에 약봉지와 물컵, 벽에 걸린 교복과 달력.',
        spots: [{ id: 'calendar', label: '벽 달력', x: 0.7, y: 0.05, w: 0.2, h: 0.25 }, { id: 'medicine', label: '머리맡 약봉지', x: 0.1, y: 0.3, w: 0.15, h: 0.15 }, { id: 'cup', label: '물컵', x: 0.25, y: 0.3, w: 0.1, h: 0.15 }, { id: 'uniform', label: '벽에 걸린 교복', x: 0.45, y: 0.05, w: 0.2, h: 0.4 }],
        press: [['ren', '다들 그렇게 기억하잖아. 너도.', 'normal']] },
    ],
    answers: [
      { statement: 0, spot: 'wrist', cut: ['5D', '5E', '5C'], shout: '거기 붙였어!',
        rebut: '코하루는 제 발로 왔어. 정류장에서 「지금 갈게요」, 경비실 앞에선 폐창고 가는 길을 물었고, 해 질 녘엔 셔터 앞까지 혼자 걸었어. 이 손목 둘레도 선 굵기가 달라. 끄는 손은 나중에 붙였지.',
        koharu: [['koharu', '(선배, 저 진짜 혼자 왔어요. 오늘 제가 지나간 컷들 있잖아요.)', 'worried']],
        success: [['ren', '역시 눈은 좋네.', 'smile']],
        editLines: [['ren', '그럼 이렇게 고치지.', 'smile']],
        changes: { 0: { text: '좋아, 스스로 왔다고 쳐. 근데 돌려보낼 생각은 없었어.', cut: 't_ren_1b', dist: '편집',
          cutDesc: '창고 안, 쇠창살 너머의 코하루. 창살을 쥔 두 손, 창살 문에 걸린 자물쇠. 천장 한가운데 전등 하나, 바로 아래 바닥에 창살 그림자가 한쪽으로 길게 눕는다.',
          spots: [{ id: 'bars', label: '바닥의 창살 그림자', x: 0.3, y: 0.6, w: 0.4, h: 0.35 }, { id: 'hands', label: '창살을 쥔 손', x: 0.4, y: 0.2, w: 0.2, h: 0.25 }, { id: 'lock', label: '자물쇠', x: 0.65, y: 0.35, w: 0.12, h: 0.15 }, { id: 'ceil', label: '천장 전등', x: 0.4, y: 0, w: 0.2, h: 0.15 }],
          press: [['ren', '돌려보내 달라고 울던데, 그 애.', 'smile']] } } },
      { statement: 0, spot: ['bars', 'ceil'], requires: [0], shout: '그림자가 어긋났어!',
        koharu: [['koharu', '(저 갇힌 적 없어요! 저 그림, 불빛이랑 뭔가 안 맞아요.)', 'worried']],
        rebut: '전등은 창살 바로 위에 있는데 그림자는 한쪽으로 길게 누웠어. 창살도 나중에 그린 거야. 코하루는 갇힌 적 없어.',
        success: [['ren', '그래. 차를 내줬어. 그 애가 오빠 얘길 물어서.', 'normal']],
        editLines: [['ren', '그럼 6년 전 얘기로 넘어가자.', 'normal']] },
      { statement: 2, spot: 'calendar', cut: '6Y3', requires: [1], shout: '날짜를 고쳤어!',
        rebut: '그날 난 집에 없었어. 소타 순경 배지에 남은 컷 봐. 계단 아래 그 고등학생 검지에 내 잉크 자국이 있어. 저 달력도 날짜 칸만 종이 질감이 달라. 「8월 31일」만 덧댔지.',
        success: [['ren', '급하게 붙였거든.', 'sad']],
        editLines: [['ren', '알았어. 그럼 네가 늘 떠올리던 대로 그려 줄게.', 'sad']],
        changes: { 2: { text: '그래, 너도 거기 있었어. 불길을 보고 겁이 나서 혼자 도망쳤지. 시오리를 두고.', cut: 't_ren_2b', dist: '편집',
          cutDesc: '불타는 서가 사이로 달리는 교복 차림 고등학생의 뒷모습.',
          press: [['ren', '6년 동안 네 머릿속에 있던 그림이잖아.', 'sad']] } } },
      { statement: 2, cut: '6Y3', with: '6Y2', requires: [2], shout: '출구는 반대쪽이야!',
        rebut: '그날 도서관은 비상구 공사 중이었어. 소타 순경이 걷어찬 정문 옆 안내판에 쓰여 있었지. 나갈 문은 정문 하나야. 도망치는 사람은 그쪽으로 가. 그런데 난 정문에서 제일 먼 계단, 위층으로 오르는 첫 단에 쓰러져 있었어. 길을 잃었으면 아래층 서가 사이에 있었겠지. 난 위층 시오리한테 가던 길이었어.',
        success: [
          ['ren', '그 계단, 위층 열람실로 가는 거였지. 시오리가 거기 있었어.', 'sad'],
          ['ren', '6년 전 네 하루를 지운 건 나야.', 'sad'],
          ['ren', '네가 부탁했어. 병원에서. 「다 잊게 해 줘」라고.', 'sad'],
        ], words: ['p_rei', 'a_rescue'], cg: 'cg_sota', page: ['6Y2', '6Y3', '6Y4'], pageCap: '6년 전, 계단 아래.' },
    ],
    rewards: ['5F', '6Y5', '6Y6'],
    koharu: [['koharu', '(선배, 오빠 배지에서 나온 컷이요. 그날 선배가 어디 있었는지 나와 있잖아요.)', 'worried']],
    wrong: [['ren', '틀렸어. 다시 고쳐 줄까?', 'smile']],
    close: [['ren', '오늘은 여기까지. 지쳤잖아.', 'normal'], ['koharu', '(선배, 다시 해요!)', 'worried']],
  },
  asagiri5: { noKoharu: true, // 카페에 레이 혼자
    char: 'asagiri', bg: 'cafe_night', face: 'normal',
    goal: '6년 동안 들어 온 이야기. 틀린 데를 짚어라.',
    intro: [['towa', '레이. 이 사람 컷은 이음매가 잘 안 보여. 겹쳐서 봐.']],
    statements: [
      { text: '네가 처음 여기 온 게 6년 전 9월이었지. 비 오는 밤이었어.', cut: 't_asagiri_0',
        cutDesc: '비 오는 밤, 카페 문가에 선 열여섯 살 레이. 이마에 붕대, 젖은 교복. 카운터 안쪽의 따뜻한 등 하나.',
        press: [['asagiri', '흠뻑 젖어서는 한마디도 안 했지. 단 커피만 두 잔 마시고.', 'normal']] },
      { text: '6년 전 일은 네가 스스로 잊은 거야. 그 뒤로는 아무도 손대지 않았어.', cut: 't_asagiri_1',
        cutDesc: '6년 동안 이 카운터에서 받은 커피를 겹친 컷. 김이 오르는 잔, 받침 위 각설탕 두 개, 잔을 내미는 손, 카운터 나뭇결. 여섯 장이 한 치도 어긋나지 않고 겹치는데, 손만 장마다 조금씩 겹쳐 보인다.',
        spots: [{ id: 'cup', label: '김이 오르는 잔', x: 0.4, y: 0.5, w: 0.2, h: 0.25 }, { id: 'ring', label: '잔을 내미는 손가락', x: 0.55, y: 0.4, w: 0.12, h: 0.12 }, { id: 'sugar', label: '각설탕 두 개', x: 0.25, y: 0.65, w: 0.12, h: 0.12 }, { id: 'grain', label: '카운터 나뭇결', x: 0.05, y: 0.8, w: 0.5, h: 0.15 }],
        press: [['asagiri', '잊겠다고 한 건 너야. 난 커피만 내렸어.', 'normal']] },
    ],
    answers: [
      { statement: 1, spot: 'ring', shout: '그 자국!',
        rebut: '렌 씨가 지운 건 그날 하루뿐이에요. 그 뒤로 손본 사람은 따로 있어요. 이 컷, 6년치가 잔 각도도 김도 각설탕 자리도 똑같아요. 같은 그림을 해마다 다시 붙였으니까요. 손만 달라요. 반지 자국이 해마다 조금씩 옅어져요. 붙인 그림 속에서 손만 진짜였던 거죠. 해마다 이 카운터에서, 잔을 내밀면서 고치셨어요. 사장님 손으로.',
        success: [
          ['asagiri', '잘 읽네, 레이. 내가 가르친 대로.', 'cold'],
        ] },
    ],
    koharu: [['towa', '6년치를 겹쳐서 봐.']],
    wrong: [['asagiri', '커피 식겠다.', 'normal']],
    close: [['asagiri', '오늘은 이만 닫자.', 'normal']],
  },
});

const NAME5_MID = [
  '폐창고로 간 건 ', { cat: 'person', a: 'p_koharu' }, '의 뜻이었다. ', { cat: 'place', a: 'pl_busstop' }, '에서 ', { cat: 'act', a: 'a_walk' }, '.',
];
const NAME5_FINAL = [
  '그날 코하루는 ', { cat: 'place', a: 'pl_busstop' }, '에서 폐창고까지 ', { cat: 'act', a: 'a_walk' }, '. ', { cat: 'person', a: 'p_ren' }, '이(가) 컷을 ', { cat: 'act', a: 'a_edit' }, '.\n',
  '6년 전, ', { cat: 'person', a: 'p_sota' }, '은(는) 불 속에서 ', { cat: 'person', a: 'p_rei' }, '을(를) ', { cat: 'act', a: 'a_rescue' }, '. 그리고 ', { cat: 'act', a: 'a_return' }, '.',
];

Object.assign(PROFILES, {
  tanabe: '하쿠요 본사 정문 경비원. 코하루를 마지막으로 본 사람.',
});
