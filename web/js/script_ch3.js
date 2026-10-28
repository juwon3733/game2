// 3장 「둘 중 하나」 진행 스크립트. 기획: docs/12_story_plan.md §3 3장, docs/13_deduction_upgrade.md §3-4

// ---------- 탐색 맵 (그림이 오기 전엔 코드 타일) ----------
Object.assign(MAPS, {
  tokiwa: {
    label: '토키와 양과점 1층·2층',
    hallWallRow: -1,
    rows: [
      '##########################',
      '#WWWWWWWWWWWW#WWWWWWWWWWW#',
      '#,,,,,,,,,,,,#___________#',
      '#,,,,,,,,,,,,#___________#',
      '#,,,,,,,,,,,,#___________#',
      '#,,,,,,,,,,,,D___________#',
      '#,,,,,,,,,,,,#___________#',
      '#,,,,,,,,,,,,#WWWWWWWWWWW#',
      '#,,,,,,,,,,,,#XXXXXXXXXXX#',
      '#,,,,,,,,,,,,#XXXXXXXXXXX#',
      '#WWWWWDWWWWWW#XXXXXXXXXXX#',
      '#............#XXXXXXXXXXX#',
      '##########################',
    ],
    objects: [
      { id: 'sign', x: 4, y: 11, label: '내려진 셔터와 「영업 종료」 팻말', walkable: true },
      { id: 'showcase', x: 2, y: 3, w: 4, solid: true, label: '케이크 쇼케이스' },
      { id: 'register', x: 8, y: 3, w: 2, solid: true, label: '계산대' },
      { id: 'phone', x: 10, y: 3, solid: true, label: '계산대 옆 가게 전화' },
      { id: 'restroom', x: 11, y: 7, label: '안쪽 손님 화장실' },
      { id: 'shift', x: 3, y: 1, label: '벽의 근무표' },
      { id: 'roster', x: 6, y: 1, label: '직원 메모판' },
      { id: 'ledger', x: 3, y: 8, w: 2, solid: true, label: '안쪽 사무 책상' },
      { id: 'stairsfoot', x: 12, y: 5, label: '창고 계단 아래', walkable: true },
      { id: 'boxes', x: 17, y: 2, w: 3, solid: true, label: '쌓인 상자' },
      { id: 'safe', x: 23, y: 2, solid: true, label: '창고 금고' },
      { id: 'backdoor', x: 24, y: 6, label: '창고 뒷문' },
    ],
  },
  arcade: {
    label: '츠키미나토 아케이드',
    hallWallRow: -1,
    rows: [
      '##########################',
      '#WWWWWWWWWWWWWWWWWWWWWWWW#',
      '#________________________#',
      '#________________________#',
      '#________________________#',
      '#WWWWWWWWWWWW___WWWWWWWWW#',
      '#XXXXXXXXXXXX___XXXXXXXXX#',
      '#XXXXXXXXXXXX___XXXXXXXXX#',
      '#XXXXXXXXXXXX___XXXXXXXXX#',
      '#XXXXXXXXXXXX___XXXXXXXXX#',
      '#XXXXXXXXXXXX___XXXXXXXXX#',
      '#XXXXXXXXXXXXDDDXXXXXXXXX#',
      '##########################',
    ],
    objects: [
      { id: 'booth', x: 4, y: 2, w: 3, solid: true, label: '점술 부스 (오늘 휴업)' },
      { id: 'drawer', x: 7, y: 2, solid: true, label: '부스 테이블 서랍' },
      { id: 'trash', x: 3, y: 4, solid: true, label: '부스 옆 쓰레기통' },
      { id: 'tofushop', x: 19, y: 1, w: 2, label: '두부집' },
      { id: 'tofuclock', x: 21, y: 1, label: '두부집 벽시계' },
      { id: 'alley', x: 14, y: 10, label: '철계단 아래 배수구', walkable: true },
      { id: 'tokiwaback', x: 13, y: 11, w: 3, label: '양과점 창고 바깥 철계단' },
    ],
  },
});

