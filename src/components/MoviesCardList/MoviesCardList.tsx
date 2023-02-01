import React from 'react';
import { useSelector } from 'react-redux';

import MovieCard, { MovieCardType } from '../MoviesCard';
import makeDataSelector from '../../store/makeDataSelector';

const statsSelector = makeDataSelector('movieStats');

export default function MovieCardList() {
  const { movies } = useSelector(statsSelector);
  return (
    <section className="card-list">
      {movies.map((movie: MovieCardType, index: number) => (
        <MovieCard key={index} {...movie} />
      ))}
    </section>
  );
}
