/* ============================================================
   JETZT. — DE/EN Lokalisierung (vanilla, dependency-free)
   Setzt innerHTML der [data-i18n]-Elemente, merkt sich die Wahl.
   Echte App-Screenshots bleiben deutsch (Foto-Captures).
   ============================================================ */
(function () {
  'use strict';

  var I18N = {
    de: {
      'nav.problem': "Problem",
      'nav.how': "So funktioniert's",
      'nav.ki': "KI",
      'nav.onboarding': "Erster Start",
      'nav.pricing': "Preis",
      'nav.cta': "Kostenlos starten",

      'hero.pill': "Für ADHS-Gehirne gebaut",
      'hero.h1': "Eine Aufgabe.<br><em>Genau jetzt.</em>",
      'hero.sub': "Die Todo-App, die versteht, wie dein ADHS-Gehirn wirklich funktioniert. JETZT. zeigt dir immer nur das, was jetzt dran ist.",
      'hero.cta': "Kostenlos starten",
      'store.small': "Bald im",
      'store.small2': "Bald bei",
      'hero.note1': "Kostenlos starten",
      'hero.note2': "Pro ab 1,99 €/Monat",
      'hero.note3': "7 Tage gratis testen",

      'problem.eyebrow': "Das Problem",
      'problem.title': "Andere Apps machen<br>es schlimmer.",
      'problem.lede': "To-do-Apps wurden für Gehirne gebaut, die einfach „anfangen\" können. Deins funktioniert anders — und das ist okay.",
      'pain1': "Du öffnest die App und siehst 47 Todos. Du machst die App wieder zu.",
      'pain1.tag': "→ Overwhelm, nicht Faulheit.",
      'pain2': "Streaks, die dich bestrafen, wenn du einen einzigen Tag aussetzt.",
      'pain2.tag': "→ Schuld als Feature verkauft.",
      'pain3': "Listen, die sich anfühlen wie Vorwürfe — länger, lauter, jeden Tag.",
      'pain3.tag': "→ Mehr Druck, weniger erledigt.",

      'solution.eyebrow': "Die Lösung",
      'solution.title': "JETZT. macht das anders.",
      'solution.lede': "Drei Entscheidungen, die alles verändern. Keine davon ist Zufall.",
      'step1.no': "Schritt eins",
      'step1.h': "Eine Aufgabe",
      'step1.p': "Nur die wichtigste wird angezeigt. Der Rest bleibt unsichtbar, bis er dran ist.",
      'step2.no': "Schritt zwei",
      'step2.h': "Swipe dich durch",
      'step2.p': "Rechts = erledigt. Links = später. So einfach triffst du jede Entscheidung.",
      'step3.no': "Schritt drei",
      'step3.h': "Kein Shame",
      'step3.p': "Keine Streaks, keine Prozente — nur was du geschafft hast. Ein Tag Pause kostet nichts.",

      'ki.eyebrow': "Neu · On-Device KI",
      'ki.title': "Einfach eintippen.<br>JETZT. versteht den Rest.",
      'ki.lede': "Schreib, was du vorhast — <em>„Morgen um 12 zum Zahnarzt\"</em> — und JETZT. erkennt Deadline und Energie automatisch. Kein Formular, kein Ausfüllen, kein Stress.",
      'ki.p1': "<strong>Deadline erkannt.</strong> Aus „morgen um 12\" wird automatisch ein Termin.",
      'ki.p2': "<strong>Energie geschätzt.</strong> JETZT. ahnt, wie viel Kraft eine Aufgabe braucht.",
      'ki.p3': "<strong>Ein Satz reicht.</strong> Tippen statt Felder durchklicken.",
      'ki.badge.title': "On-Device KI — powered by Apple Intelligence",
      'ki.badge.sub': "Alles passiert direkt auf deinem Gerät. Deine Daten verlassen es nie.",

      'features.eyebrow': "Alles drin",
      'features.title': "Wenig Funktionen.<br>Die richtigen.",
      'feat1.h': "One Screen",
      'feat1.p': "Immer nur eine Aufgabe sichtbar. Kein Scrollen, kein Suchen, kein Erschlagenwerden.",
      'feat2.h': "KI-Texterkennung",
      'feat2.p': "Einfach eintippen — Deadline und Energie erkennt JETZT. automatisch, direkt auf dem Gerät.",
      'feat3.h': "Morgen-Check",
      'feat3.p': "Wähle dein Energielevel, und dein Tag sortiert sich danach. Du entscheidest — nicht die Liste.",
      'feat4.h': "Tasks aufteilen",
      'feat4.p': "Zu groß? Halt die Aufgabe gedrückt — JETZT. zerlegt sie in kleine, machbare Schritte.",
      'feat5.h': "2-Minuten-Start",
      'feat5.p': "Jede Aufgabe beginnt mit einem winzigen Schritt. Anfangen ist das Schwerste — wir machen es leicht.",
      'feat6.h': "Work &amp; Privat",
      'feat6.p': "Zwei getrennte Modi, ein Gerät. Feierabend heißt wirklich Feierabend.",

      'ob.eyebrow': "Der erste Start",
      'ob.title': "In sechs Screens<br>bist du drin.",
      'ob.lede': "Kein langes Setup. JETZT. erklärt sich in unter einer Minute — und dann legst du los.",
      'ob1': "Eine Aufgabe. Nur eine.",
      'ob2': "Swipe dich durch den Tag.",
      'ob3': "Dein Energielevel. Deine Regeln.",
      'ob4': "Einfach eintippen.",
      'ob5': "Zu groß? Einfach aufteilen.",
      'ob6': "Bereit loszulegen?",

      'founder.quote': "Ich habe JETZT. für mich selbst gebaut.<br>Weil keine andere App so funktioniert hat<br><em>wie mein Kopf.</em>",
      'founder.cite': "Von jemandem entwickelt, der selbst ADHS hat.",

      'themes.eyebrow': "Farbsystem",
      'themes.title': "Mal dir den Tag,<br>wie du ihn brauchst.",
      'themes.lede': "6 Akzente, 6 Hintergründe — frei kombinierbar. Tippe dich durch und sieh live, wie sich die App anfühlt. Kein Theme schreit, keins urteilt. <span class=\"themes-free\">Lachs ist kostenlos — alle 6 gibt's mit Pro.</span>",
      'pick.accent': "Akzentfarbe",
      'pick.bg': "Hintergrund",
      'tp.privat': "Privat",
      'tp.work': "Work",
      'tp.title': "zum Zahnarzt",
      'tp.chip': "Morgen, 12:00",
      'tp.later': "← Später",
      'tp.done': "Erledigt →",
      'tp.2min': "Nur 2 Minuten?",
      'tp.startsub': "Einfach anfangen.",
      'tp.start': "Start",
      'tp.add': "Aufgabe hinzufügen",

      'science.eyebrow': "Die Grundlage",
      'science.title': "Nicht erfunden.<br>Erforscht.",
      'fact1': "Bei ADHS hinkt die Selbst­steuerung der altersüblichen Entwicklung hinterher — <b>Aufschieben ist neurologisch, kein Charakterfehler.</b>",
      'fact2': "Die größte Hürde ist <b>Task-Initiation</b> — der Start. Ein winziger erster Schritt umgeht die Blockade zuverlässiger als jede Motivation.",
      'fact3': "Ein einzelner sichtbarer Fokus senkt die kognitive Last spürbar. <b>Weniger Optionen heißt mehr Handlung.</b>",
      'science.quote': "ADHS ist kein Aufmerksamkeits­problem. Es ist ein <em>Performance-Problem</em> — das Wissen ist da, die Umsetzung im Moment ist die Hürde.",
      'quote.who': "sinngemäß nach Russell A. Barkley",
      'quote.role': "Klinischer Psychologe, ADHS-Forscher",

      'pricing.eyebrow': "Preis",
      'pricing.title': "Kostenlos starten.<br>Pro, wenn du willst.",
      'pricing.lede': "Die Basics bleiben für immer gratis. Pro schaltest du frei, wie es zu dir passt — im Abo oder einmalig. Kein Trick, kein Upselling.",
      'plan.free.name': "Kostenlos",
      'plan.free.per': "für immer",
      'plan.free.sub': "Alles, um sofort loszulegen.",
      'free1': "Unbegrenzte Tasks",
      'free2': "Work &amp; Privat Mode",
      'free3': "Lachs Theme",
      'free4': "Morgen-Check",
      'free5': "Manueller Import",
      'free6': "Täglich wiederkehrende Tasks",
      'plan.free.cta': "Kostenlos starten",
      'plan.pro.badge': "✦ Pro — alles freigeschaltet",
      'plan.pro.name': "Pro",
      'plan.pro.sub': "Wähl, was zu dir passt.",
      'opt.annual.badge': "Beliebt",
      'opt.annual.label': "Jahresabo",
      'opt.annual.per': "/Jahr",
      'opt.annual.sub': "= 1,50 €/Monat · 7 Tage gratis testen",
      'opt.monthly.label': "Monatsabo",
      'opt.monthly.per': "/Monat",
      'opt.monthly.sub': "Monatlich kündbar",
      'opt.onetime.label': "Einmalig",
      'opt.onetime.sub': "Einmal zahlen, für immer nutzen.",
      'pro1': "Alle 6 Pastel-Themes + Hintergründe",
      'pro2': "KI-Import — Liste reinkopieren, fertig",
      'pro3': "KI-Texterkennung beim Tippen",
      'pro4': "Task in Schritte aufteilen",
      'pro5': "Fokus-Timer (2, 5 oder 10 Minuten)",
      'pro6': "Shame-free Stats",
      'pro7': "End-of-Day Rückblick",
      'pro8': "Push Notifications",
      'pro9': "Wöchentlich + monatlich wiederkehrend",
      'plan.pro.cta': "7 Tage gratis testen",
      'faq.q': "Warum diese Preise?",
      'faq.a': "JETZT. läuft komplett auf deinem Gerät – keine Server-Kosten für deine Aufgaben. Die KI nutzt Apple Intelligence direkt auf deinem iPhone, nicht in der Cloud. Das Abo gibt dir die Möglichkeit, JETZT. günstig auszuprobieren bevor du dich entscheidest. Es gibt keinen Trick, kein Upselling, keine versteckten Kosten.",
      'price.tagline': "„Kein Trick. Kein Upselling. Keine versteckten Kosten.\"",

      'footer.tag': "Eine Aufgabe. Nur eine. Die To-do-App, die dein Gehirn nicht bestraft.",
      'footer.privacy': "Datenschutzerklärung",
      'footer.imprint': "Impressum",
      'footer.support': "Support",
      'footer.copy': "© 2026 JETZT. — Alle Rechte vorbehalten.",
      'footer.made': "Mit <span class=\"heart\">❤</span> gebaut von jemandem, der selbst ADHS hat."
    },

    en: {
      'nav.problem': "Problem",
      'nav.how': "How it works",
      'nav.ki': "AI",
      'nav.onboarding': "Getting started",
      'nav.pricing': "Pricing",
      'nav.cta': "Start for free",

      'hero.pill': "Built for ADHD brains",
      'hero.h1': "One task.<br><em>Right now.</em>",
      'hero.sub': "The to-do app that understands how your ADHD brain actually works. JETZT. only ever shows you what's up right now.",
      'hero.cta': "Start for free",
      'store.small': "Soon on the",
      'store.small2': "Soon on",
      'hero.note1': "Free to start",
      'hero.note2': "Pro from €1.99/month",
      'hero.note3': "7-day free trial",

      'problem.eyebrow': "The problem",
      'problem.title': "Other apps make<br>it worse.",
      'problem.lede': "To-do apps were built for brains that can just \"start.\" Yours works differently — and that's okay.",
      'pain1': "You open the app, see 47 to-dos, and close it again.",
      'pain1.tag': "→ Overwhelm, not laziness.",
      'pain2': "Streaks that punish you the moment you skip a single day.",
      'pain2.tag': "→ Guilt sold as a feature.",
      'pain3': "Lists that feel like accusations — longer, louder, every day.",
      'pain3.tag': "→ More pressure, less done.",

      'solution.eyebrow': "The solution",
      'solution.title': "JETZT. does it differently.",
      'solution.lede': "Three decisions that change everything. None of them by accident.",
      'step1.no': "Step one",
      'step1.h': "One task",
      'step1.p': "Only the most important one shows. The rest stays hidden until it's time.",
      'step2.no': "Step two",
      'step2.h': "Swipe your way through",
      'step2.p': "Right = done. Left = later. Every decision, that simple.",
      'step3.no': "Step three",
      'step3.h': "No shame",
      'step3.p': "No streaks, no percentages — just what you got done. A day off costs nothing.",

      'ki.eyebrow': "New · On-device AI",
      'ki.title': "Just type it.<br>JETZT. figures out the rest.",
      'ki.lede': "Write what you're up to — <em>\"Dentist tomorrow at 12\"</em> — and JETZT. detects deadline and energy automatically. No form, no filling in, no stress.",
      'ki.p1': "<strong>Deadline detected.</strong> \"tomorrow at 12\" turns into a real due date.",
      'ki.p2': "<strong>Energy estimated.</strong> JETZT. senses how much effort a task takes.",
      'ki.p3': "<strong>One sentence is enough.</strong> Type instead of clicking through fields.",
      'ki.badge.title': "On-device AI — powered by Apple Intelligence",
      'ki.badge.sub': "Everything happens right on your device. Your data never leaves it.",

      'features.eyebrow': "All in",
      'features.title': "Few features.<br>The right ones.",
      'feat1.h': "One Screen",
      'feat1.p': "Only ever one task visible. No scrolling, no searching, no overwhelm.",
      'feat2.h': "AI text recognition",
      'feat2.p': "Just type — JETZT. detects deadline and energy automatically, right on your device.",
      'feat3.h': "Morning check",
      'feat3.p': "Pick your energy level and your day sorts itself around it. You decide — not the list.",
      'feat4.h': "Split tasks",
      'feat4.p': "Too big? Press and hold a task — JETZT. breaks it into small, doable steps.",
      'feat5.h': "2-minute start",
      'feat5.p': "Every task starts with one tiny step. Starting is the hardest part — we make it easy.",
      'feat6.h': "Work &amp; Personal",
      'feat6.p': "Two separate modes, one device. Off the clock really means off the clock.",

      'ob.eyebrow': "Getting started",
      'ob.title': "Six screens<br>and you're in.",
      'ob.lede': "No long setup. JETZT. explains itself in under a minute — then you're off.",
      'ob1': "One task. Just one.",
      'ob2': "Swipe through your day.",
      'ob3': "Your energy. Your rules.",
      'ob4': "Just type it.",
      'ob5': "Too big? Just split it.",
      'ob6': "Ready to start?",

      'founder.quote': "I built JETZT. for myself.<br>Because no other app ever worked<br><em>the way my head does.</em>",
      'founder.cite': "Built by someone who has ADHD themselves.",

      'themes.eyebrow': "Color system",
      'themes.title': "Paint your day<br>the way you need it.",
      'themes.lede': "6 accents, 6 backgrounds — freely combinable. Tap through and see live how the app feels. No theme shouts, none judges. <span class=\"themes-free\">Salmon is free — all 6 come with Pro.</span>",
      'pick.accent': "Accent color",
      'pick.bg': "Background",
      'tp.privat': "Personal",
      'tp.work': "Work",
      'tp.title': "to the dentist",
      'tp.chip': "Tomorrow, 12:00",
      'tp.later': "← Later",
      'tp.done': "Done →",
      'tp.2min': "Just 2 minutes?",
      'tp.startsub': "Just start.",
      'tp.start': "Start",
      'tp.add': "Add task",

      'science.eyebrow': "The basis",
      'science.title': "Not invented.<br>Researched.",
      'fact1': "With ADHD, self-regulation lags behind the typical developmental age — <b>procrastination is neurological, not a character flaw.</b>",
      'fact2': "The biggest hurdle is <b>task initiation</b> — starting. One tiny first step bypasses the block more reliably than any motivation.",
      'fact3': "A single visible focus measurably lowers cognitive load. <b>Fewer options means more action.</b>",
      'science.quote': "ADHD isn't a problem of attention. It's a <em>performance problem</em> — the knowledge is there; acting on it in the moment is the hurdle.",
      'quote.who': "paraphrased from Russell A. Barkley",
      'quote.role': "Clinical psychologist, ADHD researcher",

      'pricing.eyebrow': "Pricing",
      'pricing.title': "Start free.<br>Go Pro if you want.",
      'pricing.lede': "The basics stay free forever. Unlock Pro the way that suits you — subscription or one-time. No trick, no upselling.",
      'plan.free.name': "Free",
      'plan.free.per': "forever",
      'plan.free.sub': "Everything to get going right away.",
      'free1': "Unlimited tasks",
      'free2': "Work &amp; Personal mode",
      'free3': "Salmon theme",
      'free4': "Morning check",
      'free5': "Manual import",
      'free6': "Daily recurring tasks",
      'plan.free.cta': "Start for free",
      'plan.pro.badge': "✦ Pro — everything unlocked",
      'plan.pro.name': "Pro",
      'plan.pro.sub': "Pick what suits you.",
      'opt.annual.badge': "Popular",
      'opt.annual.label': "Annual",
      'opt.annual.per': "/year",
      'opt.annual.sub': "= €1.50/month · 7-day free trial",
      'opt.monthly.label': "Monthly",
      'opt.monthly.per': "/month",
      'opt.monthly.sub': "Cancel anytime",
      'opt.onetime.label': "One-time",
      'opt.onetime.sub': "Pay once, use forever.",
      'pro1': "All 6 pastel themes + backgrounds",
      'pro2': "AI import — paste a list, done",
      'pro3': "AI text recognition while typing",
      'pro4': "Split tasks into steps",
      'pro5': "Focus timer (2, 5 or 10 minutes)",
      'pro6': "Shame-free stats",
      'pro7': "End-of-day recap",
      'pro8': "Push notifications",
      'pro9': "Weekly + monthly recurring",
      'plan.pro.cta': "Start 7-day free trial",
      'faq.q': "Why these prices?",
      'faq.a': "JETZT. runs entirely on your device – no server costs for your tasks. The AI uses Apple Intelligence right on your iPhone, not in the cloud. The subscription lets you try JETZT. cheaply before you commit. There's no trick, no upselling, no hidden costs.",
      'price.tagline': "\"No trick. No upselling. No hidden costs.\"",

      'footer.tag': "One task. Just one. The to-do app that doesn't punish your brain.",
      'footer.privacy': "Privacy Policy",
      'footer.imprint': "Imprint",
      'footer.support': "Support",
      'footer.copy': "© 2026 JETZT. — All rights reserved.",
      'footer.made': "Built with <span class=\"heart\">❤</span> by someone who has ADHD themselves."
    }
  };

  function apply(lang) {
    if (!I18N[lang]) lang = 'de';
    document.documentElement.lang = lang;
    var dict = I18N[lang];
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var k = nodes[i].getAttribute('data-i18n');
      if (dict[k] != null) nodes[i].innerHTML = dict[k];
    }
    var btns = document.querySelectorAll('#langSwitch button');
    for (var j = 0; j < btns.length; j++) {
      btns[j].classList.toggle('on', btns[j].getAttribute('data-lang') === lang);
      btns[j].setAttribute('aria-pressed', btns[j].getAttribute('data-lang') === lang);
    }
    try { localStorage.setItem('jetzt_lang', lang); } catch (e) {}
  }

  function init() {
    var saved = null;
    try { saved = localStorage.getItem('jetzt_lang'); } catch (e) {}
    var nav = (navigator.language || 'de').slice(0, 2).toLowerCase();
    var lang = saved || (nav === 'en' ? 'en' : 'de');
    apply(lang);
    var sw = document.getElementById('langSwitch');
    if (sw) sw.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('button[data-lang]') : null;
      if (b) apply(b.getAttribute('data-lang'));
    });
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