const CH3_SCENES = [
  ['office3', '브리핑 (8월 28일 아침)'],
  ['explore3a', '탐색 1: 토키와 양과점'],
  ['puzzle3a', '컷 정리: 마감 뒤'],
  ['tofu', '심문 1: 두부집 할머니'],
  ['madoka1', '아케이드: 점술가 마도카'],
  ['accuse3', '중간 보고: 첫날 밤'],
  ['academy3', '미술 학원 (8월 28일 저녁)'],
  ['puzzle3b', '시각표: 쌍둥이의 밤'],
  ['yukin', '심문 2: 「유키」'],
  ['hospital3', '병원: 점장의 안경'],
  ['nagi', '심문 3: 나기의 10분'],
  ['explore3b', '탐색 2: 아케이드'],
  ['madoka', '심문 4: 점술가 마도카'],
  ['puzzle3c', '최종 재구성'],
  ['conclusion3', '결론: 토키와 양과점'],
  ['epilogue3', '에필로그: 아케이드 출구'],
];

const C3A = ['3A', '3B', '3G', '3H', '3K'];
const C3B = [...C3A, '3J', 'F1', 'F2', 'F3'];
const C3C = [...C3B, '3E', '3F'];
const C3D = [...C3C, '3C', '3D'];
const W3A = ['p_yuki', 'p_hasegawa', 'th_envelope', 'a_take'];
const W3B = [...W3A, 'pl_storage', 'pl_counter'];
const W3C = [...W3B, 't_2110', 'p_tofu', 'th_shawl', 'pl_alley', 'p_nagi', 'th_bandage', 'p_madoka', 'pl_booth3'];
const W3D = [...W3C, 'pl_academy', 'th_lefthand', 'a_swap'];
const W3E = [...W3D, 't_10min', 'a_hesitate'];
const W3F = [...W3E, 'a_edit', 'a_push3'];
const I3A = ['roster', 'ledger'], I3B = [...I3A, 'debt', 'tone', 'sequin'];
const CH3_STATE = {
  office3: {}, explore3a: { words: W3A },
  puzzle3a: { cuts: C3A, items: I3A, words: W3B }, tofu: { cuts: C3A, items: I3A, words: W3B },
  madoka1: { cuts: [...C3A, '3J'], items: I3A, words: W3C.slice(0, -2) },
  accuse3: { cuts: C3B, items: I3A, words: W3C }, academy3: { cuts: C3B, items: I3A, words: W3C },
  puzzle3b: { cuts: C3C, items: I3A, words: W3D }, yukin: { cuts: C3C, items: I3A, words: W3D },
  hospital3: { cuts: C3C, items: I3A, words: W3D }, nagi: { cuts: C3D, items: I3A, words: W3D },
  explore3b: { cuts: C3D, items: I3A, words: W3E }, madoka: { cuts: C3D, items: I3B, words: W3E },
  puzzle3c: { cuts: C3D, items: I3B, words: W3F }, conclusion3: { cuts: C3D, items: I3B, words: W3F }, epilogue3: { cuts: C3D, items: I3B, words: W3F },
};

// ---------- 장면 ----------

