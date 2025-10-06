import storage from "./chromeStorageHelper.js";
import quotesList from "../vendor/quotesList.js";
import { themes } from "./themes.js";

const defaultLanguage = {
  code: "EN",
  flag: "🇺🇸",
};

window.addEventListener("DOMContentLoaded", async () => {
  // set up first time language
  if (!((await storage.get("katahari-language")) || null)) {
    console.log("No language found, setting default to EN");
    await storage.set("katahari-language", JSON.stringify(defaultLanguage));
  }
  const katahariLanguage = await storage.get("katahari-language");

  // get local language
  if (katahariLanguage) {
    const language = JSON.parse(katahariLanguage);
    const buttonLanguage = document.getElementById("button-language");
    buttonLanguage.textContent = language.flag + " " + language.code;
  }

  // theme handling (compatible with legacy index-based storage and new string-based storage)
  const storedIndex = await storage.get("katahari-theme");
  const storedString = await storage.get("katahari:theme");

  const root = document.documentElement;
  const buttonTheme = document.getElementById("button-theme");

  // If a legacy indexed theme exists, re-apply that visual theme (inline background/color + nav styling)
  if (storedIndex !== null && storedIndex !== undefined) {
    // try to coerce to a number index
    let idx = Number(storedIndex);
    if (Number.isNaN(idx)) {
      // maybe stored as a JSON string - try parse
      try {
        const parsed = JSON.parse(storedIndex);
        if (typeof parsed === "number") idx = parsed;
      } catch (e) {
        // ignore
      }
    }

    if (!Number.isNaN(idx) && themes && themes.themeList && themes.themeList[idx]) {
      const t = themes.themeList[idx];
      // apply inline visuals so the custom theme persists after refresh
      document.body.style.background = t.background || "";
      document.body.style.color = t.color || "";

      // set theme color into CSS custom property so components (typography, buttons) adapt
      try {
        document.documentElement.style.setProperty('--text', t.color || '');
      } catch (err) {
        // ignore
      }

      // remove data-theme so CSS scheme doesn't override the custom visuals
      root.removeAttribute("data-theme");

      if (buttonTheme) {
        buttonTheme.textContent = "Custom";
        buttonTheme.setAttribute("aria-pressed", "false");
      }
    }
    // don't continue to apply a light/dark scheme if a custom indexed theme is present
  } else if (storedString) {
    // stored explicit light/dark preference
    const normalized = String(storedString).toLowerCase() === "dark" ? "dark" : "light";
    root.setAttribute("data-theme", normalized);
    if (buttonTheme) {
      buttonTheme.textContent = normalized === "dark" ? "Dark" : "Light";
      buttonTheme.setAttribute("aria-pressed", normalized === "dark" ? "true" : "false");
    }
  } else {
    // fallback to system preference
    const prefersDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = prefersDark ? "dark" : "light";
    root.setAttribute("data-theme", initial);
    if (buttonTheme) {
      buttonTheme.textContent = initial === "dark" ? "Dark" : "Light";
      buttonTheme.setAttribute("aria-pressed", initial === "dark" ? "true" : "false");
    }
  }

  // prepare and show a random quote (and expose navigation handlers)
  const language = katahariLanguage ? JSON.parse(katahariLanguage) : { code: "EN" };
  const blockquote = document.getElementById("blockquote");
  const cite = document.getElementById("cite");
  const quotes = await quotesList();
  console.log(quotes)
  let currentIndex = Math.max(0, Math.floor(Math.random() * (quotes.length || 1)));

  const showQuote = (idx) => {
    if (!Array.isArray(quotes) || quotes.length === 0) return;
    const i = ((idx % quotes.length) + quotes.length) % quotes.length;
    const q = quotes[i];
    if (!q) return;
    // animate: add zoom class then replace content (so animation runs)
    blockquote.classList.remove('zoom-in');
    // force reflow to restart animation
    void blockquote.offsetWidth;
    blockquote.textContent = language?.code === "ID" ? q.content_id || q.content : q.content || q.content_id || "";
    cite.textContent = q.credit || "";
    // trigger animation
    blockquote.classList.add('zoom-in');
    currentIndex = i;
  };

  showQuote(currentIndex);

  // wire up quote controls (if present)
  const btnRandom = document.getElementById("btn-random");
  const btnNext = document.getElementById("btn-next");
  const btnPrev = document.getElementById("btn-prev");
  const btnCopy = document.getElementById("btn-copy");
  const btnShare = document.getElementById("btn-share");

  if (btnRandom) {
    btnRandom.addEventListener("click", () => showQuote(Math.floor(Math.random() * quotes.length)));
  }
  if (btnNext) {
    btnNext.addEventListener("click", () => showQuote(currentIndex + 1));
  }
  if (btnPrev) {
    btnPrev.addEventListener("click", () => showQuote(currentIndex - 1));
  }
  if (btnCopy) {
    btnCopy.addEventListener("click", async () => {
      const text = blockquote.textContent + (cite.textContent ? " — " + cite.textContent : "");
      try {
        await navigator.clipboard.writeText(text);
      } catch (e) {
        console.warn("Clipboard write failed", e);
      }
    });
  }
  if (btnShare) {
    btnShare.addEventListener("click", () => {
      const text = blockquote.textContent + (cite.textContent ? " — " + cite.textContent : "");
      if (navigator.share) {
        navigator.share({ text }).catch(() => { });
      } else {
        window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(text), "_blank");
      }
    });
  }

  // Attach Light/Dark toggle here (inside DOMContentLoaded) so handler always wires correctly.
  const themeToggleBtn = document.getElementById("button-theme");
  const applyColorScheme = (theme) => {
    const rootElem = document.documentElement;
    if (!rootElem) return;
    rootElem.setAttribute("data-theme", theme);
    const btn = document.getElementById("button-theme");
    if (btn) {
      btn.textContent = theme === "dark" ? "Dark" : "Light";
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    }
  };

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", async () => {
      try {
        const rootElem = document.documentElement;
        const currentTheme = rootElem.getAttribute("data-theme") === "dark" ? "light" : "dark";

        // persist explicit preference (string)
        await storage.set("katahari:theme", currentTheme);

        // remove legacy indexed theme so explicit light/dark takes precedence
        if (storage.remove) await storage.remove("katahari-theme");

        // apply data-theme and clear inline custom visuals
        applyColorScheme(currentTheme);

        // clear all likely inline background/color properties set by theme picker
        try {
          document.body.style.background = "";
          document.body.style.backgroundImage = "";
          document.body.style.backgroundColor = "";
          document.body.style.color = "";
          // also reset any inline CSS variables previously set on body
          document.body.style.removeProperty('--bg');
          // remove theme color variable so CSS [data-theme] colors take effect
          document.documentElement.style.removeProperty('--text');

          // clear header/nav inline styles so data-theme rules take effect
          const headerEl = document.querySelector('.header, .header-inner');
          if (headerEl) {
            headerEl.style.background = "";
            headerEl.style.color = "";
          }
        } catch (err) {
          // ignore
        }
      } catch (err) {
        console.warn("Theme toggle failed:", err);
      }
    });

    themeToggleBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        themeToggleBtn.click();
      }
    });

    // initialize aria-pressed and label based on current attribute
    const initial = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    applyColorScheme(initial);
  }
});

