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
const W2B = [...W2A, 'th_checklist', 't_rehearsal', 'th_strap', 'th_radio', 'a_untie', 't_haze', 'p_tendo', 'a_tie', 'pl_catwalk', 'th_clamp', 't_work'];
const W2C = [...W2B, 'pl_greenroom', 'a_shake', 'pl_wing', 'a_push', 'th_watch'];
const W2D = [...W2C, 'a_hide'];
const CH2_STATE = {
  office2: {},
  explore2a: {},
  puzzle2a: { cuts: C2A, items: ['cuesheet', 'scouts'], words: W2A },
  kuramochi: { cuts: C2A, items: ['cuesheet', 'scouts'], words: W2A },
  explore2b: { cuts: C2A, lines: ['L4', 'L6'], items: ['cuesheet', 'scouts', 'checklist'], words: W2A.concat('th_checklist', 't_rehearsal', 'th_strap', 'th_radio', 'a_untie', 't_haze') },
  pin: { cuts: C2B, lines: ['L4', 'L6', 'L5'], items: ['cuesheet', 'scouts', 'checklist', 'notebook'], words: W2B },
  ruru: { cuts: [...C2B, '2K'], lines: ['L4', 'L6', 'L5', 'L7'], items: ['cuesheet', 'scouts', 'checklist', 'notebook'], words: W2B.concat('pl_greenroom', 'a_shake') },
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
  await say('', '전기포트가 딸깍 꺼진다.');
  show('koharu', 'happy', 'right');
  await say('koharu', '선배, 커피요! 오늘은 달게 탔어요. 카페 사장님이 선배는 그렇게 마신대서요.', 'happy');
  show('rei', 'normal', 'left');
  await say('rei', '쓸데없는 걸 배워 왔네.', 'normal');
  await say('', '레이는 말없이 잔을 비운다.');
  await say('koharu', '근데 선배, 사장님이랑은 언제부터 아는 사이예요?', 'normal');
  hideText();
  const c0 = await choice(['"…6년."', '"몰라도 돼."'], '코하루에게');
  if (c0 === 0) { G.flags.bond = (G.flags.bond || 0) + 1; await say('koharu', '6년이요? 그럼 사장님이 저보다 선배를 훨씬 잘 아시겠네요. 분발해야지.', 'happy'); }
  else await say('koharu', '네, 네. 몰라도 되는 거 하나 추가요.', 'normal');
  clearChars();
  show('kurogane', 'normal', 'center');
  await say('kurogane', '역 앞 라이브하우스 「크레센트」. 어젯밤 앙코르 중에 조명 리그가 떨어졌다. 밑에 있던 매니저가 죽었고.');
  await say('kurogane', '강력계는 보컬이 리그를 건드렸다고 본다. 소속사 사장이 봤단다. 전날 매니저랑 크게 싸우기도 했고.');
  await say('kurogane', '본인도 인정했다. 「내 탓이야」. 그 말만 한다더군.');
  show('rei', 'normal', 'left');
  await say('rei', '인정했는데 왜 저희한테요.');
  await say('kurogane', '인정하는 얼굴이 아니었다.');
  await say('kurogane', '체포한 지 하루. 48시간 넘기면 검찰로 간다.');
  sfx('door');
  hide('kurogane'); show('taiga', 'sad', 'center');
  await say('taiga', '택배요. 잔상과 앞으로.', 'sad');
  show('koharu', 'happy', 'right');
  await say('koharu', '타이가 씨! 와, 진짜 오셨다!', 'happy');
  await say('taiga', '그때… 고마웠다고요. 그게 다예요.', 'sad');
  hide('taiga');
  hide('kurogane');
  show('towa', 'normal', 'center');
  await say('towa', '보고 있던 눈이 여섯. 방향이 다 달라. 한 장만 믿지 마.');
  await say('towa', '보고서는 네가 써. 들은 거 말고, 본 거.');
  await say('tip', '[[네임]]: 빈칸에 단어 조각을 넣어 보고서를 쓴다. 단어는 컷을 크게 보고 짚거나, 증언을 파고들어 모은다.');
  clearChars();
}

