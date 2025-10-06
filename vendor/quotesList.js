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

export default async function quotesList(selectedSources = null) {
  // Try fetching per-file JSON first so we can filter by source (preferred).
  try {
    const respBy = await fetch("../database/quotes/quotes.byfile.json", { cache: "no-store" });
    if (respBy && respBy.ok) {
      const byFile = await respBy.json();
      if (selectedSources && Array.isArray(selectedSources) && selectedSources.length > 0) {
        // selectedSources are expected to be basenames: e.g. ["book","anime-manga"]
        const result = [];
        for (const key of selectedSources) {
          if (byFile[key]) result.push(...byFile[key]);
        }
        if (result.length) return result;
        // if selection produced nothing, fall through to other fallbacks
      } else {
        // no filter requested — return flattened all quotes
        return Object.values(byFile).flat();
      }
    }
  } catch (err) {
    // unable to fetch byfile JSON — continue to next strategy
  }

  // Try fetching flat JSON fallback
  try {
    const resp = await fetch("../database/quotes/quotes.json", { cache: "no-store" });
    if (resp && resp.ok) {
      const data = await resp.json();
      if (Array.isArray(data)) {
        // If a filter was requested but we only have a flat list, return the full list (no reliable source metadata).
        return data;
      }
    }
  } catch (err) {
    // ignore and continue to module fallback
  }

  // Final fallback: use existing JS module arrays. If a filter is provided, map keys to module arrays.
  const merged = mergedFromModules();

  if (selectedSources && Array.isArray(selectedSources) && selectedSources.length > 0) {
    const map = {
      "general": generalQuotes,
      "book": bookQuotes,
      "anime-manga": animeMangaQuotes,
      "game": gameQuotes,
      "movie": movieQuotes,
      "spongebob": spongebobQuotes,
    };
    const result = [];
    for (const key of selectedSources) {
      if (map[key]) result.push(...map[key]);
    }
    if (result.length) return result;
    // if nothing matched, return merged as a safe default
  }

  return mergedFromModules();
}