async function sceneOffice3() {
  await FX.title('CHAPTER 3', '둘 중 하나', '8월 28일 · 츠키미나토 아케이드', [['yuki', 'normal'], ['madoka', 'smile']]);
  bg('office');
  await say('', '쿠로가네가 막대사탕을 문 채 서류철을 넘긴다.');
  show('koharu', 'worried', 'right');
  await say('koharu', '선배, 어제 크레센트 앞에서 누구 보셨어요? 계속 길 건너만 보던데.', 'worried');
  show('rei', 'normal', 'left');
  hideText();
  const c0 = await choice(['"아무도."', '"…교복 입은 애가 있었어."'], '코하루에게');
  if (c0 === 1) {
    G.flags.bond = (G.flags.bond || 0) + 1;
    await say('rei', '교복 입은 애가 있었어. 길 건너에. 눈 깜빡이니까 없었고.', 'normal');
    await say('koharu', '저는 못 봤어요. 근데 선배가 봤으면 있던 거예요.', 'worried');
  } else await say('rei', '아무도.', 'normal');
  await say('', '오른손 검지가 저릿하다. 펜을 오래 쥐고 있었던 것처럼. 그런 적 없는데.');
  clearChars();
  show('kurogane', 'normal', 'center');
  await say('kurogane', '아케이드 「토키와 양과점」. 어젯밤 마감 뒤, 점장 하세가와가 2층 창고 계단 아래에 쓰러져 있었다. 의식불명.');
  await say('kurogane', '매상 42만 엔 든 봉투가 없어졌고.');
  gainWord('p_hasegawa'); gainWord('th_envelope'); gainWord('a_take');
  await say('kurogane', '강력계는 마감 담당 점원 [[스즈네 유키]]를 본다. 근무표에 이름이 있고, 신고도 유키 휴대폰에서 왔다. 21시 25분 접수.');
  gainWord('p_yuki');
  await say('kurogane', '그리고 아케이드 점술가 하나가, 사건 전에 "오른쪽 리본 점원을 조심하라"는 [[미래 컷]]을 봤단다.');
  show('koharu', 'happy', 'right');
  await say('koharu', '미래 컷이요? 선배 같은 사람이 또 있어요?', 'happy');
  show('towa', 'normal', 'left');
  await say('towa', '잔상은 지나간 것만 남아. 미래는 없어.');
  hide('towa');
  await say('kurogane', '하나 더. 크레센트 일 뒤로 위에서 "잔상이니 컷이니 믿을 게 못 된다"는 말이 돈다.');
  await say('kurogane', '이번엔 틀리지 마라, 시노노메.');
  show('rei', 'serious', 'left');
  await say('rei', '…틀린 적 없어요.', 'serious');
  clearChars();
}

async function sceneExplore3a() {
  bg('tokiwa_shop');
  await banner('토키와 양과점', '8월 28일 오후 · 출입 금지', 1500);
  await say('', '버터 냄새가 아직 안 빠졌다. 매장 안쪽 계단은 2층 창고로, 창고 뒷문은 바깥 철계단을 타고 뒷골목으로 이어진다.');
  const req = ['sign', 'register', 'stairsfoot', 'phone', 'shift', 'roster', 'ledger'];
  let got = 0;
  const tick = () => { got++; goal(`잔상과 물증 (${got}/7)`); if (got === 7) EX.end(); };
  goal('잔상과 물증 (0/7)');
  await explore('tokiwa', {
    start: [7, 11], required: req,
    on: {
      sign: async () => {
        await say('', '반쯤 내린 셔터에 「영업 종료」 팻말. 끈이 손때로 반들반들하다.');
        await gainCut('3A'); tick();
      },
      register: async () => {
        await say('', '현금 서랍이 빈 채로 열려 있다.');
        await say('', '영수증 기록 마지막 줄, 「20:44 딸기 쇼트케이크 1」. 셔터 내리기 6분 전 손님이다.');
        gainWord('pl_counter');
        await gainCut('3B'); tick();
      },
      phone: async () => {
        await say('', '가게 전화. 수화기는 제자리에 걸려 있다. 신고는 휴대폰으로 들어왔다.');
        await say('rei', '여기 누가 오래 서 있었어. 숨도 못 쉬고.');
        await gainCut('3H'); tick();
      },
      stairsfoot: async () => {
        await say('', '2층 창고로 오르는 가파른 계단. 아래 바닥에 테이프로 그린 사람 윤곽.');
        await say('', '꼭대기 2층 문간 전구는 필라멘트가 끊어져 있다. 밤에 이 계단을 비추는 건 아래 매장 불빛뿐.');
        gainWord('pl_storage');
        await gainCut('3G'); tick();
      },
      shift: async () => {
        await say('', '벽에 붙은 이번 주 근무표. 「8/27 마감 — 유키」.');
        await gainCut('3K'); tick();
        await say('', '근무표 뒤에 종이가 한 장 끼워져 있다. 역 앞 미술 입시 학원 수강료 영수증. 「스즈네 유키 — 저녁반(월~금 19:00~22:00)」.');
        show('koharu', 'normal', 'right');
        await say('koharu', '저녁반… 27일, 평일인데요.', 'normal');
      },
      roster: async () => {
        await say('', '직원 메모판. 점장의 꼼꼼한 글씨.');
        await gainItem('roster'); tick();
        show('koharu', 'normal', 'right');
        await say('koharu', '점장님, 이런 것까지 다 적어 두셨네요.', 'normal');
      },
      ledger: async () => {
        await say('', '안쪽 사무 책상. 매상 장부가 펼쳐져 있다.');
        await gainItem('ledger'); tick();
      },
      showcase: async () => { await say('', '빈 쇼케이스. 가격표만 남았다. 「여름 한정 복숭아 타르트」.'); },
      boxes: async () => { await say('', '케이크 상자가 높이 쌓여 있다. 맨 위 하나가 비뚤다.'); },
      safe: async () => {
        await say('', '창고 금고. 열쇠가 꽂힌 채 열려 있다. 안은 비었다.');
        show('koharu', 'worried', 'right');
        await say('koharu', '봉투가 원래 여기 들어갔어야 하는 거죠?', 'worried');
      },
      backdoor: async () => { await say('', '창고 뒷문. 바깥 철계단으로 뒷골목에 내려간다. 잠금쇠는 안쪽에서 풀려 있다.'); },
      restroom: async () => { await say('', '창고 계단 바로 옆 손님 화장실. 세면대 가장자리에 은색 반짝이 가루가 조금.'); },
    },
  });
  goal('');
}

