import constants from '../utils/constants';
import { getId, getTotalPages, mapMovie } from '../utils/helpers';

const moviesUrl = `${constants.API_BASE_URL}/${constants.MOVIES}`;

export const fetchMovies = async (page: number) => {
  const response = await fetch(`${moviesUrl}?page=${page}`);
  if (!response.ok) {
    throw new Error("Couldn't fetch movies from the swapi API");
  }
  const moviesData = await response.json();
  const mappedMovies = moviesData.results.map((movie: any, index: number) =>
    mapMovie(movie, getId(page, index))
  );
  return { movies: mappedMovies, pages: getTotalPages(moviesData.count) };
};

export const fetchMovie = async (movieId: number) => {
  const response = await fetch(`${moviesUrl}/${movieId}`);
  if (!response.ok) {
    throw new Error("Couldn't fetch people from the swapi API");
  }
  const movieData = await response.json();
  return mapMovie(movieData, movieId);
};
