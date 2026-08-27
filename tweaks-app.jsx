<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JETZT. — Eine Aufgabe. Jetzt.</title>
<link rel="stylesheet" href="styles.css?v=16">
</head>
<body>

<div class="scroll-progress" id="scrollProgress"></div>
<div class="pointer-glow" id="pointerGlow"></div>

<!-- ============================ NAV ============================ -->
<nav class="nav" id="nav">
  <div class="wrap nav-inner">
    <a class="logo" href="#top">JETZT<span class="dot">.</span></a>
    <div class="nav-links">
      <a href="#morgen" data-i18n="nav.morgen">Morgen-Check</a>
      <a href="#liste" data-i18n="nav.liste">Erfassen</a>
      <a href="#statistik" data-i18n="nav.stats">Statistik</a>
      <a href="#pricing" data-i18n="nav.pricing">Preis</a>
    </div>
    <div class="nav-right">
      <div class="lang-switch" id="langSwitch" role="group" aria-label="Sprache / Language">
        <button type="button" data-lang="de" class="on">DE</button>
        <button type="button" data-lang="en">EN</button>
      </div>
      <a href="https://apps.apple.com/app/id6775079850" target="_blank" rel="noopener" class="btn btn-primary btn-sm" data-i18n="nav.cta">Kostenlos starten</a>
    </div>
  </div>
</nav>

<!-- ============================ HERO ============================ -->
<header class="hero" id="top" data-screen-label="Hero">
  <div class="hero-orb a"></div>
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <span class="hero-pill reveal"><span class="ping"></span> <span data-i18n="hero.pill">Für ADHS-Gehirne gebaut</span></span>
      <h1 class="reveal d1" data-i18n="hero.h1">Eine Aufgabe.<br><em>Jetzt.</em></h1>
      <p class="hero-sub reveal d2" data-i18n="hero.sub">Dein Tag – eine Karte nach der anderen. Die Todo-App, die versteht, wie dein ADHS-Gehirn wirklich funktioniert.</p>
      <div class="hero-cta reveal d2">
        <a href="https://apps.apple.com/app/id6775079850" target="_blank" rel="noopener" class="btn btn-primary" data-i18n="hero.cta">Kostenlos starten</a>
        <a href="https://apps.apple.com/app/id6775079850" target="_blank" rel="noopener" class="store-btn" aria-label="JETZT. im App Store">
          <svg class="store-ico" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 1.5c.1 1-.3 2-1 2.8-.7.8-1.8 1.4-2.8 1.3-.1-1 .4-2 1-2.7.7-.8 1.9-1.3 2.8-1.4zM20 17.2c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.3 3.3-4 3.4-1.5 0-1.9-1-3.9-1-2 0-2.4 1-3.9 1-1.7 0-3-1.7-3.9-3.1C-.3 16.9-.6 11 1.9 8c1-1.4 2.6-2.3 4.2-2.3 1.6 0 2.6 1 3.9 1 1.3 0 2-1 3.9-1 1.4 0 2.9.8 3.9 2.1-3.4 1.9-2.9 6.8.3 8.4z"/></svg>
          <span class="store-txt"><small data-i18n="store.small">Laden im</small><strong>App Store</strong></span>
        </a>
      </div>
      <div class="hero-note reveal d3">
        <span data-i18n="hero.note1">Kostenlos starten</span><span class="sep"></span>
        <span data-i18n="hero.note2">Pro ab 1,99 €/Monat</span><span class="sep"></span>
        <span data-i18n="hero.note3">7 Tage gratis testen</span>
      </div>
    </div>

    <div class="hero-phone-wrap reveal d2">
      <div class="phone shot float">
        <div class="phone-notch"></div>
        <div class="screen-shot"><img data-shot="01" src="shots/de/01-fokus.png" alt="JETZT. Fokus-Screen: eine einzelne Aufgabenkarte"></div>
      </div>
    </div>
  </div>
</header>

