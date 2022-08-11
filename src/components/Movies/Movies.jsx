import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MovieCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import More from './More/More';
import React, {useContext} from 'react';
import api from '../../utils/MoviesApi';
import auth from '../../utils/MainApi';
import Progress from '../Preloader/Preloader';
import getMovie from './handles/getMovie';
import findMovie from './handles/findFilms';
import NotFound from './NotFound/NotFound';
import InfoTooltip from '../Popup/Popup';
import combineMovies from './handles/combineMovies';
import {useWindowDimensions, getVisualProps } from './handles/getWindowDimensions';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import {
  ERROR_TITLE_NOT_FOUND,
  ERROR_DESCRIPTION_NOT_FOUND,
  ERROR_TITLE_DEFAULT,
  SHORT_MOVIE_DURATION,
  STORE_SHORT_FILM_NAME,
  STORE_MOVIES,
  STORE_TOKEN_NAME,
  STORE_SOURCE,
  SEARCH_WORD_MOVIE,
} from '../../utils/constants';


function Movies(props) {
  const currentUser = useContext(CurrentUserContext);
  let settings = JSON.parse(localStorage.getItem(STORE_SHORT_FILM_NAME)) 
    ? JSON.parse(localStorage.getItem(STORE_SHORT_FILM_NAME)) 
    : false;
  let searchWordMovie = JSON.parse(localStorage.getItem(SEARCH_WORD_MOVIE)) 
    ? JSON.parse(localStorage.getItem(SEARCH_WORD_MOVIE)) 
    : '';

  const [data, setData] = React.useState({
    searchWord: searchWordMovie,
    shortFilm: settings,
  });

  const curr = getVisualProps(useWindowDimensions());
  const [isLoading, setIsLoading] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);
  const [isMore, setIsMore] = React.useState(true);
  const [source, setSource] = React.useState([]);
  const [moviesRaw, setMoviesRaw] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [slice, setSlice] = React.useState(curr.slice);
  const [isOpen, setIsOpen] = React.useState(false);
  const [textError, setTextError] = React.useState({title: '', description: ''});

  function closePopup() {
    setIsOpen(false);
    setTextError({
      title: '',
      description: ''
    });
  } 

  function handleMoreClick() {
    if (data.shortFilm) {
      setMovies(moviesRaw.filter(x => x.duration <= SHORT_MOVIE_DURATION).slice(0, slice + curr.step));
      setSlice(slice + curr.step);
      if (slice + curr.step >= moviesRaw.filter(x => x.duration <= SHORT_MOVIE_DURATION).length) {
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

  function handleLikeClick(props) {
    const movie = getMovie(props);
    const moviesSource = JSON.parse(localStorage.getItem(STORE_SOURCE));

    if (!props.isLiked) {
      auth
        .postMovie(movie)
        .then(res => {
          const arr = movies.map(x => {
            if (x.id === props.id) {
              return {
                ...x,
                isLiked: true,
                _id: res._id
              }
            } else {
              return x;
            }});
          setMovies(arr);

          const newArr = moviesSource.map(x => {
            if (x.id === props.id) {
              return {
                ...x,
                isLiked: true
              }
            } else {
              return x;
            } 
          })
          localStorage.setItem(STORE_SOURCE, JSON.stringify(newArr)); // сохраняем результат
          localStorage.setItem(STORE_MOVIES, JSON.stringify(arr));
        })
        .catch((err) => {
          setIsOpen(true);
          setTextError({title: ERROR_TITLE_DEFAULT, description: err});
          console.log(err);
        });
    }
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setData({...data, [name]: value,});
  }

  function handlerSwitchClick() {
    setData({...data, shortFilm: !data.shortFilm,});
    localStorage.setItem(STORE_SHORT_FILM_NAME, JSON.stringify(!data.shortFilm));
    setSlice(curr.slice);

    if (!data.shortFilm) {
      setMovies(moviesRaw.filter(x => x.duration <= SHORT_MOVIE_DURATION).slice(0, slice));
      (slice + curr.step >= moviesRaw.filter(x => x.duration <= SHORT_MOVIE_DURATION).length) 
        ? setIsMore(false)
        : setIsMore(true);
    } else {
      setMovies(moviesRaw.slice(0, slice));
      (slice + curr.step >= moviesRaw.length) ? setIsMore(false) : setIsMore(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem(SEARCH_WORD_MOVIE, JSON.stringify(data.searchWord));

    setIsLoading(true);
    new Promise((resolve, reject) => {
      const result = findMovie(data, source);
      setIsMore(true);
      if (result.length === 0) {
        setIsNotFound(true);
        setIsMore(false);
      }
      
      if (result.length > 0) {
        setIsNotFound(false);
        setMoviesRaw(result);
        localStorage.setItem(STORE_MOVIES, JSON.stringify(result)); // сохраняем результат
        setMovies(result.slice(0,slice));
        
        if (data.shortFilm) {
          setMovies(result.filter(x => x.duration <= SHORT_MOVIE_DURATION).slice(0,slice));
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
    });
  }

  React.useEffect(() => {
    setIsLoading(true);
    const jwt = localStorage.getItem(STORE_TOKEN_NAME);
    const moviesSource = localStorage.getItem(STORE_SOURCE);
    const moviesFromStore = localStorage.getItem(STORE_MOVIES);

    if (moviesSource) {
      const mdata = JSON.parse(moviesSource);
      setSource(mdata);

      let savedMovies = [];
      if (moviesFromStore) {
        savedMovies = JSON.parse(moviesFromStore);
        setMoviesRaw(savedMovies); //  -> для отображения берем из стора - записываем после поиска
        setMovies(savedMovies);
      }
      if (data.shortFilm) {
        setMovies(savedMovies.filter(x => x.duration <= SHORT_MOVIE_DURATION).slice(0,slice));
        if (slice + curr.step >= savedMovies.slice(0,slice).length) {
          setIsMore(false);
        } 
      } else {
        setMovies(savedMovies.slice(0,slice));
        if (slice + curr.step >= savedMovies.length) {
          setIsMore(false);
        }
      }
      setIsLoading(false);
    } else {
      Promise.all([ api.getMovies(), auth.getMovies(jwt)])
        .then(([moviesDTO, myMoviesDTO]) => {
          let savedMovies = [];
          const combinedMovies = combineMovies(moviesDTO, myMoviesDTO.filter(x => x.owner === currentUser?._id));//;
          localStorage.setItem(STORE_SOURCE, JSON.stringify(combinedMovies));
          setSource(combinedMovies); // -> полученные с сервера не трогаем - используем для поиска
          
          if (data.shortFilm) {
            setMovies(savedMovies.filter(x => x.duration <= SHORT_MOVIE_DURATION).slice(0,slice));
            if (slice + curr.step >= savedMovies.slice(0,slice).length) {
              setIsMore(false);
            } 
          } else {
            setMovies(savedMovies.slice(0,slice));
            if (slice + curr.step >= savedMovies.length) {
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
    }
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
      <InfoTooltip 
        isOpen={isOpen}
        onClose={closePopup}
        text={textError}
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
      <Footer/>
    </>
  );
}

export default Movies;
