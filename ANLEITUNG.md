# JETZT. — Landing Page auf GitHub Pages hosten

Diese Seite ist komplett statisch (HTML/CSS/JS). Kein Server, kein Build nötig.

## Inhalt dieses Pakets
```
index.html            ← Startseite (wird von GitHub automatisch geladen)
styles.css
app.js
motion.js
i18n.js               ← Sprachumschaltung DE / EN
tweaks-panel.jsx
tweaks-app.jsx
uploads/              ← alle verwendeten App-Screenshots
```
**Wichtig:** Immer die ganze Ordnerstruktur hochladen. Die Dateien verweisen
relativ aufeinander — fehlt eine, lädt die Seite unvollständig.

## Variante A — direkt im Browser hochladen (am einfachsten)
1. Öffne dein Repo **jetzt-app** auf github.com.
2. Klicke **Add file → Upload files**.
3. Ziehe **alle Dateien und den Ordner `uploads/`** aus diesem Paket ins Fenster.
   (Tipp: am besten den kompletten Inhalt markieren und reinziehen — der
   `uploads/`-Ordner muss als Ordner erhalten bleiben.)
4. Unten **Commit changes** klicken.
5. Gehe zu **Settings → Pages**.
6. Unter „Build and deployment“ → **Source: Deploy from a branch**.
7. **Branch: `main`**, Ordner **`/ (root)`** auswählen → **Save**.
8. Nach ~1 Minute ist die Seite live unter:
   `https://<dein-github-name>.github.io/jetzt-app/`

## Variante B — mit Git (Kommandozeile)
```bash
git clone https://github.com/<dein-github-name>/jetzt-app.git
cd jetzt-app
# Inhalt dieses Pakets in den Ordner kopieren (index.html, *.css, *.js, *.jsx, uploads/)
git add .
git commit -m "Landing Page"
git push
```
Danach wie oben **Settings → Pages** aktivieren.

## Eigene Domain (optional)
Unter **Settings → Pages → Custom domain** kannst du eine eigene Domain
eintragen (z. B. `jetzt-app.de`) und bei deinem Domain-Anbieter einen
CNAME/DNS-Eintrag auf `<dein-github-name>.github.io` setzen.

## Gut zu wissen
- **Sprache:** Oben rechts kann zwischen **DE / EN** umgeschaltet werden; die
  Wahl wird gespeichert. Beim ersten Besuch wird die Browsersprache erkannt
  (Englisch → EN, sonst DE). Die echten App-Screenshots bleiben auf Deutsch
  (es sind Foto-Aufnahmen aus der App) — alle Texte der Seite sind übersetzt.
- Die App-Store-/Pro-Buttons zeigen aktuell auf Platzhalter (`#`).
  Sobald die App live ist: in `index.html` die `href="#"` durch die echten
  Links ersetzen.
- Datenschutz & Impressum verlinken bereits auf deine echten Legal-Seiten.
- Die Seite lädt React/Babel von einem CDN — dafür ist beim Aufruf eine
  Internetverbindung nötig (bei GitHub Pages immer gegeben).
