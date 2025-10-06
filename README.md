# katahari — Quote Extension for the New Tab

Turn every new tab into a small moment of calm with curated quotes. **katahari** is a lightweight, offline-first browser extension built with vanilla JavaScript that shows a random quote whenever you open a New Tab.

> “A little quote, a brighter day.”

---

## ✨ Features

- New Tab Quotes — Random quotes on each new tab (`newtab.html`) — works fully offline.
- Local Curation — Quotes are stored in [`database/quotes`](database/quotes/index.js:1) for speed, privacy, and easy editing.
- Lightweight & Offline-First — Pure HTML / CSS / JS. No server required.
- Accessible — Keyboard-focusable controls and ARIA attributes on interactive elements.
- Developer-Friendly — Small codebase to extend (themes, contact panel, star background variants).

---

## 🧩 Tech Stack

- Vanilla JavaScript
- HTML + CSS
- Chrome Extension Manifest V3 (`manifest.json`:1)

---

## 🔧 Project structure (important files)

- [`newtab.html`](newtab.html:1) — The New Tab UI and entrypoint.
- [`css/main.css`](css/main.css:1) — All styles, theme tokens and the lightweight CSS starfield fallback.
- [`vendor/main.js`](vendor/main.js:1) — App logic (themes, quotes, UI handlers).
- [`vendor/star.js`](vendor/star.js:1) — Canvas starfield (now optimized); you can swap this for the SVG/CSS alternatives.
- [`database/quotes/`](database/quotes/index.js:1) — Quote files (organized per category).
- [`manifest.json`](manifest.json:1) — Extension configuration.
- [`background.js`](background.js:1) — Background script (if used by the extension).

---

## ▶️ How to run / test locally

Follow these steps to get the project running for the first time (recommended):

Quick start (recommended for development)
1. Install dependencies (optional — only needed for the local http-server dev helper):
   - npm install
2. Build the JSON quotes bundle (required the first time and whenever you edit files under [`database/quotes/`](database/quotes/index.js:1)):
   - npm run build
   This runs [`scripts/build-quotes-json.mjs`](scripts/build-quotes-json.mjs:1) and produces:
   - [`database/quotes/quotes.json`](database/quotes/quotes.json:1)
   - [`database/quotes/quotes.byfile.json`](database/quotes/quotes.byfile.json:1)
3. Start a local preview server:
   - npm run start
   By default this serves the project at http://localhost:8080
4. Open the preview page in your browser:
   - http://localhost:8080/newtab.html

Load as an unpacked Chrome (or Chromium) extension
1. Build the quotes bundle (see step 2) so the extension can use the JSON fallback.
2. Open your browser and go to chrome://extensions
3. Enable "Developer mode"
4. Click "Load unpacked" and select the project root folder
5. Open a new tab (or chrome-extension://[your-extension-id]/newtab.html) to preview the extension

Alternative quick preview methods
- Python: `python3 -m http.server 8000` then open http://localhost:8000/newtab.html
- Node (no install): `npx http-server -p 8000` then open http://localhost:8000/newtab.html

Useful scripts (see [`package.json`](package.json:1))
- npm run build — build JSON from JS quote modules (needed initially / after edits)
- npm run start — run a local http-server for preview
- npm run pack — create katahari.zip for distribution

Notes
- When using a local HTTP server (non-extension mode) some extension-only APIs will not be available, but the UI and styling will render for development and testing.
- If you change quote source modules under [`database/quotes/`](database/quotes/index.js:1), re-run `npm run build` to regenerate the JSON files used by the loader.
- For theme or UI testing, open the devtools console to inspect messages from [`vendor/main.js`](vendor/main.js:1).

---

## ⚙️ Background/star options and performance tips

This project supports a few background approaches (choose whichever best fits your performance needs):

- Canvas (default historical approach) — [`vendor/star.js`](vendor/star.js:1). It can be resource-intensive on some devices. The file in this repo has been optimized with capped DPR, offscreen pre-rendering and lower particle counts to reduce CPU/GPU work.
- SVG (inline) — lightweight, scalable, accessible; minimal JS required. See `newtab.html` for an inline SVG starfield example.
- Pure CSS (fallback) — uses layered radial-gradients and repeating patterns in [`css/main.css`](css/main.css:100) for the lowest runtime cost (no JS).

Recommendation: For best performance on low-end devices, use the CSS option or the optimized canvas with DPR cap enabled.

---

## 🛠 Development notes

- Quotes live under [`database/quotes`](database/quotes/index.js:1). Add or edit category files to change content.
- Themes and user preferences are handled in [`vendor/main.js`](vendor/main.js:1) and persisted to chrome.storage-like helpers (`vendor/chromeStorageHelper.js`:1).
- If you change `vendor/star.js` and want to test instantly, reload the extension in chrome://extensions or refresh the open new tab page.

---

## Contributing

Contributions welcome. Suggested workflow:
1. Fork the repo.
2. Create a feature branch (e.g. `feat/add-theme`).
3. Open a pull request with a clear description and screenshots if applicable.

Please follow the existing code style (vanilla JS, minimal dependencies).

---

## License & Contact

- License: MIT (add LICENSE file if you want to publish this project).
- Contact: ahmadyudafahrudin@gmail.com or see the Contact panel in [`newtab.html`](newtab.html:1).

---
