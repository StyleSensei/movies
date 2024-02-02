import { createHtml } from './createHtml';
import { logMovies } from "./services/movieService";
import "/src/scss/main.scss";

createHtml(await logMovies());