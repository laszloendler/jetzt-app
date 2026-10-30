# Erzeugt index.html (DE) und en/index.html (EN) aus template.html.
# Aufruf aus dem Repo-Ordner: python3 src/build.py
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHECK = '<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10.5l4 4L16 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>'
CLOCK_PT = '<span class="pt">.</span>'

ACCENTS = [  # aus ThemeContext.tsx
    ('salmon', '#f4a68a', '#c34112', '#f6b8a1', 'rgba(244,166,138,.13)'),
    ('mint', '#7ecfc0', '#2d786a', '#85d2c4', 'rgba(126,207,192,.13)'),
    ('lavender', '#b8a9d9', '#7b5fb8', '#cabee2', 'rgba(184,169,217,.13)'),
    ('butter', '#d4a830', '#876a1c', '#e0c16b', 'rgba(212,168,48,.13)'),
    ('blush', '#e890a8', '#ce2b57', '#f0b6c6', 'rgba(232,144,168,.13)'),
    ('slate', '#7a9bb5', '#4f728e', '#b5c7d6', 'rgba(122,155,181,.13)'),
]
BGS = [
    ('mintLight', '#e8f8eb', '#ffffff', False),
    ('cream', '#fff3e7', '#ffffff', False),
    ('light', '#f2f2f7', '#ffffff', False),
    ('night', '#0f1729', '#232741', True),
    ('darkSalmon', '#5d3a32', '#6e483e', True),
    ('darkPurple', '#45127f', '#5e27a6', True),
]

