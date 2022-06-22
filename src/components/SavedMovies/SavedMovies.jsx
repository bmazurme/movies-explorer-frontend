import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MovieCardList from "./MoviesCardList/MoviesCardList";

function SavedMovies() {
  return(
    <>
    <Header/>
    <SearchForm/>
    <MovieCardList/>
    <Footer/>
    </>
  );
}

export default SavedMovies;
