// 종장 「같은 하루」 데이터. 기획: docs/05_story.md §5장, docs/12_story_plan.md §3 종장
// 6년 전 8월 31일, 곶 끝 등대 도서관. 불을 지른 건 니시무라(당시 하쿠요 용지 담당).
// 동기: 곶 끝 리조트 부지. 도서관 보존 서명 운동(레이·시오리가 그린 전단이 상징)에 3년을 막혔다.
// 폐관 시간 뒤 빈 건물이라 믿고 「노후 배선 누전」으로 보이게 불을 냈다(4장 사쿠라유와 같은 수법). 2층에 둘이 있는 줄 몰랐다.
// 시오리는 1층에서 그 얼굴을 보고 원고 뒷면에 그려 서가 아래 철제 상자에 넣었다.
// 레이는 다툼 끝에 뛰쳐나갔지만, 연기를 보고 되돌아갔다. 쓰러진 레이를 시오리가 계단 아래까지 부축해 순경 소타에게 넘겼다(8:28).
// 소타가 레이를 업고 입구에서 쿠로가네에게 넘기는 사이(8:31), 시오리는 건물 밖으로 나오지 않고 계단 아래에서 다시 2층으로 올라갔다(8:33).
// 소타가 뒤따랐다. 둘 다 나오지 못했다. 그 뒤 건물은 출입 금지로 봉쇄됐고, 보존회와 하쿠요의 소송으로 철거도 못 한 채 남았다.
// 불은 1층 서고와 계단을 태우고 2층 창가에서 멈췄다. 감식은 배전반만 보고 하루 만에 「누전」으로 닫혀, 서고 잿더미와 2층 서가 아래는 아무도 뒤지지 않았다.
// 레이의 편집된 기억은 "손이 떨어지는 칸"을 "뛰쳐나간 칸" 바로 뒤에 붙여, 레이가 시오리를 버렸다고 믿게 했다.

CHARACTERS.rei.faces.push('crying');
CHARACTERS.asagiri.faces.push('sad');
CHARACTERS.asagiri.alt = { sad: 'cold' };
CHARACTERS.shiori.faces.push('smile');

Object.assign(BACKGROUNDS, {
  lighthouse:      { label: '곶 끝, 등대 도서관 터 (8월 31일)', sky: ['#0e1428', '#3a4a7a'] },
  lighthouse_in:   { label: '불탄 등대 도서관 안', sky: ['#141414', '#3a3028'] },
  lighthouse_dawn: { label: '곶 끝 (새벽)', sky: ['#3a3a6a', '#e8b08a'] },
});

Object.assign(TAG_ORDER, { clock6: ['1930', '1950', '2005', '2015', '2020', '2025', '2028', '2033'] });
Object.assign(TAG_NAME, { clock6: '그날 밤의 시각' });

Object.assign(OWNERS, {
  rei:    { name: '레이', color: '#6b5fa8' },
  shiori: { name: '시오리', color: '#c84a6a' },
});

