import { apiTimeout } from "../components/TopMovies";
import { getTopFilms } from "../utils/api";

export async function fetchMovieId() {

    const result = await getTopFilms();
    await result.films.map(async (film, i) => {
        await apiTimeout(i);
        const id = film.filmId;
        return id;
    })
}