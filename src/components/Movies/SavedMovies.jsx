import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MovieCardList from './MoviesCardList/MoviesCardList';
import Progress from '../Progress/Progress';
import InfoTooltip from '../Popup/Popup';
import NotFound from './NotFound/NotFound';
import More from './More/More';
import auth from '../../utils/MainApi';
import findMovie from './handles/findFilms';
import combineSavedMovies from './handles/combineSavedMovies';
import { useWindowDimensions, getVisualProps } from './handles/getWindowDimensions';
import {
  ERROR_TITLE_NOT_FOUND,
  ERROR_DESCRIPTION_NOT_FOUND,
  ERROR_TITLE_DEFAULT,
} from '../../utils/constants';

function SavedMovies() {
  let settings = JSON.parse(localStorage.getItem('settings')) 
    ? JSON.parse(localStorage.getItem('settings')) 
    : false;
  const [data, setData] = React.useState({
    searchWord: '',
    shortFilm: settings,
  });
  const curr = getVisualProps(useWindowDimensions());
  const [isLoading, setIsLoading] = React.useState(false);
  const [isMore, setIsMore] = React.useState(true);
  const [source, setSource] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);
  const [moviesRaw, setMoviesRaw] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [slice, setSlice] = React.useState(curr.slice);
  const [isOpen, setIsOpen] = React.useState(false);
  const [textError, setTextError] = React.useState({title: '', description: ''});

  function closePopup() {
    setIsOpen(false);
    setTextError('');
  } 

  function handleMoreClick() {
    if (data.shortFilm) {
      setMovies(moviesRaw.filter(x => x.duration <= 40).slice(0, slice + curr.step));
      setSlice(slice + curr.step);
      if (slice + curr.step >= moviesRaw.filter(x => x.duration <= 40).length) {
        setIsMore(false);
      }
    } else {
      setMovies(moviesRaw.slice(0, slice + curr.step));
      setSlice(slice + curr.step);
      if (slice + curr.step >= moviesRaw.length) {
        setIsMore(false);
      }
    }
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setData({...data, [name]: value,});
  }

  function handleLikeClick(props) {
    if (props.isLiked) {
      auth
        .deleteMovie(props._id)
        .then(res => {
          const arr = movies.filter(x => x.movieId !== props.movieId);
          setMovies(arr);
        })
        .catch((error) => console.log(error));
    }
  }

  function handlerSwitchClick() {
    setData({...data, shortFilm: !data.shortFilm,});
    localStorage.setItem('settings', JSON.stringify(!data.shortFilm));
    setSlice(curr.slice);

    if (!data.shortFilm) {
      setMovies(moviesRaw.filter(x => x.duration <= 40).slice(0, slice));
      (slice + curr.step >= moviesRaw.filter(x => x.duration <= 40).length) 
        ? setIsMore(false)
        : setIsMore(true);
    } else {
      setMovies(moviesRaw.slice(0, slice));
      (slice + curr.step >= moviesRaw.length) ? setIsMore(false) : setIsMore(true); 
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    new Promise((resolve, reject) => {
      const result = findMovie(data, source);
      setIsMore(true);
      if (result.length === 0) {
        setIsNotFound(true);
        setIsMore(false);
      }
      
      if (result.length > 0) {
        console.log(result);
        setIsNotFound(false);
        setMoviesRaw(result);
        setMovies(result.slice(0,slice));
        
        if (data.shortFilm) {
          setMovies(result.filter(x => x.duration <= 40).slice(0,slice));
          if (slice + curr.step >= result.slice(0,slice).length) {
            setIsMore(false);
          } 
        } else {
          setMovies(result.slice(0,slice));
          if (slice + curr.step >= result.length) {
            setIsMore(false);
          }
        }
      }
      resolve(setIsLoading(false));
      reject((err)=> {
        setIsOpen(true);
        setTextError({title: ERROR_TITLE_DEFAULT, description: err});});
      // setTimeout(()=>resolve(setIsLoading(false)), 1000)  
    });
  }

  React.useEffect(() => {
    setIsLoading(true);
    auth.getMovies()
      .then((moviesDTO) => {
        const _movies = combineSavedMovies(moviesDTO);
        setSource(_movies);
        setMoviesRaw(_movies);
        setMovies(_movies.slice(0,slice));

        if (data.shortFilm) {
          setMovies(_movies.filter(x => x.duration <= 40).slice(0,slice));
          if (slice + curr.step >= _movies.slice(0,slice).length) {
            setIsMore(false);
          }
        } else {
          setMovies(_movies.slice(0,slice));
          if (slice + curr.step >= _movies.length) {
            setIsMore(false);
          }
        }
        setIsLoading(false);
      })
    .catch(err => {
      setIsOpen(true);
      setTextError({title: ERROR_TITLE_DEFAULT, description: err});
      console.log(err);
    });
  }, []);

  return(
    <>
      <Header/>
      <SearchForm
        data={data}
        handleChange={handleChange}
        handlerSwitchClick={handlerSwitchClick}
        handleSubmit={handleSubmit}
      />
      {isLoading
      ? <Progress />
      : <>
        {isNotFound 
          ? <NotFound
            title={ERROR_TITLE_NOT_FOUND}
            description={`${ERROR_DESCRIPTION_NOT_FOUND}${data.searchWord}`}
            /> 
          : <MovieCardList
              handleLikeClick={handleLikeClick}
              movies={movies}
            />}
        {isMore ? <More handleMoreClick={handleMoreClick}/> : ''}
      </>}
      <InfoTooltip 
        isOpen={isOpen}
        onClose={closePopup}
        text={textError}
      />
      <Footer/>
    </>
  );
}

export default SavedMovies;
