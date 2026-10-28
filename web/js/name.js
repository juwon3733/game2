// 네임(가설 문장): 모은 단어 조각으로 빈칸을 채워 그날 일어난 일을 문장으로 세운다.
// 만화 원고 전 단계인 "네임(콘티)"을 짜는 화면. 결론과 중간 지목에 쓴다.
//
// parts: 문자열과 빈칸 { cat, a } 의 배열. a는 정답 단어 id(배열이면 그중 아무거나).
// threshold: (예전 값, 지금은 안 씀) 맞은 칸 수는 알려 주지 않는다.
// report: true면 틀린 채로 "이대로 보고"할 수 있다(중간 지목). 결과 { ok, picks }.

const WORD_CAT = { person: '사람', place: '장소', time: '때', thing: '물건', act: '행동', state: '상태', line: '말' };

// 빈칸 뒤 조사: 단어가 들어 있으면 그 받침에 맞추고, 비어 있으면 '을(를)' 그대로
const josaAfter = (str, word) => (word && WORDS[word] ? josa(WORDS[word].text + str).slice(WORDS[word].text.length) : str);

function runName({ title, sub = '', parts, threshold = 3, report = false, reportLabel = '이대로 보고한다' }) {
  const blanks = parts.map((p, i) => (typeof p === 'string' ? -1 : i)).filter((i) => i >= 0);
  const picks = {};
  const root = document.createElement('div');
  root.className = 'name-screen';
  $('#stage').appendChild(root);
  G.busyModal = true;
  setMode(null);
  let msg = '빈칸을 눌러 단어 조각을 넣는다. 단어는 컷 속을 짚거나 증언을 파고들면 나온다.';

  return new Promise((resolve) => {
    const finish = (r) => { root.remove(); G.busyModal = false; resolve(r); };
    const render = () => {
      root.innerHTML = `<div class="name-box">
        <div class="name-head"><b>네임</b> ${title}<small>${sub}</small></div>
        <div class="name-text">${parts.map((p, i) => (typeof p === 'string' ? josaAfter(p, picks[i - 1]).replace(/\n/g, '<br>')
          : `<button class="name-blank${picks[i] ? ' set' : ''}" data-i="${i}">${picks[i] ? WORDS[picks[i]].text : WORD_CAT[p.cat]}</button>`)).join('')}</div>
        <div class="name-say">${msg}</div>
        <div class="name-bar">
          <button class="act-btn small" data-a="clear">모두 지우기</button>
          ${report ? `<button class="act-btn small" data-a="report">${reportLabel}</button>` : ''}
          <button class="act-btn objection" data-a="check">이 네임으로 확정</button>
        </div></div>`;
      root.querySelectorAll('.name-blank').forEach((b) => (b.onclick = () => openPick(Number(b.dataset.i), b)));
      root.querySelector('[data-a=clear]').onclick = () => { Object.keys(picks).forEach((k) => delete picks[k]); sfx('cancel'); render(); };
      root.querySelector('[data-a=check]').onclick = check;
      if (report) root.querySelector('[data-a=report]').onclick = () => {
        if (blanks.some((i) => !picks[i])) { msg = '빈칸이 남아 있어.'; return render(); }
        sfx('select');
        finish({ ok: blanks.every(right), picks: Object.assign({}, picks) });
      };
    };
    const right = (i) => [].concat(parts[i].a).includes(picks[i]);
    const openPick = (i, btn) => {
      root.querySelector('.name-pop')?.remove();
      const cat = parts[i].cat;
      const words = G.words.filter((w) => WORDS[w] && WORDS[w].cat === cat);
      const pop = document.createElement('div');
      pop.className = 'name-pop';
      pop.innerHTML = `<div class="name-pop-head">${WORD_CAT[cat]}</div>${words.map((w) => `<button data-w="${w}">${WORDS[w].text}</button>`).join('') || '<div class="md-empty">이 종류 단어는 아직 없다.</div>'}`;
      root.querySelector('.name-box').appendChild(pop);
      const r = btn.getBoundingClientRect(), box = root.querySelector('.name-box').getBoundingClientRect(), k = box.width / root.querySelector('.name-box').offsetWidth;
      Object.assign(pop.style, { left: (r.left - box.left) / k + 'px', top: (r.bottom - box.top) / k + 6 + 'px' });
      pop.querySelectorAll('[data-w]').forEach((b) => (b.onclick = (e) => { e.stopPropagation(); picks[i] = b.dataset.w; sfx('place'); render(); }));
    };
    const check = async () => {
      if (blanks.some((i) => !picks[i])) { msg = '빈칸이 남아 있어.'; return render(); }
      if (blanks.every(right)) { sfx('correct'); FX.lines(500); FX.stamp('확정!'); await sleep(700); return finish({ ok: true, picks: Object.assign({}, picks) }); }
      G.stats.wrong++;
      PLOG.mark(`네임 ${title}`);
      sfx('wrong'); quake();
      // 몇 칸이 맞았는지는 알려 주지 않는다(하나씩 바꿔 넣어 맞히는 걸 막는다)
      msg = '그날 일과 안 맞아. 단서를 다시 보자.';
      render();
    };
    root.onclick = (e) => { if (!e.target.closest('.name-pop, .name-blank')) root.querySelector('.name-pop')?.remove(); };
    render();
  });
}
