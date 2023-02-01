import { MovieCardType } from '../components/MoviesCard';

const checkValue = (field: string, searchString: string) => (field
  ? field.toLowerCase().includes(searchString) : false);

export default function findMovie(data: Record<string, string>, list: MovieCardType[]) {
  const find = data.searchWord.toLowerCase();

  return list
    .filter((movie: MovieCardType) => (checkValue(movie.nameRU, find)
      || checkValue(movie.nameEN, find)
      || checkValue(movie.director, find)
      || checkValue(movie.country, find)
      // || checkValue(movie.year, find)
    ));
}
