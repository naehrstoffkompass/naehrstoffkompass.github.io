# Nährstoffkompass — Starter

Dieses Repository enthält eine einfache, statische Website zur Präsentation von Nährstoffen.

Inhalt
- index.html — Hauptseite
- styles.css — Styling
- script.js — Client-seitige Logik (Routing, Suche, Rendern)

Lokal testen
1. Dateien in einen Ordner kopieren.
2. Einfachste Variante: `index.html` im Browser öffnen.
3. Besser (lokaler Webserver, z.B. Python):
   - Python 3: `python -m http.server 8000`
   - Dann im Browser: http://localhost:8000

Deployment
- GitHub Pages:
  1. Neues Repo erstellen und Dateien pushen.
  2. In den Repository-Einstellungen -> Pages: Branch `main` (oder `master`) und `/ (root)` wählen.
  3. Site ist dann unter `https://<user>.github.io/<repo>/` erreichbar.
- Netlify / Vercel:
  - Repo verbinden, Build-Schritte sind nicht nötig (statisch). Dateipfad `/` reicht.

Änderungen / Vorschläge
- Externe Links für Shop-Empfehlungen ergänzen.
- Optional: ein minimales CI-Setup oder automatisches Deployment hinzufügen.

Lizenz & Haftung
- Inhalte dienen nur zur Information. Medizinische Aussagen sind nicht beratend.
