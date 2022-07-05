import React from 'react';

function MovieCard(props) {
  return(
    <div className="movie-card">
      <a href={props.trailerLink} target='_blank' rel="noreferrer">
        <img
          src={`${props.image.url ? `https://api.nomoreparties.co${props.image.url}` : props.thumbnail }`}
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
            ${props.isLiked 
              ? 'button_liked' 
              : 'button_like'
            }`
          }
          onClick={() => props.handleLikeClick(props)}/>
      </div>      
      <p className="movie-card__detail">
        {props.duration}
      </p>
    </div>
  );
}

export default MovieCard;
