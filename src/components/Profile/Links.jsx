import { NavLink } from "react-router-dom";

function Links({links}) {
  return(
    <ul className="profile__links">
    {links.map((link, index) =>
      <li key={index}>
        <NavLink className={`profile__link ${link.class}`} to={link.url}>
          {link.label}
        </NavLink>
      </li>
    )}
  </ul>
  );
}

export default Links;