async function sceneExplore2a() {
  bg('crescent_out');
  await banner('라이브홀 「크레센트」', '8월 26일 저녁', 1500);
  await say('', '출입 금지 테이프 너머로 1층 객석과 2층 발코니. 800석짜리 홀이다. 천장 높이 조명 트러스가 걸려 있다.');
  const req = ['setlist', 'mic', 'drum', 'console', 'stick', 'frontseat'];
  const CUT = { setlist: '2A', mic: '2B', drum: '2C', console: '2D', stick: '2E', frontseat: '2F' };
  let got = 0;
  const found = async (id) => {
    await gainCut(CUT[id]);
    got++;
    goal(`무대·객석의 잔상 (${got}/6)`);
    if (got === 6) {
      show('koharu', 'happy', 'right');
      await say('koharu', '여섯 장 다 모였어요! 그날 밤 순서로 한번 놔 봐요.', 'normal');
      EX.end();
    }
  };
  goal('무대·객석의 잔상 (0/6)');
  gainWord('t_show'); gainWord('pl_seats');
  await explore('crescent', {
    start: [12, 8], required: req,
    on: {
      setlist: async () => {
        await say('', '무대 왼쪽, 베이스 자리 바닥에 셋리스트 테이프. 「크럼 / MC / 파도의 말」. 맨 아래에 매직으로 「앙코르 없음」.');
        await say('rei', '(첫 곡 카운트 직전에서 멈춰 있어. 심장 소리가 커.)');
        await found('setlist');
      },
      mic: async () => {
        await say('', '무대 한가운데 바닥에 「×」 테이프. 그 옆에 마이크 스탠드가 쓰러져 있다.');
        await found('mic');
      },
      drum: async () => {
        await say('', '드럼 단의 심벌. 가장자리가 찌그러져 있다.');
        await found('drum');
      },
      console: async () => {
        await say('', '객석 뒤 조명 부스. 유리 너머로 무대와 캣워크가 정면으로 보인다.');
        meet('kuramochi', 'right', 'normal');
        await say('kuramochi', '…경찰이세요? 할 말 없어요. 점검표에 서명한 그대로예요.', 'normal');
        hide('kuramochi');
        gainWord('pl_booth');
        await say('rei', '여기서 누가 숨을 참고 있었어.');
        await found('console');
      },
      kura: async () => {
        show('kuramochi', 'normal', 'right');
        await say('kuramochi', '이번 일 끝나면 저 잘릴지도 몰라요. 그러니까… 할 말 없어요.', 'scared');
      },
      stick: async () => {
        await say('', '무대 바닥에 부러진 드럼 스틱. 반쪽은 객석 쪽으로 튀어 나가 있다.');
        await found('stick');
      },
      frontseat: async () => {
        await say('', '객석 첫 줄 가운데 의자. 등받이에 「관계자석」 종이.');
        await say('rei', '여기 앉은 사람, 계속 위만 봤어. 목이 뻣뻣해질 만큼.');
        await found('frontseat');
      },
      cue: async () => {
        await say('', '벽에 붙은 셋리스트 겸 조명 큐 시트.');
        await gainItem('cuesheet');
        show('koharu', 'normal', 'right');
        await say('koharu', '「앙코르 없음 — 사장 지시」? 근데 리그는 앙코르 때 떨어졌다면서요. 했네요, 앙코르.', 'worried');
      },
      outline: async () => {
        await say('', '리그가 떨어진 자리를 따라 붙인 테이프 윤곽. 「×」 바로 위다.');
        await say('rei', '리그는 경찰이 무대 뒤로 옮겼대.');
      },
      reception: async () => {
        await say('', '입구 접수대. 초대 명단 사이에 다른 레코드사 명함이 두 장 끼워져 있다. 초대한 사람 칸에 「키리시마」.');
        await gainItem('scouts');
      },
      jacket: async () => {
        show('koharu', 'worried', 'right');
        await say('koharu', '어, 루루 씨 재킷이다. 공연 때마다 객석으로 던진대요.', 'worried');
      },
    },
  });
  goal('');
}

