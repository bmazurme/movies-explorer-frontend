import React from 'react';
//import { movieCard } from './movieCard';

function MovieCard(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  function handlerClick() {
    setIsOpen(!isOpen);
  }
  return(
    <div className="movie-card">
      <a href={props.trailerLink} target='_blank' rel="noreferrer">
        <img
          src={`https://api.nomoreparties.co/${props.image.url}`}
          alt={props.image.alternativeText} 
          className="movie-card__image"
        />
      </a>
      <div className="movie-card__box">
        <p className="movie-card__title">
          {props.nameRU}
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
        {props.duration}
      </p>
    </div>
  );
}

export default MovieCard;
