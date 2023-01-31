import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ProfileButton({ isOpen }: { isOpen: boolean}) {
  return (
    <NavLink className={`profile-button${isOpen ? ' profile-button_opened' : ''}`} to="/profile">
      <p className="profile-button__label">Аккаунт</p>
      <div className="profile-button__icon" />
    </NavLink>
  );
}
