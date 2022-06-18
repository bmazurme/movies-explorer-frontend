import cover from '../../../images/cover.jpg';

function MovieCard() {
  return(
    <div className="movie-card">
      <img src={cover} alt="" 
        className="movie-card__image"/>
      <div className="movie-card__box">
        <p className="movie-card__title">
          33 cлова о дизайне
        </p>
        <button className="button button_like"/>
      </div>      
      <p className="movie-card__detail">
        1ч42м
      </p>
    </div>
  );
}

export default MovieCard;