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

There are two common ways to run or preview the project locally:

Option A — Load as an unpacked Chrome extension (recommended)
1. Open Chrome (or any Chromium browser).
2. Go to chrome://extensions and enable "Developer mode".
3. Click "Load unpacked" and select the project folder (the root of this repository).
4. Open a new tab (or chrome-extension://[your-extension-id]/newtab.html) to preview.

Option B — Quick local preview (non-extension)
1. Run a simple local web server from the project root. Examples:
   - Python 3: `python3 -m http.server 8000`
   - Node (if installed): `npx http-server -p 8000`
2. Open http://localhost:8000/newtab.html in your browser.

Notes:
- When using Option B you won't get extension-specific APIs, but the UI/UX and visuals will render for development and styling.
- For extension packaging, make sure `manifest.json` has the correct "action" / override for the New Tab if intended.

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
