// 2장 「앙코르 없음」 진행 스크립트. 기획: docs/12_story_plan.md §4, docs/13_deduction_upgrade.md §3-3

// ---------- 탐색 맵 ----------
// 그림(maps/*.png)이 들어오기 전엔 코드 타일로 그린다. 그림이 들어오면 Claude가 rows와 물건 위치를 맞춘다.
Object.assign(MAPS, {
  crescent: {
    label: '크레센트 무대·객석',
    hallWallRow: -1,
    rows: [
      '##########################',
      '#WWWWWWWWWWWWWWWWWWWWWWWW#',
      '#,,,,,,,,,,,,,,,,,,,,,,,,#',
      '#,,,,,,,,,,,,,,,,,,,,,,,,#',
      '#,,,,,,,,,,,,,,,,,,,,,,,,#',
      '#RRRRRRRRRR____RRRRRRRRRR#',
      '#........................#',
      '#........................#',
      '#........................#',
      '#........................#',
      '#WWWWWWWWWWWWWWWWW___WWWW#',
      '#_________________,,,,,,,#',
      '##########################',
    ],
    objects: [
      { id: 'setlist', x: 4, y: 3, label: '무대 왼쪽 바닥의 셋리스트 테이프', walkable: true },
      { id: 'drum', x: 11, y: 2, w: 3, solid: true, label: '드럼 단 심벌' },
      { id: 'mic', x: 12, y: 4, label: '센터 마이크 스탠드 (× 테이프)' },
      { id: 'stick', x: 8, y: 4, label: '부러진 드럼 스틱', walkable: true },
      { id: 'outline', x: 15, y: 3, w: 2, label: '바닥의 테이프 윤곽', walkable: true },
      { id: 'cue', x: 21, y: 1, label: '벽의 큐 시트' },
      { id: 'frontseat', x: 4, y: 6, w: 6, solid: true, label: '객석 첫 줄' },
      { id: 'jacket', x: 18, y: 8, label: '객석 바닥의 흰 재킷', walkable: true },
      { id: 'reception', x: 3, y: 11, w: 2, solid: true, label: '입구 접수대' },
      { id: 'console', x: 22, y: 11, w: 2, solid: true, label: '조명 부스 콘솔' },
      { id: 'kura', x: 20, y: 11, solid: true, label: '쿠라모치' },
    ],
  },
  backstage: {
    label: '크레센트 무대 뒤',
    hallWallRow: -1,
    rows: [
      '##########################',
      '#WWWWWWWWWW#WWWWWWWWWWWWW#',
      '#__________#,,,,,,,,,,,,,#',
      '#_RRRRRRRRR#,,,,,,,,,,,,,#',
      '#,,,,,,,,,,#,,,,,,,,,,,,,#',
      '#,,,,,,,,,,#,,,,,,,,,,,,,#',
      '#,,,,,,,,,,#,,,,,,,,,,,,,#',
      '#WWWWDWWWWW#WWWWWWDWWWWWW#',
      '#........................#',
      '#........................#',
      '#WWWWWWWWWWWWWWWWDWWWWWWW#',
      '#XXXXXXXXXXXXX#__________#',
      '##########################',
    ],
    objects: [
      { id: 'catstairs', x: 1, y: 3, label: '캣워크 계단', walkable: true },
      { id: 'railing', x: 5, y: 3, w: 2, label: '캣워크 난간 (벗겨진 띠 자국)' },
      { id: 'clamp', x: 9, y: 2, label: '난간에 남은 클램프 반쪽', walkable: true },
      { id: 'radio', x: 6, y: 5, label: '윙 바닥의 무전기', walkable: true },
      { id: 'fist', x: 8, y: 7, label: '복도 벽의 주먹 자국' },
      { id: 'jacketk', x: 15, y: 4, w: 2, solid: true, label: '대기실 의자 위 정장 재킷' },
      { id: 'monitor', x: 20, y: 1, w: 2, label: '대기실 벽 모니터' },
      { id: 'rigev', x: 18, y: 11, w: 3, solid: true, label: '증거 보관 구역의 떨어진 리그' },
      { id: 'tendo', x: 22, y: 8, solid: true, label: '정장 차림의 여자' },
    ],
  },
  tendooffice: {
    label: '텐도 프로모션 사장실',
    hallWallRow: -1,
    rows: [
      '##########################',
      '#WWWWWWWWWWWWWWWWWWWWWWWW#',
      '#,,,,,,,,,,,,,,,,,,,,,,,,#',
      '#,,,,,,,,,,,,,,,,,,,,,,,,#',
      '#,,,,,,,,,,,,,,,,,,,,,,,,#',
      '#,,,,,,,,,,,,,,,,,,,,,,,,#',
      '#,,,,,,,,,,,,,,,,,,,,,,,,#',
      '#,,,,,,,,,,,,,,,,,,,,,,,,#',
      '#,,,,,,,,,,,,,,,,,,,,,,,,#',
      '#,,,,,,,,,,,,,,,,,,,,,,,,#',
      '#,,,,,,,,,,,,,,,,,,,,,,,,#',
      '#WWWWWWWWWWWDWWWWWWWWWWWW#',
      '##########################',
    ],
    objects: [
      { id: 'desk', x: 10, y: 3, w: 4, solid: true, draw: 'table', label: '사장 책상' },
      { id: 'drawer', x: 11, y: 4, label: '책상 서랍', walkable: true },
      { id: 'trash', x: 15, y: 3, solid: true, label: '책상 옆 휴지통' },
      { id: 'safe', x: 21, y: 2, w: 2, solid: true, label: '금고 위 서류' },
      { id: 'poster', x: 5, y: 1, w: 2, label: '벽의 밴드 포스터' },
      { id: 'sofa', x: 3, y: 5, w: 3, solid: true, draw: 'sofa', label: '응접 소파' },
      { id: 'aoi', x: 4, y: 8, solid: true, label: '아오이' },
      { id: 'tendo', x: 18, y: 7, solid: true, label: '텐도 사장과 변호사' },
    ],
  },
});

