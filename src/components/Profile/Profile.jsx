import Header from "../Header/Header";
import Field from "./Field";
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useContext } from "react";
import { NavLink } from "react-router-dom";

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);

  return(
    <>
      <Header/>
      <section className="profile">
        <h2 className="profile__title">
          Привет, {currentUser.name}!
        </h2>
        <Field label={'Имя'} value={currentUser.name}/>
        <Field label={'E-mail'} value={currentUser.email}/>
        <ul className="profile__links">
          <li>
            <NavLink className='profile__link' to='/profile-edit'>
              Редактировать
            </NavLink>
          </li>
          <li>
            <NavLink
              className='profile__link profile__link_red' to='/' 
              onClick={props.handleLogOut}>
              Выйти из аккаунта
            </NavLink>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Profile;
