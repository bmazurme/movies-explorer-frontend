import React from "react";
import Switcher from "../Switcher/Switcher";

function SearchForm(props) {
  return(
    <section className="search" >
      <div className="form search-form">
        <form className="search-form__box" 
              onSubmit={props.handleSubmit}>
          <input
            onChange={props.handleChange}
            value={props.data.searchWord}
            name="searchWord"
            type="text"
            className="input search-form__input"
            placeholder="Фильм"
          />
          <button
            type="submit"
            className="button search-form__button"/>
        </form>
        <div className="switcher">
          <p className="switcher__label">
            Короткометражки
          </p>
          <Switcher
            shortFilm={props.data.shortFilm}
            handlerSwitchClick={props.handlerSwitchClick}
          />
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