// ---------- 장면 목록과 소지품 ----------

const CH2_SCENES = [
  ['office2', '브리핑 (8월 26일 아침)'],
  ['explore2a', '탐색 1: 크레센트 무대·객석'],
  ['puzzle2a', '컷 정리: 공연'],
  ['kuramochi', '심문 1: 조명 기사 쿠라모치'],
  ['explore2b', '탐색 2: 무대 뒤'],
  ['pin', '심문 2: 베이스 핀'],
  ['ruru', '심문 3: 보컬 루루'],
  ['accuse2', '중간 보고: 첫날 밤'],
  ['explore2c', '탐색 3: 텐도 프로모션 (8월 27일)'],
  ['tendo', '심문 4: 사장 텐도'],
  ['puzzle2b', '최종 재구성'],
  ['conclusion2', '결론: 불 꺼진 무대'],
  ['epilogue2', '에필로그: 22시의 크레센트'],
];

const C2A = ['2A', '2B', '2C', '2D', '2E', '2F'];
const C2B = [...C2A, '2G', '2H', '2I', '2L', '2N'];
const W2A = ['p_ruru', 'p_pin', 'p_aoi', 'p_kuramochi', 'p_kirishima', 't_show', 'pl_booth', 'pl_seats'];
const W2B = [...W2A, 'th_checklist', 't_rehearsal', 'th_strap', 'th_radio', 'a_untie', 'p_tendo', 'a_tie', 'pl_catwalk', 'a_untie', 'th_clamp', 't_work'];
const W2C = [...W2B, 'pl_greenroom', 'a_shake', 't_haze', 'pl_wing', 'a_push', 'th_watch'];
const W2D = [...W2C, 'a_hide'];
const CH2_STATE = {
  office2: {},
  explore2a: {},
  puzzle2a: { cuts: C2A, items: ['cuesheet', 'scouts'], words: W2A },
  kuramochi: { cuts: C2A, items: ['cuesheet', 'scouts'], words: W2A },
  explore2b: { cuts: C2A, lines: ['L4', 'L6'], items: ['cuesheet', 'scouts', 'checklist'], words: W2A.concat('th_checklist', 't_rehearsal', 'th_strap', 'th_radio', 'a_untie') },
  pin: { cuts: C2B, lines: ['L4', 'L6', 'L5'], items: ['cuesheet', 'scouts', 'checklist', 'notebook'], words: W2B },
  ruru: { cuts: [...C2B, '2K'], lines: ['L4', 'L6', 'L5', 'L7'], items: ['cuesheet', 'scouts', 'checklist', 'notebook'], words: W2B.concat('pl_greenroom', 'a_shake', 't_haze') },
  accuse2: { cuts: [...C2B, '2K', '2P'], lines: ['L4', 'L5', 'L7'], fills: { '2N': 'L6' }, items: ['cuesheet', 'scouts', 'checklist', 'notebook'], words: W2C },
  explore2c: { cuts: [...C2B, '2K', '2P'], lines: ['L4', 'L5', 'L7'], fills: { '2N': 'L6' }, items: ['cuesheet', 'scouts', 'checklist', 'notebook'], words: W2C },
  tendo: { cuts: [...C2B, '2K', '2P', '2T'], lines: ['L4', 'L5', 'L7'], fills: { '2N': 'L6' }, items: ['cuesheet', 'scouts', 'checklist', 'notebook', 'strap', 'whitecard', 'estimate', 'insurance'], words: W2C },
  puzzle2b: { cuts: [...C2B, '2K', '2P', '2T', '2M'], lines: ['L5', 'L7'], fills: { '2N': 'L6', '2L': 'L4' }, items: ['cuesheet', 'scouts', 'checklist', 'notebook', 'strap', 'whitecard', 'estimate', 'insurance'], words: W2D },
  conclusion2: { cuts: [...C2B, '2K', '2P', '2T', '2M'], lines: ['L7'], fills: { '2N': 'L6', '2L': 'L4', '2H': 'L5' }, items: ['cuesheet', 'scouts', 'checklist', 'notebook', 'strap', 'whitecard', 'estimate', 'insurance'], words: W2D },
  epilogue2: { cuts: [...C2B, '2K', '2P', '2T', '2M'], lines: ['L7'], fills: { '2N': 'L6', '2L': 'L4', '2H': 'L5' }, items: ['cuesheet', 'scouts', 'checklist', 'notebook', 'strap', 'whitecard', 'estimate', 'insurance'], words: W2D },
};

// 처음 만나는 인물은 네임에 쓸 이름 단어도 준다
function meet(who, pos, face) {
  show(who, face || CHARACTERS[who].faces[0], pos);
  gainWord('p_' + who);
}

// ---------- 장면 ----------