async function scenePuzzle2a() {
  await runPuzzle('page2a');
  bg('crescent_stage');
  show('koharu', 'worried', 'right');
  await say('koharu', '앙코르 때 조명을 만지던 사람이면… 부스에 있던 그분이요.', 'worried');
  show('rei', 'serious', 'left');
  await say('rei', '조명 기사부터.', 'serious');
  clearChars();
}

async function sceneKuramochi() {
  bg('booth');
  await say('', '쿠라모치는 꺼진 콘솔 앞에 서 있다. 작업 장갑을 벗지 않았다.');
  show('kuramochi', 'normal', 'left');
  gainWord('p_kuramochi');
  await say('kuramochi', '…잔상이요? 그런 걸로 뭘 알아요.', 'normal');
  show('koharu', 'normal', 'right');
  await say('koharu', '누구 잡으러 온 거 아니에요. 그날 보신 것만 보여 주세요.');
  await say('kuramochi', '마음대로 하세요.', 'normal');
  hide('koharu');
  await runTrial('kuramochi');
  bg('booth');
  show('koharu', 'worried', 'right');
  await say('koharu', '끈이 없어졌으면, 누가 풀었다는 거잖아요. 그리고 쿠라모치 씨, 세 번째 얘기할 때 눈 피했어요.', 'worried');
  show('rei', 'serious', 'left');
  await say('rei', '무대 뒤로 가자. 리그가 거기 있어.', 'serious');
  clearChars();
}

async function sceneExplore2b() {
  bg('backstage');
  await banner('크레센트 무대 뒤', '8월 26일 저녁', 1400);
  goal('사라진 끈의 행방 (0/6)');
  const req = ['railing', 'clamp', 'radio', 'fist', 'rigev', 'jacketk'];
  const CUT = { railing: '2G', clamp: '2H', radio: '2I', fist: '2L', rigev: '2N' };
  let got = 0, shiori = true, metTendo = false;
  // 다 모으면 끝. 사장을 아직 안 만났으면 사장이 먼저 말을 걸어 온다
  const tick = async () => {
    got++;
    goal(`사라진 끈의 행방 (${got}/6)`);
    if (got < 6) return;
    if (!metTendo) {
      clearChars();
      await say('', '복도 끝에서 또각또각 구두 소리. 정장 차림의 여자다.');
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
        await say('rei', '이를 악물었어. 손은 떨리고.');
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
        await say('', '증거 보관 구역. 떨어진 리그가 비닐에 덮여 있다. 트러스는 휘었고 무늬 프로젝터 렌즈는 깨졌다.');
        await say('rei', '떨어지기 직전이 남아 있어. 누가 소리 지르고 있어.');
        await gainCut('2N'); await tick();
      },
      jacketk: async () => {
        if (shiori && !EX.lookMode) {
          shiori = false;
          FX.ghost();
          show('shiori', 'point', 'center');
          await say('', '의자 옆에 교복 입은 여자아이가 서 있다. 재킷 안주머니를 가리킨다.');
          await say('shiori', '앙코르.');
          hide('shiori');
          EX.extras = [];
          await say('', '눈을 깜빡이자 의자 옆은 비어 있다.');
          show('rei', 'surprised', 'left');
          await say('rei', '(…지금, 말했어?)', 'surprised');
          hide('rei');
        }
        await say('', '대기실 의자에 걸린 검은 정장 재킷. 안주머니에 낡은 수첩.');
        await gainItem('notebook');
        gainLine('L5');
        show('koharu', 'worried', 'right');
        await say('koharu', '「앙코르 — 루루 솔로」…? 스카우트를 부른 게 매니저님이었네요.', 'worried');
        await tick();
      },
      catstairs: async () => {
        await say('', '윙 안쪽 철제 계단. 입구 철문에 새 자물쇠. 중간쯤에서 올려다보면 리그가 있던 자리가 바로 정면이다.');
      },
      monitor: async () => {
        await say('', '대기실 벽의 무대 감시 모니터. 지금은 꺼져 있다.');
        await say('rei', '캣워크까지 다 찍히네.');
      },
      tendo: async () => {
        if (metTendo) {
          show('tendo', 'smile', 'right');
          await say('tendo', '필요한 거 있으면 말해요, 형사님. 우리 루루 일인데.', 'smile');
          return;
        }
        metTendo = true;
        meet('tendo', 'right', 'smile');
        await say('tendo', '아, 잔상과? 얘기 들었어요. 텐도 프로모션 텐도. 뭐든 물어봐요, 형사님들.', 'smile');
        await say('', '여자가 손목을 들어 시간을 본다. 크고 각진 금시계.');
        await say('tendo', '루루는 착한 애야. 욱해서 그랬겠지. 그래도 혼자 다 뒤집어쓰게 둘 순 없잖아요.', 'normal');
        await say('tendo', '그리고 이건 경찰한텐 아직 안 한 얘긴데.', 'normal');
        await say('tendo', '개장 직전에 장갑 낀 사람이 캣워크 계단 쪽으로 가더라고. 조명 기사 아가씨.', 'normal');
        await say('tendo', '점검표에 「이상 없음」 쓴 것도 그 아가씨죠? 난 그것만 믿었는데.', 'smile');
        show('koharu', 'worried', 'left');
        await say('koharu', '쿠라모치 씨가요?', 'worried');
        await say('tendo', '내가 봤단 말은 하지 말아 줘요. 그 아가씨도 먹고살아야지.', 'smile');
        hide('koharu');
        show('rei', 'serious', 'left');
        await say('rei', '(강력계엔 루루를 봤다고 했다면서.)', 'serious');
      },
  };
  await explore('backstage', { start: [5, 9], required: req, extras: [{ who: 'shiori', x: 17, y: 4, dir: 'down' }], on });
  goal('');
}