<!-- ============================ PROBLEM ============================ -->
<section class="problem" id="problem" data-screen-label="Problem">
  <div class="wrap">
    <div class="problem-head reveal">
      <span class="eyebrow" data-i18n="problem.eyebrow">Das Problem</span>
      <h2 class="section-title" data-i18n="problem.title">Andere Apps machen<br>es schlimmer.</h2>
      <p class="section-lede" data-i18n="problem.lede">To-do-Apps wurden für Gehirne gebaut, die einfach „anfangen" können. Deins funktioniert anders — und das ist okay.</p>
    </div>
    <ul class="pain-list">
      <li class="reveal d1"><span class="pain-num">01</span><p data-i18n="pain1">Du öffnest die App und siehst 47 Todos. Du machst die App wieder zu.</p><span class="pain-tag" data-i18n="pain1.tag">Overwhelm, nicht Faulheit.</span></li>
      <li class="reveal d2"><span class="pain-num">02</span><p data-i18n="pain2">Streaks, die dich bestrafen, wenn du einen einzigen Tag aussetzt.</p><span class="pain-tag" data-i18n="pain2.tag">Schuld als Feature verkauft.</span></li>
      <li class="reveal d3"><span class="pain-num">03</span><p data-i18n="pain3">Listen, die sich anfühlen wie Vorwürfe — länger, lauter, jeden Tag.</p><span class="pain-tag" data-i18n="pain3.tag">Mehr Druck, weniger erledigt.</span></li>
    </ul>
  </div>
</section>

<!-- ============================ MORGEN-CHECK ============================ -->
<section class="story" id="morgen" data-screen-label="Morgen-Check">
  <div class="wrap story-grid">
    <div class="story-copy reveal">
      <span class="eyebrow" data-i18n="morgen.eyebrow">Morgen-Check</span>
      <h2 class="section-title" data-i18n="morgen.title">Dein Tag.<br>Sortiert in 30 Sekunden.</h2>
      <p class="section-lede" data-i18n="morgen.lede">Drei kurze Fragen am Morgen: Energie, Meetings, Deadline-Druck. Daraus baut JETZT. deinen Tag — und zeigt dir nur, was heute wirklich geht.</p>
      <ul class="story-points">
        <li data-i18n="morgen.p1"><strong>Energie zuerst.</strong> Wenig, mittel oder viel — dein Tag richtet sich danach, nicht umgekehrt.</li>
        <li data-i18n="morgen.p2"><strong>Überspringen erlaubt.</strong> Kein Zwang, keine Erinnerungsschleife, kein schlechtes Gewissen.</li>
      </ul>
    </div>
    <div class="story-phone reveal d2">
      <div class="phone shot">
        <div class="phone-notch"></div>
        <div class="screen-shot"><img data-shot="04" src="shots/de/04-morgen-check.png" loading="lazy" alt="Morgen-Check: Energie, Meetings und Deadline-Druck wählen"></div>
      </div>
    </div>
  </div>
</section>

<!-- ============================ LISTE / ERFASSEN ============================ -->
<section class="story alt" id="liste" data-screen-label="Erfassen">
  <div class="wrap story-grid">
    <div class="story-phone reveal d2">
      <div class="phone shot">
        <div class="phone-notch"></div>
        <div class="screen-shot"><img data-shot="02" src="shots/de/02-liste.png" loading="lazy" alt="Aufgabenliste mit offenen und erledigten Aufgaben"></div>
      </div>
    </div>
    <div class="story-copy reveal">
      <span class="eyebrow" data-i18n="liste.eyebrow">Die Liste</span>
      <h2 class="section-title" data-i18n="liste.title">Alles drin.<br>Kopf frei.</h2>
      <p class="section-lede" data-i18n="liste.lede">Schreib einfach, was du vorhast — <em>„Morgen um 12 zum Zahnarzt"</em>. JETZT. erkennt Deadline und Energie automatisch. Die Liste hält alles; der Fokus-Screen zeigt später nur, was jetzt passt.</p>
      <ul class="story-points">
        <li data-i18n="liste.p1"><strong>Ein Satz reicht.</strong> Kein Formular, keine Felder zum Durchklicken.</li>
        <li data-i18n="liste.p2"><strong>Wiederkehrend.</strong> Täglich, wöchentlich oder monatlich — einmal angelegt, immer da.</li>
      </ul>
      <div class="ai-badge">
        <span class="ai-spark">✦</span>
        <div class="ai-text">
          <strong data-i18n="ki.badge.title">On-Device KI — powered by Apple Intelligence</strong>
          <span data-i18n="ki.badge.sub">Alles passiert direkt auf deinem Gerät. Deine Daten verlassen es nie.</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============================ STATISTIK ============================ -->