async function sceneOffice2() {
  await FX.title('CHAPTER 2', '앙코르 없음', '8월 26일 · 역 앞 라이브하우스 「크레센트」', [['ruru', 'angry'], ['tendo', 'smile']]);
  bg('office');
  await say('', '8월 26일 아침. 잔상과 사무실. 전기포트가 끓는 소리.');
  show('koharu', 'happy', 'right');
  await say('koharu', '선배, 커피요! 오늘은 단 걸로 했어요. 카페 사장님이 선배는 그게 맞대요.', 'happy');
  show('rei', 'normal', 'left');
  await say('rei', '쓸데없는 걸 배워 왔네.', 'normal');
  await say('', '레이가 잔을 받는다. 다 마신다.');
  await say('koharu', '근데 선배, 카페 사장님이랑은 언제부터 알았어요?', 'normal');
  hideText();
  const c0 = await choice(['"…6년."', '"몰라도 돼."'], '코하루에게');
  if (c0 === 0) { G.flags.bond = (G.flags.bond || 0) + 1; await say('koharu', '6년이요? 그럼 저보다 선배를 훨씬 잘 아시겠네. …분발해야겠다.', 'happy'); }
  else await say('koharu', '네, 네. 몰라도 되는 거 하나 추가요.', 'normal');
  clearChars();
  show('kurogane', 'normal', 'center');
  await say('kurogane', '역 앞 라이브하우스 「크레센트」. 어젯밤 공연 중에 조명 리그가 떨어져 매니저가 죽었다.');
  await say('kurogane', '강력계는 보컬이 리그를 건드려서 사고를 냈다고 본다. 사장이 봤다고 했고, 전날 둘이 크게 싸웠고.');
  await say('kurogane', '본인도 인정하고 있다. 「내 탓이에요」라고.');
  show('rei', 'normal', 'left');
  await say('rei', '본인이 인정하는데 왜 우리한테.');
  await say('kurogane', '인정하는 얼굴이 아니라서.');
  await say('kurogane', '체포영장까지 48시간. 그 안에 못 뒤집으면 송치다.');
  sfx('door');
  show('taiga', 'sad', 'right');
  await say('taiga', '택배요. 잔상과 앞으로.', 'sad');
  show('koharu', 'happy', 'right');
  await say('koharu', '타이가 씨! 진짜 오셨네요!', 'happy');
  await say('taiga', '그때… 고마웠다고요. 그게 다예요.', 'sad');
  hide('taiga');
  hide('kurogane');
  show('towa', 'normal', 'center');
  await say('towa', '이번엔 사람이 많아. 다들 서로 다른 데를 보고 있었어. 컷 하나만 믿지 마.');
  await say('towa', '그리고 보고서는 네가 직접 써. 남이 한 말 말고, 네가 본 것만.');
  await say('tip', '[[네임]]: 빈칸에 단어 조각을 넣어 보고서를 쓴다. 단어는 컷을 크게 보고 짚거나, 증언을 파고들어 모은다.');
  clearChars();
}

async function sceneExplore2a() {
  bg('crescent_out');
  await banner('라이브하우스 「크레센트」', '8월 26일 저녁', 1500);
  await say('', '역 앞 지하 1층. 출입 금지 테이프 너머로 객석 150석과 낮은 무대가 보인다.');
  const req = ['setlist', 'mic', 'drum', 'console', 'stick', 'frontseat'];
  const CUT = { setlist: '2A', mic: '2B', drum: '2C', console: '2D', stick: '2E', frontseat: '2F' };
  let got = 0;
  const found = async (id) => {
    await gainCut(CUT[id]);
    got++;
    goal(`무대와 객석에서 잔상을 찾아라. (${got}/6)`);
    if (got === 6) {
      show('koharu', 'happy', 'right');
      await say('koharu', '선배, 여섯 장이에요. 근데 하나는 공연 때가 아닌 것 같은데….', 'normal');
      EX.end();
    }
  };
  goal('무대와 객석에서 잔상을 찾아라. (0/6)');
  gainWord('t_show'); gainWord('pl_seats');
  await explore('crescent', {
    start: [12, 8], required: req,
    on: {
      setlist: async () => {
        await say('', '무대 왼쪽 바닥, 베이스 자리에 붙은 셋리스트 테이프. 「크럼 / 파도의 말 / 앙코르 없음 / …」');
        await say('rei', '설렘이 남아 있어. 첫 곡이 시작될 때의.');
        await found('setlist');
      },
      mic: async () => {
        await say('', '무대 한가운데, 바닥에 「×」 테이프. 마이크 스탠드가 쓰러져 있다.');
        await found('mic');
      },
      drum: async () => {
        await say('', '드럼 단의 심벌. 가장자리가 찌그러져 있다.');
        await found('drum');
      },
      console: async () => {
        await say('', '객석 뒤 조명 부스. 유리 너머로 무대와 캣워크가 정면으로 보인다.');
        meet('kuramochi', 'right', 'normal');
        await say('kuramochi', '…경찰이요? 저는 할 말 없어요. 서명한 그대로예요.', 'normal');
        hide('kuramochi');
        gainWord('pl_booth');
        await say('rei', '콘솔. 누가 여기서 숨을 죽이고 있었어.');
        await found('console');
      },
      kura: async () => {
        show('kuramochi', 'normal', 'right');
        await say('kuramochi', '…이번 일 끝나면 여기서도 잘릴지 몰라요. 할 말 없어요.', 'scared');
      },
      stick: async () => {
        await say('', '무대 바닥에 부러진 드럼 스틱. 반쪽은 객석 쪽으로 튀어 나가 있다.');
        await found('stick');
      },
      frontseat: async () => {
        await say('', '객석 첫 줄 가운데 의자. 등받이에 「관계자석」 종이.');
        await say('rei', '여기 앉아 있던 사람, 위를 올려다보고 있었어. 걱정하면서.');
        await found('frontseat');
      },
      cue: async () => {
        await say('', '벽에 붙은 셋리스트 겸 조명 큐 시트.');
        await gainItem('cuesheet');
        show('koharu', 'normal', 'right');
        await say('koharu', '곡마다 바닥에 비추는 무늬가 정해져 있네요. 별, 흰빛, 물결, 격자….');
      },
      outline: async () => {
        await say('', '무대 위 테이프 윤곽. 리그가 떨어진 자리다. 「×」 바로 위.');
        await say('rei', '리그는 경찰이 무대 뒤로 옮겼대.');
      },
      reception: async () => {
        await say('', '입구 접수대. 초대 명단 사이에 다른 레코드사 명함 2장. 초대한 사람: 키리시마.');
        await gainItem('scouts');
      },
      jacket: async () => {
        show('koharu', 'worried', 'right');
        await say('koharu', '흰 재킷… 루루 씨 거예요. 공연 때마다 객석으로 던지는 거래요.', 'worried');
      },
    },
  });
  goal('');
}

