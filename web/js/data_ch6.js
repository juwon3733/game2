// 종장 「같은 하루」 데이터. 기획: docs/05_story.md §5장, docs/12_story_plan.md §3 종장
// 6년 전 8월 31일, 곶 끝 등대 도서관. 불을 지른 건 니시무라. 시오리는 1층에서 그 얼굴을 보고 원고 뒷면에 그렸다.
// 레이는 다툼 끝에 뛰쳐나갔지만, 연기를 보고 되돌아갔다. 쓰러진 레이를 시오리가 끌어내 순경 소타에게 넘겼고,
// 시오리는 얼굴을 그린 원고를 가지러 다시 들어갔다. 소타가 뒤따랐다. 둘 다 나오지 못했다.
// 레이의 편집된 기억은 "손이 떨어지는 칸"을 "뛰쳐나간 칸" 바로 뒤에 붙여, 레이가 시오리를 버렸다고 믿게 했다.

CHARACTERS.rei.faces.push('crying');
CHARACTERS.shiori.faces.push('smile');

Object.assign(BACKGROUNDS, {
  lighthouse:      { label: '곶 끝, 등대 도서관 터 (8월 31일)', sky: ['#0e1428', '#3a4a7a'] },
  lighthouse_in:   { label: '불탄 등대 도서관 안', sky: ['#141414', '#3a3028'] },
  lighthouse_dawn: { label: '곶 끝 (새벽)', sky: ['#3a3a6a', '#e8b08a'] },
});

Object.assign(TAG_ORDER, { clock6: ['1930', '1950', '2005', '2015', '2020', '2025', '2028', '2033'] });
Object.assign(TAG_NAME, { clock6: '6년 전의 시각' });

Object.assign(OWNERS, {
  rei:    { name: '레이', color: '#6b5fa8' },
  shiori: { name: '시오리', color: '#c84a6a' },
});

Object.assign(CUTS, {
  R1: { owner: 'rei', title: '원고', desc: '도서관 2층 열람석. 원고지에 펜을 대는 오른손. 맞은편에서 이야기를 읽어 주는 목소리. 벽시계 7시 30분.', tags: { clock6: '1930' } },
  R2: { owner: 'rei', title: '다툼', desc: '콘테스트 응모 서류의 「글」 칸. 레이의 손이 그 칸을 펜으로 긋는다. "네 이야기 없어도 난 그릴 수 있어." 7시 50분.', tags: { clock6: '1950' } },
  R3: { owner: 'rei', title: '뛰쳐나감', desc: '계단을 뛰어 내려가는 시점. 뒤에 두고 온 원고 묶음. 8시 5분.', tags: { clock6: '2005' } },
  R4: { owner: 'rei', title: '벤치', desc: '곶 끝 벤치. 무릎에 얼굴을 묻는다. 등대 불빛이 한 바퀴 돈다. 손목시계 8시 15분.', tags: { clock6: '2015' } },
  R5: { owner: 'rei', title: '되돌아 뜀', desc: '도서관 창에서 연기. 벤치를 박차고 되돌아 뛰는 시점. 8시 20분.', tags: { clock6: '2020' } },
  R6: { owner: 'rei', title: '2층 계단', desc: '연기로 가득한 2층 계단. 시야가 기울며 바닥이 다가온다. 8시 25분.', tags: { clock6: '2025' } },
  R7: { owner: 'rei', title: '손이 떨어짐', desc: '흐린 시야. 나를 잡고 있던 손이 떨어진다. 손을 놓는 게 아니라, 누군가에게 나를 넘기는 손. 8시 28분.', tags: { clock6: '2028' } },
  R8: { owner: 'rei', title: '등 위', desc: '흐릿하다. 경찰 제복의 등에 업혀 있다. 멀어지는 도서관 문 안으로 작은 그림자가 들어간다. 8시 33분.', tags: { clock6: '2033' } },
  S1: { owner: 'shiori', title: '읽어 주기', desc: '원고를 소리 내어 읽는다. 맞은편 아이의 펜 끝이 리듬에 맞춰 움직인다. 7시 30분.', tags: { clock6: '1930' } },
  S2: { owner: 'shiori', title: '등', desc: '응모 서류를 쥔 채 돌아선 아이의 등. 서류의 「글」 칸이 그어져 있다. 7시 50분.', tags: { clock6: '1950' } },
  S3: { owner: 'shiori', title: '마지막 장', desc: '혼자 남은 열람석. 원고의 마지막 장은 백지. 8시 5분.', tags: { clock6: '2005' } },
  S4: { owner: 'shiori', title: '라이터', desc: '1층 계단참에서 내려다본 서고. 라이터 불빛에 비친 남자의 옆얼굴. 8시 15분.', tags: { clock6: '2015' },
        spots: [{ id: 'face', label: '라이터 불빛의 얼굴', x: 0.45, y: 0.4, w: 0.2, h: 0.25, word: 'p_nishi' }] },
  S5: { owner: 'shiori', title: '원고 뒷면', desc: '2층. 원고 마지막 장 뒷면에 방금 본 얼굴을 서둘러 그린다. 그리고 원고를 끌어안는다. 8시 20분.', tags: { clock6: '2020' } },
  S6: { owner: 'shiori', title: '레이, 일어나', desc: '연기 속 계단에 쓰러진 아이를 발견하고 끌어안는다. "레이, 일어나." 8시 25분.', tags: { clock6: '2025' } },
  S7: { owner: 'shiori', title: '이 아이 먼저요', desc: '계단 아래, 뛰어 들어온 순경에게 아이를 넘긴다. "이 아이 먼저요." 8시 28분.', tags: { clock6: '2028' } },
  S8: { owner: 'shiori', title: '다시 안으로', desc: '원고를 두고 왔다. 얼굴이 그려진 그 장. 다시 2층으로 돌아서는 시점. 뒤에서 순경의 발소리. 8시 33분.', tags: { clock6: '2033' } },
  AF: { owner: 'asagiri', title: '크레용 그림', desc: '오래된 원룸. 냉장고에 붙은 크레용 그림, 세 사람과 「엄마」. 창밖에 깎인 산과 크레인. 그리고 불빛.', tags: {} },
  Y6: { owner: 'blank', title: '마지막 칸', blank: true, desc: '원고 마지막 장의 빈 칸. 이번엔 네가 그릴 차례.', tags: {} },
});

