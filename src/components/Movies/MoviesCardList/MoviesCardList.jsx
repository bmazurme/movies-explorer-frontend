import MovieCard from '../MoviesCard/MoviesCard';
import React from 'react';

function MovieCardList(props) {  
  return(
    <section className="card-list">
      {props.movies.map((movie, index) => 
        <MovieCard
          key={index}
          {...movie}
          {...props}
        />
      )}
    </section>
  );
}

export default MovieCardList;
