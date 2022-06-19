import React from "react";

function Switcher() {
  const [isOpen, setIsOpen] = React.useState(false);
  function handlerClick() {
    setIsOpen(!isOpen);
  }
  return(
    <button
      type="button"
      className={`button  
        ${isOpen 
          ? 'switcher__button_on' 
          : 'switcher__button'}
        `}
      onClick={handlerClick}
    />
  );
}

export default Switcher;
