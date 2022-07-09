import { NavLink } from "react-router-dom";

function Logo() {
  return(
    <NavLink className="logo" to="/">      
      <div className="logo__icon"/>
    </NavLink>
  );
}

export default Logo;
