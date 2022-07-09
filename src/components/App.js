import {
  Route,
  Switch,
  useHistory,
  useLocation,
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
import { CurrentUserContext } from '../context/CurrentUserContext';
import React from 'react';
import {
  ERROR_TITLE_DEFAULT,
  STORE_TOKEN_NAME,
  STORE_MOVIES,
  STORE_SHORT_FILM_NAME,
  STORE_SHORT_FILM_SAVED_NAME,
  STORE_SOURCE,
  MOVIES_URL,
  PROFILE_URL,
  PROFILE_EDIT_URL,
  SAVED_MOVIES_URL,
  MAIN_URL,
  SIGNIN_URL,
  SIGNUP_URL,
  PATHS
} from '../utils/constants';

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [textMessage, setTextMessage] = React.useState({title: '', description: ''});
  const location = useLocation();

  function closePopup() {
    setIsOpen(false);
    setTextMessage({title: '', description: ''});
  }

  function checkToken(jwt) {
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);
            PATHS.forEach(path => {
              if (location.pathname === path) {
                history.push(location.pathname);
              }
            });
            if (location.pathname === SIGNIN_URL 
              || location.pathname === SIGNUP_URL) {
                history.push(MOVIES_URL);
            }
          }
        })
        .catch(err => {
          console.log('Переданный токен некорректен.');
          setLoggedIn(false);
          console.log(err);
        });
    }
  }
  React.useEffect(() => {
    const jwt = localStorage.getItem(STORE_TOKEN_NAME);
    checkToken(jwt);
  }, []);

  function handleSignUp({email, password, name}) {
    auth
      .signUp({email, password, name})
      .then(async (res) => {
        setCurrentUser(res);
        setTextMessage({
          title: '', 
          description: 'Вы успешно зарегистрированы'
        });
        setIsOpen(true);
      })
      .then(()=>
        setTimeout(() => {
          setIsOpen(false);
          handleSignIn({email, password})
        }, 1500) 
      )
      .catch((err) => {
        let errorDescription = 'что-то пошло не так...';
        if (err === 'Ошибка 409') {
          errorDescription = 'пользователь с такими данными существует'
        }
        setTextMessage({
          title: ERROR_TITLE_DEFAULT, 
          description: errorDescription
        });
        setIsOpen(true);
        console.log(err);
      });
  }

  function handleSignIn({email, password}) {
    auth
      .signIn({email, password})
      .then((res) => {
        setLoggedIn(true);
        localStorage.setItem(STORE_TOKEN_NAME, res.token);  
        checkToken(res.token); 
      })
      .then(history.push(MOVIES_URL))
      .catch((err) => { 
        if (err === 'Ошибка 401') {
          setIsOpen(true);
          setTextMessage({
            title: ERROR_TITLE_DEFAULT, 
            description: 'неправильный логин или пароль'
          });
        }
        console.log(err);
      });
  }

  function handleUpdateUser({email, name}) {
    auth
      .patchUser({email, name})
      .then((res) => {
        setTextMessage({
          title: '', 
          description: 'данные успешно обновлены'
        });
        setIsOpen(true);
        setTimeout(() => {
          setIsOpen(false);
        }, 2000);   
      })
      .catch((err) => {
        if (err.status === 400) {
          setIsOpen(true);
          setTextMessage({
            title: ERROR_TITLE_DEFAULT, 
            description: 'некорректные данные'
          });
        }
        console.log(err);
      });
  }

  function handleLogOut(e) {
    e.preventDefault();
    localStorage.removeItem(STORE_TOKEN_NAME);
    localStorage.removeItem(STORE_MOVIES);
    localStorage.removeItem(STORE_SHORT_FILM_NAME);
    localStorage.removeItem(STORE_SHORT_FILM_SAVED_NAME);
    localStorage.removeItem(STORE_SOURCE);
    setLoggedIn(false);
    setCurrentUser({});
    history.push(MAIN_URL);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path={SIGNIN_URL}>
          <Signin 
            signIn={handleSignIn}
            isOpen={isOpen}
            onClose={closePopup}
            text={textMessage}
          />
        </Route>
        <Route exact path={SIGNUP_URL}>
          <Signup 
            signUp={handleSignUp} 
            isOpen={isOpen}
            onClose={closePopup}
            text={textMessage}
          />
        </Route>
        <ProtectedRoute
          loggedIn={loggedIn}   
          component={Movies}   
          exact path={MOVIES_URL}
        />
        <ProtectedRoute
          loggedIn={loggedIn}
          component={SavedMovies}
          exact path={SAVED_MOVIES_URL} 
        />
        <ProtectedRoute
          loggedIn={loggedIn}
          component={Profile}
          exact path={PROFILE_URL}
          handleLogOut={handleLogOut}
        />
        <ProtectedRoute
          loggedIn={loggedIn}
          component={ProfileEdit}
          handleUpdateUser={handleUpdateUser}
          isOpen={isOpen}
          onClose={closePopup}
          text={textMessage}
          exact path={PROFILE_EDIT_URL}
        />
        <Route exact path={MAIN_URL}>
          <Main loggedIn={loggedIn}/>
        </Route>
        <Route exact path='*'>
          <PageNotFound />
        </Route> 
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