<section class="story" id="statistik" data-screen-label="Statistik">
  <div class="wrap story-grid">
    <div class="story-copy reveal">
      <span class="eyebrow" data-i18n="stats.eyebrow">Statistik</span>
      <h2 class="section-title" data-i18n="stats.title">Fortschritt.<br>Ohne Druck.</h2>
      <p class="section-lede" data-i18n="stats.lede">Wochenübersicht und Tagesabschluss — keine Streaks, keine Prozente, keine roten Zahlen. Nur das, was du geschafft hast. Ein Tag Pause kostet nichts.</p>
      <ul class="story-points">
        <li data-i18n="stats.p1"><strong>Shame-free.</strong> Die Statistik zählt Erfolge, nicht Versäumnisse.</li>
        <li data-i18n="stats.p2"><strong>Tag abschließen.</strong> Ein ruhiger Punkt am Abend statt einer offenen Liste.</li>
      </ul>
    </div>
    <div class="story-phone reveal d2">
      <div class="phone shot">
        <div class="phone-notch"></div>
        <div class="screen-shot"><img data-shot="05" src="shots/de/05-statistik.png" loading="lazy" alt="Statistik: Aufgaben dieser Woche und Tagesabschluss"></div>
      </div>
    </div>
  </div>
</section>

<!-- ============================ FEATURES (calm list) ============================ -->
<section class="features" id="features" data-screen-label="Features">
  <div class="wrap">
    <div class="features-head reveal">
      <span class="eyebrow" data-i18n="features.eyebrow">Alles drin</span>
      <h2 class="section-title" data-i18n="features.title">Wenig Funktionen.<br>Die richtigen.</h2>
    </div>
    <ul class="feat-list">
      <li class="reveal d1"><h3 data-i18n="feat1.h">Ein Fokus</h3><p data-i18n="feat1.p">Vier Tabs — Fokus, Liste, Statistik, Mehr. Im Fokus liegt immer nur eine Karte.</p></li>
      <li class="reveal d1"><h3 data-i18n="feat4.h">Energie-Planung</h3><p data-i18n="feat4.p">Jede Aufgabe hat ein Level: wenig, mittel, viel. Der Fokus zeigt nur, was zu deiner Tagesenergie passt.</p></li>
      <li class="reveal d2"><h3 data-i18n="feat5.h">Fokus-Timer</h3><p data-i18n="feat5.p">2, 5 oder 10 Minuten — mit Live-Aktivität auf dem Sperrbildschirm. „Nur 2 Minuten? Einfach anfangen."</p></li>
      <li class="reveal d2"><h3 data-i18n="feat6.h">Privat &amp; Arbeit</h3><p data-i18n="feat6.p">Getrennte Aufgaben, getrennte Themes, ein Gerät. Feierabend heißt wirklich Feierabend.</p></li>
      <li class="reveal d3"><h3 data-i18n="feat2.h">KI-Import</h3><p data-i18n="feat2.p">Liste reinkopieren, fertig. JETZT. macht daraus einzelne Aufgaben mit Deadline und Energie.</p></li>
      <li class="reveal d3"><h3 data-i18n="feat3.h">Aufteilen</h3><p data-i18n="feat3.p">Zu groß? JETZT. zerlegt eine Aufgabe in kleine Schritte, die sich anfangen lassen.</p></li>
    </ul>
  </div>
</section>

<!-- ============================ FOUNDER NOTE ============================ -->
<section class="founder" data-screen-label="Gründer">
  <div class="wrap">
    <figure class="founder-card reveal">
      <blockquote data-i18n="founder.quote">Ich habe JETZT. für mich selbst gebaut.<br>Weil keine andere App so funktioniert hat<br><em>wie mein Kopf.</em></blockquote>
      <figcaption>
        <span class="heart">❤</span>
        <span data-i18n="founder.cite">Von jemandem entwickelt, der selbst ADHS hat.</span>
      </figcaption>
    </figure>
  </div>
</section>