S = {
'de': dict(
  title='JETZT. Eine Aufgabe. Jetzt.', desc='JETZT. zeigt dir immer nur eine Aufgabe und hilft beim Anfangen. Für iPhone, kostenlos im App Store.',
  home='./', root='', other_href='en/', other_lang='en', other_name='English',
  nav_label='Hauptmenü', nav_day='Der Tag', nav_price='Preis',
  h1='Eine Aufgabe. Jetzt' + CLOCK_PT,
  sub='Eine Karte nach der anderen. Für alle, die bei 47 offenen Aufgaben erstarren, statt anzufangen.',
  cta='Kostenlos laden', price_note='Für iPhone. Pro ab 17,99 € im Jahr, eine Woche kostenlos testen.',
  display_label='Beispiel: Fokus-Screen von JETZT.', call='Aufruf', focus='Fokus', area_label='Bereich',
  later='← Später', done='Erledigt →', two_min='Nur 2 Minuten?', just_start='Einfach anfangen.', start='Start ▶', stop='Pause',
  done_today='Heute erledigt', in_list='In der Liste', example='Beispiel',
  empty='Mehr Beispiele gibt es hier nicht. In der App wäre jetzt die nächste Karte dran.',
  problem_title='Die meisten Todo-Apps zeigen dir alles auf einmal' + CLOCK_PT,
  problem_lede='Sie sind für Leute gebaut, die eine Liste sehen und loslegen. Wenn du beim Anblick der Liste schon müde wirst, liegt das nicht an dir.',
  tickets_cap='Beispiel: 47 offene Aufgaben. JETZT. ruft eine davon auf, die anderen warten.',
  pain1='Du öffnest die App und siehst 47 Aufgaben. Du machst die App wieder zu.', pain1_tag='Das ist Überforderung, keine Faulheit.',
  pain2='Ein Zähler für erledigte Tage am Stück, der wieder bei null anfängt, sobald du einmal aussetzt.', pain2_tag='Am nächsten Morgen hast du dann noch weniger Lust.',
  pain3='Eine Liste, die jeden Tag länger wird und dich jedes Mal daran erinnert, was noch offen ist.',
  day_title='So läuft ein Tag mit JETZT' + CLOCK_PT,
  when1='Morgens', when2='Zwischendurch', when3='Abends',
  morgen_title='Drei Fragen, und der Tag ist sortiert.',
  morgen_lede='Wie viel Energie hast du? Stehen Meetings an? Drängt etwas? Daraus baut JETZT. deinen Tag und zeigt dir nur, was heute realistisch ist.',
  morgen_p1='<strong>Energie zuerst.</strong> An einem zähen Tag kommen die leichten Sachen nach vorne, an einem guten die großen.',
  morgen_p2='<strong>Keine Lust auf Fragen?</strong> Dann tippst du auf Überspringen, und die App fragt nicht nach.',
  liste_title='Aufschreiben, wie du redest.',
  liste_lede='Tipp <em>„Morgen um 12 zum Zahnarzt“</em>, und der Termin steht drin. Alles landet in der Liste, auf der Karte siehst du aber nur, was gerade passt.',
  liste_p1='<strong>Ganze Zettel auf einmal.</strong> Füg deine Notizen ein, JETZT. macht einzelne Aufgaben daraus.',
  liste_p2='<strong>Der Einkaufszettel auf der Karte.</strong> Milch, Brot, Äpfel stehen direkt auf der Karte, und du hakst sie im Laden ab.',
  ai_title='Apple Intelligence, direkt auf dem iPhone', ai_sub='Für die Erkennung verlassen deine Aufgaben das Gerät nicht.',
  stats_title='Hier zählt, was du geschafft hast.',
  stats_lede='Die Statistik zeigt deine Woche und was heute erledigt ist. Wenn du mal einen Tag aussetzt, fängst du nicht wieder bei null an.',
  stats_p1='<strong>Ein Satz statt einer Note.</strong> Nach drei erledigten Aufgaben steht da „Gut, dass du angefangen hast“ und keine Prozentzahl.',
  stats_p2='<strong>Tag abschließen.</strong> Abends schiebst du Offenes mit einem Tipp auf morgen und machst die App zu.',
  shot_morning='04-morgen-check.png', shot_list='02-liste.png', shot_stats='05-statistik.png',
  alt_morning='Morgen-Check: Energie, Meetings und Deadline-Druck wählen', alt_list='Aufgabenliste mit offenen und erledigten Aufgaben', alt_stats='Statistik: Aufgaben dieser Woche und Tagesabschluss',
  features_title='Was sonst noch drin ist' + CLOCK_PT,
  feat1_h='Eine Karte', feat1_p='Auf dem Fokus-Screen liegt immer nur eine Aufgabe. Tippst du drauf, kannst du sie bearbeiten.',
  feat2_h='Mehrere Aufgaben einfügen', feat2_p='Einen Zettel aus Notizen oder einer Mail einfügen, und JETZT. macht einzelne Aufgaben mit Termin daraus.',
  feat3_h='Uhrzeit zieht vor', feat3_p='Hat eine Aufgabe eine Uhrzeit, rückt sie eine halbe Stunde vorher nach vorne.',
  feat4_h='Energie', feat4_p='Jede Aufgabe ist leicht, mittel oder anstrengend. Gezeigt wird, was zu deiner Energie heute passt.',
  feat5_h='Fokus-Timer', feat5_p='Zwei, fünf oder zehn Minuten, auch auf dem Sperrbildschirm. Meistens reichen die ersten zwei zum Anfangen.',
  feat6_h='Privat und Arbeit', feat6_p='Zwei getrennte Bereiche auf einem Gerät. Nach Feierabend schaltest du die Arbeit einfach weg.',
  themes_title='Sechs Farben, auch dunkel' + CLOCK_PT,
  themes_lede='Sechs Akzentfarben und sechs Hintergründe, frei kombinierbar. Probier sie hier aus, die Karte zeigt sofort, wie es aussieht.',
  themes_free='Lachs ist kostenlos, alle anderen gibt es mit Pro.',
  pick_accent='Akzentfarbe', pick_bg='Hintergrund',
  names=dict(salmon='Lachs', mint='Mint', lavender='Lavendel', butter='Butter', blush='Rosé', slate='Schiefer',
             mintLight='Salbei', cream='Creme', light='Hell', night='Nacht', darkSalmon='Dunkel Lachs', darkPurple='Lila'),
  science_title='Was die Forschung dazu sagt' + CLOCK_PT,
  science_quote='Bei ADHS fehlt selten das Wissen, was zu tun ist. Schwer ist es, das im richtigen Moment auch zu tun.',
  quote_who='Sinngemäß nach Russell A. Barkley', quote_role='Klinischer Psychologe und ADHS-Forscher',
  fact1='Bei ADHS entwickelt sich die Selbststeuerung langsamer, nach Russell A. Barkley um etwa 30 Prozent. Aufschieben ist deshalb <b>kein Charakterfehler</b>.',
  fact2='Am schwersten ist der Anfang. Ein kleiner erster Schritt hilft dabei mehr als jede Motivation, deshalb startet der Timer mit zwei Minuten.',
  fact3='Wer nur eine Aufgabe sieht, muss nicht zwischen vielen wählen. Genau dieses Wählen kostet bei ADHS die meiste Kraft.',
  pricing_title='Kostenlos starten. Pro, wenn du willst' + CLOCK_PT,
  pricing_lede='Die Grundfunktionen kosten nichts, auch später nicht. Pro gibt es im Abo oder als Einmalkauf.',
  table_cap='Funktionen in der kostenlosen Version und in Pro', col_feature='Funktion', free='Kostenlos', no='nicht enthalten', yes='enthalten',
  rows=[('Unbegrenzt viele Aufgaben', 1, 1), ('Privat und Arbeit', 1, 1), ('Morgen-Check', 1, 1), ('Fokus-Screen mit einer Karte', 1, 1),
        ('Farben', 'Lachs', 'Alle sechs und alle Hintergründe'), ('Wiederkehrende Aufgaben', 'Täglich', 'Täglich, wöchentlich, monatlich'),
        ('Mehrere Aufgaben einfügen', 'Ohne KI', 'Mit KI sortiert'), ('Erkennung beim Tippen', 0, 1), ('Checklisten auf der Karte', 0, 1),
        ('Fokus-Timer', 0, '2, 5 oder 10 Minuten'), ('Statistik', 0, 1), ('Tagesrückblick am Abend', 0, 1), ('Erinnerungen', 0, 1)],
  p_year='17,99 €', p_year_sub='im Jahr, also 1,50 € im Monat', p_month='1,99 €', p_month_sub='im Monat, monatlich kündbar', p_once='39,99 €', p_once_sub='einmalig, für immer',
  trial='Das Jahresabo kannst du 7 Tage kostenlos testen. An Tag 5 erinnert dich die App, vorher kannst du jederzeit kündigen.',
  faq_q='Warum diese Preise?',
  faq_a='JETZT. läuft auf deinem iPhone, auch die Erkennung mit Apple Intelligence. Für deine Aufgaben brauchen wir keinen Server. Das Abo gibt es trotzdem, weil du so für wenig Geld ausprobieren kannst, ob dir die App hilft. Wer lieber einmal zahlt und dann nie wieder daran denken will, nimmt den Einmalkauf.',
  close_title='Die erste Karte liegt bereit' + CLOCK_PT,
  close_sub='Laden, eine Aufgabe eintippen, zwei Minuten anfangen. Den Rest der Liste siehst du erst, wenn du willst.',
  privacy='Datenschutz', imprint='Impressum',
  js=dict(start='Start ▶', stop='Pause', call='Aufruf', focus='Fokus',
          allDone='Für heute ist alles aufgerufen.', callSay='Aufruf {n}: {t}', timerSay='Zwei Minuten laufen.', timeUp='Zwei Minuten geschafft.'),
  queue='''Wandfarbe kaufen|Steuererklärung abschicken|Angebot an Frau Kaya schicken|Zahnarzt anrufen|Pfandflaschen wegbringen|Geburtstagsgeschenk für Lena|Keller aufräumen|Handyvertrag kündigen|Rückmeldung an Tom|Fahrrad zur Werkstatt|Arzttermin verschieben|Wohnungsübergabe vorbereiten|Kontoauszüge abheften|Bewerbung Korrektur lesen|Paket zur Post bringen|Wäsche aufhängen|Mama zurückrufen|Rasen mähen|Präsentation für Montag|Reisepass verlängern|Rechnung an Kunden schreiben|Fenster putzen|Versicherung vergleichen|Spülmaschine ausräumen|Kita-Formular ausfüllen|Mails sortieren|Blumen gießen|Ölwechsel machen lassen|Flug nach Lissabon buchen|Laptop-Backup|Altglas wegbringen|Nebenkosten prüfen|Termin beim Bürgeramt|Wintersachen raussuchen|Quartalsbericht lesen|Bilder ausdrucken|Hausaufgaben unterschreiben|Rezept abholen|Kühlschrank abtauen|Abo kündigen|Visitenkarten bestellen|Regal aufbauen|Steuerberaterin anrufen|Schuhe zum Schuster|Passwörter ändern|Danke-Karte schreiben|Laufschuhe kaufen''',
  tasks=[dict(title='Wandfarbe kaufen', chip='Heute, 18:00', area='Privat', list=['NCS S 1002-Y', '2 × 5 Liter']),
         dict(title='Steuererklärung abschicken', chip='Fr., 17:00', area='Privat'),
         dict(title='Angebot an Frau Kaya schicken', chip='Heute, 11:30', area='Arbeit'),
         dict(title='Zahnarzt anrufen', chip='Morgen', area='Privat'),
         dict(title='Pfandflaschen wegbringen', chip='', area='Privat')],
),
'en': dict(
  title='JETZT. One task. Now.', desc='JETZT. only ever shows you one task and helps you get started. For iPhone, free on the App Store.',
  home='./', root='../', other_href='../', other_lang='de', other_name='Deutsch',
  nav_label='Main menu', nav_day='The day', nav_price='Pricing',
  h1='One task. Now' + CLOCK_PT,
  sub='One card at a time. For anyone who freezes at 47 open tasks instead of getting started.',
  cta='Download free', price_note='For iPhone. Pro from €17.99 a year, free for a week.',
  display_label='Example: the JETZT. focus screen', call='Now calling', focus='Focus', area_label='Space',
  later='← Later', done='Done →', two_min='Just 2 minutes?', just_start='Just get started.', start='Start ▶', stop='Pause',
  done_today='Done today', in_list='In your list', example='Example',
  empty='That was every example. In the app, the next card would be up now.',
  problem_title='Most to-do apps show you everything at once' + CLOCK_PT,
  problem_lede="They're built for people who see a list and dive in. If looking at the list already wears you out, that's not on you.",
  tickets_cap='Example: 47 open tasks. JETZT. calls one of them, the rest wait.',
  pain1='You open the app, see 47 tasks, and close it again.', pain1_tag="That's overload, not laziness.",
  pain2='A streak counter that drops back to zero the first time you skip a day.', pain2_tag='And the next morning you want to open it even less.',
  pain3="A list that grows every day and reminds you of everything that's still open.",
  day_title='A day with JETZT' + CLOCK_PT,
  when1='Morning', when2='During the day', when3='Evening',
  morgen_title='Three questions sort your day.',
  morgen_lede="How much energy have you got? Any meetings? Anything urgent? JETZT. builds your day from that and only shows you what's realistic today.",
  morgen_p1='<strong>Energy first.</strong> On a slow day the easy things move up, on a good day the big ones.',
  morgen_p2="<strong>Not in the mood?</strong> Tap Skip and the app won't ask again.",
  liste_title="Write it the way you'd say it.",
  liste_lede='Type <em>“Dentist tomorrow at noon”</em> and the date is set. Everything goes into the list, but the card only shows what fits right now.',
  liste_p1='<strong>Whole lists at once.</strong> Paste your notes and JETZT. turns them into separate tasks.',
  liste_p2='<strong>Your shopping list on the card.</strong> Milk, bread and apples sit right on the card, and you tick them off in the store.',
  ai_title='Apple Intelligence, right on your iPhone', ai_sub="Your tasks don't leave the device for detection.",
  stats_title='Only what you got done counts here.',
  stats_lede="The stats show your week and what you finished today. Skip a day and you don't start over from zero.",
  stats_p1='<strong>A sentence, not a grade.</strong> After three tasks it says “Good on you for getting started”, not a percentage.',
  stats_p2="<strong>Wrap up the day.</strong> In the evening, one tap moves what's left to tomorrow and you can close the app.",
  shot_morning='04-morning-check.png', shot_list='02-list.png', shot_stats='05-stats.png',
  alt_morning='Morning check: pick energy, meetings and deadline pressure', alt_list='Task list with open and completed tasks', alt_stats='Stats screen: tasks completed this week and end of day',
  features_title='What else is in there' + CLOCK_PT,
  feat1_h='One card', feat1_p='The focus screen only ever holds one task. Tap it to edit.',
  feat2_h='Add several tasks', feat2_p='Paste a list from your notes or an email and JETZT. turns it into separate tasks with dates.',
  feat3_h='Timed tasks move up', feat3_p='If a task has a time, it moves to the front half an hour before.',
  feat4_h='Energy', feat4_p='Every task is light, medium or heavy. You see what fits your energy today.',
  feat5_h='Focus timer', feat5_p='Two, five or ten minutes, on your lock screen too. The first two are usually enough to get going.',
  feat6_h='Personal and work', feat6_p='Two separate spaces on one device. After work, you just switch work off.',
  themes_title='Six colors, dark ones too' + CLOCK_PT,
  themes_lede='Six accent colors and six backgrounds, mix them however you like. Try them here and the card updates right away.',
  themes_free='Salmon is free, the rest come with Pro.',
  pick_accent='Accent color', pick_bg='Background',
  names=dict(salmon='Salmon', mint='Mint', lavender='Lavender', butter='Butter', blush='Blush', slate='Slate',
             mintLight='Sage', cream='Cream', light='Light', night='Night', darkSalmon='Dark Salmon', darkPurple='Purple'),
  science_title='What the research says' + CLOCK_PT,
  science_quote='With ADHD, knowing what to do is rarely the problem. Doing it at the right moment is.',
  quote_who='Paraphrased from Russell A. Barkley', quote_role='clinical psychologist and ADHD researcher',
  fact1='With ADHD, self-regulation develops more slowly, by about 30 percent according to Russell A. Barkley. Putting things off is <b>not a character flaw</b>.',
  fact2='Starting is the hardest part. A small first step helps more than any amount of motivation, which is why the timer starts at two minutes.',
  fact3="If you only see one task, you don't have to choose between many. With ADHD, that choosing is what drains you most.",
  pricing_title='Start free. Go Pro if you want' + CLOCK_PT,
  pricing_lede='The basics are free, now and later. Pro comes as a subscription or a one-time purchase.',
  table_cap='Features in the free version and in Pro', col_feature='Feature', free='Free', no='not included', yes='included',
  rows=[('Unlimited tasks', 1, 1), ('Personal and work', 1, 1), ('Morning check', 1, 1), ('Focus screen with one card', 1, 1),
        ('Colors', 'Salmon', 'All six and all backgrounds'), ('Recurring tasks', 'Daily', 'Daily, weekly, monthly'),
        ('Add several tasks', 'Without AI', 'Sorted with AI'), ('Detection as you type', 0, 1), ('Checklists on the card', 0, 1),
        ('Focus timer', 0, '2, 5 or 10 minutes'), ('Stats', 0, 1), ('Evening recap', 0, 1), ('Reminders', 0, 1)],
  p_year='€17.99', p_year_sub='a year, so €1.50 a month', p_month='€1.99', p_month_sub='a month, cancel anytime', p_once='€39.99', p_once_sub='one-time, yours forever',
  trial='Try the annual plan free for 7 days. The app reminds you on day 5, and you can cancel anytime before.',
  faq_q='Why these prices?',
  faq_a="JETZT. runs on your iPhone, Apple Intelligence features included. We don't need a server for your tasks. There's a subscription anyway, because it lets you try the app for little money and see if it helps. If you'd rather pay once and never think about it again, go for the one-time purchase.",
  close_title='Your first card is ready' + CLOCK_PT,
  close_sub="Download, type one task, start for two minutes. You'll only see the rest of the list when you want to.",
  privacy='Privacy Policy', imprint='Imprint',
  js=dict(start='Start ▶', stop='Pause', call='Now calling', focus='Focus',
          allDone="That's everything for today.", callSay='Now calling {n}: {t}', timerSay='Two minutes are running.', timeUp='Two minutes done.'),
  queue='''Buy wall paint|File tax return|Send quote to Ms. Kaya|Call the dentist|Return the bottles|Birthday present for Lena|Clean out the basement|Cancel phone contract|Get back to Tom|Bike to the repair shop|Move doctor's appointment|Prepare apartment handover|File bank statements|Proofread application|Take parcel to post office|Hang up the laundry|Call Mom back|Mow the lawn|Slides for Monday|Renew passport|Invoice the client|Clean the windows|Compare insurance|Empty the dishwasher|Daycare form|Sort emails|Water the plants|Get an oil change|Book flight to Lisbon|Laptop backup|Recycle glass|Check utility bill|Appointment at city hall|Dig out winter clothes|Read quarterly report|Print photos|Sign homework|Pick up prescription|Defrost the freezer|Cancel subscription|Order business cards|Assemble the shelf|Call the tax advisor|Shoes to the cobbler|Change passwords|Write a thank-you card|Buy running shoes''',
  tasks=[dict(title='Buy wall paint', chip='Today, 6:00 PM', area='Personal', list=['NCS S 1002-Y', '2 × 5 liters']),
         dict(title='File tax return', chip='Fri, 5:00 PM', area='Personal'),
         dict(title='Send quote to Ms. Kaya', chip='Today, 11:30 AM', area='Work'),
         dict(title='Call the dentist', chip='Tomorrow', area='Personal'),
         dict(title='Return the bottles', chip='', area='Personal')],
),
}

