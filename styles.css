/* ============================================================
   JETZT. — DE/EN Lokalisierung (vanilla, dependency-free)
   Tauscht [data-i18n]-Texte und [data-shot]-Screenshots.
   ============================================================ */
(function () {
  'use strict';

  /* language-specific app screenshots */
  var SHOTS = {
    de: {
      '01': ['shots/de/01-fokus.png',        'JETZT. Fokus-Screen: eine einzelne Aufgabenkarte'],
      '02': ['shots/de/02-liste.png',        'Aufgabenliste mit offenen und erledigten Aufgaben'],
      '03': ['shots/de/03-paywall.png',      'Testphase in der App: Ablauf und Zahlungsart'],
      '04': ['shots/de/04-morgen-check.png', 'Morgen-Check: Energie, Meetings und Deadline-Druck wählen'],
      '05': ['shots/de/05-statistik.png',    'Statistik: Aufgaben dieser Woche und Tagesabschluss']
    },
    en: {
      '01': ['shots/en/01-focus.png',        'JETZT. focus screen showing a single task card'],
      '02': ['shots/en/02-list.png',         'Task list with open and completed tasks'],
      '03': ['shots/en/03-paywall.png',      'In-app trial screen: timeline and payment options'],
      '04': ['shots/en/04-morning-check.png','Morning check: pick energy, meetings and deadline pressure'],
      '05': ['shots/en/05-stats.png',        'Stats screen: tasks completed this week and end of day']
    }
  };

  var I18N = {
    de: {
      'nav.morgen': "Morgen-Check",
      'nav.liste': "Erfassen",
      'nav.stats': "Statistik",
      'nav.pricing': "Preis",
      'nav.cta': "Kostenlos starten",

      'hero.pill': "Für ADHS-Gehirne gebaut",
      'hero.h1': "Eine Aufgabe.<br><em>Jetzt.</em>",
      'hero.sub': "Dein Tag – eine Karte nach der anderen. Die Todo-App, die versteht, wie dein ADHS-Gehirn wirklich funktioniert.",
      'hero.cta': "Kostenlos starten",
      'store.small': "Laden im",
      'hero.note1': "Kostenlos starten",
      'hero.note2': "Pro ab 1,99 €/Monat",
      'hero.note3': "7 Tage gratis testen",

      'problem.eyebrow': "Das Problem",
      'problem.title': "Andere Apps machen<br>es schlimmer.",
      'problem.lede': "To-do-Apps wurden für Gehirne gebaut, die einfach „anfangen\" können. Deins funktioniert anders — und das ist okay.",
      'pain1': "Du öffnest die App und siehst 47 Todos. Du machst die App wieder zu.",
      'pain1.tag': "Overwhelm, nicht Faulheit.",
      'pain2': "Streaks, die dich bestrafen, wenn du einen einzigen Tag aussetzt.",
      'pain2.tag': "Schuld als Feature verkauft.",
      'pain3': "Listen, die sich anfühlen wie Vorwürfe — länger, lauter, jeden Tag.",
      'pain3.tag': "Mehr Druck, weniger erledigt.",

      'morgen.eyebrow': "Morgen-Check",
      'morgen.title': "Dein Tag.<br>Sortiert in 30 Sekunden.",
      'morgen.lede': "Drei kurze Fragen am Morgen: Energie, Meetings, Deadline-Druck. Daraus baut JETZT. deinen Tag — und zeigt dir nur, was heute wirklich geht.",
      'morgen.p1': "<strong>Energie zuerst.</strong> Wenig, mittel oder viel — dein Tag richtet sich danach, nicht umgekehrt.",
      'morgen.p2': "<strong>Überspringen erlaubt.</strong> Kein Zwang, keine Erinnerungsschleife, kein schlechtes Gewissen.",

      'liste.eyebrow': "Die Liste",
      'liste.title': "Alles drin.<br>Kopf frei.",
      'liste.lede': "Schreib einfach, was du vorhast — <em>„Morgen um 12 zum Zahnarzt\"</em>. JETZT. erkennt Deadline und Energie automatisch. Die Liste hält alles; der Fokus-Screen zeigt später nur, was jetzt passt.",
      'liste.p1': "<strong>Ein Satz reicht.</strong> Kein Formular, keine Felder zum Durchklicken.",
      'liste.p2': "<strong>Wiederkehrend.</strong> Täglich, wöchentlich oder monatlich — einmal angelegt, immer da.",
      'ki.badge.title': "On-Device KI — powered by Apple Intelligence",
      'ki.badge.sub': "Alles passiert direkt auf deinem Gerät. Deine Daten verlassen es nie.",

      'stats.eyebrow': "Statistik",
      'stats.title': "Fortschritt.<br>Ohne Druck.",
      'stats.lede': "Wochenübersicht und Tagesabschluss — keine Streaks, keine Prozente, keine roten Zahlen. Nur das, was du geschafft hast. Ein Tag Pause kostet nichts.",
      'stats.p1': "<strong>Shame-free.</strong> Die Statistik zählt Erfolge, nicht Versäumnisse.",
      'stats.p2': "<strong>Tag abschließen.</strong> Ein ruhiger Punkt am Abend statt einer offenen Liste.",

      'features.eyebrow': "Alles drin",
      'features.title': "Wenig Funktionen.<br>Die richtigen.",
      'feat1.h': "Ein Fokus",
      'feat1.p': "Vier Tabs — Fokus, Liste, Statistik, Mehr. Im Fokus liegt immer nur eine Karte.",
      'feat2.h': "KI-Import",
      'feat2.p': "Liste reinkopieren, fertig. JETZT. macht daraus einzelne Aufgaben mit Deadline und Energie.",
      'feat3.h': "Aufteilen",
      'feat3.p': "Zu groß? JETZT. zerlegt eine Aufgabe in kleine Schritte, die sich anfangen lassen.",
      'feat4.h': "Energie-Planung",
      'feat4.p': "Jede Aufgabe hat ein Level: wenig, mittel, viel. Der Fokus zeigt nur, was zu deiner Tagesenergie passt.",
      'feat5.h': "Fokus-Timer",
      'feat5.p': "2, 5 oder 10 Minuten — mit Live-Aktivität auf dem Sperrbildschirm. „Nur 2 Minuten? Einfach anfangen.\"",
      'feat6.h': "Privat &amp; Arbeit",
      'feat6.p': "Getrennte Aufgaben, getrennte Themes, ein Gerät. Feierabend heißt wirklich Feierabend.",

      'founder.quote': "Ich habe JETZT. für mich selbst gebaut.<br>Weil keine andere App so funktioniert hat<br><em>wie mein Kopf.</em>",
      'founder.cite': "Von jemandem entwickelt, der selbst ADHS hat.",

      'themes.eyebrow': "Farbsystem",
      'themes.title': "Mal dir den Tag,<br>wie du ihn brauchst.",
      'themes.lede': "6 Akzente, 6 Hintergründe — frei kombinierbar. Tippe dich durch und sieh live, wie sich die App anfühlt. Kein Theme schreit, keins urteilt. <span class=\"themes-free\">Lachs ist kostenlos — alle 6 gibt's mit Pro.</span>",
      'pick.accent': "Akzentfarbe",
      'pick.bg': "Hintergrund",
      'tp.privat': "Privat",
      'tp.work': "Arbeit",
      'tp.title': "Steuererklärung abschicken",
      'tp.chip': "Fr. 21. Aug., 17:00",
      'tp.later': "← Später",
      'tp.done': "Erledigt →",
      'tp.2min': "Nur 2 Minuten?",
      'tp.startsub': "Einfach anfangen.",
      'tp.start': "Start",
      'tp.add': "Aufgabe hinzufügen",

      'tp.tab1': "JETZT.",
      'tp.tab2': "Liste",
      'tp.tab3': "Statistik",
      'tp.tab4': "Mehr",
      'pay.badge': "✦ 7 Tage kostenlos testen",
      'pay.title': "So funktioniert deine kostenlose Testphase",
      'pay.sub': "Erst ausprobieren, dann entscheiden. In dieser Reihenfolge.",
      'pay.t1': "6 Themes",
      'pay.t2': "Fokus-Timer",
      'pay.t3': "Shame-free Stats",
      'pay.d0.h': "Heute",
      'pay.d0.p': "Alles freigeschaltet – volle App, keine Limits.",
      'pay.d5.h': "Tag 5",
      'pay.d5.p': "Wir erinnern dich per Push, dass die Testphase endet.",
      'pay.d7.h': "Tag 7",
      'pay.d7.p': "Erste Abbuchung von 14,99 €. Vorher jederzeit kündbar.",
      'pay.zahlungsart': "Zahlungsart",
      'pay.seg.y': "Jährlich",
      'pay.seg.m': "Monatlich",
      'pay.seg.o': "Einmalig",
      'pay.y.price': "14,99 €/Jahr",
      'pay.y.sub': "= 1,25 €/Monat",
      'pay.y.badge': "−37 %",
      'pay.m.price': "1,99 €/Monat",
      'pay.m.sub': "Monatlich kündbar",
      'pay.o.price': "39,99 €",
      'pay.o.sub': "Einmal zahlen, für immer nutzen.",
      'pay.foot': "Jederzeit kündbar · Erinnerung an Tag 5",
      'cmp.tag.free': "Kostenlos",
      'cmp.tag.pro': "Pro",
      'cmp.tasks': "Unbegrenzte Aufgaben",
      'cmp.modes': "Privat- &amp; Arbeit-Modus",
      'cmp.morning': "Morgen-Check",
      'cmp.focus': "Fokus-Screen mit einer Karte",
      'cmp.themes': "Themes",
      'cmp.themes.free': "Lachs",
      'cmp.themes.pro': "Alle 6 + Hintergründe",
      'cmp.recurring': "Wiederkehrende Aufgaben",
      'cmp.recurring.free': "Täglich",
      'cmp.recurring.pro': "Täglich, wöchentlich, monatlich",
      'cmp.import': "Import",
      'cmp.import.free': "Manuell",
      'cmp.import.pro': "KI-Import: Liste einfügen",
      'cmp.ai': "KI-Texterkennung beim Tippen",
      'cmp.split': "Aufgaben in Schritte aufteilen",
      'cmp.timer': "Fokus-Timer",
      'cmp.timer.pro': "2, 5 oder 10 Minuten",
      'cmp.stats': "Shame-free Stats",
      'cmp.recap': "End-of-Day Rückblick",
      'cmp.push': "Push Notifications",
      'pay.cta': "7 Tage kostenlos testen",
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
      'free2': "Privat- &amp; Arbeit-Modus",
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
      'opt.annual.price': "14,99 €",
      'opt.annual.per': "/Jahr",
      'opt.annual.sub': "= 1,25 €/Monat · 7 Tage gratis testen",
      'opt.monthly.label': "Monatsabo",
      'opt.monthly.price': "1,99 €",
      'opt.monthly.per': "/Monat",
      'opt.monthly.sub': "Monatlich kündbar",
      'opt.onetime.label': "Einmalig (Lifetime)",
      'opt.onetime.price': "39,99 €",
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

      'footer.tag': "Eine Aufgabe. Jetzt. Die To-do-App, die dein Gehirn nicht bestraft.",
      'footer.privacy': "Datenschutzerklärung",
      'footer.imprint': "Impressum",
      'footer.copy': "© 2026 JETZT. — Alle Rechte vorbehalten.",
      'footer.made': "Mit <span class=\"heart\">❤</span> gebaut von jemandem, der selbst ADHS hat."
    },

    en: {
      'nav.morgen': "Morning check",
      'nav.liste': "Capture",
      'nav.stats': "Stats",
      'nav.pricing': "Pricing",
      'nav.cta': "Start for free",

      'hero.pill': "Built for ADHD brains",
      'hero.h1': "One task.<br><em>Now.</em>",
      'hero.sub': "Your day, one card at a time. The to-do app that understands how your ADHD brain actually works.",
      'hero.cta': "Start for free",
      'store.small': "Download on the",
      'hero.note1': "Free to start",
      'hero.note2': "Pro from €1.99/month",
      'hero.note3': "7-day free trial",

      'problem.eyebrow': "The problem",
      'problem.title': "Other apps make<br>it worse.",
      'problem.lede': "To-do apps were built for brains that can just \"start.\" Yours works differently — and that's okay.",
      'pain1': "You open the app, see 47 to-dos, and close it again.",
      'pain1.tag': "Overwhelm, not laziness.",
      'pain2': "Streaks that punish you the moment you skip a single day.",
      'pain2.tag': "Guilt sold as a feature.",
      'pain3': "Lists that feel like accusations — longer, louder, every day.",
      'pain3.tag': "More pressure, less done.",

      'morgen.eyebrow': "Morning check",
      'morgen.title': "Your day.<br>Sorted in 30 seconds.",
      'morgen.lede': "Three short questions each morning: energy, meetings, deadline pressure. JETZT. builds your day from that — and only shows what's actually doable today.",
      'morgen.p1': "<strong>Energy first.</strong> Low, medium or high — your day adapts to you, not the other way round.",
      'morgen.p2': "<strong>Skipping is fine.</strong> No nagging, no reminder loop, no guilt.",

      'liste.eyebrow': "The list",
      'liste.title': "All captured.<br>Head clear.",
      'liste.lede': "Just write what you're up to — <em>\"Dentist tomorrow at 12\"</em>. JETZT. detects deadline and energy automatically. The list holds everything; the focus screen later shows only what fits right now.",
      'liste.p1': "<strong>One sentence is enough.</strong> No form, no fields to click through.",
      'liste.p2': "<strong>Recurring.</strong> Daily, weekly or monthly — set once, always there.",
      'ki.badge.title': "On-device AI — powered by Apple Intelligence",
      'ki.badge.sub': "Everything happens right on your device. Your data never leaves it.",

      'stats.eyebrow': "Stats",
      'stats.title': "Progress.<br>No pressure.",
      'stats.lede': "Weekly overview and end-of-day recap — no streaks, no percentages, no red numbers. Just what you got done. A day off costs nothing.",
      'stats.p1': "<strong>Shame-free.</strong> The stats count wins, not misses.",
      'stats.p2': "<strong>Close the day.</strong> A calm full stop in the evening instead of an open list.",

      'features.eyebrow': "All in",
      'features.title': "Few features.<br>The right ones.",
      'feat1.h': "One focus",
      'feat1.p': "Four tabs — focus, list, stats, more. In focus there is only ever one card.",
      'feat2.h': "AI import",
      'feat2.p': "Paste a list, done. JETZT. turns it into individual tasks with deadline and energy.",
      'feat3.h': "Split it up",
      'feat3.p': "Too big? JETZT. breaks a task into small steps you can actually start.",
      'feat4.h': "Energy planning",
      'feat4.p': "Every task has a level: low, medium, high. Focus only shows what matches your energy today.",
      'feat5.h': "Focus timer",
      'feat5.p': "2, 5 or 10 minutes — with a Live Activity on your lock screen. \"Just 2 minutes? Just get started.\"",
      'feat6.h': "Personal &amp; work",
      'feat6.p': "Separate tasks, separate themes, one device. Off the clock really means off the clock.",

      'founder.quote': "I built JETZT. for myself.<br>Because no other app ever worked<br><em>the way my head does.</em>",
      'founder.cite': "Built by someone who has ADHD themselves.",

      'themes.eyebrow': "Color system",
      'themes.title': "Paint your day<br>the way you need it.",
      'themes.lede': "6 accents, 6 backgrounds — freely combinable. Tap through and see live how the app feels. No theme shouts, none judges. <span class=\"themes-free\">Salmon is free — all 6 come with Pro.</span>",
      'pick.accent': "Accent color",
      'pick.bg': "Background",
      'tp.privat': "Personal",
      'tp.work': "Work",
      'tp.title': "Submit tax return",
      'tp.chip': "Fri 21 Aug at 17:00",
      'tp.later': "← Later",
      'tp.done': "Done →",
      'tp.2min': "Just 2 minutes?",
      'tp.startsub': "Just get started.",
      'tp.start': "Start",
      'tp.add': "Add task",

      'tp.tab1': "JETZT.",
      'tp.tab2': "List",
      'tp.tab3': "Stats",
      'tp.tab4': "More",
      'pay.badge': "✦ 7-day free trial",
      'pay.title': "How your free trial works",
      'pay.sub': "Try it first, decide after. In that order.",
      'pay.t1': "6 themes",
      'pay.t2': "Focus timer",
      'pay.t3': "Shame-free stats",
      'pay.d0.h': "Today",
      'pay.d0.p': "Everything unlocked – the full app, no limits.",
      'pay.d5.h': "Day 5",
      'pay.d5.p': "We remind you by push that the trial is ending.",
      'pay.d7.h': "Day 7",
      'pay.d7.p': "First charge of €14.99. Cancel any time before that.",
      'pay.zahlungsart': "Payment",
      'pay.seg.y': "Annual",
      'pay.seg.m': "Monthly",
      'pay.seg.o': "One-time",
      'pay.y.price': "€14.99/year",
      'pay.y.sub': "= €1.25/month",
      'pay.y.badge': "−37%",
      'pay.m.price': "€1.99/month",
      'pay.m.sub': "Cancel anytime",
      'pay.o.price': "€39.99",
      'pay.o.sub': "Pay once, use forever.",
      'pay.foot': "Cancel anytime · Reminder on day 5",
      'cmp.tag.free': "Free",
      'cmp.tag.pro': "Pro",
      'cmp.tasks': "Unlimited tasks",
      'cmp.modes': "Personal &amp; work mode",
      'cmp.morning': "Morning check",
      'cmp.focus': "Focus screen with one card",
      'cmp.themes': "Themes",
      'cmp.themes.free': "Salmon",
      'cmp.themes.pro': "All 6 + backgrounds",
      'cmp.recurring': "Recurring tasks",
      'cmp.recurring.free': "Daily",
      'cmp.recurring.pro': "Daily, weekly, monthly",
      'cmp.import': "Import",
      'cmp.import.free': "Manual",
      'cmp.import.pro': "AI import: paste a list",
      'cmp.ai': "AI text recognition while typing",
      'cmp.split': "Split tasks into steps",
      'cmp.timer': "Focus timer",
      'cmp.timer.pro': "2, 5 or 10 minutes",
      'cmp.stats': "Shame-free stats",
      'cmp.recap': "End-of-day recap",
      'cmp.push': "Push notifications",
      'pay.cta': "Start 7-day free trial",
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
      'free2': "Personal &amp; work mode",
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
      'opt.annual.price': "€14.99",
      'opt.annual.per': "/year",
      'opt.annual.sub': "= €1.25/month · 7-day free trial",
      'opt.monthly.label': "Monthly",
      'opt.monthly.price': "€1.99",
      'opt.monthly.per': "/month",
      'opt.monthly.sub': "Cancel anytime",
      'opt.onetime.label': "One-time (lifetime)",
      'opt.onetime.price': "€39.99",
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

      'footer.tag': "One task. Now. The to-do app that doesn't punish your brain.",
      'footer.privacy': "Privacy Policy",
      'footer.imprint': "Imprint",
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

    var shots = SHOTS[lang];
    var imgs = document.querySelectorAll('[data-shot]');
    for (var j = 0; j < imgs.length; j++) {
      var s = shots[imgs[j].getAttribute('data-shot')];
      if (s) { imgs[j].setAttribute('src', s[0]); imgs[j].setAttribute('alt', s[1]); }
    }

    var btns = document.querySelectorAll('#langSwitch button');
    for (var b = 0; b < btns.length; b++) {
      var on = btns[b].getAttribute('data-lang') === lang;
      btns[b].classList.toggle('on', on);
      btns[b].setAttribute('aria-pressed', on);
    }
    try { localStorage.setItem('jetzt_lang', lang); } catch (e) {}
  }

  function init() {
    var saved = null;
    try { saved = localStorage.getItem('jetzt_lang'); } catch (e) {}
    var nav = (navigator.language || 'de').slice(0, 2).toLowerCase();
    apply(saved || (nav === 'en' ? 'en' : 'de'));

    var sw = document.getElementById('langSwitch');
    if (sw) sw.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('button[data-lang]') : null;
      if (b) apply(b.getAttribute('data-lang'));
    });
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