async function scenePin() {
  bg('greenroom');
  await say('', '대기실. 거울 앞에 반짝이 스티커투성이 베이스 케이스.');
  meet('pin', 'left', 'normal');
  await say('pin', '형사님들, 흐윽… 루루 데려가지 마세요오. 루루는 아무것도 안 했단 말이에요.', 'crying');
  meet('aoi', 'right', 'normal');
  await say('aoi', '핀, 코 풀어. …사카키예요. 드럼이고, 리더예요. 얘 기억 보시려면 보세요. 대신 몰아붙이진 마시고요.', 'normal');
  hide('aoi');
  await runTrial('pin');
  bg('greenroom');
  show('aoi', 'serious', 'right');
  await say('aoi', '앙코르는 없댔어요. 사장님 지시라고. 근데 박수가 안 그치니까, 루루가 스태프 밀치고 혼자 나가 버렸어요.', 'serious');
  await say('aoi', '저랑 핀도 따라 나갔고요. 윙에서 매니저님이 뭐라고 소리쳤는데, 루루는 안 돌아봤어요. 원래 그래요, 걔.', 'normal');
  show('rei', 'serious', 'left');
  await say('rei', '(개장 전에 루루가 여기서 울고 있었다면, 그때 캣워크엔 누가.)', 'serious');
  clearChars();
}

