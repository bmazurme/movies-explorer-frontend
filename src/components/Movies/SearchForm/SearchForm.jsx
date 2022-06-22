import Switcher from "../Switcher/Switcher";

function SearchForm(props) {
  return(
    <section className="search">
      <div className="form search-form">
        <form className="search-form__box">
          <input type="text" className="input search-form__input" placeholder="Фильм"/>
          <button type="submit" className="button search-form__button"/>
        </form>
        <div className="switcher">
          <p className="switcher__label">
            Короткометражки
          </p>
          <Switcher
            shortFilm={props.shortFilm}
            handlerClick={props.handlerClick}
          />
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
