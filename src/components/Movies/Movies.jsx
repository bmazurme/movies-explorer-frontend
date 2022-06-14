import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MovieCardList from "./MoviesCardList/MoviesCardList";

function Movies() {
  return(
  <>
    <Header/>
    <h2>Movies</h2>
    <MovieCardList/>
    <Footer/>
  </>);
}

export default Movies;