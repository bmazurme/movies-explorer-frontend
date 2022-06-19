import MovieCard from "../MoviesCard/MoviesCard";
import { cards } from "./cards";

function MovieCardList() {
  return(
    <section className="card-list">
      {cards.map((card, index) => <MovieCard key={index}/>)}
    </section>
  );
}

export default MovieCardList;