async function sceneRuru() {
  bg('interrogate');
  await say('', '츠키미나토 경찰서 취조실. 루루는 테이블에 발을 올려놓고 있다.');
  meet('ruru', 'left', 'angry');
  await say('ruru', '또 형사야? 몇 번을 말해. 내가 했다고.', 'angry');
  show('koharu', 'normal', 'right');
  await say('koharu', '그럼 보여 주세요. 루루 씨 기억으로.');
  await say('ruru', '봐. 실컷 봐. 어차피 내가 한 거니까.', 'angry');
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
  await say('kurogane', '(전화) 뒤집을 거면 오늘 밤 안에 보고서 올려라. 끈 푼 사람이 누군지. 강력계는 그걸 들고 내가 막는다.');
  hide('kurogane');
  show('koharu', 'worried', 'right');
  await say('koharu', '선배는 누구 같아요? 저는, 어, 솔직히 헷갈려요.', 'worried');
  FX.zoom('center');
  await sleep(400);
  FX.zoom(null);
  clearChars();
  hideText();
  const r = await runName({
    title: '중간 보고 — 끈을 푼 사람', sub: '틀린 채로 보고하면 그 사람이 연행된다. 확정하지 못하면 [이대로 보고한다].',
    parts: NAME2_MID, threshold: 3, report: true, reportLabel: '이대로 보고한다',
  });
  const who = r.picks[1]; // NAME_MID의 1번 칸이 사람
  G.flags.accused2 = who;
  if (r.ok) {
    G.stats.accuse = true;
    await say('kurogane', '(전화) …사장? 근거는 아직 잔상뿐이군.');
    await say('kurogane', '(전화) 됐다. 점검표 원본 들이밀어서 사장실 압수수색 영장은 받았다. 내일 오후다. 맞는지는 거기서 확인해.');
  } else {
    G.stats.accuse = false;
    if (who === 'p_kuramochi') {
      G.flags.kuraTaken = true;
      await say('kurogane', '(전화) …조명 기사라. 서명도 했고 부스에도 있었고, 사장 목격담까지. 강력계가 좋아하겠군.');
      await say('kurogane', '(전화) 루루 송치는 일단 멈췄다. 대신 쿠라모치 시노를 긴급체포했다.');
      clearChars();
      bg('booth');
      FX.pulse();
      await say('', '같은 시각, 크레센트 조명 부스. 형사 둘이 쿠라모치의 양팔을 잡는다.');
      show('kuramochi', 'scared', 'center');
      await say('', '쿠라모치는 장갑을 벗어 콘솔 위에 가지런히 올려 두고, 말없이 따라 나간다.');
      clearChars();
      bg('office');
    } else if (who === 'p_tendo') {
      await say('kurogane', '(전화) 사장이라. 사람은 맞을지도 모르지. 근데 보고서 앞뒤가 안 맞아. 이걸론 못 잡는다.');
      await say('kurogane', '(전화) 점검표 원본으로 사장실 압수수색 영장은 받아 뒀다. 내일 오후. 거기서 다시 맞춰 봐라.');
    } else {
      await say('kurogane', '(전화) …강력계 보고서를 베껴 왔나.');
      await say('kurogane', '(전화) 송치는 못 막았다. 영장은 점검표 원본 덕에 나왔고. 내일 오후 사장실. 그게 마지막이다.');
    }
  }
  clearChars();
  show('rei', 'normal', 'left');
  await say('', '레이는 수첩을 다시 펼친다. 같은 컷인데, 아까와 조금 다르게 보인다.');
  clearChars();
}

