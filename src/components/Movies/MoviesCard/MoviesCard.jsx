import React from 'react';
import { useLocation } from 'react-router-dom';

function MovieCard(props) {
  const location = useLocation();

  const movieClass = () => {
    if (location.pathname  === '/movies') {
      if (props.isLiked) {
        return 'button_liked button_disabled'
      } 
      return 'button_like';
    }
  }
  const savedMovieClass = () => {
    if (location.pathname  === '/saved-movies') {
      if (props.isLiked) {
        return 'button_dislike '
      } 
      return '';
    }
  }

  return(
    <div className='movie-card'>
      <a href={props.trailerLink} target='_blank' rel='noreferrer'>
        <img
          src={`${props.image.url 
            ? `https://api.nomoreparties.co${props.image.url}` 
            : props.thumbnail }`}
          alt={props.image.alternativeText} 
          className='movie-card__image'
        />
      </a>
      <div className='movie-card__box'>
        <p className='movie-card__title'>
          {props.nameRU}
        </p>
        <button
          disabled={props.isLiked && location.pathname === '/movies'}
          className={`button ${movieClass() ? movieClass() : ''} 
                             ${savedMovieClass() ? savedMovieClass() : ''}`
          }
          onClick={() => props.handleLikeClick(props)}/>
      </div>      
      <p className='movie-card__detail'>
        {props.duration}
      </p>
    </div>
  );
}

export default MovieCard;
