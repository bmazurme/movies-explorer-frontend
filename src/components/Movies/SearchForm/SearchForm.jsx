function SearchForm() {
  return(
    <section className="search">
      <form className="form search-form">

      <div className="search-form__box">
        <input type="text" className="input search-form__input" placeholder="Фильм"></input>
        <button type="submit" className="button search-form__button"></button>
      </div>


        <div className="switcher">
          <p className="switcher__label">Короткометражки</p>
          <button type="click" className="button switcher__button"/>
        </div>



      </form>
    </section>
  );
}

export default SearchForm;
