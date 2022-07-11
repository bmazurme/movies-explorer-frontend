function combineSavedMovies(moviesDTO) {
  return moviesDTO.map(movie => {
    return {...movie, isLiked: true,
    }});
}

export default combineSavedMovies;
