const checkValue = (field, searchString) => {
  return field ? field.toLowerCase().includes(searchString) : false;
}

function findMovie(data, list) {
  const find = data.searchWord.toLowerCase();
  const result = list  // JSON.parse(localStorage.getItem('movies'))
    .filter((movie) => {
      return (checkValue(movie.nameRU, find) 
        || checkValue(movie.nameEN, find) 
        || checkValue(movie.director, find) 
        || checkValue(movie.country, find) 
        || checkValue(movie.year, find));
    });
  return result;
}

export default findMovie;
