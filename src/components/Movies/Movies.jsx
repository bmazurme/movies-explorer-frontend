import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MovieCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import More from "./More/More";

function Movies(props) {
  return(
  <>
    <Header/>
    <SearchForm
      handlerClick={props.handlerClick}
      shortFilm={props.shortFilm}
    />
    <MovieCardList
      movies={props.movies}
    />
    <More/>
    <Footer/>
  </>);
}

export default Movies;
