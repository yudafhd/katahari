import storage from "./chromeStorageHelper.js";
import quotesList from "../database/quotes/index.js";
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

  // get local theme
  const katahariThemeIndex = await storage.get("katahari-theme");
  const katahariThemeCode = katahariThemeIndex
    ? themes.themeList[katahariThemeIndex].code
    : themes.defaultTheme.code;
  const katahariThemeBackground = katahariThemeIndex
    ? themes.themeList[katahariThemeIndex].background
    : themes.defaultTheme.background;
  const katahariThemeColor = katahariThemeIndex
    ? themes.themeList[katahariThemeIndex].color
    : themes.defaultTheme.color;

  // set theme
  const buttonTheme = document.getElementById("button-theme");
  const body = document.querySelector("body");
  buttonTheme.textContent = katahariThemeCode;
  body.style.background = katahariThemeBackground;
  body.style.color = katahariThemeColor;

  // randomize quotes
  const language = JSON.parse(katahariLanguage);
  const blockquote = document.getElementById("blockquote");
  const cite = document.getElementById("cite");
  const randomQuote =
    quotesList()[Math.floor(Math.random() * quotesList().length) + 1];

  blockquote.textContent =
    language?.code === "ID" ? randomQuote?.content_id : randomQuote?.content;
  cite.textContent = randomQuote?.credit;
});

document.getElementById("button-theme").addEventListener("click", async () => {
  const content = document.getElementById("content");
  const themeContent = document.getElementById("theme-content");

  content.classList.add("hidden");
  themeContent.classList.remove("hidden");

  const themeList = themes.themeList.map((value, _) => {
    return `<span class="button-theme-item" 
        data-background="${value.background}"
        data-color="${value.color}"
        style="cursor:pointer;line-height:30px">
        ${value.code}
      </span>`;
  });

  document.getElementById("theme-content").innerHTML =
    "<h3>refresh to close </h3>" +
    themeList.join(" ");

  document
    .querySelectorAll(".button-theme-item")
    .forEach((component, index) => {
      const background = component.dataset.background;
      const color = component.dataset.color;

      component.addEventListener("click", async () => {
        const body = document.querySelector("body");
        body.style.background = background;
        body.style.color = color;
        await storage.set("katahari-theme", index);
      });
    });
});

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

document.getElementById("button-donate").addEventListener("click", () => {
  const content = document.getElementById("content");
  content.innerHTML = `
  <h3 style="text-align:center;">refresh to close</h3>
  <img width="190px" src="./qrcode.png" />
  <img style="margin-left:300px;"  width="180px" src="./qris.jpeg" />
  <br/>`;
});

document.getElementById("button-contact").addEventListener("click", () => {
  const content = document.getElementById("content");
  content.innerHTML = `
  <h3 style="text-align:center;">refresh to close</h3>
   <div class="card">
        <div class="info">
          <label>Email:</label>
          <a href="mailto:ahmadyudafahrudin@gmail.com">ahmadyudafahrudin@gmail.com</a>
        </div>
        <div class="info">
          <label>GitHub:</label>
          <a href="https://github.com/yudafhd" target="_blank">github.com/yudafhd</a>
        </div>
        <div class="info">
          <label>LinkedIn:</label>
          <a href="https://www.linkedin.com/in/yudafahrudin" target="_blank">linkedin.com/in/yudafahrudin</a>
        </div>
      </div>
  `;
});