<!-- ============================ THEMES ============================ -->
<section class="themes-band" id="themes" data-screen-label="Themes">
  <div class="wrap themes-inner">
    <div class="reveal">
      <span class="eyebrow" data-i18n="themes.eyebrow">Farbsystem</span>
      <h2 class="section-title" data-i18n="themes.title">Mal dir den Tag,<br>wie du ihn brauchst.</h2>
      <p class="section-lede" data-i18n="themes.lede">6 Akzente, 6 Hintergründe — frei kombinierbar. Tippe dich durch und sieh live, wie sich die App anfühlt. Kein Theme schreit, keins urteilt. <span class="themes-free">Lachs ist kostenlos — alle 6 gibt's mit Pro.</span></p>
      <div class="picker">
        <div class="pick-group">
          <span class="pick-label" data-i18n="pick.accent">Akzentfarbe</span>
          <div class="swatch-row" id="accentRow"></div>
        </div>
        <div class="pick-group">
          <span class="pick-label" data-i18n="pick.bg">Hintergrund</span>
          <div class="swatch-row" id="bgRow"></div>
        </div>
      </div>
    </div>
    <div class="themes-phone reveal d2">
      <div class="phone">
        <div class="phone-notch"></div>
        <div class="screen">
          <div class="screen-status"><span>9:41</span><span class="dots"><span class="bar"></span></span></div>
          <div class="app-head">
            <span class="app-logo">JETZT<i>.</i></span>
            <span class="flame">🔥</span>
          </div>
          <div class="mode-seg"><span class="on" data-i18n="tp.privat">Privat</span><span data-i18n="tp.work">Arbeit</span></div>

          <div class="app-stage">
            <div class="task-card home">
              <div class="tc-top">
                <span class="tc-brand">JETZT</span>
                <span class="tc-dots"><i></i><i></i><i></i></span>
              </div>
              <div class="task-title" data-i18n="tp.title">Steuererklärung abschicken</div>
              <span class="tc-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"></circle><path d="M12 7.5v5l3 2" stroke-linecap="round" stroke-linejoin="round"></path></svg> <span data-i18n="tp.chip">Fr. 21. Aug., 17:00</span></span>
            </div>
          </div>

          <div class="app-bottom">
            <div class="swipe-row"><span data-i18n="tp.later">← Später</span><span data-i18n="tp.done">Erledigt →</span></div>
            <div class="start-bar"><span class="ph"><b data-i18n="tp.2min">Nur 2 Minuten?</b><span data-i18n="tp.startsub">Einfach anfangen.</span></span><span class="start"><span data-i18n="tp.start">Start</span> <svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"></path></svg></span></div>
            <div class="tabbar-row">
              <div class="tabbar">
                <span class="tab on">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="3 3"><circle cx="12" cy="12" r="8.5"></circle></svg>
                  <b data-i18n="tp.tab1">JETZT.</b>
                </span>
                <span class="tab">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="9" y1="6" x2="20" y2="6"></line><line x1="9" y1="12" x2="20" y2="12"></line><line x1="9" y1="18" x2="20" y2="18"></line><circle cx="4.6" cy="6" r="1.3" fill="currentColor" stroke="none"></circle><circle cx="4.6" cy="12" r="1.3" fill="currentColor" stroke="none"></circle><circle cx="4.6" cy="18" r="1.3" fill="currentColor" stroke="none"></circle></svg>
                  <b data-i18n="tp.tab2">Liste</b>
                </span>
                <span class="tab">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="6" y1="20" x2="6" y2="13"></line><line x1="12" y1="20" x2="12" y2="5"></line><line x1="18" y1="20" x2="18" y2="9"></line></svg>
                  <b data-i18n="tp.tab3">Statistik</b>
                </span>
                <span class="tab">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="16" x2="20" y2="16"></line><circle cx="10" cy="9" r="2.6" fill="var(--app-card)" stroke="currentColor" stroke-width="2"></circle><circle cx="15" cy="16" r="2.6" fill="var(--app-card)" stroke="currentColor" stroke-width="2"></circle></svg>
                  <b data-i18n="tp.tab4">Mehr</b>
                </span>
              </div>
              <span class="fab" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><line x1="12" y1="6" x2="12" y2="18"></line><line x1="6" y1="12" x2="18" y2="12"></line></svg></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============================ SCIENCE ============================ -->
