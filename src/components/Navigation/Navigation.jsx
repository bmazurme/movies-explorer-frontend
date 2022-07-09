import ProfileButton from '../ProfileButton/ProfileButton';
import { NavLink } from 'react-router-dom';
import React from 'react';

function Navigation(props) {
  return(
    <>
      <div className={`navigation 
        ${props.isOpen 
        ? 'navigation_opened' 
        : ''}`}
      >
        <ul
          className={`navigation__links 
            ${props.isOpen 
              ? 'navigation__links_opened' 
              : ''}`
            }
        >
          <li>
            <NavLink 
              className={`navigation__link navigation__link_home`} 
              to='/'>
                Главная
              </NavLink>
          </li>
          <li>
            <NavLink 
              className={`navigation__link`}
              to='/movies'>
                Фильмы
              </NavLink>
          </li>
          <li>
            <NavLink 
              className={`navigation__link`}
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