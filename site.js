(() => {
  const D = JSON.parse(document.getElementById('data').textContent);
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (id) => document.getElementById(id);

  // LED-Punktmatrix, 5×7 je Zeichen, 23 Spalten (vier Zeichen mit Lücke).
  const GLYPHS = {
    '0': ['01110', '10001', '10011', '10101', '11001', '10001', '01110'],
    '1': ['00100', '01100', '00100', '00100', '00100', '00100', '01110'],
    '2': ['01110', '10001', '00001', '00010', '00100', '01000', '11111'],
    '3': ['11111', '00010', '00100', '00010', '00001', '10001', '01110'],
    '4': ['00010', '00110', '01010', '10010', '11111', '00010', '00010'],
    '5': ['11111', '10000', '11110', '00001', '00001', '10001', '01110'],
    '6': ['00110', '01000', '10000', '11110', '10001', '10001', '01110'],
    '7': ['11111', '00001', '00010', '00100', '01000', '01000', '01000'],
    '8': ['01110', '10001', '10001', '01110', '10001', '10001', '01110'],
    '9': ['01110', '10001', '10001', '01111', '00001', '00010', '01100'],
    ':': ['00000', '01100', '01100', '00000', '01100', '01100', '00000'],
  };
  const COLS = 23;
  const bits = (text) => {
    const cols = [];
    [...text].forEach((ch, i) => {
      if (i) cols.push(0);
      const g = GLYPHS[ch];
      for (let x = 0; x < 5; x++) {
        let c = 0;
        for (let y = 0; y < 7; y++) if (g[y][x] === '1') c |= 1 << y;
        cols.push(c);
      }
    });
    while (cols.length < COLS) cols.unshift(0);
    return cols;
  };

  function Matrix(canvas, text) {
    const ctx = canvas.getContext('2d');
    let shown = bits(text), timer = 0;
    const draw = (cols) => {
      const dpr = devicePixelRatio || 1;
      const w = canvas.clientWidth, h = canvas.clientHeight;
      if (canvas.width !== Math.round(w * dpr)) { canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const cell = h / 7, r = cell * 0.36;
      for (let x = 0; x < COLS; x++) for (let y = 0; y < 7; y++) {
        const on = cols[x] >> y & 1;
        ctx.beginPath();
        ctx.arc(x * cell + cell / 2, y * cell + cell / 2, r, 0, Math.PI * 2);
        ctx.fillStyle = on ? '#f4a68a' : 'rgba(244,166,138,.1)';
        ctx.shadowColor = on ? 'rgba(244,166,138,.55)' : 'transparent';
        ctx.shadowBlur = on ? cell * 0.5 : 0;
        ctx.fill();
      }
    };
    draw(shown);
    addEventListener('resize', () => draw(shown));
    // Aufruf: Spalte für Spalte von links auf den neuen Inhalt schalten.
    this.set = (next, sweep) => {
      const to = bits(next);
      clearInterval(timer);
      if (still || !sweep) { shown = to; draw(shown); return; }
      let k = 0;
      timer = setInterval(() => {
        k += 2;
        shown = to.map((c, i) => (i < k ? c : shown[i]));
        draw(shown);
        if (k >= COLS) clearInterval(timer);
      }, 16);
    };
  }

  document.querySelectorAll('canvas.matrix[data-text]').forEach((c) => new Matrix(c, c.dataset.text));
  const matrix = new Matrix($('matrix'), '001');

  // Fokus-Karte mit Beispielaufgaben, aufgebaut wie in App.tsx.
  const pad = (n) => String(n).padStart(3, '0');
  const mmss = (t) => Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0');
  let queue = D.tasks.slice();
  let call = 1, done = 0, list = 46, timer = 0, left = 120;
  const check = '<svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="#151c2e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const setTimer = (state) => {
    $('tnum').textContent = mmss(left);
    $('tsub').textContent = D.sub[state];
    $('start-t').textContent = D.pill[state];
    $('start').classList.toggle('run', state !== 'idle');
  };
  const stopTimer = () => {
    clearInterval(timer); timer = 0; left = 120;
    $('call-lbl').textContent = D.call;
    setTimer('idle');
  };

  const render = () => {
    const t = queue[0], card = $('fcard');
    $('ftitle').textContent = t ? t.title : D.allDone;
    $('f-orb').dataset.e = t ? t.energy : 'low';
    $('f-energy').textContent = t ? D.energy[t.energy] : '';
    $('f-orb').parentNode.hidden = !t;
    $('fchip').hidden = !(t && t.chip);
    $('fchip-t').textContent = t && t.chip ? t.chip : '';
    $('area').textContent = t ? t.area : '';
    $('flist').innerHTML = '';
    (t && t.list ? t.list : []).forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = '<button type="button" aria-pressed="false"><span class="bx">' + check + '</span><span class="tx"></span></button>';
      li.querySelector('.tx').textContent = item;
      $('flist').append(li);
    });
    $('fempty').hidden = !!t;
    $('done').disabled = $('later').disabled = $('start').disabled = !t;
    $('n-done').textContent = done;
    $('n-list').textContent = list;
    card.classList.remove('in'); void card.offsetWidth; card.classList.add('in');
  };

  const next = (finished) => {
    stopTimer();
    const t = queue.shift();
    if (finished) { done += 1; list = Math.max(0, list - 1); } else queue.push(t);
    call += 1;
    matrix.set(queue.length ? pad(call) : '', true);
    render();
    $('live').textContent = queue.length ? D.callSay.replace('{n}', call).replace('{t}', queue[0].title) : D.allDone;
  };

  $('flist').addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (b) b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
  });
  $('done').addEventListener('click', () => next(true));
  $('later').addEventListener('click', () => next(false));
  $('start').addEventListener('click', () => {
    if (timer) {  // laufend → anhalten
      clearInterval(timer); timer = 0;
      setTimer('paused');
      return;
    }
    if (left <= 0) left = 120;
    $('call-lbl').textContent = D.focus;
    matrix.set(mmss(left), true);
    setTimer('running');
    $('live').textContent = D.timerSay;
    timer = setInterval(() => {
      left -= 1;
      $('tnum').textContent = mmss(left);
      matrix.set(mmss(left), false);
      if (left <= 0) {
        clearInterval(timer); timer = 0;
        setTimer('finished');
        $('live').textContent = D.timeUp;
      }
    }, 1000);
  });

  // Farbwahl: Akzent und Hintergrund wie in ThemeContext.tsx.
  const pv = $('preview').style, pc = document.querySelector('.pcard').style;
  const apply = () => {
    const f = new FormData($('picker'));
    const a = D.accents.find((x) => x.key === f.get('accent'));
    const g = D.bgs.find((x) => x.key === f.get('bg'));
    pv.setProperty('--p-bg', g.hex);
    pv.setProperty('--p-2', g.dark ? '#c0c3cf' : '#3c3c43');
    pc.setProperty('--c-card', g.card);
    pc.setProperty('--c-ink', g.dark ? '#e8e8ec' : '#000');
    pc.setProperty('--c-2', g.dark ? '#a9adbd' : '#3c3c43');
    pc.setProperty('--c-neutral', g.dark ? 'rgba(255,255,255,.1)' : 'rgba(118,118,128,.12)');
    pc.setProperty('--c-hair', g.dark ? 'rgba(255,255,255,.08)' : 'rgba(60,60,67,.1)');
    pc.setProperty('--c-acc', a.accent);
    pc.setProperty('--c-accink', g.dark ? a.onDark : a.onLight);
    pc.setProperty('--c-soft', a.soft);
  };
  $('picker').addEventListener('change', apply);
  apply();
})();