async function scenePuzzle3a() {
  await runPuzzle('page3a');
  bg('tokiwa_shop');
  show('koharu', 'worried', 'right');
  await say('koharu', '10분이요? 쓰러진 사람을 앞에 두고….', 'worried');
  show('rei', 'serious', 'left');
  await say('rei', '시계가 하나 더 있어야 해. 가게 밖에서 본 거.', 'serious');
  await say('koharu', '건너편 두부집 할머니요! 여기 사람들은 할머니를 시계라고 부른대요.', 'normal');
  clearChars();
}

async function sceneTofu() {
  bg('arcade');
  await say('', '양과점 건너편 두부집. 김이 오르는 물통 너머로 할머니가 손짓한다.');
  meet('tofu', 'left', 'normal');
  await say('tofu', '형사 양반들이구먼. 물어봐, 다 봤으니까. 이 아케이드에서 내 눈 피해 가는 건 도둑고양이뿐이야.', 'normal');
  await runTrial('tofu');
  bg('arcade');
  show('koharu', 'worried', 'right');
  await say('koharu', '근데 숄 두른 사람이 아케이드에 한둘이겠어요?', 'worried');
  await say('', '모퉁이 부스에서 누가 손을 흔든다. 「잔상과 분들이죠?」');
  clearChars();
}

async function sceneMadoka1() {
  bg('booth3');
  meet('madoka', 'left', 'smile');
  await say('', '별 스팽글이 박힌 검은 숄을 두른 여자. 부스 간판에 「타로 · 미즈시마」.');
  await say('rei', '(별무늬 숄. 점 보는 사람은 다 두른다고 했지. 이것만으론 안 돼.)', 'serious');
  await say('madoka', '오실 줄 알았어요. 미즈시마 마도카예요. 여기서 타로를 봐요.', 'smile');
  gainWord('pl_booth3');
  await say('madoka', '저도 형사님이랑 비슷한 걸 봐요. 저는 [[앞일]]이지만요. 카드를 섞으면 아직 안 일어난 일이 한 장씩 떠올라요.', 'smile');
  show('koharu', 'happy', 'right');
  await say('koharu', '와, 진짜요?', 'happy');
  await say('madoka', '그날 저녁에 본 세 장이에요. 쓸모가 있으면 가져가세요.', 'smile');
  for (const c of ['F1', 'F2', 'F3']) await gainCut(c);
  await say('madoka', '오른쪽 리본 아가씨가 봉투를 들고 창고로 가요. 그 손이 봉투를 쥐고, 누구를 밀고요. 그래서 점장님께 조심하시라고 했는데….', 'normal');
  await say('madoka', '소용없었네요.', 'normal');
  hide('koharu');
  show('rei', 'serious', 'right');
  await say('rei', '(세 장 중 두 장은 손끝이 [[차가워]]. 잔상이 아닌 것처럼.)', 'serious');
  await say('rei', '(첫 장만 따뜻해. 이건 이미 일어난 일이야. 그럼 이걸 본 사람은 그때 어디 있었지?)', 'serious');
  await say('madoka', '왜 그렇게 보세요? 무섭게.', 'smile');
  await say('rei', '원래 이 얼굴이에요.', 'normal');
  clearChars();
}