async function scenePuzzle2a() {
  await runPuzzle('page2a');
  bg('crescent_stage');
  show('koharu', 'worried', 'right');
  await say('koharu', '리허설 컷은 빠졌네요. 객석 첫 줄에서 누가… 위를 보고 있었는데.', 'worried');
  show('rei', 'serious', 'left');
  await say('rei', '(…캣워크 위에서 리그를 가리키던 장갑 낀 손.)', 'serious');
  await say('rei', '조명 기사를 만나 보자.', 'serious');
  clearChars();
}

async function sceneKuramochi() {
  bg('booth');
  await say('', '조명 부스. 쿠라모치가 꺼진 콘솔 앞에 서 있다. 작업 장갑을 낀 채로.');
  show('kuramochi', 'normal', 'left');
  gainWord('p_kuramochi');
  await say('kuramochi', '…잔상? 그런 걸로 뭘 알 수 있는데요.', 'normal');
  show('koharu', 'normal', 'right');
  await say('koharu', '쿠라모치 씨 잘못을 찾으려는 게 아니에요. 그날 본 걸 보여 주세요.');
  await say('kuramochi', '…마음대로 하세요.', 'normal');
  hide('koharu');
  await runTrial('kuramochi');
  bg('booth');
  show('koharu', 'worried', 'right');
  await say('koharu', '끈이 없어졌다… 누가 풀었다는 거잖아요. 그리고 쿠라모치 씨, 아직 뭔가 숨기고 있어요.', 'worried');
  show('rei', 'serious', 'left');
  await say('rei', '무대 뒤로 가자. 리그가 거기 있어.', 'serious');
  clearChars();
}

