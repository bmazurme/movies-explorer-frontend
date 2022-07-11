function combineMovies(moviesDTO, myMoviesDTO) {
  return moviesDTO.map(movie => {
    return {
      ...movie,
      isLiked: myMoviesDTO.some(x => x.movieId === movie.id),
      _id: myMoviesDTO.filter(x => x.movieId === movie.id)[0]?._id
    }});
}

export default combineMovies;