Object.assign(ITEMS, {
  lighter:    { title: '녹은 라이터', desc: '1층 서고 바닥에서 나온 녹은 은색 라이터. 「H」 각인. 하쿠요 창립 기념품과 같은 모양.' },
  manuscript: { title: '반쯤 탄 원고', desc: '시오리의 원고 마지막 장. 앞면은 백지, 뒷면에 연필로 그린 남자의 얼굴. 니시무라와 같은 얼굴.' },
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
    hint: '「손이 떨어짐」은 뛰쳐나간 바로 뒤가 아니야. 같은 높이의 시오리 칸을 봐.',
    rei: '…나는 도망친 게 아니었어. 되돌아갔어. 그리고 시오리가, 나를 살렸어.',
  },
});

Object.assign(WITNESSES, {
  asagiri6: {
    char: 'asagiri', bg: 'lighthouse', face: 'cold', bgm: 'editor',
    goal: '최종 심문 1. 이음매가 거의 없는 편집. 그녀가 스스로 지운 것을 찾아 끼워라.',
    intro: [['towa', '…아사기리 컷은 내가 만든 감지기로도 거의 안 잡혀. 거의.'], ['asagiri', '같이 읽어 줄게, 레이 짱. 마지막으로.', 'cold']],
    statements: [
      { text: '그날 불은 사고였어. 오래된 배선. 기록에도 그렇게 남아 있지.', cut: 't_asg_1',
        cutDesc: '말끔한 소방 보고서. 「보일러실 배전반 노후 누전」.',
        press: [['asagiri', '사쿠라유랑 같은 문장이지? 같은 사람이 썼으니까.', 'cold']] },
      { text: '레이 짱은 그날 감기로 집에 누워 있었어. 그렇게 기억하는 게 레이 짱을 위한 거야.', cut: 't_asg_2', dist: '편집', truthCut: 'R5',
        cutDesc: '이불 속의 아이. 너무 고요하다. 이음매가 보이지 않는다.',
        press: [['asagiri', '6년 동안 그 그림으로 잘 살았잖아.', 'cold']] },
      { text: '나는 아무것도 잃지 않았어. 그래서 남이 잃은 걸 덜어 줄 수 있는 거야.', cut: 't_asg_3',
        cutDesc: '카페 「여백」의 카운터. 깨끗하다. 아무것도 걸려 있지 않은 벽.',
        press: [['asagiri', '여백은 비워 두는 거야. 그래야 쉴 수 있어.', 'cold']] },
    ],
    answers: [
      { statement: 0, cut: 'lighter', shout: '사고가 아니야!',
        rebut: '1층 서고에서 나온 녹은 라이터. 하쿠요 창립 기념품. 배선에서 난 불이 아니에요.',
        success: [['asagiri', '…….', 'cold']], words: ['th_lighter'] },
      { statement: 1, cut: 'R5', requires: [0], shout: '나는 거기 있었어!',
        rebut: '곶 끝 벤치에서 연기를 보고 되돌아 뛰는 내 컷이에요. 감기가 아니었어요.',
        success: [['asagiri', '…그걸 다시 찾아냈구나.', 'cold']], peel: [1], words: ['a_runback'] },
      { statement: 2, cut: 'AF', requires: [1], shout: '당신도 잃었어!',
        rebut: '6년 동안 나한테 내준 커피잔에 남아 있던 컷이에요. 냉장고의 크레용 그림, 세 사람과 「엄마」. 창밖엔 깎인 산과 크레인. …당신도 잃었어요.',
        success: [
          ['asagiri', '…….', 'normal'],
          ['asagiri', '12년 전. 하쿠요가 처음 산을 깎을 때. 남편이랑 딸이 그 불에서.', 'normal'],
          ['asagiri', '잊었어. 내가 나를 편집했어. 그랬더니 숨을 쉴 수 있더라.', 'normal'],
          ['asagiri', '그래서 같은 걸 해 주고 싶었어. 잃은 사람들한테. …그게 하쿠요가 불을 덮는 데 쓰일 줄은 몰랐다고 하면, 거짓말이겠지.', 'normal'],
        ] },
    ],
    koharu: [['koharu', '(선배, 아사기리 씨가 두고 간 커피잔… 거기서 읽은 거 있었죠.)', 'worried']],
    wrong: [['asagiri', '그건 레이 짱이 보고 싶은 그림이지.', 'cold']],
    close: [['asagiri', '오늘은 바람이 차네. 다시 해.', 'cold']],
  },
  self6: {
    char: 'rei', bg: 'lighthouse_in', face: 'serious',
    goal: '최종 심문 2. 증인은 레이 자신. 「나는 도망쳤다」는 순서를 깨라.',
    intro: [['towa', '…이번 증인은 너야, 레이.'], ['koharu', '선배. 저희가 옆에 있어요.', 'worried']],
    statements: [
      { text: '그날 나는 시오리랑 싸웠어. 콘테스트에 낼 원고에 시오리 이름을 빼려고 했어.', cut: 'R2',
        press: [['rei', '…그 칸을 그은 건 내 손이야.', 'serious']] },
      { text: '그래서 원고를 두고 뛰쳐나갔어.', cut: 'R3',
        press: [['rei', '…거기까지는 맞아.', 'serious']] },
      { text: '그리고 시오리의 손이 떨어졌어. 나는 그 손을 놓고 도망쳤어.', cut: 't_self_3', dist: '편집', truthCut: 'R5',
        cutDesc: '뛰쳐나가는 계단 바로 다음 칸에 붙은, 떨어지는 손. 두 칸 사이에 아주 얇은 이음매.',
        press: [['rei', '…6년 동안 이 순서로 봤어. 매일 밤.', 'crying']] },
      { text: '시오리가 죽은 건 내 탓이야. 나만 살아남았으니까.', cut: 't_self_4',
        cutDesc: '불타는 도서관 앞에 혼자 선 아이. 아무도 없다.',
        press: [['rei', '…….', 'crying']] },
    ],
    answers: [
      { statement: 2, cut: 'R4', with: 'R5', shout: '그 사이에 칸이 있어!',
        rebut: '뛰쳐나간 다음엔 곶 끝 벤치에 있었어. 8시 15분. 그리고 8시 20분, 연기를 보고 되돌아 뛰었어. 손이 떨어진 건 그 뒤야.',
        success: [['rei', '…나, 되돌아갔구나.', 'crying']], peel: [2], words: ['a_runback'] },
      { statement: 3, cut: 'S7', requires: [0], shout: '시오리가 나를 넘겼어!',
        rebut: '시오리 눈에 남은 컷이야. 계단 아래에서 순경에게 나를 넘겨. "이 아이 먼저요." 손이 떨어진 건, 나를 놓은 게 아니라 넘겨준 거야.',
        success: [
          ['rei', '…….', 'crying'],
          ['rei', '시오리가, 나를 살렸어.', 'crying'],
        ], words: ['a_handover'] },
    ],
    rewards: ['R6', 'R7', 'R8'],
    koharu: [['koharu', '(선배, 시오리 씨 머리핀에서 읽은 컷… 계단 아래였어요.)', 'worried']],
    wrong: [['rei', '…아니야. 그건 내가 아니야.', 'crying']],
    close: [['koharu', '선배, 숨 쉬어요. 다시 해요.', 'worried']],
  },
});

const NAME6_FINAL = [
  '6년 전 8월 31일, ', { cat: 'place', a: 'pl_lighthouse' }, '에 불을 지른 건 ', { cat: 'person', a: 'p_nishi' }, '. 시오리는 그 얼굴을 ', { cat: 'thing', a: 'th_backpage' }, '에 ', { cat: 'act', a: 'a_draw' }, '.\n',
  '레이는 도망치지 않고 ', { cat: 'act', a: 'a_runback' }, '. 시오리는 쓰러진 레이를 ', { cat: 'act', a: 'a_handover' }, '.',
];
const CONCLUSION6 = [
  { q: '6년 전 불을 지른 사람을 가리키는 물증은?', answer: ['manuscript', 'lighter'], choices: ['manuscript', 'lighter', 'R2', 'S3', 'AF'] },
];

Object.assign(PROFILES, {
  shiori: '아이자와 시오리. 6년 전 8월 31일, 등대 도서관 화재로 세상을 떠났다. 레이에게 이야기를 읽어 주던 친구.',
});