async function sceneExplore2b() {
  bg('backstage');
  await banner('크레센트 무대 뒤', '8월 26일 저녁', 1400);
  goal('매니저가 묶었다는 끈은 어디 갔지? (0/6)');
  const req = ['railing', 'clamp', 'radio', 'fist', 'rigev', 'jacketk'];
  const CUT = { railing: '2G', clamp: '2H', radio: '2I', fist: '2L', rigev: '2N' };
  let got = 0, shiori = true, metTendo = false;
  // 다 모으면 끝. 사장을 아직 안 만났으면 사장이 먼저 말을 걸어 온다
  const tick = async () => {
    got++;
    goal(`매니저가 묶었다는 끈은 어디 갔지? (${got}/6)`);
    if (got < 6) return;
    if (!metTendo) {
      clearChars();
      await say('', '복도 끝에서 구두 소리. 정장 차림의 여자가 다가온다.');
      await on.tendo();
    }
    EX.end();
  };
  const on = {
      railing: async () => {
        await say('', '캣워크 난간. 페인트가 띠 모양으로 벗겨져 있다. 뭔가로 꽉 묶었던 자국.');
        gainWord('pl_catwalk');
        await gainCut('2G'); await tick();
      },
      clamp: async () => {
        await say('', '캣워크 바에 남은 클램프 반쪽. 손자국이 선명하다.');
        await say('rei', '…화. 그리고 겁.');
        await gainCut('2H'); await tick();
      },
      radio: async () => {
        await say('', '윙 바닥에 떨어진 무전기. 송신 버튼이 눌린 채 금이 가 있다.');
        await gainCut('2I'); await tick();
      },
      fist: async () => {
        await say('', '복도 벽, 어깨 높이에 주먹 자국. 페인트가 움푹 들어갔다.');
        await gainCut('2L'); await tick();
      },
      rigev: async () => {
        await say('', '증거 보관 구역. 떨어진 리그가 비닐에 덮여 있다. 트러스가 휘었고, 무늬 프로젝터의 렌즈가 깨졌다.');
        await say('rei', '마지막 순간이 남아 있어. 누군가 외치고 있어.');
        await gainCut('2N'); await tick();
      },
      jacketk: async () => {
        if (shiori) {
          shiori = false;
          FX.ghost();
          show('shiori', 'point', 'center');
          await say('', '의자 옆에 교복 차림의 여자아이가 서서, 재킷 안주머니를 가리킨다.');
          await say('shiori', '앙코르.');
          hide('shiori');
          EX.extras = [];
          await say('', '레이가 눈을 깜빡이자, 의자 옆은 비어 있다.');
          show('rei', 'surprised', 'left');
          await say('rei', '(…지금, 말했어?)', 'surprised');
          hide('rei');
        }
        await say('', '대기실 의자에 걸린 검은 정장 재킷. 안주머니에 낡은 수첩.');
        await gainItem('notebook');
        gainLine('L5');
        show('koharu', 'worried', 'right');
        await say('koharu', '「앙코르 — 루루 솔로」… 매니저님이 스카우트를 불렀나 봐요.', 'worried');
        await tick();
      },
      catstairs: async () => {
        await say('', '윙 안쪽 철제 계단. 중간쯤에서 올려다보면 리그가 있던 자리가 정면으로 보인다.');
      },
      monitor: async () => {
        await say('', '대기실 벽의 무대 감시 모니터. 지금은 꺼져 있다.');
        await say('rei', '캣워크까지 다 찍히네.');
      },
      tendo: async () => {
        if (metTendo) {
          show('tendo', 'smile', 'right');
          await say('tendo', '필요한 거 있으면 언제든. 우리 루루를 위해서라면.', 'smile');
          return;
        }
        metTendo = true;
        meet('tendo', 'right', 'smile');
        await say('tendo', '잔상과? 들었어요. 텐도 프로모션 텐도예요. 협조할게요, 뭐든지.', 'smile');
        await say('tendo', '루루는 착한 애예요. 욱해서 그랬겠지. 그래도 혼자 다 뒤집어쓰는 건 안 되잖아요.', 'normal');
        await say('tendo', '그리고 이건 경찰한테 아직 안 한 얘긴데요.', 'normal');
        await say('tendo', '개장 직전에, 장갑 낀 사람이 캣워크 계단 쪽으로 가는 걸 봤어요. 조명 기사 아가씨.', 'normal');
        await say('tendo', '점검표에 「이상 없음」이라고 쓴 것도 그 아가씨죠? 저는 그 말만 믿었는데.', 'smile');
        show('koharu', 'worried', 'left');
        await say('koharu', '쿠라모치 씨가요?', 'worried');
        await say('tendo', '제가 봤다고는 하지 말아 줘요. 그 아가씨도 생활이 있으니까.', 'smile');
      },
  };
  await explore('backstage', { start: [5, 9], required: req, extras: [{ who: 'shiori', x: 17, y: 4, dir: 'down' }], on });
  goal('');
}

async function scenePin() {
  bg('greenroom');
  await say('', '대기실. 거울 앞에 반짝이 스티커가 잔뜩 붙은 베이스 케이스.');
  meet('pin', 'left', 'normal');
  await say('pin', '형사님들… 루루 데려가지 마세요. 루루는 아무것도 안 했어요.', 'crying');
  meet('aoi', 'right', 'normal');
  await say('aoi', '핀, 진정해. …리더 사카키예요. 이 애 기억이 필요하면 보세요. 대신 다그치진 말고요.', 'normal');
  hide('aoi');
  await runTrial('pin');
  bg('greenroom');
  show('rei', 'serious', 'left');
  await say('rei', '모니터. 루루가 여기서 울고 있을 때, 캣워크에 누가 있었어.', 'serious');
  show('koharu', 'worried', 'right');
  await say('koharu', '모니터 속 그 사람, 손목에서 뭔가 반짝였어요.', 'worried');
  clearChars();
}

async function sceneRuru() {
  bg('interrogate');
  await say('', '츠키미나토 경찰서 취조실. 루루가 테이블에 발을 올리고 앉아 있다.');
  meet('ruru', 'left', 'angry');
  await say('ruru', '또 형사? 다 말했잖아. 내가 한 거야.', 'angry');
  show('koharu', 'normal', 'right');
  await say('koharu', '그럼 보여 주세요. 루루 씨 기억으로.');
  await say('ruru', '좋아. 보여 줄게. 내가 한 거 맞으니까.', 'angry');
  hide('koharu');
  await runTrial('ruru');
  bg('interrogate');
  show('ruru', 'crying', 'left');
  await say('ruru', '그럼 누가. 누가 끈을 푼 건데.', 'crying');
  show('rei', 'serious', 'right');
  await say('rei', '그건 아직 몰라.', 'serious');
  clearChars();
}

