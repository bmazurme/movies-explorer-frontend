import './App.css';
import {
  Route,
  Switch,
} from "react-router-dom";
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import PageNotFound from '../PageNotFound/PageNotFound';
import AboutProject from '../Main/AboutProject/AboutProject';

function App() {
  return (
      <Switch>
        <Route exact path='/'>
          <AboutProject/>
        </Route>
        <Route path='/movies'>
          <Movies/>
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies/>
        </Route>
        <Route path='/profile'>
          <Profile/>
        </Route>
        <Route path='/signin'>
          <Signin/>
        </Route>
        <Route path='/signup'>
          <Signup/>
        </Route>
        <Route path="*">
          <PageNotFound/>
        </Route>
    </Switch>
  );
}

export default App;
