import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Logo() {
  return (
    <NavLink className="logo" to="/">
      <div className="logo__icon" />
    </NavLink>
  );
}