async function sceneAccuse2() {
  bg('office');
  await banner('8월 26일 밤', '잔상과 사무실', 1300);
  await say('kurogane', '(전화) 강력계가 내일 아침 루루 송치 서류를 올린다.');
  await say('kurogane', '(전화) 뒤집을 거면 오늘 밤 안에 보고서를 내라. 끈을 푼 사람이 누군지. 내가 그걸로 강력계를 막아 보지.');
  hide('kurogane');
  show('koharu', 'worried', 'right');
  await say('koharu', '선배는 누구라고 생각해요? 저는… 솔직히 모르겠어요.', 'worried');
  FX.zoom('center');
  await sleep(400);
  FX.zoom(null);
  clearChars();
  hideText();
  const r = await runName({
    title: '중간 보고 — 끈을 푼 사람', sub: '틀린 채로 보고하면 그 사람이 연행된다. 확정하지 못하면 [이대로 보고한다].',
    parts: NAME2_MID, threshold: 3, report: true, reportLabel: '이대로 보고한다',
  });
  const who = r.picks[5];
  G.flags.accused2 = who;
  if (r.ok) {
    G.stats.accuse = true;
    await say('kurogane', '(전화) …사장? 근거는 아직 잔상뿐이군.');
    await say('kurogane', '(전화) 그래도 쿠라모치의 점검표 원본으로 사장실 압수수색 영장은 받아 뒀다. 내일 오후. 네 보고서가 맞는지 거기서 확인해.');
  } else {
    G.stats.accuse = false;
    if (who === 'p_kuramochi') {
      G.flags.kuraTaken = true;
      await say('kurogane', '(전화) …조명 기사라. 점검표 서명에, 부스 위치에, 사장 목격담까지. 강력계도 좋아하겠군.');
      await say('kurogane', '(전화) 루루 송치는 일단 멈췄다. 대신 쿠라모치 시노를 긴급체포했다.');
      clearChars();
      bg('booth');
      FX.pulse();
      await say('', '같은 시각. 크레센트 조명 부스. 형사 둘이 쿠라모치의 팔을 잡는다.');
      show('kuramochi', 'scared', 'center');
      await say('kuramochi', '…….', 'scared');
      await say('', '쿠라모치는 아무 말도 하지 않는다. 장갑을 벗어 콘솔 위에 가지런히 놓고, 따라 나간다.');
      clearChars();
      bg('office');
    } else if (who === 'p_tendo') {
      await say('kurogane', '(전화) 사장이라. …사람은 맞을지도 모르지. 근데 네 보고서는 앞뒤가 안 맞는다. 이걸론 영장이 안 나와.');
      await say('kurogane', '(전화) 쿠라모치의 점검표 원본으로 사장실 압수수색 영장은 받아 뒀다. 내일 오후. 거기서 다시 맞춰 봐.');
    } else {
      await say('kurogane', '(전화) …그건 강력계가 쓴 보고서랑 다를 게 없군.');
      await say('kurogane', '(전화) 루루 송치는 못 막았다. 그래도 점검표 원본 덕에 사장실 압수수색 영장은 나왔다. 내일 오후. 마지막 기회다.');
    }
  }
  clearChars();
  show('rei', 'normal', 'left');
  await say('rei', '…….');
  await say('', '레이는 수첩의 컷들을 다시 펼친다. 형광등 아래, 같은 그림이 아까와 조금 다르게 보인다.');
  clearChars();
}

async function sceneExplore2c() {
  bg('tendo_office');
  await banner('텐도 프로모션', '8월 27일 오후 · 압수수색', 1500);
  show('tendo', 'smile', 'right');
  await say('tendo', '마음대로 뒤져요. 나올 것도 없으니까. 변호사님, 시간 좀 재 주세요.', 'smile');
  await say('', '텐도가 손목시계를 들여다본다. 크고 각진 금시계가 형광등에 번쩍인다.');
  clearChars();
  goal('사장실에서 물증을 찾아라. (0/3)');
  const req = ['trash', 'drawer', 'aoi'];
  let got = 0;
  const tick = () => { got++; goal(`사장실에서 물증을 찾아라. (${got}/3)`); if (got === 3) EX.end(); };
  await explore('tendooffice', {
    start: [12, 10], required: req,
    on: {
      trash: async () => {
        await say('', '책상 옆 휴지통. 구겨진 서류 밑에 주황색 래칫 끈이 둘둘 말려 있다.');
        await say('rei', '손이 떨리고 있어. 서두르는 손.');
        await gainCut('2T');
        await gainItem('strap');
        tick();
      },
      drawer: async () => {
        await say('', '책상 서랍. 일정표와, 글자 없는 흰 명함 한 장. 로고는 빈 말풍선 모양.');
        await gainItem('whitecard');
        show('rei', 'serious', 'left');
        await say('rei', '(…「8/27 22:00 크레센트 — 상담」. 오늘 밤.)', 'serious');
        await say('rei', '(…[[22시]] 전에 끝내야 해.)', 'serious');
        tick();
      },
      aoi: async () => {
        show('aoi', 'serious', 'left');
        await say('aoi', '사표 내러 왔어요. 밴드째로 나가려고.', 'serious');
        if (G.flags.kuraTaken) await say('aoi', '쿠라모치 씨, 어제 잘렸대요. 사장님이 크레센트에 전화 한 통 해서. 연행된 사람은 못 쓴다고.', 'serious');
        await say('aoi', '나가는 김에 이거 가져가세요. 렌탈 업자가 저한테 잘못 보낸 견적서예요.', 'normal');
        await gainItem('estimate');
        show('koharu', 'worried', 'right');
        await say('koharu', '「안전 와이어 옵션 삭제」…. 승인 서명은 사장님 거예요.', 'worried');
        tick();
      },
      safe: async () => {
        await say('', '금고 위 서류철. 공연 사고 보험 약관에 형광펜 줄.');
        await gainItem('insurance');
        show('koharu', 'worried', 'right');
        await say('koharu', '「출연자의 고의로 인한 사고는 회사 배상 면제」…. 루루 씨 탓이 되면, 회사는 돈을 안 물어도 되는 거예요?', 'worried');
      },
      poster: async () => { await say('', '「크럼블」 1주년 포스터. 가운데 루루. 구석에 작게 「매니지먼트 키리시마」.'); },
      tendo: async () => {
        show('tendo', 'smile', 'right');
        await say('tendo', '찾았어요? 아무것도 없죠?', 'smile');
      },
      desk: async () => { await say('', '넓은 책상. 1주년 공연 매출표가 펼쳐져 있다.'); },
    },
  });
  goal('');
}

