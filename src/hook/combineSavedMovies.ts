export default function combineSavedMovies(moviesDTO: any) {
  return moviesDTO.map((movie: any) => ({ ...movie, isLiked: true }));
}
