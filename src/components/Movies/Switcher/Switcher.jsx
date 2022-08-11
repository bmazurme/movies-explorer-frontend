import React from 'react';

function Switcher(props) {
  return(
    <button
      type='button'
      className={`button  
        ${props.shortFilm 
          ? 'switcher__button_on' 
          : 'switcher__button'}
        `}
      onClick={props.handlerSwitchClick}
    />
  );
}

export default Switcher;
