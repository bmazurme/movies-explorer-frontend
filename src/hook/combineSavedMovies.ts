import { MovieCardType } from '../components/MoviesCard';

export default function combineSavedMovies(moviesDTO: MovieCardType[]) {
  return moviesDTO.map((movie: MovieCardType) => ({ ...movie, isLiked: true }));
}