async function sceneExplore2c() {
  bg('tendo_office');
  await banner('텐도 프로모션', '8월 27일 오후 · 압수수색', 1500);
  show('tendo', 'smile', 'right');
  await say('tendo', '실컷 뒤져 봐요, 형사님들. 나올 것도 없는데. 변호사님, 몇 분 걸리나 재 줘요.', 'smile');
  await say('', '텐도가 손목시계를 들여다본다. 크고 각진 금시계가 형광등에 번쩍인다.');
  clearChars();
  goal('사장실의 물증 (0/4)');
  const req = ['trash', 'drawer', 'safe', 'aoi'];
  let got = 0;
  const tick = () => { got++; goal(`사장실의 물증 (${got}/4)`); if (got === 4) EX.end(); };
  await explore('tendooffice', {
    start: [12, 10], required: req,
    on: {
      trash: async () => {
        await say('', '책상 옆 휴지통. 구겨진 서류 밑에 래칫 끈이 둘둘 말려 있다.');
        await say('rei', '(쑤셔 넣은 손이 떨렸어.)');
        await gainCut('2T');
        await gainItem('strap');
        tick();
      },
      drawer: async () => {
        await say('', '책상 서랍. 일정표, 은행 독촉장 세 장, 글자 없는 흰 명함 한 장. 로고는 빈 말풍선 모양.');
        await gainItem('whitecard');
        show('rei', 'serious', 'left');
        await say('rei', '(뒷면에 「8/27 22:00 크레센트 — 상담」. 오늘 밤.)', 'serious');
        await say('rei', '([[22시]]에 크레센트. 누가 오는지 봐야겠어.)', 'serious');
        tick();
      },
      aoi: async () => {
        show('aoi', 'serious', 'left');
        await say('aoi', '사표 내러 왔어요. 밴드째로 나가려고.', 'serious');
        if (G.flags.kuraTaken) await say('aoi', '쿠라모치 씨 잘렸대요, 어제. 사장님이 크레센트에 전화 한 통 넣어서요. 연행된 사람은 못 쓴다고.', 'serious');
        await say('aoi', '나가는 김에 이거요. 렌탈 업체가 저한테 잘못 보낸 견적서.', 'normal');
        await gainItem('estimate');
        show('koharu', 'worried', 'right');
        await say('koharu', '「안전 와이어 옵션 삭제」? 승인한 사람이… 사장님이에요.', 'worried');
        tick();
      },
      safe: async () => {
        await say('', '금고 위 서류철. 맨 위에 보험 증권 한 장, 형광펜 줄이 두 군데.');
        await say('rei', '(서명하면서 시계를 몇 번이나 봤어.)');
        await gainItem('insurance');
        show('koharu', 'worried', 'right');
        await say('koharu', '공연 중단 보험? 가입일이 공연 사흘 전이에요. 장비 사고로 공연이 멈추면, 예정 매출 전, 전액…?', 'worried');
        await say('koharu', '여기 특약도요. 「출연자의 고의로 인한 사고는 회사 배상 면제」. 루루 씨 탓이 되면 회사는 한 푼도 안 문다는 거예요?', 'worried');
        tick();
      },
      poster: async () => { await say('', '「크럼블」 1주년 포스터. 가운데 루루. 구석에 작게 「매니지먼트 키리시마」.'); },
      tendo: async () => {
        show('tendo', 'smile', 'right');
        await say('tendo', '어때요, 아가씨. 뭐 좀 나왔어?', 'smile');
      },
      desk: async () => { await say('', '책상 위에 1주년 공연 매출표. 800석 중 312석 판매. 빨간 펜으로 「적자」.'); },
    },
  });
  goal('');
}

