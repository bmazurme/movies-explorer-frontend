import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MovieCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

function Movies() {
  return(
  <>
    <Header/>
    <SearchForm/>
    <MovieCardList/>
    <Footer/>
  </>);
}

export default Movies;
