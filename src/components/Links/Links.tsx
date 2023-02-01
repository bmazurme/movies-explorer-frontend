import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Links({ links }: { links: Record<string, string>[] }) {
  return (
    <ul className="profile__links">
      {links.map((link: Record<string, string>, index: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index}>
          <NavLink className={`profile__link ${link.class}`} to={link.url}>
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
