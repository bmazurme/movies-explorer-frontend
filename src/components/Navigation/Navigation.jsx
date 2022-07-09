import ProfileButton from '../ProfileButton/ProfileButton';
import { NavLink } from 'react-router-dom';
import React from 'react';

function Navigation(props) {
  const [value, setValue] = React.useState(1);
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return(
    <>
      <div className={`navigation 
        ${props.isOpen 
        ? 'navigation_opened' 
        : ''}`}
      >
        <ul
          onClick={props.handlerClick} 
          className={`navigation__links 
            ${props.isOpen 
              ? 'navigation__links_opened' 
              : ''}`
            }
        >
          <li>
            <NavLink className={`navigation__link navigation__link_home ${value === 0 ? 'navigation__link_active' : ''}`} 
              onClick={() => handleChange(0)}
              to='/'>
                Главная
              </NavLink>
          </li>
          <li>
            <NavLink className={`navigation__link ${value === 1 ? 'navigation__link_active' : ''}`}
              onClick={() => handleChange(1)}
              to='/movies'>
                Фильмы
              </NavLink>
          </li>
          <li>
            <NavLink className={`navigation__link ${value === 2 ? 'navigation__link_active' : ''}`}
              onClick={() => handleChange(2)}
              to='/saved-movies'>
                Сохранённые фильмы
            </NavLink>
          </li>
          <ProfileButton isOpen={props.isOpen}/>
        </ul>
      </div>

      <button 
        onClick={props.handlerClick}
        type='click' 
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