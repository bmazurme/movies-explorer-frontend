function SearchForm() {
  return(
    <section className="search-form">
      <form className="form search-form__form">
        <input type="text" className="input search-form__input"/>
          <button type="submit" className="button search-form__button"></button>
          <div className="switcher">
            <button type="click" className="button switcher__button"/>
            <p className="switcher__label">Короткометражки</p>
          </div>
      </form>
    </section>
  );
}

export default SearchForm;