async function sceneAccuse3() {
  bg('office');
  await banner('8월 28일 오후', '잔상과 사무실', 1300);
  await say('kurogane', '(전화) 강력계가 오늘 저녁에 유키를 데려간다. 근무표도 장부도 미래 컷도 다 유키란다.');
  await say('kurogane', '(전화) 다른 이름 있으면 오늘 밤 안에 대라.');
  hide('kurogane');
  show('koharu', 'worried', 'right');
  await say('koharu', '이대로 끌려가면 유키 씨, 아니라고 말도 못 해 보잖아요.', 'worried');
  clearChars();
  hideText();
  const r = await runName({
    title: '중간 보고 — 봉투를 가져간 사람', sub: '틀린 채로 보고하면 강력계가 그 사람을 데려간다.',
    parts: NAME3_MID, threshold: 3, report: true, reportLabel: '이대로 보고한다',
  });
  const who = r.picks[1]; // NAME_MID의 1번 칸이 사람
  G.flags.accused3 = who;
  if (r.ok) {
    G.stats.accuse = true;
    await say('kurogane', '(전화) 점술가? 제 발로 협조하겠다고 온 사람을?');
    await say('kurogane', '(전화) 근거는 네가 읽은 컷뿐이군. …됐다. 몇 시간 벌어 주지. 유키는 오늘 참고인으로만 부른다.');
  } else {
    G.stats.accuse = false;
    if (who === 'p_yuki') {
      G.flags.yukiTaken = true;
      await say('kurogane', '(전화) 역시 유키냐. 강력계랑 같군.');
      FX.pulse();
      await say('', '저녁. 오른쪽 리본의 「유키」가 말없이 경찰차에 오른다.');
    } else if (who === 'p_nagi') {
      await say('kurogane', '(전화) 그날 쉬었다는 동생? 근거는. …강력계는 예정대로 유키를 부른다.');
    } else {
      await say('kurogane', '(전화) 그걸론 강력계 못 막는다. 유키는 예정대로 간다.');
    }
  }
  clearChars();
  show('rei', 'normal', 'left');
  await say('rei', '유키 씨부터 만나 보자.');
  clearChars();
}

async function sceneAcademy3() {
  bg('academy');
  await banner('역 앞 미술 입시 학원', '8월 28일 저녁', 1400);
  await say('', '근무표 뒤에서 나온 수강료 영수증을 들고 역 앞까지 왔다.');
  show('koharu', 'normal', 'right');
  await say('koharu', '지금 수업 중이래요. 실기실은 3층이고요.', 'normal');
  await say('', '석고상 앞에 이젤이 줄지어 있다. 창가 자리, 오른쪽에 리본을 단 여자가 목탄을 든 채 굳는다.');
  meet('yuki', 'left', 'normal');
  if (G.flags.yukiTaken) {
    await say('yuki', '형사님. 경찰서에 있는 거… 제 이름이죠.', 'crying');
    await say('yuki', '학원, 오늘로 그만둘게요. 처음부터 안 다닌 걸로 해 주세요. 그날 마감은 제가 했어요. 저를 데려가세요.', 'crying');
    show('rei', 'serious', 'right');
    await say('rei', '그만두지 마세요. 아직 아무것도 확인 안 됐어요.', 'serious');
  } else {
    await say('yuki', '형사님이 여긴 왜….', 'normal');
    await say('yuki', '그날 밤엔 가게에서 마감했어요. 수업은 빠졌고요. 근무표에 있잖아요.', 'normal');
  }
  gainWord('pl_academy');
  hide('koharu');
  await say('', '레이가 유키의 이젤에 손을 얹는다.');
  await gainCut('3E');
  await say('', '화판 귀퉁이에 끼운 스케치북. 마지막 장에 역 승강장 그림.');
  await gainCut('3F');
  show('yuki', 'crying', 'left');
  await say('yuki', '그 그림, 돌려주세요. 저 수업 들어가야 해요.', 'crying');
  await say('', '유키가 화판을 끌어안고 안쪽으로 들어간다. 곧 문 너머에서 목탄 긁는 소리.');
  clearChars();
}

