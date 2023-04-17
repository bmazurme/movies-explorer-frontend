import { MOVIE_URL, DEFAULT_IMG } from '../utils/constants';

type inDateType = MovieCardType
  & {image: Record<string, Record<string, Record<string, string>>>};

export default function getMovie(props: inDateType) {
  const movie = {
    country: props.country || 'нет',
    director: props.director || 'нет',
    duration: props.duration || 0,
    year: props.year || 'нет',
    description: props.description,
    image: `${MOVIE_URL}${props.image.url}`,
    trailerLink: props.trailerLink,
    thumbnail: props?.image?.formats?.thumbnail?.url
      ? `${MOVIE_URL}${props.image.formats.thumbnail.url}`
      : `${MOVIE_URL}${DEFAULT_IMG}`,
    movieId: props.id,
    nameRU: props.nameRU || 'нет',
    nameEN: props.nameEN || 'нет',
  };

  return movie;
}
