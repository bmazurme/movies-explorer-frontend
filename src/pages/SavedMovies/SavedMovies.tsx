import React, { useState } from 'react';

import Content from '../../components/Content';
import SearchForm from '../../components/SearchForm';
import MovieCardList from '../../components/MoviesCardList';
import More from '../../components/More';
import InfoTooltip from '../../components/Popup';
// import NotFound from '../../components/NotFound';

import moviesData from '../../mock/movies';

// import { ERROR_TITLE_NOT_FOUND, ERROR_DESCRIPTION_NOT_FOUND } from '../../utils/constants';
import { MovieCardType } from '../../components/MoviesCard';

export default function SavedMoviesPage() {
  const [data, setData] = useState<Record<string, any>[]>(JSON.parse(moviesData));
  const [movies, setMovies] = useState<MovieCardType[]>(JSON.parse(moviesData));

  const closePopup = () => {
    setData([]);
    setMovies([]);
  };

  const handleMoreClick = () => {
    setData([]);
    setMovies([]);
  };

  const handleChange = (e: any) => {
    setData([]);
    setMovies([]);
  };

  const handlerSwitchClick = () => {
    setData([]);
    setMovies([]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <Content>
      <SearchForm
        handleChange={handleChange}
        handleSwitch={handlerSwitchClick}
        handleSubmit={handleSubmit}
      />
      {/* <NotFound title={ERROR_TITLE_NOT_FOUND} */}
      {/* description={`${ERROR_DESCRIPTION_NOT_FOUND}${data.searchWord}`} /> */}
      <MovieCardList />
      <More handleMoreClick={handleMoreClick} />
      <InfoTooltip isOpen={false} onClose={closePopup} text={{}} />
    </Content>
  );
}