Object.assign(CUTS, {
  R1: { owner: 'rei', title: '원고', desc: '도서관 2층 열람석. 원고지에 펜을 대는 오른손. 맞은편에서 시오리가 원고를 소리 내어 읽는다. 둥근 창 옆 벽시계 7시 30분.', tags: { clock6: '1930' } },
  R2: { owner: 'rei', title: '다툼', desc: '콘테스트 응모 서류의 「글」 칸. 레이의 손이 그 칸을 펜으로 긋는다. "네 이야기 없어도 난 그릴 수 있어."', tags: { clock6: '1950' } },
  R3: { owner: 'rei', title: '뛰쳐나감', desc: '나선 계단을 뛰어 내려가는 시점. 층계참에 두고 온 원고 묶음.', tags: { clock6: '2005' } },
  R4: { owner: 'rei', title: '벤치', desc: '곶 끝 벤치. 무릎에 얼굴을 묻는다. 등대 불빛이 바다 위를 한 바퀴 돈다. 손목시계 8시 15분.', tags: { clock6: '2015' } },
  R5: { owner: 'rei', title: '되돌아 뜀', desc: '벤치에서 돌아본 도서관. 2층 창 아래로 연기가 번진다. 그쪽으로 뛰기 시작하는 시점.', tags: { clock6: '2020' } },
  R6: { owner: 'rei', title: '2층 계단', desc: '연기로 가득한 2층 계단. 시야가 기울며 바닥이 다가온다.', tags: { clock6: '2025' } },
  R7: { owner: 'rei', title: '손이 떨어짐', desc: '흐린 시야. 내 팔을 어깨에 걸고 있던 손이 떨어지고, 다른 어깨가 나를 받친다.', tags: { clock6: '2028' } },
  R8: { owner: 'rei', title: '어깨', desc: '흐릿하다. 누군가의 어깨에 팔을 걸친 채 도서관 문에서 멀어진다. 뒤돌아본 열린 문 안, 계단을 올라가는 작은 그림자. 그 뒤로 다시 뛰어 들어가는 순경 모자.', tags: { clock6: '2033' } },
  S1: { owner: 'shiori', title: '읽어 주기', desc: '원고를 소리 내어 읽는다. 맞은편 레이의 펜 끝이 리듬에 맞춰 움직인다.', tags: { clock6: '1930' } },
  S2: { owner: 'shiori', title: '등', desc: '응모 서류를 쥔 채 돌아선 레이의 등. 서류의 「글」 칸에 펜 줄.', tags: { clock6: '1950' } },
  S3: { owner: 'shiori', title: '마지막 장', desc: '혼자 남은 열람석. 맞은편 의자가 뒤로 밀려나 있다. 원고의 마지막 장은 백지.', tags: { clock6: '2005' } },
  S4: { owner: 'shiori', title: '라이터', desc: '1층 계단참에서 내려다본 서고. 바닥에 신문지 더미, 서고 끝에 열린 뒷문. 라이터 불빛에 비친 남자의 옆얼굴.', tags: { clock6: '2015' },
        spots: [
          { id: 'face', label: '불빛에 비친 옆얼굴', x: 0.45, y: 0.3, w: 0.2, h: 0.25, word: 'p_nishi' },
          { id: 'hand', label: '라이터를 든 손', x: 0.4, y: 0.55, w: 0.15, h: 0.15 },
          { id: 'papers', label: '바닥의 신문지 더미', x: 0.15, y: 0.7, w: 0.35, h: 0.25 },
          { id: 'door', label: '서고 끝 뒷문', x: 0.78, y: 0.2, w: 0.18, h: 0.5 },
        ] },
  S5: { owner: 'shiori', title: '원고 뒷면', desc: '2층 열람석. 원고 마지막 장 뒷면에 연필로 남자의 얼굴을 그린다. 창밖이 뿌옇다. 원고 다발을 서가 아래 철제 상자에 밀어 넣는다.', tags: { clock6: '2020' } },
  S6: { owner: 'shiori', title: '레이, 일어나', desc: '연기 낀 계단에 쓰러진 레이. 그 팔을 어깨에 걸고 일으킨다. "레이, 일어나."', tags: { clock6: '2025' } },
  S7: { owner: 'shiori', title: '얘 먼저', desc: '1층 계단 아래, 뛰어 들어온 순경이 레이를 등에 업는다. 순경의 손목시계 8시 28분. "얘 먼저 데려가요."', tags: { clock6: '2028' } },
  S8: { owner: 'shiori', title: '다시 안으로', desc: '1층 계단 아래. 연기 낀 계단을 다시 올려다보는 시점. 등 뒤 열린 문 쪽에서 누군가 뛰어 들어오는 발소리.', tags: { clock6: '2033' } },
  AF: { owner: 'asagiri', title: '크레용 그림', desc: '오래된 원룸. 냉장고에 붙은 크레용 그림, 세 사람과 「엄마」. 창밖에 깎인 산과 크레인. 그리고 불빛.', tags: {} },
  Y6: { owner: 'blank', title: '마지막 칸', blank: true, desc: '원고 마지막 장의 빈 칸. 이번엔 네가 그릴 차례.', tags: {} },
});

Object.assign(ITEMS, {
  lighter:    { title: '녹은 라이터', desc: '1층 서고 바닥 잿더미에서 나온 녹은 은색 라이터. 「H」 각인. 하쿠요가 창립 기념으로 간부에게만 돌린 것과 같은 모양.' },
  manuscript: { title: '반쯤 탄 원고', desc: '시오리의 원고 마지막 장. 2층 서가 아래 철제 상자에 들어 있었다. 앞면은 백지, 뒷면에 연필로 그린 남자의 얼굴. 니시무라와 같은 얼굴.' },
  petition:   { title: '보존 서명 전단', desc: '「등대 도서관을 지켜 주세요」. 펜으로 그린 등대 아래 서명 1,240명. 그림 귀퉁이에 작은 사인 둘, 레이와 시오리. 그 위에 덧붙은 종이: 「하쿠요 개발 리조트 예정지 · 소송 중 · 출입 금지」.' },
});

Object.assign(WORDS, {
  p_nishi: { text: '니시무라', cat: 'person' }, p_shiori: { text: '시오리', cat: 'person' }, p_kurogane: { text: '쿠로가네', cat: 'person' },
  th_lighter: { text: '라이터', cat: 'thing' }, th_backpage: { text: '원고 뒷면', cat: 'thing' },
  pl_lighthouse: { text: '등대 도서관', cat: 'place' }, pl_bench: { text: '곶 끝 벤치', cat: 'place' },
  a_draw: { text: '그려 두었다', cat: 'act' }, a_runback: { text: '되돌아갔다', cat: 'act' }, a_handover: { text: '순경에게 넘겼다', cat: 'act' },
  a_runaway: { text: '도망쳤다', cat: 'act' },
});

