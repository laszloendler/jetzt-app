/* ============================================================
   JETZT. — premium motion layer (vanilla, dependency-free)
   Progressive enhancement on top of app.js. Everything here
   is decorative and fully gated on prefers-reduced-motion.
   ============================================================ */
(function () {
  'use strict';

  var reduce = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lerp = function (a, b, t) { return a + (b - a) * t; };
  var clamp = function (v, lo, hi) { return Math.max(lo, Math.min(hi, v)); };
  var rAF = window.requestAnimationFrame.bind(window);

  /* ---------- scroll progress bar ---------- */
  var bar = document.getElementById('scrollProgress');
  if (bar) {
    var progTick = false;
    var updateProgress = function () {
      var h = document.documentElement;
      var max = (h.scrollHeight - h.clientHeight) || 1;
      var p = clamp(h.scrollTop / max, 0, 1);
      bar.style.transform = 'scaleX(' + p + ')';
      progTick = false;
    };
    window.addEventListener('scroll', function () {
      if (!progTick) { progTick = true; rAF(updateProgress); }
    }, { passive: true });
    updateProgress();
  }

  if (reduce) return; // everything below is purely decorative

  /* ---------- cursor-tracked ambient glow ---------- */
  var glow = document.getElementById('pointerGlow');
  if (glow && window.matchMedia('(pointer:fine)').matches) {
    var gx = window.innerWidth / 2, gy = window.innerHeight * 0.3;
    var cx = gx, cy = gy, shown = false;
    window.addEventListener('mousemove', function (e) {
      gx = e.clientX; gy = e.clientY;
      if (!shown) { glow.style.opacity = '1'; shown = true; }
    }, { passive: true });
    (function glowLoop() {
      cx = lerp(cx, gx, 0.12); cy = lerp(cy, gy, 0.12);
      glow.style.transform = 'translate(' + cx + 'px,' + cy + 'px)';
      rAF(glowLoop);
    })();
  }

  /* ---------- hero: pointer parallax (phone tilt + orbs) ---------- */
  var heroPhoneWrap = document.querySelector('.hero-phone-wrap');
  var orbA = document.querySelector('.hero-orb.a');
  var orbB = document.querySelector('.hero-orb.b');
  var hero = document.getElementById('top');
  if (hero && window.matchMedia('(pointer:fine)').matches) {
    var tx = 0, ty = 0, cxr = 0, cyr = 0;
    if (heroPhoneWrap) {
      heroPhoneWrap.style.perspective = '1200px';
      heroPhoneWrap.style.transition = 'transform 0.5s var(--ease)';
    }
    hero.addEventListener('mousemove', function (e) {
      var r = hero.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;   // -1..1
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    }, { passive: true });
    hero.addEventListener('mouseleave', function () { tx = 0; ty = 0; });
    (function heroLoop() {
      cxr = lerp(cxr, tx, 0.08); cyr = lerp(cyr, ty, 0.08);
      if (heroPhoneWrap) {
        heroPhoneWrap.style.transform =
          'rotateY(' + (cxr * 7).toFixed(2) + 'deg) rotateX(' +
          (-cyr * 6).toFixed(2) + 'deg)';
      }
      if (orbA) orbA.style.transform = 'translate(' + (cxr * 26) + 'px,' + (cyr * 20) + 'px)';
      if (orbB) orbB.style.transform = 'translate(' + (-cxr * 22) + 'px,' + (-cyr * 16) + 'px)';
      rAF(heroLoop);
    })();
  }

  /* ---------- scroll parallax: gallery phones only (orbs follow the mouse) ---------- */
  var paraEls = [];
  Array.prototype.forEach.call(
    document.querySelectorAll('.gallery-item .phone'),
    function (ph, i) { paraEls.push({ el: ph, speed: i % 2 ? 0.05 : -0.05 }); }
  );

  var paraTick = false;
  function paraUpdate() {
    var vh = window.innerHeight;
    for (var i = 0; i < paraEls.length; i++) {
      var p = paraEls[i];
      var r = p.el.getBoundingClientRect();
      var center = r.top + r.height / 2;
      var dy = (center - vh / 2) * p.speed;
      p.el.style.transform = 'translateY(' + dy.toFixed(1) + 'px)';
    }
    paraTick = false;
  }
  if (paraEls.length) {
    window.addEventListener('scroll', function () {
      if (!paraTick) { paraTick = true; rAF(paraUpdate); }
    }, { passive: true });
    paraUpdate();
  }

  /* ---------- magnetic CTAs ---------- */
  if (window.matchMedia('(pointer:fine)').matches) {
    Array.prototype.forEach.call(
      document.querySelectorAll('.btn-primary'),
      function (btn) {
        var mx = 0, my = 0, rx = 0, ry = 0, running = false;
        function loop() {
          rx = lerp(rx, mx, 0.2); ry = lerp(ry, my, 0.2);
          btn.style.transform = 'translate(' + rx.toFixed(2) + 'px,' +
            ry.toFixed(2) + 'px)';
          if (Math.abs(rx - mx) > 0.1 || Math.abs(ry - my) > 0.1) { rAF(loop); }
          else { if (!mx && !my) { btn.style.transform = ''; } running = false; }
        }
        btn.addEventListener('mousemove', function (e) {
          var r = btn.getBoundingClientRect();
          mx = ((e.clientX - r.left) / r.width - 0.5) * 14;
          my = ((e.clientY - r.top) / r.height - 0.5) * 10;
          if (!running) { running = true; rAF(loop); }
        });
        btn.addEventListener('mouseleave', function () {
          mx = 0; my = 0; if (!running) { running = true; rAF(loop); }
        });
      }
    );
  }

  /* ---------- 3D tilt cards ---------- */
  if (window.matchMedia('(pointer:fine)').matches) {
    Array.prototype.forEach.call(
      document.querySelectorAll('.pain-card, .feat-card'),
      function (card) {
        card.addEventListener('mousemove', function (e) {
          var r = card.getBoundingClientRect();
          var px = (e.clientX - r.left) / r.width - 0.5;
          var py = (e.clientY - r.top) / r.height - 0.5;
          card.classList.add('tilt');
          card.style.transform =
            'translateY(-5px) rotateY(' + (px * 7).toFixed(2) +
            'deg) rotateX(' + (-py * 7).toFixed(2) + 'deg)';
        });
        card.addEventListener('mouseleave', function () {
          card.classList.remove('tilt');
          card.style.transform = '';
        });
      }
    );
  }

  /* ---------- count-up numbers (on first view) ---------- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-countup'));
    var dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var pre = el.getAttribute('data-prefix') || '';
    var suf = el.getAttribute('data-suffix') || '';
    var dur = 1300, start = null;
    function fmt(v) {
      var s = dec ? v.toFixed(dec).replace('.', ',') : Math.round(v).toString();
      return pre + s + suf;
    }
    function frame(ts) {
      if (!start) start = ts;
      var t = clamp((ts - start) / dur, 0, 1);
      var eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      el.textContent = fmt(target * eased);
      if (t < 1) rAF(frame); else el.textContent = fmt(target);
    }
    rAF(frame);
  }

  var counters = Array.prototype.slice.call(document.querySelectorAll('[data-countup]'));
  if ('IntersectionObserver' in window && counters.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && !en.target.__counted) {
          en.target.__counted = true;
          animateCount(en.target);
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { io.observe(c); });
  } else {
    counters.forEach(animateCount);
  }
})();
