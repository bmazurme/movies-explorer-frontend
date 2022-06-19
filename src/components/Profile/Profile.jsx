import Header from "../Header/Header";
import Field from "./Field";
import { fields } from "./fields";

function Profile() {
  return(
    <>
      <Header/>
      <section className="profile">
        <h2 className="profile__title">
          Привет, Виталий!
        </h2>
        {fields.map((field, index) => <Field key={index} {...field}/> )}
        <div className="profile__links">
          <a className="profile__link" href='/'>Редактировать</a>
          <a className="profile__link profile__link_red" href='/'>
            Выйти из аккаунта
          </a>
        </div>
      </section>
    </>
  );
}

export default Profile;
