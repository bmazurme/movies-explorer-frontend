export default function combineMovies(
  moviesDTO: MovieCardType[],
  myMoviesDTO: MovieCardType & { _id: number,
    movieId: number }[],
) {
  return moviesDTO.map((movie: MovieCardType) => ({
    ...movie,
    isLiked: myMoviesDTO.some((x) => x.movieId === movie.id),
    // eslint-disable-next-line no-underscore-dangle
    _id: myMoviesDTO.filter((x) => x.movieId === movie.id)[0]?._id,
  }));
}