/*
  Themes picker (opens when #button-themes is clicked).
  Applies a chosen theme from themes.themeList by updating body background/color
  and stores the selected index in legacy key "katahari-theme". It also removes
  any explicit katahari:theme (light/dark) value to avoid conflicts.
*/
document.getElementById("button-themes")?.addEventListener("click", async () => {
  const content = document.getElementById("content");

  const themeList = themes.themeList.map((t, i) => {
    // each item is a button so it's keyboard accessible
    return `<button class="theme-item btn btn-ghost" data-index="${i}" style="min-width:120px;margin:6px;padding:8px 10px;border-radius:8px;background:${t.background};color:${t.color};border:1px solid rgba(0,0,0,0.06)">${t.code}</button>`;
  });

  content.innerHTML = `<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;padding:12px">${themeList.join("")}</div>`;

  content.querySelectorAll(".theme-item").forEach((el) => {
    el.addEventListener("click", async (e) => {
      const idx = Number(el.dataset.index);
      const t = themes.themeList[idx];
      if (!t) return;

      // apply visual theme (background + text color) via inline styles
      document.body.style.background = t.background || "";
      document.body.style.color = t.color || "";

      // also set theme color into CSS custom property so components (typography, buttons) adapt
      try {
        document.documentElement.style.setProperty('--text', t.color || '');
        // optional: set a theme-specific accent variable if provided
        if (t.accent) document.documentElement.style.setProperty('--accent', t.accent);
      } catch (err) {
        // ignore
      }

      // remove any data-theme so CSS scheme does not override the custom look
      try {
        document.documentElement.removeAttribute("data-theme");
      } catch (err) {
        // ignore
      }

      // persist legacy index format so existing code that expects an index keeps working
      await storage.set("katahari-theme", idx);

      // remove explicit light/dark preference to avoid conflicts
      if (storage.remove) await storage.remove("katahari:theme");

      // update toggle label to indicate custom theme (keeps UX clear)
      const themeToggle = document.getElementById("button-theme");
      if (themeToggle) themeToggle.textContent = "Custom";

      // focus the toggle to keep keyboard flow
      if (themeToggle) themeToggle.focus();

      // optionally close picker or leave content as-is; user can refresh to restore main view
    });
  });
});

