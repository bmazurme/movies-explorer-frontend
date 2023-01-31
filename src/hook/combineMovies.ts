export default function combineMovies(moviesDTO: any, myMoviesDTO: any) {
  return moviesDTO.map((movie: any) => ({
    ...movie,
    isLiked: myMoviesDTO.some((x: any) => x.movieId === movie.id),
    // eslint-disable-next-line no-underscore-dangle
    _id: myMoviesDTO.filter((x: any) => x.movieId === movie.id)[0]?._id,
  }));
}
