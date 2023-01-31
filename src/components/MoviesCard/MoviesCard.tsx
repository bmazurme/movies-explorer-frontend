/* eslint-disable react/no-unused-prop-types */
import React from 'react';

export type MovieCardType = {
  isLiked: boolean;
  trailerLink: string;
  image: Record<string, string>;
  duration: number;
  nameRU: string;
  nameEN: string;
  thumbnail: string;
}

export default function MovieCard(props: MovieCardType) {
  const {
    isLiked,
    trailerLink,
    image,
    duration,
    nameRU,
    thumbnail,
  } = props;

  const handleLikeClick = (pr: MovieCardType) => console.log(image, thumbnail, pr);
  const movieClass = () => (isLiked ? ' button_liked button_disabled' : ' button_like');

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
          disabled={isLiked}
          className={`button${movieClass() ?? movieClass()}`}
          onClick={() => handleLikeClick(props)}
          aria-label="Like"
        />
      </div>
      <p className="movie-card__detail">{duration}</p>
    </div>
  );
}
