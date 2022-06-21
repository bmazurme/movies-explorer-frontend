import ProfileButton from "../ProfileButton/ProfileButton";

function Navigation(props) {
  return(
    <>
      <div className={`navigation 
            ${props.isOpen 
            ? 'navigation_opened' 
            : ''}`}>
        <ul
          onClick={props.handlerClick} 
          className={`navigation__links 
            ${props.isOpen 
              ? 'navigation__links_opened' 
              : ''}`
            }
        >
          <li>
            <a className="navigation__link navigation__link_active navigation__link_home"
              href="/">
                Главная
              </a>
          </li>
          <li>
            <a className="navigation__link navigation__link_active"
              href="/movies">
                Фильмы
              </a>
          </li>
          <li>
            <a className="navigation__link" 
              href="/saved-movies">
                Сохранённые фильмы
            </a>
          </li>
          <ProfileButton isOpen={props.isOpen}/>
        </ul>
      </div>
      <button 
        onClick={props.handlerClick}
        type="click" 
        className={`button navigation__button
          ${props.isOpen 
          ? 'navigation__button_open' 
          : ''}
        `}
      />
    </>
  );
}

export default Navigation;