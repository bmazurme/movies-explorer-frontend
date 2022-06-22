import Header from "../Header/Header";
import Field from "./Field";
import Links from "./Links.jsx";
import { menu } from "./menu";

function Profile(props) {
  return(
    <>
      <Header/>
      <section className="profile">
        <h2 className="profile__title">
          Привет, {props.name}!
        </h2>
        <Field label={'Имя'} value={props.name}/>
        <Field label={'E-mail'} value={props.email}/>
        <Links links={menu}/>
      </section>
    </>
  );
}

export default Profile;
