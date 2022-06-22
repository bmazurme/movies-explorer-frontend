import MovieCard from "../MoviesCard/MoviesCard";

function MovieCardList(props) {
  return(
    <section className="card-list">
      {props.movies.map((movie, index) => 
        <MovieCard
          key={index}
          {...movie}
        />
      )}
    </section>
  );
}

export default MovieCardList;
