import generalQuotes from "../database/quotes/general.js";
import animeMangaQuotes from "../database/quotes/anime-manga.js";
import bookQuotes from "../database/quotes/book.js";
import gameQuotes from "../database/quotes/game.js";
import movieQuotes from "../database/quotes/movie.js";
import spongebobQuotes from "../database/quotes/spongebob.js";

const quotesList = () => [
  ...generalQuotes,
  ...bookQuotes,
  ...animeMangaQuotes,
  ...gameQuotes,
  ...movieQuotes,
  ...spongebobQuotes,
];

export default quotesList;
