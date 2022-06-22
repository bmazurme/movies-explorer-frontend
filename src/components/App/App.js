import {
  Route,
  Switch,
} from "react-router-dom";
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Signin from '../Sign/Signin';
import Signup from '../Sign/Signup';
import PageNotFound from '../PageNotFound/PageNotFound';
import Main from '../Main/Main';

import { useHistory } from "react-router-dom";
import auth from "../../utils/MainApi";
import api from "../../utils/MoviesApi";


import React from "react";
import { Redirect } from "react-router-dom";

function App() {
  const history = useHistory();
  const [email, setEmail] = React.useState('');
  const [shortFilm, setShortFilm] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [store, setStore] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  function handlerClick() {
    setShortFilm(!shortFilm);

    if (!shortFilm) {
      const short = store.filter(x => x.duration <= 40);
      setMovies(short);
    } else {
      setMovies(store);
    }
  }

  React.useEffect(() => {
    Promise.all([auth.getUser(), api.getMovies()])
      .then(([userData, movies]) => {
        setCurrentUser(userData);
        //setMovies(movies);
        setStore(movies);
        console.log(userData);
        console.log(movies);
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
        console.log(res);
        history.push("/signin");
        
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
        localStorage.setItem("jwt", res.token);
        // setIsLoggedIn(true);
        // setEmail(email);
        console.log(res.token);
        history.push("/");
        <Redirect to='/moovies' />
      })
      .catch((err) => {
        // setIsInfoToolTipPopupOpen(true); 
        // setIsSuccess(false); 

        if (err.status === 400) {
          console.log("400 - не передано одно из полей.");
        } else if (err.status === 401) {
          console.log("401 - пользователь с email не найден.");
        }
        console.log(err);
      });
  }
  function handleSignOut() {
    localStorage.removeItem("jwt");
    //setIsLoggedIn(false);
    setCurrentUser({});
    setEmail('');
    history.push("/sign-in");
  }
  return (
      <Switch>
        <Route exact path='/'>
          <Main/>
        </Route>
        <Route path='/movies'>
          <Movies
            shortFilm={shortFilm}
            handlerClick={handlerClick}
            movies={movies}
          />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies/>
        </Route>
        <Route path='/profile'>
          <Profile
            {...currentUser}
            handleSignOut={handleSignOut}
          />
        </Route>
        <Route path='/signin'>
          <Signin
            signIn={handleSignIn}
          />
        </Route>
        <Route path='/signup'>
          <Signup
            signUp={handleSignUp}
          />
        </Route>
        <Route path="*">
          <PageNotFound/>
        </Route>
    </Switch>
  );
}

export default App;
