import React from 'react';
import Switcher from '../Switcher';

export default function SearchForm({ handleSubmit, handleChange, handleSwitch }
  : {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSwitch: () => void,
  }) {
  return (
    <section className="search">
      <div className="form search-form">
        <form className="search-form__box" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="searchWord"
            type="text"
            className="input search-form__input"
            placeholder="Фильм"
          />
          <button aria-label="Search" type="submit" className="button search-form__button" />
        </form>
        <div className="switcher">
          <p className="switcher__label">Короткометражки</p>
          <Switcher handlerSwitchClick={handleSwitch} />
        </div>
      </div>
    </section>
  );
}