/* Removed top-level Light/Dark toggle — handler now attached inside DOMContentLoaded */

document
  .getElementById("button-language")
  .addEventListener("click", async () => {
    const buttonLanguage = document.getElementById("button-language");

    let language = (await storage.get("katahari-language")) || null;

    if (language) {
      let languageParsing = JSON.parse(language);

      if (languageParsing?.code === "EN") {
        buttonLanguage.textContent = "🇮🇩 ID";
        await storage.set(
          "katahari-language",
          JSON.stringify({
            code: "ID",
            flag: "🇮🇩",
          })
        );
      } else {
        buttonLanguage.textContent = "🇺🇸 EN";
        await storage.set(
          "katahari-language",
          JSON.stringify({
            code: "EN",
            flag: "🇺🇸",
          })
        );
      }
    }
  });

/* Helper: show a transient panel inside #content and allow restoring previous content */
function showPanel(html) {
  const content = document.getElementById("content");
  if (!content) return;
  const prev = content.innerHTML;
  content.innerHTML = `<div class="panel card" role="dialog" aria-modal="true">${html}
    <div style="display:flex;gap:8px;justify-content:center;margin-top:1rem">
    </div>
  </div>`;
  const closeBtn = document.getElementById("panel-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      content.innerHTML = prev;
    });
  }
}

/* Donate: show QR codes in an accessible panel (preserve previous content so user can close) */
document.getElementById("button-donate").addEventListener("click", () => {
  showPanel(`
    <figcaption style="margin:0 0 12px 0;text-align:center;font-size:0.85rem;color:var(--muted);margin-top:8px">Buy me coffe</figcaption>
    <div style="display:flex;gap:16px;justify-content:center;align-items:center;flex-wrap:wrap">
      <figure style="margin:0">
        <img width="190" height="190" src="./qrcode.png" alt="QR code for donation" />
        <figcaption style="text-align:center;font-size:0.85rem;color:var(--muted);margin-top:8px">Scan QR</figcaption>
      </figure>
      <figure style="margin:0">
        <img width="180" height="180" src="./qris.jpeg" alt="QRIS for donation" />
        <figcaption style="text-align:center;font-size:0.85rem;color:var(--muted);margin-top:8px">QRIS</figcaption>
      </figure>
    </div>
  `);
});
