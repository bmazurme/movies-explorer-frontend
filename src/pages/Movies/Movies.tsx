/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import makeDataSelector from '../../store/makeDataSelector';
import Content from '../../components/Content';
import SearchForm from '../../components/SearchForm';
import MovieCardList from '../../components/MoviesCardList';
import More from '../../components/More';
import InfoTooltip from '../../components/Popup';
import NotFound from '../../components/NotFound';
import { useWindowDimensions, getVisualProps } from '../../hook/getWindowDimensions';
import findMovie from '../../hook/findFilms';
import moviesData from '../../mock/movies';
import { store } from '../../store';
import { MovieCardType } from '../../components/MoviesCard';
// const statsSelector = makeDataSelector('movieStats');

export default function Movies() {
  // const { movies } = useSelector(statsSelector);
  const curr = getVisualProps(useWindowDimensions());
  const [slice, setSlice] = useState(curr.slice);
  const [word, setWord] = useState('');
  const [short, setShort] = useState(false);
  const [popup, setPopup] = useState(false);
  const [update, setUpdate] = useState(false);
  const closePopup = () => console.log('close');
  const handleMore = () => setSlice(slice + curr.step);
  const handleSwitch = () => setShort(!short);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setWord(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUpdate(!update);
  };

  useEffect(() => {
    // get from API => store => localStorage
    const sourceData = JSON.parse(moviesData);
    //
    const result = short ? sourceData.filter((x: MovieCardType) => x.duration <= 40) : sourceData;
    const filtered = !word && word !== '' ? result : findMovie({ searchWord: word }, result);
    store.dispatch({ type: 'movies/setMovies', payload: filtered.slice(0, slice) });
    setPopup(filtered.length === 0);
  }, [slice, short, update]);

  return (
    <Content>
      <SearchForm handleChange={handleChange} handleSwitch={handleSwitch} handleSubmit={handleSubmit} />
      <MovieCardList />
      {!popup ? <More handleMoreClick={handleMore} /> : null}
      <InfoTooltip isOpen={false} onClose={closePopup} text={{}} />
      {popup ? <NotFound title="ERROR_TITLE_NOT_FOUND" description={`${'ERROR_DESCRIPTION_NOT_FOUND'}${word}`} /> : null}
    </Content>
  );
}
