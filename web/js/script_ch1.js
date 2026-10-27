// 1장 「낙하」 진행 스크립트.

const CH1_SCENES = [
  ['office', '브리핑 (잔상과 사무실)'],
  ['explore1', '탐색 1: 5층 조사'],
  ['puzzle1', '컷 정리: 페이지 1'],
  ['ookubo', '심문 1: 경비원 오오쿠보'],
  ['taiga', '심문 2: 배달부 타이가'],
  ['explore2', '탐색 2: 다시 5층'],
  ['himari', '심문 3: 옆집 아이 히마리'],
  ['puzzle2', '컷 정리: 페이지 2'],
  ['conclusion', '결론'],
  ['epilogue', '에필로그: 카페 「여백」'],
];

// 장면별로 그 시점까지 가지고 있어야 하는 것
const CH1_STATE = {
  office: { cuts: [], lines: [] },
  explore1: { cuts: [], lines: [] },
  puzzle1: { cuts: ['A', 'B', 'C', 'D'], lines: [] },
  ookubo: { cuts: ['A', 'B', 'C', 'D'], lines: [] },
  taiga: { cuts: ['A', 'B', 'C', 'D', 'E'], lines: ['L2'] },
  explore2: { cuts: ['A', 'B', 'C', 'D', 'E', 'F'], lines: [], fills: { E: 'L2' } },
  himari: { cuts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], lines: [], fills: { E: 'L2' } },
  puzzle2: { cuts: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'], lines: [], fills: { E: 'L2', C: 'L3' } },
  conclusion: { cuts: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'], lines: [], fills: { E: 'L2', C: 'L3' } },
  epilogue: { cuts: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'], lines: [], fills: { E: 'L2', C: 'L3' } },
};

// ---------- 장면 ----------

async function sceneOffice() {
  // 콜드 오픈: 추락 직전. 아직 아무것도 모르는 채로 그 밤을 잠깐 본다
  bg('night');
  FX.memory(true);
  bgm(null);
  await say('', '8월 23일 밤 9시 23분. 구시가 하나미즈키 맨션 5층.');
  sfx('ghost', { vol: 0.5 });
  await flashCut('G', 1500);
  await say('', '베란다 쪽에서 아이가 숨을 들이켜는 소리.');
  await flashCut('C', 1300);
  hideText();
  FX.impact('쿵'); quake();
  await sleep(G.skip ? 100 : 900);
  FX.memory(false);
  await fade(true, 500);
  await FX.title('CHAPTER 1', '낙하', '8월 24일 · 츠키미나토 구시가', [['taiga', 'angry'], ['himari', 'normal']]);
  bg('office');
  fade(false, 500);
  await say('', '츠키미나토 경찰서 별관 맨 끝 창고. 압수품 상자 사이에 소파 하나와 전기포트. 「잔상과」의 사무실이다.');
  show('rei', 'normal', 'left');
  show('koharu', 'happy', 'right');
  await say('koharu', '오늘부터 잔상과에 배치된 히나타 코하루입니다! 선배! 잘 부탁드립니다!');
  await say('rei', '…시끄러워.');
  show('kurogane', 'normal', 'center');
  await say('kurogane', '자, 일이다. 구시가 하나미즈키 맨션 추락 사건.');
  await say('kurogane', '피아노 강사 사에키 미츠루, 31세. 어젯밤 5층 베란다에서 떨어져 의식불명.');
  await say('kurogane', '경비원이 "쿵 소리 직후 택배 기사가 도망치는 걸 봤다"고 했다. 강력계는 그 택배 기사를 범인으로 몰고 있지.');
  await say('kurogane', '본인은 "무서워서 도망쳤다"는 말만 반복하고. …확인해 와.');
  await say('', '쿠로가네가 손목시계를 들여다본다. 초침이 움직이지 않는다. 8시 31분.');
  await say('koharu', '과장님, 그 시계 멈췄는데요?', 'normal');
  FX.zoom('center');
  await say('kurogane', '알아. 이게 맞는 시간이야.');
  FX.zoom(null);
  await say('', '선반 맨 위, 먼지 쌓인 상자에 「6년 전 / 등대」라고 적혀 있다. 코하루의 눈이 거기서 잠깐 멈춘다.');
  await say('koharu', '잔상…이라는 걸로 확인하는 거죠? 선배가 그걸 볼 수 있다고 들었어요!', 'happy');
  await say('rei', '강한 감정이 남은 물건을 만지면, 그 순간이 만화 컷처럼 보여.', 'serious');
  await say('rei', '근데 컷에는 시간이 안 적혀 있어. [[순서]]는 우리가 맞춰야 해.', 'serious');
  hide('kurogane');
  show('towa', 'normal', 'center');
  await say('towa', '현장에선 내가 원격으로 분석해 줄게. 귀찮지만.');
  await say('koharu', '고, 고양이…?', 'worried');
  await say('towa', '고양이 아니야. 토와야.');
  clearChars();
  hideText();
}

async function sceneExplore1() {
  await banner('하나미즈키 맨션 5층', '8월 24일 밤', 1500);
  goal('사에키 씨 집과 주변에서 잔상을 찾아라. (0/4)');
  const req = ['parcel', 'door', 'piano', 'pot'];
  let got = 0;
  const found = async (cut) => {
    await gainCut(cut);
    got++;
    goal(`사에키 씨 집과 주변에서 잔상을 찾아라. (${got}/4)`);
    if (got === 4) {
      show('koharu', 'happy', 'right');
      await say('koharu', '선배, 이 집… 그날 밤 일이 아직 고스란히 남아 있어요.', 'worried');
      EX.end();
    }
  };
  await explore('mansion5f', {
    start: [3, 2], required: req,
    on: {
      parcel: async () => {
        await say('', '현관 앞에 놓인 택배 상자. 증거품 태그가 붙어 있다.');
        await say('rei', '강한 감정이 남아 있어. 놀람이랑, 초조함.');
        await found('A');
      },
      door: async () => {
        await say('rei', '문고리… 누군가 여기서 엄청 놀랐어.');
        await found('D');
      },
      piano: async () => {
        await say('', '덮개가 열린 채인 피아노. 보면대에 악보가 펼쳐져 있다.');
        await found('B');
      },
      pot: async () => {
        await say('', '칸막이 옆 베란다 화분. 흙이 쏟아져 있고, 작은 운동화 자국이 찍혀 있다.');
        show('koharu', 'worried', 'right');
        await say('koharu', '어린애 발자국 같아요. 사에키 씨는 혼자 사는데…', 'worried');
        await say('rei', '강력계 보고서엔 「레슨 학생 발자국」 한 줄.');
        await say('koharu', '도망친 택배 기사가 먼저 나왔으니까, 거기서 더 안 본 거네요.', 'worried');
        await found('C');
      },
      partition: async () => {
        await say('rei', '비상 칸막이. 아래 틈이 꽤 넓어. 애 하나는 지나가겠어.');
        show('koharu', 'normal', 'right');
        await say('koharu', '옆집 베란다랑 붙어 있네요.');
      },
      potPink: async () => { await say('', '칸막이 너머 옆집 화분. 여기선 손이 닿지 않는다.'); },
      calendar: async () => {
        await say('', '8월 달력. 23일 칸에 「히마리 레슨 → 쉬는 날」이라고 적혀 있다.');
        show('koharu', 'normal', 'right');
        await say('koharu', '히마리…? 피아노 학생 이름일까요?');
      },
      sofa: async () => {
        await say('rei', '…앉고 싶다.');
        show('koharu', 'worried', 'right');
        await say('koharu', '선배, 일해요.', 'worried');
      },
      table: async () => { await say('', '악보와 레슨 노트. 「히마리: 음표 머리핀 좋아함. 다음 발표회 선물」이라는 메모.'); },
      railing: async () => {
        await say('', '난간 아래로 1층 화단이 보인다. 한쪽이 움푹 패어 있다.');
        show('koharu', 'worried', 'right');
        await say('koharu', '여기서… 떨어진 거네요.', 'worried');
      },
      shoes: async () => { await say('', '현관의 신발. 남자 구두와 레슨용 아이 실내화 한 켤레.'); },
      nbdoor: async () => { await say('', '옆집. 「코마츠」 문패. 안은 조용하다.'); },
      stairs: async () => { await say('rei', '아직 덜 읽었어. 돌아가는 건 나중에.'); },
    },
  });
  goal('');
}

async function scenePuzzle1() {
  await runPuzzle('page1');
  bg('night');
  show('koharu', 'worried', 'right');
  await say('koharu', '선배, 컷 속 그 작은 발은요? 아이가 있었던 거잖아요.', 'worried');
  show('rei', 'serious', 'left');
  await say('rei', '아이는 어디 안 가. 지금 잡혀 있는 건 택배 기사야. 송치되기 전에 경비원 말부터 확인해.', 'serious');
  await say('koharu', '경비실이면 1층 현관 옆이죠? 제가 먼저 내려가 있을게요!', 'normal');
  clearChars();
}

async function sceneOokubo() {
  bg('guardroom');
  await say('', '하나미즈키 맨션 1층 경비실. 작은 TV에서 야구 하이라이트가 흘러나온다.');
  show('ookubo', 'normal', 'left');
  await say('ookubo', '아이고, 형사님들! 내가 다 봤다니까. 그 양키 놈이 범인이야!');
  show('koharu', 'normal', 'right');
  await say('koharu', '그날 밤 기억을 저희한테 보여 주실 수 있을까요?');
  await say('ookubo', '기억? 뭔 소린지 모르겠지만 얼마든지! 난 거짓말 안 해.');
  hide('koharu');
  await runTrial('ookubo');
}

async function sceneTaiga() {
  bg('interrogate');
  await say('', '츠키미나토 경찰서 취조실. 금발의 청년이 팔짱을 끼고 앉아 있다.');
  show('taiga', 'angry', 'left');
  await say('taiga', '도망쳤다니까요. 그게 다예요.');
  show('koharu', 'normal', 'right');
  await say('koharu', '타이가 씨, 기억을 보여주실 수 있을까요? 저희가 확인하고 싶어서요.');
  await say('taiga', '싫어요. 볼 것도 없어요.', 'angry');
  for (;;) {
    hideText();
    const c = await choice(['"안 하신 거 알아요."', '"왜 거짓말해요."', '(말없이 기다린다)'], '레이: 뭐라고 말할까?');
    if (c === 0) { await say('taiga', '뭘 안다고.', 'sad'); await say('taiga', '…맘대로 해요.', 'sad'); break; }
    if (c === 1) { await say('taiga', '거짓말 아니라고요!', 'angry'); await say('koharu', '서, 선배…! 그렇게 말하면…', 'worried'); continue; }
    await say('koharu', '저기, 타이가 씨. 저희 타이가 씨 편이에요. 진짜로요.', 'happy');
    await say('taiga', '하아. 알았어요.', 'sad');
    break;
  }
  hide('koharu');
  await runTrial('taiga');
}

async function sceneExplore2() {
  bg('night');
  await say('', '타이가는 풀려났다. 레이와 코하루는 다시 맨션으로 향했다.');
  show('rei', 'serious', 'left');
  await say('rei', '아직 못 들은 얘기가 하나 있어.', 'serious');
  clearChars();
  goal('아직 읽지 못한 잔상이 있다. 베란다로.');
  let shiori = true;
  await explore('mansion5f', {
    start: [8, 5], required: ['partition'],
    examined: ['parcel', 'door', 'piano', 'pot'],
    extras: [{ who: 'shiori', x: 16, y: 9, dir: 'right' }],
    on: {
      partition: async () => {
        if (shiori) {
          const art = await cg('cg_shiori');
          if (!art) show('shiori', 'point', 'center');
          FX.ghost();
          await say('', '칸막이 앞에 교복 차림의 여자아이가 서 있다. 옆집 쪽을 가리키더니——');
          if (art) cgEnd(); else hide('shiori');
          EX.extras = [];
          shiori = false;
          await say('', '——사라졌다.');
          show('rei', 'surprised', 'left');
          await say('rei', '(…피곤한가.)', 'surprised');
          show('koharu', 'worried', 'right');
          await say('koharu', '선배? 왜 그래요?', 'worried');
          await say('rei', '…아무것도.', 'normal');
          clearChars();
        }
        await say('', '칸막이 아래 틈으로 손을 넣자, 옆집 화분에 손끝이 닿았다.');
        await gainCut('G');
        show('koharu', 'normal', 'right');
        await say('koharu', '옆집… 「코마츠」 씨네요. 달력에 있던 히마리라는 아이가…');
        show('rei', 'serious', 'left');
        await say('rei', '가 보자.', 'serious');
        EX.end();
      },
      nbdoor: async () => { await say('rei', '그 전에 베란다.'); },
      stairs: async () => { await say('rei', '…아직이야.'); },
    },
  });
  goal('');
}

async function sceneHimari() {
  bg('himari_door');
  sfx('door');
  await say('', '옆집 문이 조금 열리고, 양갈래 머리의 아이가 얼굴만 내민다.');
  show('himari', 'normal', 'left');
  await say('himari', '…아무것도 몰라요.');
  show('koharu', 'happy', 'right');
  await say('koharu', '괜찮아, 히마리. 천천히. 그날 밤 기억, 언니한테 보여줄 수 있어?', 'happy');
  await say('himari', '…응.');
  hide('koharu');
  show('towa', 'normal', 'right');
  await say('towa', '아이 기억은 크레용 그림이야. 몰아붙이지 마. 그냥 보여 주기만 해.');
  hide('towa');
  await runTrial('himari');
}

async function scenePuzzle2() {
  bg('night');
  show('rei', 'serious', 'left');
  await say('rei', '이제 순서만 남았어.', 'serious');
  clearChars();
  await runPuzzle('page2');
}

async function sceneConclusion() {
  bg('hospital');
  await banner('결론', '병원 복도', 1300);
  show('kurogane', 'normal', 'center');
  await say('kurogane', '강력계도, 피해자 가족도 와 있다. 정리해 봐라, 시노노메.');
  const replies = [
    '히마리가 칸막이 틈으로 사에키 씨 집 베란다에 건너와 난간에 올라서 있었어요. 사에키 씨는 난간 밖으로 몸을 내밀어 히마리를 안쪽으로 끌어당겼고, 그 반동으로 떨어졌어요.',
    '5층 문 앞. 쿵 소리가 났을 때 문 밖에 서 있었어요.',
    '휴대폰이 꺼져서. 신고하려고 길 건너 편의점까지 뛰었어요.',
    '사에키 씨 집 베란다 바닥, 난간 안쪽이요. 끌어당겨진 덕분에.',
  ];
  for (let i = 0; i < CONCLUSION.length; i++) {
    const q = CONCLUSION[i];
    for (;;) {
      hideText();
      const c = await pickCut(`질문 ${i + 1}. ${q.q}`, '대답이 되는 컷을 고르자.', { cancel: false, only: q.choices });
      if (q.answer.includes(c)) { sfx('correct'); break; }
      sfx('wrong'); quake();
      G.stats.wrong++;
      await say('kurogane', '그 컷으론 설명이 안 되지. 다시.');
    }
    show('rei', 'serious', 'left');
    await say('rei', replies[i], 'serious');
    hide('rei');
  }
  await say('kurogane', '됐다. 강력계엔 내가 말하지.');
  clearChars();
  bgm('truth');
  await montage(G.lastSolution);
  if (await cg('cg_page')) {
    await say('', '여섯 칸짜리 원고. 그날 밤의 진짜 순서.');
    cgEnd();
  }
  show('himari', 'crying', 'left');
  await say('', '복도 끝 의자에, 엄마 손을 잡은 히마리가 앉아 있다.');
  show('komatsu', 'normal', 'right');
  await say('komatsu', '형사님들이시죠. 히마리가 아무 말도 안 해서, 저는 아무것도 몰랐어요.');
  await say('komatsu', '그날 제가 조금만 일찍 왔으면….');
  hideText();
  const c = await choice(['"네 잘못 아니야."', '"선생님은 너를 지키고 싶었던 거야."', '(말없이 「끌어당김」 컷을 보여준다)'], '히마리에게 뭐라고 할까?');
  if (c === 0) await say('', '히마리가 엄마 품에 얼굴을 묻고 소리 내어 운다. 엄마가 등을 토닥인다.');
  if (c === 1) await say('himari', '…선생님이?', 'normal');
  if (c === 2) {
    marginMark('yohaku1'); // 말 대신 컷을 건네면 여백 조건
    await say('', '히마리가 컷 속, 자기를 끌어당기는 선생님의 팔을 오래 바라본다.');
    await say('', '그리고 쥐고 있던 음표 머리핀을 천천히 다시 꽂는다.');
  }
  await say('komatsu', '고맙습니다. 선생님 깨어나시면, 이 아이랑 같이 인사하러 갈게요.');
  await say('rei', '(선생님은 안 놓았어. 나는 그날 뭘 놓고 뛰었더라.)', 'serious');
  clearChars();
}

async function sceneEpilogue() {
  bg('cafe');
  await say('', '구시가 언덕의 작은 카페 「여백」.');
  show('asagiri', 'normal', 'center');
  await say('asagiri', '어서 와요. 처음 보는 얼굴이네. 레이 후배?');
  show('koharu', 'happy', 'right');
  await say('koharu', '네! 히나타 코하루입니다!', 'happy');
  show('rei', 'normal', 'left');
  const cafe = await cg('cg_cafe');
  await say('', '아사기리는 말없이 레이 앞에 단 커피를 놓는다.');
  await say('koharu', '어, 주문도 안 했는데요?', 'normal');
  await say('asagiri', '레이는 늘 이거야. 쓴 것만 마실 것 같은 얼굴로 단 걸 마시거든.');
  await say('rei', '쓸데없는 소리.');
  if (cafe) cgEnd();
  await say('', '카운터 끝 유리병에 흰 국화 한 송이. 레이는 그쪽으로 눈을 두지 않는다.');
  await say('asagiri', '오늘은 무슨 일이 있었어?');
  await say('rei', '맨션 추락 사건이요. 옆집 아이는 무사해요.');
  await say('asagiri', '그래. …괜찮아. 힘든 건 잊어도 돼.');
  // 여백 컷: 히마리에게 말 대신 「끌어당김」 컷을 보여 줬을 때만
  if (G.flags.yohaku1) {
    await say('', '코트 주머니에 뭔가 걸린다. 사에키 씨 집에서 무심코 챙겨 온 악보의 마지막 장.');
    await say('rei', '마지막 장이 하얗네.', 'normal');
    await gainCut('Y1');
    FX.ghost();
    FX.memory(true);
    await say('', '——도서관 바닥. 원고지를 잔뜩 펼쳐 놓은 두 아이.');
    await say('', '「마지막 칸은 비워 두자. 나중에 같이 그리게.」');
    FX.memory(false);
    await say('', '레이의 손이 잔 위에서 멈춘다.');
    await say('koharu', '선배? 커피 식어요.', 'normal');
  }
  clearChars();
  show('shiori', 'normal', 'farright', { far: true });
  FX.ghost();
  await say('', '창밖, 길 건너에 교복 차림의 여자아이가 서 있다가——');
  hide('shiori');
  await say('', '버스 한 대가 지나가고 나니, 길 건너엔 아무도 없다.');
  bgm(null, 2.5);
  await fade(true, 500);
  clearChars();
  bg('night');
  fade(false, 700);
  await say('', '그날 밤. 혼자 남은 레이는 오른손 검지의 굳은살을 내려다본다.');
  await say('', '펜을 오래 쥔 사람의 손. 그런데 레이는 그림을 그린 기억이 없다.');
  FX.ghost();
  await say('', '어두운 창유리에, 손가락으로 쓴 것 같은 글씨가 잠깐 떠올랐다 사라진다. 「기억나?」');
  hideText();
  await banner('1장 「낙하」 끝', '', 2200);
  await showRank('1장 「낙하」');
}

const CH1_FN = {
  office: sceneOffice, explore1: sceneExplore1, puzzle1: scenePuzzle1, ookubo: sceneOokubo, taiga: sceneTaiga,
  explore2: sceneExplore2, himari: sceneHimari, puzzle2: scenePuzzle2, conclusion: sceneConclusion, epilogue: sceneEpilogue,
};

// 장면마다 흐르는 곡
const CH1_BGM = {
  office: 'office', explore1: 'explore', puzzle1: 'tension', ookubo: 'trial', taiga: 'trial',
  explore2: 'explore', himari: 'tension', puzzle2: 'tension', conclusion: 'trial', epilogue: 'epilogue',
};

const CH1_CAST = { office: ['rei', 'koharu', 'kurogane', 'towa'], ookubo: ['ookubo'], taiga: ['taiga', 'akari'], explore2: ['shiori'], himari: ['himari'], conclusion: ['komatsu'] };

CHAPTERS[1] = { title: '낙하', scenes: CH1_SCENES, state: CH1_STATE, fn: CH1_FN, bgm: CH1_BGM, cast: CH1_CAST };