async function sceneTendo() {
  bg('tendo_office');
  show('tendo', 'smile', 'left');
  await say('tendo', '잔상? 그래요, 보여 드리지. 내가 보여 주고 싶은 데까지만.', 'smile');
  await runTrial('tendo');
  // 보류 해제: 쿠라모치가 다시 동의한다. 텐도가 없는 자리에서
  bg('tendo_office');
  clearChars();
  await say('', '변호사가 텐도를 옆 회의실로 데리고 나간다.');
  sfx('door');
  if (G.flags.kuraTaken) {
    await say('', '코하루가 경찰서 유치장에서 쿠라모치를 데려왔다. 수갑은 풀려 있다.');
    show('koharu', 'normal', 'right');
    show('kuramochi', 'scared', 'left');
    await say('kuramochi', '…저를 지목하셨다면서요. 괜찮아요. 입 다물고 있던 건 맞으니까.', 'scared');
    hideText();
    const c = await choice(['"…미안해요. 제가 잘못 짚었어요."', '"입 다물고 있던 이유, 이제 말해 줄래요?"'], '레이: 뭐라고 할까?');
    G.flags.reiSorry2 = c === 0;
    if (c === 0) await say('kuramochi', '사과는 나중에 받을게요. 지금은 이거부터.', 'resolute');
    else await say('kuramochi', '사장님이 「말하면 너도 공범」이라고 했어요. 점검표, 고쳐 쓴 건 저니까요.', 'scared');
  } else {
    await say('', '코하루가 크레센트에서 쿠라모치를 데려왔다.');
    show('koharu', 'normal', 'right');
    show('kuramochi', 'scared', 'left');
    await say('kuramochi', '…코하루 씨가 이제 말해도 된다고 해서요.', 'scared');
  }
  hide('koharu');
  await runTrial('kuramochi2');
  bg('tendo_office');
  await say('kurogane', '(전화) 끈, 견적서, 증권, 점검표 원본. 쿠라모치 진술까지. 됐다.');
  hide('kurogane');
  clearChars();
  sfx('door');
  await say('', '회의실 문이 열리고, 텐도가 돌아온다.');
  show('tendo', 'cornered', 'left');
  await say('', '텐도가 금시계를 손바닥으로 덮는다.');
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
  await say('kurogane', '말해 봐라, 시노노메.');
  hide('kurogane');
  hideText();
  await runName({ title: '8월 25일 — 리그가 떨어질 때까지', sub: '모든 빈칸이 맞아야 확정할 수 있다.', parts: NAME2_FINAL, threshold: 5 });
  await montage(G.lastSolution);
  show('rei', 'serious', 'left');
  await say('rei', '잔상은 증거가 안 된다고 하셨죠. 그럼 물증으로 할게요.', 'serious');
  hide('rei');
  for (let i = 0; i < CONCLUSION2.length; i++) {
    const q = CONCLUSION2[i];
    for (;;) {
      hideText();
      const c = await pickCut(`질문 ${i + 1}. ${q.q}`, '답이 되는 물증이나 컷.', { cancel: false, only: q.choices, items: true });
      if (q.answer.includes(c)) { sfx('correct'); break; }
      sfx('wrong'); quake();
      G.stats.wrong++;
      show('tendo', 'smile', 'left');
      await say('tendo', '그래서, 그게 뭘 증명하는데요?', 'smile');
      hide('tendo');
    }
  }
  show('kuramochi', 'resolute', 'right');
  FX.lines(600);
  await say('kuramochi', '사장님이 끈을 주머니에 넣으면서 부스 쪽을 봤어요. 손가락을 입에 대고. …지금도 눈 감으면 보여요.', 'resolute');
  hide('kuramochi');
  show('tendo', 'cornered', 'left');
  FX.zoom('left');
  await say('tendo', '표가 반도 안 나갔어. 은행은 안 기다려 주고.', 'cornered');
  FX.zoom(null);
  await say('tendo', '리그가 내려앉으면 공연은 중단이지. 보험금 나오고, 책임은 「이상 없음」에 서명한 공연장이 지고. 그거면 됐었어.', 'cornered');
  await say('tendo', '점검표에 친절하게 써 있더라. 끈만 없으면 한 시간 안에 빠진다고. 개장 직전에 풀면 딱 본공연 끝날 때쯤.', 'cornered');
  await say('tendo', '앙코르 없다고 몇 번을 말했어. 그 시간엔 무대에 아무도 없어야 했다고.', 'cornered');
  await say('tendo', '근데 저 애가 기어이 나가더라. 앙코르 하겠다고.', 'cornered');
  show('rei', 'serious', 'right');
  await say('rei', '사람이 죽으니까 특약 쪽으로 갈아타셨죠. 출연자 고의면 회사는 배상을 안 하니까. 경찰한테 루루를 봤다고 한 것도 그래서고요.', 'serious');
  await say('tendo', '변호사 불러.', 'angry');
  clearChars();
  show('ruru', 'crying', 'left');
  await say('ruru', '내가 앙코르만 안 나갔어도. 나도 흔들었잖아, 그거. 그래서 더 헐거워졌을지도 모르고.', 'crying');
  show('rei', 'normal', 'right');
  await say('rei', '조금은 그랬을지도. 근데 끈이 있었으면 안 떨어졌어. 그 끈을 푼 사람이 따로 있고.', 'normal');
  bgm('truth');
  hideText();
  const c = await choice(['"네 탓 아니야."', '"앙코르, 해 줄래?"', '(수첩의 앙코르 쪽을 펼쳐서 건넨다)'], '루루에게 뭐라고 할까?');
  if (c === 0) await say('ruru', '알아. 그래도 내 탓이라고 생각하는 게 덜 아파.', 'crying');
  if (c === 1) await say('ruru', '지금은 못 해. 무대만 보면 그게 떨어지는 게 보여.', 'crying');
  if (c === 2) {
    marginMark('yohaku2');
    await say('', '루루가 키리시마의 글씨를 손가락으로 천천히 따라 쓴다. 「앙코르 — 루루 솔로」.');
    await say('', '한참 그러다가, 고개를 한 번 끄덕인다.');
  }
  await say('rei', '(루루는 무대에서 안 내려갔어. 내 기억엔 계단 내려가는 발소리만 남아 있는데.)', 'serious');
  clearChars();
}