async function scenePuzzle3b() {
  bg('academy');
  show('rei', 'serious', 'left');
  await say('rei', '두 사람 밤을 나란히 놓고 보자.', 'serious');
  clearChars();
  await runTimeline('time3');
}

async function sceneYukin() {
  bg('interrogate');
  await say('', G.flags.yukiTaken ? '경찰서 취조실. 오른쪽 리본의 「유키」가 고개를 숙이고 있다.' : '경찰서 면담실. 참고인으로 불려 온 「유키」가 오른쪽 리본을 만지작거린다.');
  show('yukin', 'normal', 'left');
  await say('yukin', '다 말씀드렸어요. 마감은 제가 했어요.', 'normal');
  await runTrial('yukin');
  bg('interrogate');
  show('nagi', 'crying', 'left');
  await say('nagi', '언니한텐 말하지 말아 주세요. 언니는 그림만 그리면 돼요.', 'crying');
  show('koharu', 'worried', 'right');
  await say('koharu', '나기 씨, 그 10분… 얘기해 줄 수 있어요?', 'worried');
  await say('', '나기가 고개를 끄덕인다. 가게에서 하겠다고 한다.');
  clearChars();
}

async function sceneHospital3() {
  bg('hospital');
  await say('', '시립 병원. 하세가와 점장은 아직 눈을 뜨지 않았다. 협탁 위에 금이 간 안경.');
  show('koharu', 'worried', 'right');
  await say('koharu', '점장님 눈에 마지막으로 남은 거… 읽을 수 있을까요.', 'worried');
  show('rei', 'serious', 'left');
  await say('rei', '해 볼게.', 'serious');
  hideText();
  await gainCut('3C');
  await gainCut('3D');
  await say('rei', '(계단을 오르던 중이었어. 위를 보면서.)', 'serious');
  clearChars();
}

async function sceneNagi() {
  bg('tokiwa_shop');
  await say('', '불 꺼진 양과점. 나기가 왼쪽 리본을 하고 계산대 앞에 서 있다.');
  meet('nagi', 'left', 'scared');
  await say('nagi', '여기서 말하고 싶었어요. 점장님 가게니까.', 'scared');
  await runTrial('nagi');
  clearChars();
}

async function sceneExplore3b() {
  bg('arcade');
  await banner('츠키미나토 아케이드', '8월 28일 밤', 1400);
  const req = ['drawer', 'trash', 'alley'];
  let got = 0;
  const tick = () => { got++; goal(`마도카의 흔적 (${got}/3)`); if (got === 3) EX.end(); };
  goal('마도카의 흔적 (0/3)');
  await explore('arcade', {
    start: [12, 3], required: req,
    on: {
      booth: async () => { await say('', '점술 부스. 「오늘 휴업」 팻말. 커튼 너머 테이블에 타로 카드가 흩어져 있다.'); },
      drawer: async () => {
        await say('', '테이블 서랍. 봉투 하나가 반쯤 삐져나와 있다.');
        await gainItem('debt'); tick();
      },
      trash: async () => {
        await say('', '부스 옆 쓰레기통. 구겨진 종이 사이로 회색 점무늬 필름 조각.');
        await gainItem('tone'); tick();
        show('koharu', 'worried', 'right');
        await say('koharu', '이거 스크린톤이에요. 만화에 붙이는 거요. 가운데를 손 모양으로 오려 냈어요.', 'worried');
      },
      alley: async () => {
        await say('', '양과점 창고 철계단 바로 아래 배수구. 은색으로 반짝이는 게 걸려 있다.');
        await gainItem('sequin'); tick();
      },
      tofushop: async () => {
        show('tofu', 'normal', 'right');
        await say('tofu', '시계 고쳐 놨어. 아이고, 영감이 맞춰 둔 것도 십 년 가니까 틀어지네.', 'normal');
      },
      tofuclock: async () => { await say('', '두부집 벽시계. 이제 맞는다.'); },
      tokiwaback: async () => { await say('', '양과점 2층 창고 뒷문에서 내려오는 바깥 철계단. 녹슨 난간에 실밥 한 가닥이 걸려 있다.'); },
    },
  });
  goal('');
}

