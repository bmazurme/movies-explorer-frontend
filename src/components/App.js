import {
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Movies from './Movies/Movies';
import SavedMovies from './Movies/SavedMovies';
import Profile from './Profile/Profile';
import ProfileEdit from './Profile/ProfileEdit';
import Signin from './Sign/Signin';
import Signup from './Sign/Signup';
import PageNotFound from './PageNotFound/PageNotFound';
import Main from './Main/Main';
import auth from '../utils/MainApi';
import api from '../utils/MoviesApi';
import { CurrentUserContext } from '../context/CurrentUserContext';
import React from 'react';
import { ERROR_TITLE_DEFAULT } from '../utils/constants';

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [textError, setTextError] = React.useState({title: '', description: ''});

  function closePopup() {
    setIsOpen(false);
    setTextError({title: '', description: ''});
  } 

  const tokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      auth.checkToken(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);
            history.push('/movies');
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
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  function handleSignUp({email, password, name}) {
    auth
      .signUp({email, password, name})
      .then((res) => {
        history.push('/signin');
      })
      .catch((err) => {
        if (err.status === 400) {
          setTextError({
            title: ERROR_TITLE_DEFAULT, 
            description: 'некорректные данные'
          });
          setIsOpen(true);
        }
        console.log(err);
      });
  }

  function handleUpdateUser({email, name}) {
    auth
      .patchUser({email, name})
      .then((res) => {
        // setIsInfoToolTipPopupOpen(true);
        // setIsSuccess(true);
        // console.log(res);
        // history.push('/signin');
      })
      .catch((err) => {
        if (err.status === 400) {
          setIsOpen(true);
          setTextError({
            title: ERROR_TITLE_DEFAULT, 
            description: 'некорректные данные'
          });
        }
        console.log(err);
      });
  }

  function handleSignIn({email, password}) {
    auth
      .signIn({email, password})
      .then((res) => {
        localStorage.setItem('jwt', res.token);        
        setLoggedIn(true);
        history.push('/movies');
        return;
      })
      .catch((err) => { 
        if (err === 'Ошибка 401') {
          setIsOpen(true);
          setTextError({
            title: ERROR_TITLE_DEFAULT, 
            description: 'неправильный логин или пароль'}
            );
        }
        console.log(err);
      });
  }

  function handleLogOut(e) {
    e.preventDefault();
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setCurrentUser({});
    history.push('/signin');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <ProtectedRoute 
          loggedIn={loggedIn}   
          component={Movies}   
          path='/movies'
        />
        <ProtectedRoute
          loggedIn={loggedIn}
          component={Profile}
          path='/profile'
          handleLogOut={handleLogOut}
          
        />
        <ProtectedRoute
          loggedIn={loggedIn}
          component={ProfileEdit}
          handleUpdateUser={handleUpdateUser}
          path='/profile-edit'
        />
        <ProtectedRoute
        loggedIn={loggedIn}
          component={SavedMovies}
          path='/saved-movies' 
        />
        <Route exact path='/'>
          <Main/>
        </Route>
        <Route exact path='/signin'>
          <Signin 
            signIn={handleSignIn}
            isOpen={isOpen}
            onClose={closePopup}
            text={textError}
          />
        </Route>
        <Route exact path='/signup'>
          <Signup 
            signUp={handleSignUp} 
            isOpen={isOpen}
            onClose={closePopup}
            text={textError}
          />
        </Route>
        <Route path="*">
          <PageNotFound/>
        </Route> 
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
