import { MovieCardType } from '../components/MoviesCard';

// eslint-disable-next-line max-len
const checkValue = (field: any, searchString: any) => (field ? field.toLowerCase().includes(searchString) : false);

export default function findMovie(data: Record<string, string>, list: MovieCardType[]) {
  const find = data.searchWord.toLowerCase();
  const result = list // JSON.parse(localStorage.getItem('movies'))
    .filter((movie: MovieCardType) => (checkValue(movie.nameRU, find)
        || checkValue(movie.nameEN, find)
        // || checkValue(movie.director, find)
        // || checkValue(movie.country, find)
        // || checkValue(movie.year, find)
    ));

  return result;
}