async function sceneMadoka() {
  bg('booth3');
  await say('', '밤 9시. 부스에 불이 켜져 있다. 숄 자락의 스팽글이 전등에 반짝인다.');
  show('madoka', 'smile', 'left');
  await say('madoka', '어머, 잔상과 분들. 또 카드 봐 드릴까요?', 'smile');
  await runTrial('madoka');
  bg('booth3');
  await say('kurogane', '(전화) 독촉장에 스팽글까지. 됐다. 마도카는 강력계에 넘긴다.');
  await say('rei', '(흰 장갑. 크레센트에서 밤 10시에 본 손도 흰 장갑이었어.)', 'serious');
  hide('kurogane');
  show('rei', 'serious', 'right');
  await say('rei', '(누가 고친 컷을 일부러 내 앞에 놓았어. 내가 알아채나 보려고.)', 'serious');
  clearChars();
}

async function scenePuzzle3c() {
  bg('tokiwa_shop');
  show('rei', 'serious', 'left');
  await say('rei', '그날 밤을 처음부터. 가짜는 버리고.', 'serious');
  clearChars();
  await runPuzzle('page3c');
}

async function sceneConclusion3() {
  bg('tokiwa_shop');
  await banner('결론', '토키와 양과점', 1300);
  await say('', '셔터를 반쯤 올린 양과점. 강력계 형사, 유키와 나기, 두부집 할머니. 뒷줄에 쿠로가네.');
  show('kurogane', 'normal', 'center');
  await say('kurogane', '말해 봐라.');
  hide('kurogane');
  hideText();
  await runName({ title: '8월 27일 밤 — 둘 중 하나', sub: '모든 빈칸이 맞아야 확정할 수 있다.', parts: NAME3_FINAL, threshold: 6 });
  await montage(G.lastSolution);
  show('rei', 'serious', 'left');
  await say('rei', '독촉장 기한이 31일이에요. 봉투는 아직 마도카 씨한테 그대로 있을 거예요.', 'serious');
  hide('rei');
  for (let i = 0; i < CONCLUSION3.length; i++) {
    const q = CONCLUSION3[i];
    for (;;) {
      hideText();
      const c = await pickCut(`질문 ${i + 1}. ${q.q}`, '대답이 되는 물증이나 컷을 고르자.', { cancel: false, only: q.choices, items: true });
      if (q.answer.includes(c)) { sfx('correct'); break; }
      sfx('wrong'); quake();
      G.stats.wrong++;
      show('kurogane', 'normal', 'center');
      await say('kurogane', '그걸론 안 돼.');
      hide('kurogane');
    }
  }
  sfx('phone');
  show('koharu', 'happy', 'right');
  await say('koharu', '선배! 병원에서 전화예요. 점장님이 깨어나셨대요!', 'happy');
  await say('koharu', '첫마디가요, "둘 다 우리 가게 애들이니까 혼내지 마라"래요.', 'happy');
  hide('koharu');
  show('yuki', 'crying', 'left');
  show('nagi', 'crying', 'right');
  await say('', '오른쪽 리본과 왼쪽 리본이 나란히 서 있다. 유키 품에 스케치북.');
  bgm('truth');
  hideText();
  const c = await choice(['"점장님이 둘 다 기다린대요."', '"유키 씨, 학원 계속 다녀요."', '(유키에게, 스케치북을 나기에게 보여 주라고 한다)'], '둘에게 뭐라고 할까?');
  if (c === 0) await say('nagi', '언니, 나 이제 내 이름으로 나갈게. 언니 하루도 재밌었지만.', 'crying');
  if (c === 1) await say('yuki', '네. 이번엔 안 숨기고 다닐게요. 점장님한테도 제가 말할게요.', 'crying');
  if (c === 2) {
    marginMark('sketch3');
    await say('', '유키가 머뭇거리다 스케치북을 내민다. 나기가 한 장씩 넘기다 멈춘다. 승강장 그림 바로 앞 장, 계산대에 선 나기의 뒷모습. 구석에 「매일 고마워」.');
  }
  await say('rei', '(나기는 언니 자리를 지켰어. 나는… 누구 자리를 비워 두고 왔지.)', 'serious');
  clearChars();
}

