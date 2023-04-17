import React from 'react';
import { useSelector } from 'react-redux';

import MovieCard from '../MoviesCard';
import { statsSelector } from '../../store/selectors';

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
