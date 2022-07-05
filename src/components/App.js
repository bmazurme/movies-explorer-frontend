import {
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Movies from './Movies/Movies';
import SavedMovies from './Movies/SavedMovies';
import Profile from './Profile/Profile';
import Signin from './Sign/Signin';
import Signup from './Sign/Signup';
import PageNotFound from './PageNotFound/PageNotFound';
import Main from './Main/Main';
import auth from '../utils/MainApi';
import api from '../utils/MoviesApi';
import { CurrentUserContext } from '../context/CurrentUserContext';
import React, { useState, useEffect } from 'react';

function App() {
  const history = useHistory();
  const [shortFilm, setShortFilm] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [store, setStore] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [notFoundMovies, setNotFoundMovies] = React.useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [allMovies, setAllMovies] = React.useState([]);
  
  const resetResultMessage = () => {
    setResultMessage('');
  };
  function handlerClick() {
    setShortFilm(!shortFilm);

    if (!shortFilm) {
      const short = store.filter(x => x.duration <= 40);
      setMovies(short);
    } else {
      setMovies(store);
    }
  }

  // React.useEffect(() => {
  //   tokenCheck();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [loggedIn]);

  // function checkToken() {
  //   const jwt = localStorage.getItem('jwt');
  //   if (jwt) {
  //     auth.checkToken(jwt)
  //       .then((res) => {
  //         setCurrentUser(res);
  //         setIsLoggedIn(true);
  //         console.log(res);
  //         // setEmail(res.email);
  //         // history.push(`/`);
  //       })
  //       .catch((err) => {
  //         if (err.status === 401) {
  //           console.log("401 — Токен не передан или передан не в том формате.");
  //         }
  //         console.log(err);
  //       });
  //   }
  // }
  const tokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      console.log(jwt)
      auth.checkToken(jwt)
        .then((res) => {
          if (res) {

            setCurrentUser(res);
            setLoggedIn(true);
            console.log(loggedIn);
            //history.push('/movies');

            
          }
        })
        .catch(err => {
          console.log('Переданный токен некорректен.');
          setLoggedIn(false);
        });
    }
  };

  React.useEffect(() => {
    tokenCheck();
  }, [loggedIn]);

  React.useEffect(() => {
    Promise.all([auth.getUser(), api.getMovies()])
      .then(([userData, movies]) => {
        setCurrentUser(userData);
        //localStorage.setItem('movies', JSON.stringify(movies))
        // setStore(movies);
        //console.log(movies);
        //console.log(movies);
        // setMovies(movies);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  function handleSignUp({email, password, name}) {
    auth.signUp({email, password, name})
      .then((res) => {
        //setIsInfoToolTipPopupOpen(true);
        //setIsSuccess(true);
        //console.log(res);
        history.push('/signin');
        
      })
      .catch((err) => {
        if (err.status === 400) {
          console.log("400 - некорректно заполнено одно из полей.");
        }
        console.log('400 - некорректно заполнено одно из полей');
        console.log(err);
        //setIsInfoToolTipPopupOpen(true);
        //setIsSuccess(false);
      });
  }

  function handleSignIn({email, password}) {
    auth.signIn({email, password})
      .then((res) => {
        localStorage.setItem('jwt', res.token);        
        setLoggedIn(true);
        history.push('/movies');
        return;
      })
      // .then(() => {
      //   tokenCheck();
      //   history.push('/movies');
      // })
      .catch((err) => {
        //setIsInfoToolTipPopupOpen(true); 
        //setIsSuccess(false); 
        if (err.status === 400) {
          console.log("400 - не передано одно из полей.");
        } else if (err.status === 401) {
          console.log("401 - пользователь с email не найден.");
        }
        console.log(err);
      });
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setCurrentUser({});
    history.push('/signin');
  }


  function handleSearchMovies(key) {
    setIsLoading(true);
    setMovies([]);
    setNotFoundMovies(false);

      if (allMovies.length === 0) {
        api.getMovies()
          .then((movies) => {
              console.log(movies);
              setAllMovies(movies)
              const searchResult = handleSearchMovies(movies, key)
              if (searchResult.length === 0) {
                setNotFoundMovies(true);
                setMovies([]);
              } else {
                localStorage.setItem('movies', JSON.stringify(searchResult))
                setMovies(JSON.parse(localStorage.getItem('movies')));
                setNotFoundMovies(false);
              }})
          .catch((err) => {
            console.log(`Ошибка ${err}, попробуйте еще раз`)
          })
          .finally(() => {
            setIsLoading(false);
          })
      } else {
        console.log(allMovies);
        const searchResult = handleSearchMovies(allMovies, key)
        if (searchResult.length === 0) {
          setNotFoundMovies(true);
          setMovies([]);
          setIsLoading(false);
        } else if(searchResult.length !== 0) {
          localStorage.setItem('movies', JSON.stringify(searchResult));
          setMovies(JSON.parse(localStorage.getItem('movies')));
          setIsLoading(false);
          setNotFoundMovies(false);
        }
      }

      console.log(movies);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <ProtectedRoute 
          component={Movies}   
          path='/movies'
          loggedIn={true}   
          handlerClick={handlerClick}  
          onSearchMovies={handleSearchMovies}
          // shortFilm={shortFilm} 
        />
        <ProtectedRoute
          loggedIn={true}
          component={Profile}
          path='/profile'
          // {...currentUser}
          // handleSignOut={handleSignOut}
          // history={history}
        />
        <ProtectedRoute
          component={SavedMovies}
          loggedIn={true}
          path='/saved-movies'
          handlerClick={handlerClick}  
          // movies={movies}
          // urrentUser={currentUser}                       
          // shortFilm={shortFilm}    
        />
        <Route exact path='/'>
          <Main/>
        </Route>
        {/* <Route exact path='/movies'>
          <Movies />
        </Route> */}
        {/* <Route exact path='/saved-movies'>
          <SavedMovies />
        </Route> */}
        {/* <Route exact path='/profile'>
          <Profile />
        </Route> */}
        <Route exact path='/signin'>
          <Signin 
            signIn={handleSignIn}
            resetMessage={resetResultMessage}
          />
        </Route>
        <Route exact path='/signup'>
          <Signup signUp={handleSignUp} />
        </Route>

        <Route path="*">
          <PageNotFound/>
        </Route> 
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
