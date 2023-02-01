import React, { useState, useEffect } from 'react';

import Content from '../../components/Content';
import SearchForm from '../../components/SearchForm';
import MovieCardList from '../../components/MoviesCardList';
import More from '../../components/More';
import NotFound from '../../components/NotFound';
import { MovieCardType } from '../../components/MoviesCard';
import { useWindowDimensions, getVisualProps } from '../../hook/getWindowDimensions';
import { useGetMoviesMutation, store } from '../../store';
import findMovie from '../../hook/findFilms';

export default function Movies() {
  const [getMovies, { data, isLoading }] = useGetMoviesMutation();
  const curr = getVisualProps(useWindowDimensions());
  const [slice, setSlice] = useState(curr.slice);
  const [word, setWord] = useState('');
  const [short, setShort] = useState(false);
  const [popup, setPopup] = useState(false);
  const [more, setMore] = useState(false);
  const [update, setUpdate] = useState(false);
  const handleMore = () => setSlice(slice + curr.step);
  const handleSwitch = () => setShort(!short);
  const errorText = {
    title: 'Ничего не найдено',
    description: 'по запросу ',
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setWord(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUpdate(!update);
  };

  useEffect(() => {
    let sourceData = [];
    const hasData = localStorage.getItem('MOVIES');

    if (hasData) {
      sourceData = JSON.parse(hasData);
    } else if (data || data?.length > 0) {
      sourceData = data;
      localStorage.setItem('MOVIES', JSON.stringify(data));
    } else if (!isLoading) {
      // @ts-ignore
      getMovies();
    }

    const result = short ? sourceData.filter((x: MovieCardType) => x.duration <= 40) : sourceData;
    const filtered = !word && word !== '' ? result : findMovie({ searchWord: word }, result);
    store.dispatch({ type: 'movies/setMovies', payload: filtered.slice(0, slice) });
    store.dispatch({ type: 'movies/setSource', payload: sourceData });
    setPopup(filtered.length === 0);
    setMore(!popup && filtered.length > slice);
  }, [slice, short, update, isLoading]);

  return (
    <Content>
      <SearchForm
        handleChange={handleChange}
        handleSwitch={handleSwitch}
        handleSubmit={handleSubmit}
      />
      {popup
        ? <NotFound title={errorText.title} description={`${errorText.description}${word}`} />
        : <MovieCardList />}
      {more ? <More handleMoreClick={handleMore} /> : null}
    </Content>
  );
}
