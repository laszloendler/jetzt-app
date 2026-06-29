/* ============================================================
   JETZT. — landing interactions (vanilla)
   ============================================================ */
(function () {
  'use strict';

  /* ---- subtle scroll reveals (rAF/scroll based — robust across embeds) ---- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  function revealCheck() {
    var vh = window.innerHeight || document.documentElement.clientHeight || 0;
    for (var i = 0; i < revealEls.length; i++) {
      var el = revealEls[i];
      if (el.classList.contains('in')) continue;
      var r = el.getBoundingClientRect();
      if (r.top < vh * 0.9 && r.bottom > -40) el.classList.add('in');
    }
  }

  window.addEventListener('scroll', revealCheck, { passive: true });
  window.addEventListener('resize', revealCheck);
  revealCheck();
  requestAnimationFrame(revealCheck);
  setTimeout(revealCheck, 250);

  // safety net: never leave content hidden, even if metrics/animation are
  // unavailable (e.g. throttled background tab — set transition:none so the
  // final state paints instantly instead of waiting on a paused transition)
  setTimeout(function () {
    revealEls.forEach(function (el) { el.style.transition = 'none'; el.classList.add('in'); });
  }, 1500);

  /* ---- nav hairline on scroll ---- */
  var nav = document.getElementById('nav');
  var onScroll = function () {
    if (window.scrollY > 12) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- hero phone: tap to complete ---- */
  var screen = document.getElementById('heroScreen');
  var completeBtn = document.getElementById('completeBtn');
  var resetBtn = document.getElementById('resetBtn');
  if (completeBtn && screen) {
    completeBtn.addEventListener('click', function () { screen.classList.add('is-done'); });
  }
  if (resetBtn && screen) {
    resetBtn.addEventListener('click', function () { screen.classList.remove('is-done'); });
  }

  /* ---- live color system: mirrors the app's Akzentfarbe + Hintergrund picker ---- */
  var ACCENTS = [
    { name: 'Lachs',    hex: '#f0a184', rgb: '240, 161, 132' },
    { name: 'Mint',     hex: '#74cbb8', rgb: '116, 203, 184' },
    { name: 'Lavendel', hex: '#b3a4da', rgb: '179, 164, 218' },
    { name: 'Butter',   hex: '#dca92c', rgb: '220, 169, 44' },
    { name: 'Blush',    hex: '#e892ab', rgb: '232, 146, 171' },
    { name: 'Slate',    hex: '#7d9cb5', rgb: '125, 156, 181' }
  ];
  var BACKGROUNDS = [
    { name: 'Nacht',        cls: 'theme-nacht',  hex: '#0f1729' },
    { name: 'Dunkel Lachs', cls: 'theme-lachs',  hex: '#46322d' },
    { name: 'Petrol',       cls: 'theme-petrol', hex: '#1a4942' },
    { name: 'Hell',         cls: 'theme-hell',   hex: '#eef0f4' },
    { name: 'Creme',        cls: 'theme-creme',  hex: '#faf1ec' },
    { name: 'Mint',         cls: 'theme-mint',   hex: '#e8f0eb' }
  ];

  var root = document.documentElement;
  var accentRow = document.getElementById('accentRow');
  var bgRow = document.getElementById('bgRow');

  var CHECK = '<span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>';

  function lum(hex) {
    var h = hex.replace('#', '');
    var r = parseInt(h.substr(0, 2), 16) / 255;
    var g = parseInt(h.substr(2, 2), 16) / 255;
    var b = parseInt(h.substr(4, 2), 16) / 255;
    return 0.299 * r + 0.587 * g + 0.114 * b;
  }

  function buildSwatch(item, selected) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'swatch' + (selected ? ' sel' : '');
    btn.setAttribute('aria-label', item.name);
    btn.innerHTML = '<span class="dot" style="background:' + item.hex + ';color:' + item.hex + '">' + CHECK + '</span><span class="nm">' + item.name + '</span>';
    var ck = btn.querySelector('.ck');
    ck.style.color = lum(item.hex) > 0.62 ? '#33281f' : '#fff';
    return btn;
  }

  function setSelected(row, idx) {
    if (!row) return;
    Array.prototype.forEach.call(row.children, function (c, i) {
      c.classList.toggle('sel', i === idx);
    });
  }

  function applyAccent(t, idx) {
    root.style.setProperty('--accent', t.hex);
    root.style.setProperty('--accent-rgb', t.rgb);
    setSelected(accentRow, idx);
    window.__jetztAccent = t.hex;
  }

  function applyBackground(b, idx) {
    BACKGROUNDS.forEach(function (x) { root.classList.remove(x.cls); });
    root.classList.add(b.cls);
    setSelected(bgRow, idx);
  }

  if (accentRow) {
    ACCENTS.forEach(function (t, i) {
      var sw = buildSwatch(t, i === 0);
      sw.addEventListener('click', function () { applyAccent(t, i); });
      accentRow.appendChild(sw);
    });
  }
  if (bgRow) {
    BACKGROUNDS.forEach(function (b, i) {
      var sw = buildSwatch(b, i === 0);
      sw.addEventListener('click', function () { applyBackground(b, i); });
      bgRow.appendChild(sw);
    });
  }

  // default: Lachs accent on the Mint theme
  applyAccent(ACCENTS[0], 0);
  applyBackground(BACKGROUNDS[5], 5);

  // expose for the tweaks island
  window.__JETZT_THEMES = ACCENTS;
})();
