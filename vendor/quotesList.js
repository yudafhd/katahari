import generalQuotes from "../database/quotes/general.js";
import animeMangaQuotes from "../database/quotes/anime-manga.js";
import bookQuotes from "../database/quotes/book.js";
import gameQuotes from "../database/quotes/game.js";
import movieQuotes from "../database/quotes/movie.js";
import spongebobQuotes from "../database/quotes/spongebob.js";

/*
  Loader migrated to support JSON-based quotes with a graceful fallback.
  - Tries to dynamically import `../database/quotes/quotes.json` (import assertions).
  - If JSON is present, returns that array.
  - Otherwise falls back to the existing JS module exports and returns the merged array.
*/
const mergedFromModules = () => [
  ...generalQuotes,
  ...bookQuotes,
  ...animeMangaQuotes,
  ...gameQuotes,
  ...movieQuotes,
  ...spongebobQuotes,
];

export default async function quotesList() {
  // Try fetching JSON first (avoids import-assertion MIME issues in some environments).
  // Falls back to dynamic import with assertion only if fetch is not available.
  try {
    const resp = await fetch("../database/quotes/quotes.json", { cache: "no-store" });
    if (resp && resp.ok) {
      const data = await resp.json();
      if (Array.isArray(data)) {
        return data;
      }
    }
  } catch (err) {
    // fetch failed — fall back to dynamic import with assertion (for environments that support it)
    try {
      const jsonModule = await import("../database/quotes/quotes.json", { assert: { type: "json" } });
      if (jsonModule && Array.isArray(jsonModule.default)) {
        return jsonModule.default;
      }
    } catch (err2) {
      // JSON not present or import assertions not supported — final fallback to JS modules below
    }
  }

  // Fallback: return merged arrays from existing JS modules
  return mergedFromModules();
}
