import React, { useState } from 'react';

export default function Switcher({ handlerSwitchClick }:
  { handlerSwitchClick: () => void }) {
  const [shortFilm, setShortFilm] = useState(false);
  const onClickHandler = () => {
    setShortFilm(!shortFilm);
    handlerSwitchClick();
  };
  return (
    <button
      type="button"
      aria-label="Switch"
      className={`${shortFilm ? 'switcher__button_on' : 'switcher__button'}`}
      onClick={onClickHandler}
    />
  );
}
