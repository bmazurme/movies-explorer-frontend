import Switcher from "../Switcher/Switcher";

function SearchForm() {
  return(
    <section className="search">
      <form className="form search-form">
        <div className="search-form__box">
          <input type="text" className="input search-form__input" placeholder="Фильм"/>
          <button type="submit" className="button search-form__button"/>
        </div>
        <div className="switcher">
          <p className="switcher__label">
            Короткометражки
          </p>
          <Switcher/>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
