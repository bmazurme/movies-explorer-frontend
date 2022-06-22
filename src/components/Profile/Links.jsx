function Links({links}) {
  return(
    <ul className="profile__links">
    {links.map((link, index) =>
      <li key={index}>
        <a className={`profile__link ${link.class}`} href={link.url}>
          {link.label}
        </a>
      </li>
    )}
  </ul>
  );
}

export default Links;
