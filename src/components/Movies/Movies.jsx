import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MovieCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import More from "./More/More";

function Movies() {
  return(
  <>
    <Header/>
    <SearchForm/>
    <MovieCardList/>
    <More/>
    <Footer/>
  </>);
}

export default Movies;
