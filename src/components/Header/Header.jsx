import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import React from "react";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  function handlerClick() {
    setIsOpen(!isOpen);
  }

  return(
    <section className="header">
      <Logo/>
      <Navigation
        isOpen={isOpen}
        handlerClick={handlerClick}
      />
    </section>
  );
}

export default Header;