async function sceneEpilogue2() {
  if (G.flags.yohaku2) {
    bg('crescent_stage');
    bgm('encore');
    FX.mood('dust');
    const art = await cg('cg_encore');
    await say('', '관객 없는 무대. 루루가 기타 하나 들고, 그날 못 끝낸 앙코르를 부른다.');
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
    await say('rei', '(박수 소리….)', 'surprised');
    clearChars();
  }
  bg('cafe_night');
  bgm('epilogue');
  show('asagiri', 'normal', 'center');
  await say('asagiri', '오늘은 어땠니?');
  show('rei', 'normal', 'left');
  await say('rei', '라이브하우스요. 보컬은 풀려났어요.');
  await say('asagiri', '그랬구나. 그럼 오늘은 한 잔 더 마시렴.');
  if (G.flags.kuraTaken) {
    show('koharu', 'worried', 'right');
    await say('koharu', G.flags.reiSorry2 ? '쿠라모치 씨, 크레센트에 다시 나간대요. 선배가 사과해 준 거 고마웠대요.' : '쿠라모치 씨, 크레센트로 돌아간대요. 끝까지 들어 줘서 고마웠대요.', 'normal');
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
  await say('koharu', '토와 씨가 먼저 끊는 거, 처음 봐요.', 'worried');
  clearChars();
  bgm(null, 2.5);
  bg('crescent_out');
  await say('', '21:30. 레이와 코하루는 크레센트 길 건너 편의점 앞에 서 있다.');
  show('koharu', 'worried', 'right');
  await say('koharu', '사장님은 유치장에 있잖아요. 상담하러 누가 오긴 와요?', 'worried');
  show('rei', 'serious', 'left');
  await say('rei', '명함을 준 쪽이 와.', 'serious');
  clearChars();
  await say('', '22:00. 아무도 오지 않는다.');
  bg('crescent_stage');
  await say('', '22:10. 레이는 테이프를 넘어 무대로 내려가, 마이크 스탠드에 손을 댄다.');
  FX.ghost();
  await say('', '흰 장갑 낀 손이 스탠드를 천천히 쓸어내린다. 언제 남은 건지 모를 만큼 얇은 잔상.');
  await say('', '스탠드에 남아 있던 루루의 잔상이, 가장자리부터 하얗게 지워진다.');
  hideText();
  await FX.erase(2400);
  FX.eraseEnd();
  await say('', '「한발 늦었네, 시노노메. 아니, 네가 한발 빨랐나.」');
  show('koharu', 'worried', 'right');
  await say('koharu', '선배? 저희 9시 반부터 계속 지켜봤잖아요. 아무도 안 들어갔어요.', 'worried');
  show('rei', 'serious', 'left');
  await say('rei', '(우리보다 먼저 다녀갔어. 내가 올 것까지 알고.)', 'serious');
  clearChars();
  hideText();
  await fade(true, 900);
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