async function sceneEpilogue3() {
  bg('arcade');
  await say('', '밤의 아케이드. 셔터가 하나둘 내려간다.');
  show('rei', 'normal', 'left');
  await say('', '레이 손에 새 스케치북이 한 권. 헤어질 때 유키가 쥐여 줬다. 「형사님 손, 펜 오래 쥔 손 같아서요.」');
  FX.ghost();
  show('shiori', 'point', 'center');
  await say('', '기둥 옆에 교복 입은 여자아이가 서 있다. 손가락이 스케치북을 가리킨다.');
  await say('shiori', '그려.');
  hide('shiori');
  await say('', '셔터 소리에 잠깐 고개를 돌렸다. 다시 보니 기둥 옆엔 아무도 없다.');
  await say('', '오른손이 저도 모르게 스케치북 모서리를 꽉 쥐고 있다.');
  show('rei', 'surprised', 'left');
  await say('rei', '(이 손, 뭘 그리고 싶어 해.)', 'surprised');
  clearChars();
  bg('arcade_exit');
  bgm(null, 2);
  await say('', '출구 가로등 아래에 흰 코트를 입은 사람이 서 있다. 은발에, 한쪽 눈엔 안대.');
  show('ren', 'smile', 'left');
  sfx('ghost');
  await say('ren', '역시 읽어 냈구나, 시노노메.', 'smile');
  await say('ren', '6년 만이야.', 'normal');
  show('rei', 'serious', 'center');
  await say('rei', '…누구.', 'serious');
  show('koharu', 'normal', 'right');
  await say('koharu', '저기, 선배 아는 분이세요? 저는 잔상과 히나타 코하루예요!', 'normal');
  FX.zoom('left');
  await say('ren', '히나타?', 'normal');
  FX.zoom(null);
  await say('', '흰 코트가 대답 없이 돌아선다. 손에 흰 장갑.');
  hide('ren');
  hide('rei'); show('rei', 'serious', 'left');
  await say('', '휴대폰 화면이 저절로 켜진다.');
  show('towa', 'normal', 'center');
  await say('towa', '렌.');
  CHARACTERS.ren.name = '렌';
  await say('koharu', '토와 씨, 아는 사람이에요?', 'worried');
  await say('towa', '…나중에.');
  FX.glitch(700);
  hideText();
  await banner('3장 「둘 중 하나」 끝', '', 2200);
  await showRank('3장 「둘 중 하나」');
}

const CH3_FN = {
  office3: sceneOffice3, explore3a: sceneExplore3a, puzzle3a: scenePuzzle3a, tofu: sceneTofu, madoka1: sceneMadoka1,
  accuse3: sceneAccuse3, academy3: sceneAcademy3, puzzle3b: scenePuzzle3b, yukin: sceneYukin, hospital3: sceneHospital3,
  nagi: sceneNagi, explore3b: sceneExplore3b, madoka: sceneMadoka, puzzle3c: scenePuzzle3c, conclusion3: sceneConclusion3,
  epilogue3: sceneEpilogue3,
};

const CH3_BGM = {
  office3: 'office', explore3a: 'explore', puzzle3a: 'tension', tofu: 'trial', madoka1: 'madoka', accuse3: 'tension',
  academy3: 'epilogue', puzzle3b: 'tension', yukin: 'trial', hospital3: 'truth', nagi: 'trial', explore3b: 'explore',
  madoka: 'madoka', puzzle3c: 'tension', conclusion3: 'trial', epilogue3: 'epilogue',
};

const CH3_CAST = { tofu: ['tofu'], madoka1: ['madoka'], academy3: ['yuki'], yukin: ['yukin'], nagi: ['nagi'], epilogue3: ['ren'] };

CHAPTERS[3] = { title: '둘 중 하나', scenes: CH3_SCENES, state: CH3_STATE, fn: CH3_FN, bgm: CH3_BGM, cast: CH3_CAST };
