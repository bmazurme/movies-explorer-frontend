import Header from "../Header/Header";
import Field from "./Field";
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useContext } from "react";

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
            <a className='profile__link' href='/profile-edit'>
              Редактировать
            </a>
          </li>
          <li>
            <a
              className='profile__link profile__link_red' href='/' 
              onClick={props.handleLogOut}>
              Выйти из аккаунта
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Profile;
