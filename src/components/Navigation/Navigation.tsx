import React from 'react';
import { NavLink } from 'react-router-dom';

import { useSignOutMutation } from '../../store';

import ProfileButton from '../ProfileButton';

export default function Navigation({ isOpen, handlerClick }
  : { isOpen: boolean, handlerClick: () => void }) {
  const [signOut] = useSignOutMutation();
  const logOut = async () => {
    await signOut();
  };
  return (
    <>
      <div className={`navigation${isOpen ? ' navigation_opened' : ''}`}>
        <ul className={`navigation__links ${isOpen ? 'navigation__links_opened' : ''}`}>
          <li>
            <NavLink className="navigation__link navigation__link_home" to="/">Главная</NavLink>
          </li>
          <li>
            <NavLink className="navigation__link" onClick={logOut} to="/">Выйти</NavLink>
          </li>
          <ProfileButton isOpen={isOpen} />
        </ul>
      </div>
      <button
        onClick={handlerClick}
        type="button"
        aria-label="Open"
        className={`button navigation__button${isOpen ? ' navigation__button_open' : ''}`}
      />
    </>
  );
}
