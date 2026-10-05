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

      'hero.pill': "Von jemandem mit ADHS gebaut",
      'hero.h1': "Eine Aufgabe.<br><em>Jetzt.</em>",
      'hero.sub': "Eine Karte nach der anderen. Für alle, die bei 47 offenen Aufgaben erstarren, statt anzufangen.",
      'hero.cta': "Kostenlos starten",
      'store.small': "Laden im",
      'hero.note1': "Kostenlos starten",
      'hero.note2': "Pro ab 17,99 € im Jahr",
      'hero.note3': "Eine Woche kostenlos testen",

      'problem.eyebrow': "Das Problem",
      'problem.title': "Die meisten Todo-Apps<br>zeigen dir alles auf einmal.",
      'problem.lede': "Sie sind für Leute gebaut, die eine Liste sehen und loslegen. Wenn du beim Anblick der Liste schon müde wirst, liegt das nicht an dir.",
      'pain1': "Du öffnest die App und siehst 47 Aufgaben. Du machst die App wieder zu.",
      'pain1.tag': "Das ist Überforderung, keine Faulheit.",
      'pain2': "Ein Zähler für erledigte Tage am Stück, der wieder bei null anfängt, sobald du einmal aussetzt.",
      'pain2.tag': "Am nächsten Morgen hast du dann noch weniger Lust.",
      'pain3': "Eine Liste, die jeden Tag länger wird und dich jedes Mal daran erinnert, was noch offen ist.",
      'pain3.tag': "",

      'morgen.eyebrow': "Morgen-Check",
      'morgen.title': "Drei Fragen am Morgen,<br>und der Tag ist sortiert.",
      'morgen.lede': "Wie viel Energie hast du? Stehen Meetings an? Drängt etwas? Daraus baut JETZT. deinen Tag und zeigt dir nur, was heute realistisch ist.",
      'morgen.p1': "<strong>Energie zuerst.</strong> An einem zähen Tag kommen die leichten Sachen nach vorne, an einem guten die großen.",
      'morgen.p2': "<strong>Keine Lust auf Fragen?</strong> Dann tippst du auf Überspringen, und die App fragt nicht nach.",

      'liste.eyebrow': "Die Liste",
      'liste.title': "Aufschreiben,<br>wie du redest.",
      'liste.lede': "Tipp <em>„Morgen um 12 zum Zahnarzt“</em>, und der Termin steht drin. Alles landet in der Liste, auf der Karte siehst du aber nur, was gerade passt.",
      'liste.p1': "<strong>Ganze Zettel auf einmal.</strong> Füg deine Notizen ein, JETZT. macht einzelne Aufgaben daraus.",
      'liste.p2': "<strong>Der Einkaufszettel auf der Karte.</strong> Milch, Brot, Äpfel stehen direkt auf der Karte, und du hakst sie im Laden ab.",
      'ki.badge.title': "Apple Intelligence, direkt auf dem iPhone",
      'ki.badge.sub': "Für die Erkennung verlassen deine Aufgaben das Gerät nicht.",

      'stats.eyebrow': "Statistik",
      'stats.title': "Hier zählt,<br>was du geschafft hast.",
      'stats.lede': "Die Statistik zeigt deine Woche und was heute erledigt ist. Wenn du mal einen Tag aussetzt, fängst du nicht wieder bei null an.",
      'stats.p1': "<strong>Ein Satz statt einer Note.</strong> Nach drei erledigten Aufgaben steht da „Gut, dass du angefangen hast“ und keine Prozentzahl.",
      'stats.p2': "<strong>Tag abschließen.</strong> Abends schiebst du Offenes mit einem Tipp auf morgen und machst die App zu.",

      'features.eyebrow': "Alles drin",
      'features.title': "Was sonst noch drin ist",
      'feat1.h': "Eine Karte",
      'feat1.p': "Auf dem Fokus-Screen liegt immer nur eine Aufgabe. Tippst du drauf, kannst du sie bearbeiten.",
      'feat2.h': "Mehrere Aufgaben einfügen",
      'feat2.p': "Einen Zettel aus Notizen oder einer Mail einfügen, und JETZT. macht einzelne Aufgaben mit Termin daraus.",
      'feat3.h': "Uhrzeit zieht vor",
      'feat3.p': "Hat eine Aufgabe eine Uhrzeit, rückt sie eine halbe Stunde vorher nach vorne.",
      'feat4.h': "Energie",
      'feat4.p': "Jede Aufgabe ist leicht, mittel oder anstrengend. Gezeigt wird, was zu deiner Energie heute passt.",
      'feat5.h': "Fokus-Timer",
      'feat5.p': "Zwei, fünf oder zehn Minuten, auch auf dem Sperrbildschirm. Meistens reichen die ersten zwei zum Anfangen.",
      'feat6.h': "Privat und Arbeit",
      'feat6.p': "Zwei getrennte Bereiche auf einem Gerät. Nach Feierabend schaltest du die Arbeit einfach weg.",

      'founder.quote': "Ich habe JETZT. für mich gebaut, weil keine andere App so funktioniert hat <em>wie mein Kopf.</em>",
      'founder.cite': "Laszlo Endler, hat selbst ADHS",

      'themes.eyebrow': "Farbsystem",
      'themes.title': "Sechs Farben,<br>auch dunkel.",
      'themes.lede': "Sechs Akzentfarben und sechs Hintergründe, frei kombinierbar. Probier sie hier aus, das Handy daneben zeigt sofort, wie es aussieht. <span class=\"themes-free\">Lachs ist kostenlos, alle anderen gibt es mit Pro.</span>",
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
      'pay.badge': "7 Tage kostenlos testen",
      'pay.title': "So funktioniert deine kostenlose Testphase",
      'pay.sub': "Du probierst alles aus und entscheidest erst danach.",
      'pay.t1': "6 Themes",
      'pay.t2': "Fokus-Timer",
      'pay.t3': "Listen zum Abhaken",
      'pay.d0.h': "Heute",
      'pay.d0.p': "Alles freigeschaltet – volle App, keine Limits.",
      'pay.d5.h': "Tag 5",
      'pay.d5.p': "Wir erinnern dich per Push, dass die Testphase endet.",
      'pay.d7.h': "Tag 7",
      'pay.d7.p': "Erste Abbuchung von 17,99 €. Vorher jederzeit kündbar.",
      'pay.zahlungsart': "Zahlungsart",
      'pay.seg.y': "Jährlich",
      'pay.seg.m': "Monatlich",
      'pay.seg.o': "Einmalig",
      'pay.y.price': "17,99 €/Jahr",
      'pay.y.sub': "= 1,50 €/Monat",
      'pay.y.badge': "−25 %",
      'pay.m.price': "1,99 €/Monat",
      'pay.m.sub': "Monatlich kündbar",
      'pay.o.price': "39,99 €",
      'pay.o.sub': "Einmal zahlen, für immer nutzen.",
      'pay.foot': "Jederzeit kündbar · Erinnerung an Tag 5",
      'cmp.tag.free': "Kostenlos",
      'cmp.tag.pro': "Pro",
      'cmp.tasks': "Unbegrenzt viele Aufgaben",
      'cmp.modes': "Privat und Arbeit",
      'cmp.morning': "Morgen-Check",
      'cmp.focus': "Fokus-Screen mit einer Karte",
      'cmp.themes': "Farben",
      'cmp.themes.free': "Lachs",
      'cmp.themes.pro': "Alle sechs und alle Hintergründe",
      'cmp.recurring': "Wiederkehrende Aufgaben",
      'cmp.recurring.free': "Täglich",
      'cmp.recurring.pro': "Täglich, wöchentlich, monatlich",
      'cmp.import': "Mehrere Aufgaben einfügen",
      'cmp.import.free': "Ohne KI",
      'cmp.import.pro': "Mit KI sortiert",
      'cmp.ai': "Erkennung beim Tippen",
      'cmp.split': "Checklisten auf der Karte",
      'cmp.timer': "Fokus-Timer",
      'cmp.timer.pro': "2, 5 oder 10 Minuten",
      'cmp.stats': "Statistik",
      'cmp.recap': "Tagesrückblick am Abend",
      'cmp.push': "Erinnerungen",
      'pay.cta': "7 Tage kostenlos testen",
      'science.eyebrow': "Die Grundlage",
      'science.title': "Worauf das aufbaut",
      'fact1': "Bei ADHS entwickelt sich die Selbststeuerung langsamer, nach Russell A. Barkley um etwa 30 Prozent. Aufschieben ist deshalb <b>kein Charakterfehler</b>.",
      'fact2': "Am schwersten ist der Anfang. Ein kleiner erster Schritt hilft dabei mehr als jede Motivation, deshalb startet der Timer mit zwei Minuten.",
      'fact3': "Wer nur eine Aufgabe sieht, muss nicht zwischen vielen wählen. Genau dieses Wählen kostet bei ADHS die meiste Kraft.",
      'science.quote': "Bei ADHS fehlt selten das Wissen, was zu tun ist. Schwer ist es, das im richtigen Moment auch zu tun.",
      'quote.who': "sinngemäß nach Russell A. Barkley",
      'quote.role': "Klinischer Psychologe, ADHS-Forscher",

      'pricing.eyebrow': "Preis",
      'pricing.title': "Kostenlos starten.<br>Pro, wenn du willst.",
      'pricing.lede': "Die Grundfunktionen kosten nichts, auch später nicht. Pro gibt es im Abo oder als Einmalkauf.",
      'plan.free.name': "Kostenlos",
      'plan.free.per': "für immer",
      'plan.free.sub': "Alles, um sofort loszulegen.",
      'free1': "Unbegrenzt viele Aufgaben",
      'free2': "Privat und Arbeit",
      'free3': "Farbe Lachs",
      'free4': "Morgen-Check",
      'free5': "Mehrere Aufgaben einfügen, ohne KI",
      'free6': "Täglich wiederkehrende Aufgaben",
      'plan.free.cta': "Kostenlos starten",
      'plan.pro.badge': "Pro, alles freigeschaltet",
      'plan.pro.name': "Pro",
      'plan.pro.sub': "Wähl, was zu dir passt.",
      'opt.annual.badge': "Beliebt",
      'opt.annual.label': "Jahresabo",
      'opt.annual.price': "17,99 €",
      'opt.annual.per': "/Jahr",
      'opt.annual.sub': "= 1,50 €/Monat · 7 Tage kostenlos testen",
      'opt.monthly.label': "Monatsabo",
      'opt.monthly.price': "1,99 €",
      'opt.monthly.per': "/Monat",
      'opt.monthly.sub': "Monatlich kündbar",
      'opt.onetime.label': "Einmalig (Lifetime)",
      'opt.onetime.price': "39,99 €",
      'opt.onetime.sub': "Einmal zahlen, für immer nutzen.",
      'pro1': "Alle sechs Farben und Hintergründe",
      'pro2': "Mehrere Aufgaben einfügen, mit KI sortiert",
      'pro3': "Erkennung beim Tippen",
      'pro4': "Checklisten auf der Karte",
      'pro5': "Fokus-Timer (2, 5 oder 10 Minuten)",
      'pro6': "Statistik",
      'pro7': "Tagesrückblick am Abend",
      'pro8': "Erinnerungen",
      'pro9': "Wöchentlich und monatlich wiederholen",
      'plan.pro.cta': "7 Tage gratis testen",
      'faq.q': "Warum diese Preise?",
      'faq.a': "JETZT. läuft auf deinem iPhone, auch die Erkennung mit Apple Intelligence. Für deine Aufgaben brauchen wir keinen Server. Das Abo gibt es trotzdem, weil du so für wenig Geld ausprobieren kannst, ob dir die App hilft. Wer lieber einmal zahlt und dann nie wieder daran denken will, nimmt den Einmalkauf.",
      'price.tagline': "„Kein Trick. Kein Upselling. Keine versteckten Kosten.\"",

      'footer.tag': "Eine Aufgabe. Jetzt.",
      'footer.privacy': "Datenschutzerklärung",
      'footer.imprint': "Impressum",
      'footer.copy': "© 2026 JETZT. — Alle Rechte vorbehalten.",
      'footer.made': "Gebaut von Laszlo Endler, der selbst ADHS hat."
    },

    en: {
      'nav.morgen': "Morning check",
      'nav.liste': "Capture",
      'nav.stats': "Stats",
      'nav.pricing': "Pricing",
      'nav.cta': "Start for free",

      'hero.pill': "Built by someone with ADHD",
      'hero.h1': "One task.<br><em>Now.</em>",
      'hero.sub': "One card at a time. For anyone who freezes at 47 open tasks instead of getting started.",
      'hero.cta': "Start for free",
      'store.small': "Download on the",
      'hero.note1': "Free to start",
      'hero.note2': "Pro from €17.99 a year",
      'hero.note3': "Free for a week",

      'problem.eyebrow': "The problem",
      'problem.title': "Most to-do apps show you<br>everything at once.",
      'problem.lede': "They're built for people who see a list and dive in. If looking at the list already wears you out, that's not on you.",
      'pain1': "You open the app, see 47 tasks, and close it again.",
      'pain1.tag': "That's overload, not laziness.",
      'pain2': "A streak counter that drops back to zero the first time you skip a day.",
      'pain2.tag': "And the next morning you want to open it even less.",
      'pain3': "A list that grows every day and reminds you of everything that's still open.",
      'pain3.tag': "",

      'morgen.eyebrow': "Morning check",
      'morgen.title': "Three questions<br>sort your day.",
      'morgen.lede': "How much energy have you got? Any meetings? Anything urgent? JETZT. builds your day from that and only shows you what's realistic today.",
      'morgen.p1': "<strong>Energy first.</strong> On a slow day the easy things move up, on a good day the big ones.",
      'morgen.p2': "<strong>Not in the mood?</strong> Tap Skip and the app won't ask again.",

      'liste.eyebrow': "The list",
      'liste.title': "Write it the way<br>you'd say it.",
      'liste.lede': "Type <em>\"Dentist tomorrow at noon\"</em> and the date is set. Everything goes into the list, but the card only shows what fits right now.",
      'liste.p1': "<strong>Whole lists at once.</strong> Paste your notes and JETZT. turns them into separate tasks.",
      'liste.p2': "<strong>Your shopping list on the card.</strong> Milk, bread and apples sit right on the card, and you tick them off in the store.",
      'ki.badge.title': "Apple Intelligence, right on your iPhone",
      'ki.badge.sub': "Your tasks don't leave the device for detection.",

      'stats.eyebrow': "Stats",
      'stats.title': "Only what you got done<br>counts here.",
      'stats.lede': "The stats show your week and what you finished today. Skip a day and you don't start over from zero.",
      'stats.p1': "<strong>A sentence, not a grade.</strong> After three tasks it says \"Good on you for getting started\", not a percentage.",
      'stats.p2': "<strong>Wrap up the day.</strong> In the evening, one tap moves what's left to tomorrow and you can close the app.",

      'features.eyebrow': "All in",
      'features.title': "What else is in there",
      'feat1.h': "One card",
      'feat1.p': "The focus screen only ever holds one task. Tap it to edit.",
      'feat2.h': "Add several tasks",
      'feat2.p': "Paste a list from your notes or an email and JETZT. turns it into separate tasks with dates.",
      'feat3.h': "Timed tasks move up",
      'feat3.p': "If a task has a time, it moves to the front half an hour before.",
      'feat4.h': "Energy",
      'feat4.p': "Every task is light, medium or heavy. You see what fits your energy today.",
      'feat5.h': "Focus timer",
      'feat5.p': "Two, five or ten minutes, on your lock screen too. The first two are usually enough to get going.",
      'feat6.h': "Personal and work",
      'feat6.p': "Two separate spaces on one device. After work, you just switch work off.",

      'founder.quote': "I built JETZT. for myself, because no other app worked <em>the way my head does.</em>",
      'founder.cite': "Laszlo Endler, has ADHD himself",

      'themes.eyebrow': "Color system",
      'themes.title': "Six colors,<br>dark ones too.",
      'themes.lede': "Six accent colors and six backgrounds, mix them however you like. Try them here and the phone next to it updates right away. <span class=\"themes-free\">Salmon is free, the rest come with Pro.</span>",
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
      'pay.badge': "Free for 7 days",
      'pay.title': "How your free trial works",
      'pay.sub': "Try everything first, then decide.",
      'pay.t1': "6 themes",
      'pay.t2': "Focus timer",
      'pay.t3': "Check-off lists",
      'pay.d0.h': "Today",
      'pay.d0.p': "Everything unlocked – the full app, no limits.",
      'pay.d5.h': "Day 5",
      'pay.d5.p': "We remind you by push that the trial is ending.",
      'pay.d7.h': "Day 7",
      'pay.d7.p': "First charge of €17.99. Cancel any time before.",
      'pay.zahlungsart': "Payment",
      'pay.seg.y': "Annual",
      'pay.seg.m': "Monthly",
      'pay.seg.o': "One-time",
      'pay.y.price': "€17.99/year",
      'pay.y.sub': "= €1.50/month",
      'pay.y.badge': "−25%",
      'pay.m.price': "€1.99/month",
      'pay.m.sub': "Cancel anytime",
      'pay.o.price': "€39.99",
      'pay.o.sub': "Pay once, use forever.",
      'pay.foot': "Cancel anytime · Reminder on day 5",
      'cmp.tag.free': "Free",
      'cmp.tag.pro': "Pro",
      'cmp.tasks': "Unlimited tasks",
      'cmp.modes': "Personal and work",
      'cmp.morning': "Morning check",
      'cmp.focus': "Focus screen with one card",
      'cmp.themes': "Colors",
      'cmp.themes.free': "Salmon",
      'cmp.themes.pro': "All six and all backgrounds",
      'cmp.recurring': "Recurring tasks",
      'cmp.recurring.free': "Daily",
      'cmp.recurring.pro': "Daily, weekly, monthly",
      'cmp.import': "Add several tasks",
      'cmp.import.free': "Without AI",
      'cmp.import.pro': "Sorted with AI",
      'cmp.ai': "Detection as you type",
      'cmp.split': "Checklists on the card",
      'cmp.timer': "Focus timer",
      'cmp.timer.pro': "2, 5 or 10 minutes",
      'cmp.stats': "Stats",
      'cmp.recap': "Evening recap",
      'cmp.push': "Reminders",
      'pay.cta': "Start 7-day free trial",
      'science.eyebrow': "The basis",
      'science.title': "What it's based on",
      'fact1': "With ADHD, self-regulation develops more slowly, by about 30 percent according to Russell A. Barkley. Putting things off is <b>not a character flaw</b>.",
      'fact2': "Starting is the hardest part. A small first step helps more than any amount of motivation, which is why the timer starts at two minutes.",
      'fact3': "If you only see one task, you don't have to choose between many. With ADHD, that choosing is what drains you most.",
      'science.quote': "With ADHD, knowing what to do is rarely the problem. Doing it at the right moment is.",
      'quote.who': "paraphrased from Russell A. Barkley",
      'quote.role': "Clinical psychologist, ADHD researcher",

      'pricing.eyebrow': "Pricing",
      'pricing.title': "Start free.<br>Go Pro if you want.",
      'pricing.lede': "The basics are free, now and later. Pro comes as a subscription or a one-time purchase.",
      'plan.free.name': "Free",
      'plan.free.per': "forever",
      'plan.free.sub': "Everything to get going right away.",
      'free1': "Unlimited tasks",
      'free2': "Personal and work",
      'free3': "Salmon color",
      'free4': "Morning check",
      'free5': "Add several tasks, without AI",
      'free6': "Daily repeating tasks",
      'plan.free.cta': "Start for free",
      'plan.pro.badge': "Pro, everything unlocked",
      'plan.pro.name': "Pro",
      'plan.pro.sub': "Pick what suits you.",
      'opt.annual.badge': "Popular",
      'opt.annual.label': "Annual",
      'opt.annual.price': "€17.99",
      'opt.annual.per': "/year",
      'opt.annual.sub': "= €1.50/month · free for 7 days",
      'opt.monthly.label': "Monthly",
      'opt.monthly.price': "€1.99",
      'opt.monthly.per': "/month",
      'opt.monthly.sub': "Cancel anytime",
      'opt.onetime.label': "One-time (lifetime)",
      'opt.onetime.price': "€39.99",
      'opt.onetime.sub': "Pay once, use forever.",
      'pro1': "All six colors and backgrounds",
      'pro2': "Add several tasks, sorted with AI",
      'pro3': "Detection as you type",
      'pro4': "Checklists on the card",
      'pro5': "Focus timer (2, 5 or 10 minutes)",
      'pro6': "Stats",
      'pro7': "Evening recap",
      'pro8': "Reminders",
      'pro9': "Weekly and monthly repeats",
      'plan.pro.cta': "Start 7-day free trial",
      'faq.q': "Why these prices?",
      'faq.a': "JETZT. runs on your iPhone, Apple Intelligence features included. We don't need a server for your tasks. There's a subscription anyway, because it lets you try the app for little money and see if it helps. If you'd rather pay once and never think about it again, go for the one-time purchase.",
      'price.tagline': "\"No trick. No upselling. No hidden costs.\"",

      'footer.tag': "One task. Now.",
      'footer.privacy': "Privacy Policy",
      'footer.imprint': "Imprint",
      'footer.copy': "© 2026 JETZT. — All rights reserved.",
      'footer.made': "Built by Laszlo Endler, who has ADHD himself."
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