<section class="science" id="science" data-screen-label="Wissenschaft">
  <div class="wrap science-grid">
    <div class="reveal">
      <span class="eyebrow" data-i18n="science.eyebrow">Die Grundlage</span>
      <h2 class="section-title" data-i18n="science.title">Nicht erfunden.<br>Erforscht.</h2>
      <div class="science-facts">
        <div class="fact">
          <div class="stat" data-countup="30" data-prefix="~" data-suffix="%">~30%</div>
          <p class="ftxt" data-i18n="fact1">Bei ADHS hinkt die Selbst­steuerung der altersüblichen Entwicklung hinterher — <b>Aufschieben ist neurologisch, kein Charakterfehler.</b></p>
        </div>
        <div class="fact">
          <div class="stat" data-countup="2" data-suffix=" Min">2 Min</div>
          <p class="ftxt" data-i18n="fact2">Die größte Hürde ist <b>Task-Initiation</b> — der Start. Ein winziger erster Schritt umgeht die Blockade zuverlässiger als jede Motivation.</p>
        </div>
        <div class="fact">
          <div class="stat" data-countup="1" data-suffix="×">1×</div>
          <p class="ftxt" data-i18n="fact3">Ein einzelner sichtbarer Fokus senkt die kognitive Last spürbar. <b>Weniger Optionen heißt mehr Handlung.</b></p>
        </div>
      </div>
    </div>
    <figure class="quote-card reveal d2">
      <span class="mark">„</span>
      <blockquote data-i18n="science.quote">ADHS ist kein Aufmerksamkeits­problem. Es ist ein <em>Performance-Problem</em> — das Wissen ist da, die Umsetzung im Moment ist die Hürde.</blockquote>
      <figcaption class="quote-cite">
        <span class="av">RB</span>
        <div>
          <div class="who" data-i18n="quote.who">sinngemäß nach Russell A. Barkley</div>
          <div class="role" data-i18n="quote.role">Klinischer Psychologe, ADHS-Forscher</div>
        </div>
      </figcaption>
    </figure>
  </div>
</section>