async function sceneTendo() {
  bg('tendo_office');
  show('tendo', 'smile', 'left');
  await say('tendo', '잔상? 좋아, 보여 줄게. 보여 주고 싶은 것만.', 'smile');
  await runTrial('tendo');
  // 보류 해제: 쿠라모치가 다시 동의한다
  bg('tendo_office');
  sfx('door');
  show('koharu', 'normal', 'right');
  if (G.flags.kuraTaken) {
    await say('', '코하루가 경찰서 유치장에서 쿠라모치를 데려왔다. 수갑은 풀려 있다.');
    show('kuramochi', 'scared', 'left');
    await say('kuramochi', '…저를 지목하셨죠. 괜찮아요. 입 다물고 있던 건 사실이니까.', 'scared');
    hideText();
    const c = await choice(['"…미안해요. 제가 잘못 짚었어요."', '"입 다물고 있던 이유, 이제 말해 줄래요?"'], '레이: 뭐라고 할까?');
    G.flags.reiSorry2 = c === 0;
    if (c === 0) await say('kuramochi', '…사과는 나중에 받을게요. 지금은 이거부터.', 'resolute');
    else await say('kuramochi', '…「말하면 너도 공범」이라고 했어요. 점검표를 고쳐 쓴 건 저니까.', 'scared');
  } else {
    await say('', '코하루가 크레센트에서 쿠라모치를 데려왔다.');
    show('kuramochi', 'scared', 'left');
    await say('kuramochi', '…코하루 씨가, 이제 말해도 된다고 해서.', 'scared');
  }
  hide('koharu');
  show('towa', 'normal', 'right');
  hide('towa');
  await runTrial('kuramochi2');
  bg('tendo_office');
  await say('kurogane', '(전화) 휴지통의 끈, 렌탈 견적서, 점검표 원본, 쿠라모치 진술. …물증은 됐다.');
  hide('kurogane');
  show('tendo', 'cornered', 'left');
  await say('tendo', '…….', 'cornered');
  FX.zoom('left');
  await say('tendo', '어차피 오늘 밤이면 다 지워질 거였는데.', 'cornered');
  FX.zoom(null);
  FX.pulse();
  show('rei', 'surprised', 'right');
  await say('rei', '…지워져?', 'surprised');
  await say('tendo', '변호사 불러.', 'angry');
  clearChars();
}

async function scenePuzzle2b() {
  bg('crescent_stage');
  show('rei', 'serious', 'left');
  await say('rei', '리허설부터, 리그가 떨어질 때까지.', 'serious');
  clearChars();
  await runPuzzle('page2b');
}

async function sceneConclusion2() {
  bg('crescent_stage');
  await banner('결론', '불 꺼진 크레센트', 1300);
  await say('', '객석등만 켜진 크레센트. 강력계 형사, 텐도와 변호사, 「크럼블」 셋, 쿠라모치. 맨 뒤에 쿠로가네.');
  show('kurogane', 'normal', 'center');
  await say('kurogane', '정리해 봐라, 시노노메.');
  hide('kurogane');
  hideText();
  await runName({ title: '8월 25일 — 리그가 떨어질 때까지', sub: '모든 빈칸이 맞아야 확정할 수 있다.', parts: NAME2_FINAL, threshold: 5 });
  await montage(G.lastSolution);
  show('rei', 'serious', 'left');
  await say('rei', '리그는 리허설 때부터 헐거웠어요. 매니저는 그걸 알고 끈으로 묶었고, 사장은 개장 직전에 그 끈을 풀었어요.', 'serious');
  await say('rei', '잔상은 증거가 안 되죠. 그러니까 물증으로 말할게요.', 'serious');
  hide('rei');
  for (let i = 0; i < CONCLUSION2.length; i++) {
    const q = CONCLUSION2[i];
    for (;;) {
      hideText();
      const c = await pickCut(`질문 ${i + 1}. ${q.q}`, '대답이 되는 물증이나 컷을 고르자.', { cancel: false, only: q.choices, items: true });
      if (q.answer.includes(c)) { sfx('correct'); break; }
      sfx('wrong'); quake();
      G.stats.wrong++;
      show('tendo', 'smile', 'left');
      await say('tendo', '그걸로 뭘 증명하는데?', 'smile');
      hide('tendo');
    }
  }
  show('kuramochi', 'resolute', 'right');
  FX.lines(600);
  await say('kuramochi', '사장님이 끈을 주머니에 넣으면서, 부스 쪽을 보고 손가락을 입에 댔어요. 그 얼굴, 눈을 감아도 보여요.', 'resolute');
  hide('kuramochi');
  show('tendo', 'cornered', 'left');
  FX.zoom('left');
  await say('tendo', '…….', 'cornered');
  FX.zoom(null);
  hide('tendo');
  show('ruru', 'crying', 'left');
  await say('ruru', '근데 나도 흔들었어. 그래서 더 헐거워졌을 수도 있잖아.', 'crying');
  show('rei', 'normal', 'right');
  await say('rei', '조금은 그랬을 수도 있어. 근데 끈이 있었으면 안 떨어졌어. 끈을 푼 사람이 있어.', 'normal');
  await say('rei', '키리시마 씨는 공연을 못 멈추니까, 대신 윙에서 리그를 지켜보기로 한 거야.', 'normal');
  bgm('truth');
  hideText();
  const c = await choice(['"네 탓 아니야."', '"앙코르, 해 줄래?"', '(수첩의 앙코르 쪽을 펼쳐서 건넨다)'], '루루에게 뭐라고 할까?');
  if (c === 0) await say('ruru', '알아. 그래도 내 탓이라고 생각하는 게 덜 아파.', 'crying');
  if (c === 1) await say('ruru', '…지금은 못 해. 무대만 보면 그게 떨어지는 게 보여.', 'crying');
  if (c === 2) {
    marginMark('yohaku2');
    await say('', '루루가 키리시마의 글씨를 손가락으로 천천히 따라 쓴다. 「앙코르 — 루루 솔로」.');
    await say('', '한참 아무 말도 하지 않다가, 고개를 끄덕인다.');
  }
  clearChars();
}

