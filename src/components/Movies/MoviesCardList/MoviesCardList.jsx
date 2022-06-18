import MovieCard from "../MoviesCard/MoviesCard";

function MovieCardList() {
  const cards = [
    0,1,2,3,4,5,6,7,8,9,11,12,13,14,15
  ];
  return(
    <section className="card-list">
      {cards.map((card, index) => <MovieCard key={index}/>)}
    </section>
  );
}

export default MovieCardList;