Object.assign(PUZZLES, {
  time6: {
    timeline: true,
    title: '두 줄 타임라인 — 6년 전 8월 31일',
    goal: '레이의 줄과 시오리의 줄. 같은 높이는 같은 순간. 16칸을 전부 채운다.',
    times: ['19:30', '19:50', '20:05', '20:15', '20:20', '20:25', '20:28', '20:33'],
    rows: [{ who: '레이', cells: ['R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8'] }, { who: '시오리', cells: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'] }],
    cuts: ['R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
    hint: '시계가 보이는 칸부터 박아. 나머지는 앞뒤에 무슨 일이 있었는지로.',
    rei: '과장님, 결론 쓸게요.',
  },
});

Object.assign(WITNESSES, {
  asagiri6: {
    char: 'asagiri', bg: 'lighthouse', face: 'cold', bgm: 'editor',
    goal: '최종 심문 1. 아사기리의 이야기에서 빠진 칸을 찾아 끼워라.',
    intro: [['towa', '아사기리 컷은 내 감지기로도 안 잡혀. 네 눈으로 봐.'], ['asagiri', '같이 읽어 줄게, 레이. 마지막으로.', 'cold']],
    statements: [
      { text: '그날 불은 사고였어. 오래된 배선. 기록에도 그렇게 남아 있지.', cut: 't_asg_1',
        cutDesc: '말끔한 소방 보고서. 「보일러실 배전반 노후 누전」.',
        press: [['asagiri', '사쿠라유랑 같은 문장이지? 같은 사람이 썼으니까.', 'cold']] },
      { text: '그 땅은 진작 하쿠요 거였어. 도서관을 지키겠다는 사람도 없었고. 누가 일부러 태울 이유가 없지.', cut: 't_asg_2',
        cutDesc: '하쿠요 리조트 조감도. 곶 끝에 호텔이 서 있고, 귀퉁이에 「용지 확보 완료」 도장.',
        press: [['asagiri', '조감도까지 다 그려 놨던 땅이야. 남은 건 낡은 건물 하나뿐이었고.', 'cold']] },
      { text: '나는 아무것도 잃지 않았어. 그래서 남이 잃은 걸 덜어 줄 수 있는 거야.', cut: 't_asg_3',
        cutDesc: '카페 「여백」의 카운터. 깨끗하다. 아무것도 걸려 있지 않은 벽.',
        press: [['asagiri', '여백은 비워 두는 거야. 그래야 쉴 수 있어.', 'cold']] },
    ],
    answers: [
      { statement: 0, cut: ['lighter', 'S4'], shout: '사고가 아니야!',
        rebut: '1층 서고에서 나온 녹은 라이터. 하쿠요 창립 기념품이에요. 사쿠라유 때랑 같아요. 불을 내고 「노후 배선」으로 덮었어요.',
        success: [
          ['asagiri', '…그래. 불은 사람이 냈어. 문 닫은 도서관이니 빈 건물이라고 믿었대.', 'cold'],
          ['asagiri', '2층에 너희가 있는 줄은 몰랐다더라. 그게 변명이 된다고 생각하진 않아.', 'cold'],
        ], words: ['th_lighter'] },
      { statement: 1, cut: 'petition', requires: [0], shout: '막은 사람이 있었어!',
        rebut: '서명 1,240명. 위에 덧붙은 종이엔 「소송 중」. 그 땅은 하쿠요 것이 아니었어요. 이 전단이 막고 있었어요.',
        success: [
          ['asagiri', '…곶 끝 리조트. 니시무라가 용지 담당으로 3년을 매달린 땅이었지.', 'cold'],
          ['asagiri', '첫 삽도 못 떴어. 이유는 네가 지금 들고 있는 거고.', 'cold'],
        ] },
      { statement: 2, cut: 'AF', requires: [1], shout: '아사기리 씨도 잃었어요!',
        rebut: '매일 저한테 내준 그 커피잔에서 읽은 컷이에요. 냉장고에 붙은 크레용 그림, 세 사람과 「엄마」. 창밖엔 깎인 산이랑 크레인.',
        success: [
          ['asagiri', '12년 전. 하쿠요가 처음 산을 깎을 때. 남편이랑 딸이 그 불에서.', 'sad'],
          ['asagiri', '잊었어. 내가 나를 편집했어. 그랬더니 숨을 쉴 수 있더라.', 'sad'],
          ['asagiri', '그래서 같은 걸 해 주고 싶었어. 잃은 사람들한테. …그게 하쿠요가 불을 덮는 데 쓰일 줄은 몰랐다고 하면, 거짓말이겠지.', 'cold'],
        ] },
    ],
    koharu: [['koharu', '(선배, 아사기리 씨가 두고 간 커피잔… 거기서 읽은 거 있었죠.)', 'worried']],
    wrong: [['asagiri', '그건 네가 보고 싶은 그림이지.', 'cold']],
    close: [['asagiri', '바람이 차네. 천천히 다시 읽어 보렴.', 'cold']],
  },
  self6: {
    char: 'rei', bg: 'lighthouse_in', face: 'serious',
    goal: '최종 심문 2. 증인은 레이 자신. 「나는 도망쳤다」는 순서를 깨라.',
    intro: [['towa', '이번 증인은 너야, 레이.'], ['koharu', '선배. 저희가 옆에 있어요.', 'worried']],
    statements: [
      { text: '그날 나는 시오리랑 싸웠어. 콘테스트에 낼 원고에서 시오리 이름을 빼려고 했어.', cut: 'R2',
        press: [['rei', '그 칸을 그은 건 내 손이야.', 'serious']] },
      { text: '그래서 원고를 두고 뛰쳐나갔어.', cut: 'R3',
        press: [['rei', '…거기까지는 맞아.', 'serious']] },
      { text: '그리고 시오리의 손이 떨어졌어. 나는 그 손을 놓고 도망쳤어.', cut: 't_self_3', dist: '편집', truthCut: 'R5',
        cutDesc: '계단을 뛰어 내려가는 칸. 바로 옆 칸에서 시오리의 손이 미끄러져 떨어진다.',
        press: [['rei', '눈 감으면 늘 이 순서였어.', 'crying']] },
      { text: '시오리는 나를 두고 혼자 남았어. 아무도 나를 구해 주지 않았어.', cut: 't_self_4',
        cutDesc: '불타는 도서관 앞에 혼자 선 레이. 주위엔 아무도 없다.',
        press: [['rei', '불 앞엔 나 혼자였어. 그것만은 확실해.', 'crying']] },
    ],
    answers: [
      { statement: 2, cut: 'R4', with: ['R5', 'S6'], shout: '그 사이에 칸이 있어!',
        rebut: '뛰쳐나간 다음엔 곶 끝 벤치에 있었어. 연기를 보고 되돌아 뛰었고, 2층 계단에서 쓰러진 나를 시오리가 일으켰어. 손이 떨어진 건 그 뒤야.',
        success: [['rei', '…나, 되돌아갔구나.', 'crying']], peel: [2], words: ['a_runback'] },
      { statement: 3, cut: ['S7', '6Y3', '6Y4'], requires: [0], shout: '나는 혼자가 아니었어!', page: ['S6', 'S7', 'R7'], pageCap: '「얘 먼저 데려가요.」',
        rebut: '계단 아래에서 시오리가 나를 순경에게 넘겼어. "얘 먼저 데려가요." 순경은 나를 업고 나갔고, 문 밖에선 과장님이 받았어. 불 앞에 나 혼자 선 적은 없어.',
        success: [
          ['rei', '시오리가, 나를 살렸어.', 'crying'],
        ], words: ['a_handover'] },
    ],
    rewards: ['R6', 'R7', 'R8'],
    koharu: [['koharu', '(선배, 시오리 씨 머리핀에서 읽은 컷… 계단 아래였어요.)', 'worried']],
    wrong: [['rei', '아니야. 그건 내가 아니야.', 'crying']],
    close: [['koharu', '선배, 숨 쉬어요. 다시 해요.', 'worried']],
  },
});

const NAME6_FINAL = [
  '6년 전 8월 31일, ', { cat: 'place', a: 'pl_lighthouse' }, '에 불을 지른 건 ', { cat: 'person', a: 'p_nishi' }, '. 시오리는 그 얼굴을 ', { cat: 'thing', a: 'th_backpage' }, '에 ', { cat: 'act', a: 'a_draw' }, '.\n',
  '연기를 본 레이는 ', { cat: 'place', a: 'pl_lighthouse' }, '(으)로 ', { cat: 'act', a: 'a_runback' }, '. 시오리는 쓰러진 레이를 ', { cat: 'act', a: 'a_handover' }, '.',
];
const CONCLUSION6 = [
  { q: '그날 불을 지른 사람을 가리키는 물증은?', answer: ['manuscript', 'lighter'], choices: ['manuscript', 'lighter', 'petition', 'R2', 'S3', 'AF'] },
  { q: '니시무라가 도서관을 태워야 했던 이유는?', answer: ['petition'], choices: ['petition', 'lighter', 'manuscript', 'S4', 'R2'] },
];

Object.assign(PROFILES, {
  shiori: '아이자와 시오리. 6년 전 8월 31일, 등대 도서관 화재로 세상을 떠났다. 레이에게 이야기를 읽어 주던 친구.',
});