async function sceneEpilogue2() {
  if (G.flags.yohaku2) {
    bg('crescent_stage');
    bgm('encore');
    FX.mood('dust');
    const art = await cg('cg_encore');
    await say('', '불 꺼진 크레센트. 관객 없는 무대에서 루루가 기타 하나로 「앙코르 없음」을 부른다.');
    await say('', '핀과 아오이가 객석 첫 줄, 관계자석 옆에 앉아 있다.');
    if (art) cgEnd();
    await say('', '레이는 키리시마의 수첩 마지막 장을 넘긴다. 「앙코르」 다음 줄이 하얗게 비어 있다.');
    await gainCut('Y2');
    FX.ghost();
    FX.memory(true);
    await say('', '——도서관. 원고를 소리 내어 읽는 여자아이와, 박수 대신 펜으로 책상을 두드리는 아이.');
    await say('', '「박수 소리도 그려 줘.」');
    FX.memory(false);
    show('rei', 'surprised', 'left');
    await say('rei', '…….', 'surprised');
    clearChars();
  }
  bg('cafe');
  bgm('epilogue');
  show('asagiri', 'normal', 'center');
  await say('asagiri', '오늘은 무슨 일이 있었어?');
  show('rei', 'normal', 'left');
  await say('rei', '라이브하우스요. 보컬은 풀려났어요.');
  await say('asagiri', '그래. 오늘은 한 잔 더 줄게.');
  if (G.flags.kuraTaken) {
    show('koharu', 'worried', 'right');
    await say('koharu', G.flags.reiSorry2 ? '쿠라모치 씨, 크레센트로 돌아간대요. 선배가 사과한 거, 고마웠대요.' : '쿠라모치 씨, 크레센트로 돌아간대요. 끝까지 들어 줘서 고마웠대요.', 'normal');
  }
  clearChars();
  show('rei', 'normal', 'left');
  await say('', '레이는 사장 서랍에서 찍은 흰 명함 사진을 토와에게 보낸다.');
  show('towa', 'normal', 'right');
  await say('towa', '이거 어디서 났어.');
  await say('rei', '사장 서랍.');
  await say('towa', '에러.');
  sfx('cancel');
  FX.glitch(800);
  await sleep(300);
  hide('towa');
  await say('', '접속이 끊긴다.');
  show('koharu', 'worried', 'right');
  await say('koharu', '토와 씨가 저렇게 끊는 거 처음 봐요.', 'worried');
  clearChars();
  bgm(null, 2.5);
  bg('crescent_stage');
  await say('', '22:00. 빈 크레센트.');
  FX.ghost();
  await say('', '흰 장갑을 낀 손이 무대 한가운데 마이크 스탠드를 천천히 쓸어내린다.');
  hideText();
  await FX.erase(2400);
  await say('', '스탠드에 남아 있던 루루의 잔상이, 가장자리부터 하얗게 지워진다.');
  await say('', '「…한발 늦었네, 시노노메. 아니, 네가 한발 빨랐나.」');
  hideText();
  await fade(true, 900);
  FX.eraseEnd();
  await fade(false, 300);
  await banner('2장 「앙코르 없음」 끝', '', 2200);
  await showRank('2장 「앙코르 없음」');
}

const CH2_FN = {
  office2: sceneOffice2, explore2a: sceneExplore2a, puzzle2a: scenePuzzle2a, kuramochi: sceneKuramochi, explore2b: sceneExplore2b,
  pin: scenePin, ruru: sceneRuru, accuse2: sceneAccuse2, explore2c: sceneExplore2c, tendo: sceneTendo,
  puzzle2b: scenePuzzle2b, conclusion2: sceneConclusion2, epilogue2: sceneEpilogue2,
};

const CH2_BGM = {
  office2: 'office', explore2a: 'explore', puzzle2a: 'live', kuramochi: 'trial', explore2b: 'explore', pin: 'trial', ruru: 'trial',
  accuse2: 'tension', explore2c: 'explore', tendo: 'trial', puzzle2b: 'tension', conclusion2: 'trial', epilogue2: 'epilogue',
};

const CH2_CAST = {
  office2: ['taiga'], explore2a: ['kuramochi'], explore2b: ['tendo', 'shiori'], pin: ['pin', 'aoi'], ruru: ['ruru'],
};

CHAPTERS[2] = { title: '앙코르 없음', scenes: CH2_SCENES, state: CH2_STATE, fn: CH2_FN, bgm: CH2_BGM, cast: CH2_CAST };