tpl = open(os.path.join(ROOT, 'src', 'template.html')).read()
for lang, s in S.items():
    v = {k: x for k, x in s.items() if isinstance(x, str)}
    v['lang'] = lang
    t0, t1 = s['tasks'][0], s['tasks'][1]
    v.update(t0_title=t0['title'], t0_chip=t0['chip'], t0_area=t0['area'], t1_title=t1['title'], t1_chip=t1['chip'])
    v['t0_list'] = ''.join(
        f'<li><button type="button" aria-pressed="false"><span class="bx"><svg width="12" height="10" viewBox="0 0 12 10" aria-hidden="true"><path d="M1 5l3.5 3.5L11 1" fill="none" stroke="#151c2e" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="tx">{i}</span></button></li>'
        for i in t0['list'])
    v['tickets'] = ''.join('<li%s><b>%03d</b>%s</li>' % (' class="on"' if n == 1 else '', n, t) for n, t in enumerate(s['queue'].split('|'), 1))
    v['accents'] = ''.join(
        f'<label><input type="radio" name="accent" value="{k}"{" checked" if k == "salmon" else ""}><i style="background:{a}"></i>{s["names"][k]}</label>'
        for k, a, *_ in ACCENTS)
    v['bgs'] = ''.join(
        f'<label><input type="radio" name="bg" value="{k}"{" checked" if k == "mintLight" else ""}><i style="background:{h}"></i>{s["names"][k]}</label>'
        for k, h, *_ in BGS)
    cell = lambda x: (f'<td>{CHECK}<span class="sr">{s["yes"]}</span></td>' if x == 1 else
                      f'<td><span class="no" aria-hidden="true">–</span><span class="sr">{s["no"]}</span></td>' if x == 0 else f'<td>{x}</td>')
    v['rows'] = ''.join(f'<tr><th scope="row">{f}</th>{cell(a)}{cell(b)}</tr>' for f, a, b in s['rows'])
    data = dict(s['js'], tasks=s['tasks'],
                accents=[dict(key=k, accent=a, onLight=l, onDark=d, soft=so) for k, a, l, d, so in ACCENTS],
                bgs=[dict(key=k, hex=h, card=c, dark=dk) for k, h, c, dk in BGS])
    v['data'] = json.dumps(data, ensure_ascii=False).replace('</', '<\\/')
    out = re.sub(r'\{\{(\w+)\}\}', lambda m: v[m.group(1)], tpl)
    dest = os.path.join(ROOT, '' if lang == 'de' else 'en', 'index.html')
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    open(dest, 'w').write(out)
    print(dest)