<!-- ============================ PRICING ============================ -->
<section class="pricing" id="pricing" data-screen-label="Preis">
  <div class="wrap">
    <div class="pricing-head reveal">
      <span class="eyebrow" data-i18n="pricing.eyebrow">Preis</span>
      <h2 class="section-title" data-i18n="pricing.title">Kostenlos starten.<br>Pro, wenn du willst.</h2>
      <p class="section-lede" style="text-align:center;" data-i18n="pricing.lede">Die Basics bleiben für immer gratis. Pro schaltest du frei, wie es zu dir passt — im Abo oder einmalig. Kein Trick, kein Upselling.</p>
    </div>

    <div class="compare reveal d1">
      <div class="cmp-head">
        <div class="cmp-h feature"></div>
        <div class="cmp-h">
          <span class="cmp-name" data-i18n="plan.free.name">Kostenlos</span>
          <span class="cmp-price">€0</span>
          <span class="cmp-note" data-i18n="plan.free.per">für immer</span>
        </div>
        <div class="cmp-h pro">
          <span class="cmp-name" data-i18n="plan.pro.name">Pro</span>
          <div class="pay-seg">
            <input type="radio" name="pay" id="payY" checked><label for="payY" data-i18n="pay.seg.y">Jährlich</label>
            <input type="radio" name="pay" id="payM"><label for="payM" data-i18n="pay.seg.m">Monatlich</label>
            <input type="radio" name="pay" id="payO"><label for="payO" data-i18n="pay.seg.o">Einmalig</label>
          </div>
          <div class="cmp-prices">
            <span class="cmp-price y"><b data-i18n="pay.y.price">14,99 €/Jahr</b><small data-i18n="pay.y.sub">= 1,25 €/Monat</small></span>
            <span class="cmp-price m"><b data-i18n="pay.m.price">1,99 €/Monat</b><small data-i18n="pay.m.sub">Monatlich kündbar</small></span>
            <span class="cmp-price o"><b data-i18n="pay.o.price">39,99 €</b><small data-i18n="pay.o.sub">Einmal zahlen, für immer nutzen.</small></span>
          </div>
          <span class="cmp-note trial" data-i18n="pay.foot">Jederzeit kündbar · Erinnerung an Tag 5</span>
        </div>
      </div>

      <div class="cmp-rows">
        <div class="cmp-row"><span class="cmp-f" data-i18n="cmp.tasks">Unbegrenzte Aufgaben</span><span class="cmp-c free"><span class="cmp-tag" data-i18n="cmp.tag.free">Kostenlos</span><span class="ck">✓</span></span><span class="cmp-c pro"><span class="cmp-tag" data-i18n="cmp.tag.pro">Pro</span><span class="ck">✓</span></span></div>
        <div class="cmp-row"><span class="cmp-f" data-i18n="cmp.modes">Privat- &amp; Arbeit-Modus</span><span class="cmp-c free"><span class="cmp-tag" data-i18n="cmp.tag.free">Kostenlos</span><span class="ck">✓</span></span><span class="cmp-c pro"><span class="cmp-tag" data-i18n="cmp.tag.pro">Pro</span><span class="ck">✓</span></span></div>
        <div class="cmp-row"><span class="cmp-f" data-i18n="cmp.morning">Morgen-Check</span><span class="cmp-c free"><span class="cmp-tag" data-i18n="cmp.tag.free">Kostenlos</span><span class="ck">✓</span></span><span class="cmp-c pro"><span class="cmp-tag" data-i18n="cmp.tag.pro">Pro</span><span class="ck">✓</span></span></div>
        <div class="cmp-row"><span class="cmp-f" data-i18n="cmp.focus">Fokus-Screen mit einer Karte</span><span class="cmp-c free"><span class="cmp-tag" data-i18n="cmp.tag.free">Kostenlos</span><span class="ck">✓</span></span><span class="cmp-c pro"><span class="cmp-tag" data-i18n="cmp.tag.pro">Pro</span><span class="ck">✓</span></span></div>
        <div class="cmp-row"><span class="cmp-f" data-i18n="cmp.themes">Themes</span><span class="cmp-c free"><span class="cmp-tag" data-i18n="cmp.tag.free">Kostenlos</span><span class="val" data-i18n="cmp.themes.free">Lachs</span></span><span class="cmp-c pro"><span class="cmp-tag" data-i18n="cmp.tag.pro">Pro</span><span class="val" data-i18n="cmp.themes.pro">Alle 6 + Hintergründe</span></span></div>
        <div class="cmp-row"><span class="cmp-f" data-i18n="cmp.recurring">Wiederkehrende Aufgaben</span><span class="cmp-c free"><span class="cmp-tag" data-i18n="cmp.tag.free">Kostenlos</span><span class="val" data-i18n="cmp.recurring.free">Täglich</span></span><span class="cmp-c pro"><span class="cmp-tag" data-i18n="cmp.tag.pro">Pro</span><span class="val" data-i18n="cmp.recurring.pro">Täglich, wöchentlich, monatlich</span></span></div>
        <div class="cmp-row"><span class="cmp-f" data-i18n="cmp.import">Import</span><span class="cmp-c free"><span class="cmp-tag" data-i18n="cmp.tag.free">Kostenlos</span><span class="val" data-i18n="cmp.import.free">Manuell</span></span><span class="cmp-c pro"><span class="cmp-tag" data-i18n="cmp.tag.pro">Pro</span><span class="val" data-i18n="cmp.import.pro">KI-Import: Liste einfügen</span></span></div>
        <div class="cmp-row"><span class="cmp-f" data-i18n="cmp.ai">KI-Texterkennung beim Tippen</span><span class="cmp-c free"><span class="cmp-tag" data-i18n="cmp.tag.free">Kostenlos</span><span class="dash">—</span></span><span class="cmp-c pro"><span class="cmp-tag" data-i18n="cmp.tag.pro">Pro</span><span class="ck">✓</span></span></div>
        <div class="cmp-row"><span class="cmp-f" data-i18n="cmp.split">Aufgaben in Schritte aufteilen</span><span class="cmp-c free"><span class="cmp-tag" data-i18n="cmp.tag.free">Kostenlos</span><span class="dash">—</span></span><span class="cmp-c pro"><span class="cmp-tag" data-i18n="cmp.tag.pro">Pro</span><span class="ck">✓</span></span></div>
        <div class="cmp-row"><span class="cmp-f" data-i18n="cmp.timer">Fokus-Timer</span><span class="cmp-c free"><span class="cmp-tag" data-i18n="cmp.tag.free">Kostenlos</span><span class="dash">—</span></span><span class="cmp-c pro"><span class="cmp-tag" data-i18n="cmp.tag.pro">Pro</span><span class="val" data-i18n="cmp.timer.pro">2, 5 oder 10 Minuten</span></span></div>
        <div class="cmp-row"><span class="cmp-f" data-i18n="cmp.stats">Shame-free Stats</span><span class="cmp-c free"><span class="cmp-tag" data-i18n="cmp.tag.free">Kostenlos</span><span class="dash">—</span></span><span class="cmp-c pro"><span class="cmp-tag" data-i18n="cmp.tag.pro">Pro</span><span class="ck">✓</span></span></div>
        <div class="cmp-row"><span class="cmp-f" data-i18n="cmp.recap">End-of-Day Rückblick</span><span class="cmp-c free"><span class="cmp-tag" data-i18n="cmp.tag.free">Kostenlos</span><span class="dash">—</span></span><span class="cmp-c pro"><span class="cmp-tag" data-i18n="cmp.tag.pro">Pro</span><span class="ck">✓</span></span></div>
        <div class="cmp-row"><span class="cmp-f" data-i18n="cmp.push">Push Notifications</span><span class="cmp-c free"><span class="cmp-tag" data-i18n="cmp.tag.free">Kostenlos</span><span class="dash">—</span></span><span class="cmp-c pro"><span class="cmp-tag" data-i18n="cmp.tag.pro">Pro</span><span class="ck">✓</span></span></div>
      </div>

      <div class="cmp-ctas">
        <div class="cmp-cta-slot"></div>
        <a href="https://apps.apple.com/app/id6775079850" target="_blank" rel="noopener" class="btn btn-ghost" data-i18n="plan.free.cta">Kostenlos starten</a>
        <a href="https://apps.apple.com/app/id6775079850" target="_blank" rel="noopener" class="btn btn-primary" data-i18n="pay.cta">7 Tage kostenlos testen</a>
      </div>
    </div>

    <div class="why-block reveal d2">
      <h3 data-i18n="faq.q">Warum diese Preise?</h3>
      <p data-i18n="faq.a">JETZT. läuft komplett auf deinem Gerät – keine Server-Kosten für deine Aufgaben. Die KI nutzt Apple Intelligence direkt auf deinem iPhone, nicht in der Cloud. Das Abo gibt dir die Möglichkeit, JETZT. günstig auszuprobieren bevor du dich entscheidest. Es gibt keinen Trick, kein Upselling, keine versteckten Kosten.</p>
      <p class="why-tag" data-i18n="price.tagline">„Kein Trick. Kein Upselling. Keine versteckten Kosten."</p>
    </div>
  </div>
