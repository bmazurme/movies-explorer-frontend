import React from 'react';
import { movieCard } from './movieCard';

function MovieCard() {
  const [isOpen, setIsOpen] = React.useState(false);
  function handlerClick() {
    setIsOpen(!isOpen);
  }
  return(
    <div className="movie-card">
      <img
        src={movieCard.cover}
        alt={movieCard.alt} 
        className="movie-card__image"
      />
      <div className="movie-card__box">
        <p className="movie-card__title">
          {movieCard.title}
        </p>
        <button
          className={`button
            ${isOpen 
              ? 'button_liked' 
              : 'button_like'
            }`
          }
          onClick={handlerClick}/>
      </div>      
      <p className="movie-card__detail">
        {movieCard.detail}
      </p>
    </div>
  );
}

export default MovieCard;
