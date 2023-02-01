/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { useSelector } from 'react-redux';

import { store } from '../../store';
import makeDataSelector from '../../store/makeDataSelector';

export type MovieCardType = {
  isLiked?: boolean;
  trailerLink: string;
  image: Record<string, string>;
  duration: number;
  nameRU: string;
  nameEN: string;
  thumbnail: string;
  description: string;
  director: string;
  country: string;
  year: number;
  id: number;
}

const statsSelector = makeDataSelector('movieStats');

export default function MovieCard(props: MovieCardType) {
  const { movies, source } = useSelector(statsSelector);
  const {
    id,
    isLiked,
    trailerLink,
    image,
    duration,
    nameRU,
    thumbnail,
  } = props;

  const movieClass = () => (isLiked ? ' button_liked' : ' button_like');

  const handleLikeClick = () => {
    const modMovies = movies.map((item) => ((item.id === id)
      ? { ...item, isLiked: !item?.isLiked } : item));
    const modSource = source.map((item) => ((item.id === id)
      ? { ...item, isLiked: !item?.isLiked } : item));
    store.dispatch({ type: 'movies/setMovies', payload: modMovies });
    store.dispatch({ type: 'movies/setSource', payload: modSource });
    localStorage.setItem('MOVIES', JSON.stringify(modSource));
  };

  return (
    <div className="movie-card">
      <a href={trailerLink} target="_blank" rel="noreferrer">
        <img
          src={`${image.url ? `https://api.nomoreparties.co${image.url}` : thumbnail}`}
          alt={image.alternativeText}
          className="movie-card__image"
          aria-hidden="true"
          loading="lazy"
        />
      </a>
      <div className="movie-card__box">
        <p className="movie-card__title">{nameRU}</p>
        <button
          type="button"
          className={`button${movieClass() ?? movieClass()}`}
          onClick={handleLikeClick}
          aria-label="Like"
        />
      </div>
      <p className="movie-card__detail">{duration}</p>
    </div>
  );
}