</section>

<!-- ============================ FOOTER ============================ -->
<footer class="footer" data-screen-label="Footer">
  <div class="wrap">
    <div class="footer-top">
      <div>
        <a class="logo" href="#top">JETZT<span class="dot">.</span></a>
        <p class="footer-tag" data-i18n="footer.tag">Eine Aufgabe. Jetzt. Die To-do-App, die dein Gehirn nicht bestraft.</p>
        <div class="badges">
          <a class="badge" href="https://apps.apple.com/app/id6775079850" target="_blank" rel="noopener">
            <svg class="bi" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 1.5c.1 1-.3 2-1 2.8-.7.8-1.8 1.4-2.8 1.3-.1-1 .4-2 1-2.7.7-.8 1.9-1.3 2.8-1.4zM20 17.2c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.3 3.3-4 3.4-1.5 0-1.9-1-3.9-1-2 0-2.4 1-3.9 1-1.7 0-3-1.7-3.9-3.1C-.3 16.9-.6 11 1.9 8c1-1.4 2.6-2.3 4.2-2.3 1.6 0 2.6 1 3.9 1 1.3 0 2-1 3.9-1 1.4 0 2.9.8 3.9 2.1-3.4 1.9-2.9 6.8.3 8.4z"/></svg>
            <div class="bt"><small data-i18n="store.small">Laden im</small><strong>App Store</strong></div>
          </a>
        </div>
      </div>
      <nav class="footer-links">
        <a href="https://laszloendler.github.io/jetzt-app-legal/JETZT-Datenschutzerklaerung.html" target="_blank" rel="noopener" data-i18n="footer.privacy">Datenschutzerklärung</a>
        <a href="https://laszloendler.github.io/jetzt-app-legal/JETZT-Impressum.html" target="_blank" rel="noopener" data-i18n="footer.imprint">Impressum</a>
      </nav>
    </div>
    <div class="footer-base">
      <span data-i18n="footer.copy">© 2026 JETZT. — Alle Rechte vorbehalten.</span>
      <span data-i18n="footer.made">Mit <span class="heart">❤</span> gebaut von jemandem, der selbst ADHS hat.</span>
    </div>
  </div>
</footer>

<!-- ============================ SCRIPTS ============================ -->
<script src="app.js?v=16"></script>
<script src="motion.js?v=16"></script>
<script src="i18n.js?v=16"></script>

<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>
<script type="text/babel" src="tweaks-panel.jsx"></script>
<div id="tweaks-root"></div>
<script type="text/babel" src="tweaks-app.jsx"></script>

</body>
</html>
