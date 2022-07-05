import Header from "../Header/Header";
import Field from "./Field";
import Links from "./Links.jsx";
import { menu } from "./menu";
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
        <Links links={menu}/>
      </section>
    </>
  );
}

export default Profile;
