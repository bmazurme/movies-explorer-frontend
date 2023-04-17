import React from 'react';
import { NavLink } from 'react-router-dom';
import useUser from '../../hook/useUser';

import Content from '../../components/Content';
import Field from '../../components/Field';
import { Paths } from '../../utils/constants';

export default function Profile() {
  const userData = useUser();

  return (
    <Content>
      <div className="container">
        <h2 className="sign__title">Profile</h2>
        <Field label="Login" value={userData!.login} />
        <Field label="E-mail" value={userData!.email} />
        <ul className="profile__links">
          <li>
            <NavLink className="profile__link" to={Paths.PROFILE.EDIT}>
              Редактировать
            </NavLink>
          </li>
          <li>
            <NavLink
              className="profile__link profile__link_red"
              to={Paths.MAIN}
              onClick={() => console.log('logout')}
            >
              Выйти из аккаунта
            </NavLink>
          </li>
        </ul>
      </div>
    </Content>
  );
}
