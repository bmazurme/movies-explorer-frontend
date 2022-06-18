import Header from "../Header/Header";

function Profile() {
  return(
    <>
      <Header/>
      <section className="profile">
        <h2 className="profile__title">
          Привет, Виталий!
        </h2>

        <div className="field field_border">
          <div className="field__label">Имя</div>
          <div className="field__value">Виталий</div>
        </div>

        <div className="field">
          <div className="field__label">E-mail</div>
          <div className="field__value">pochta@yandex.ru</div>
        </div>
        
        <div className="profile__links">
          <a className="profile__link" href='/'>Редактировать</a>
          <a className="profile__link profile__link_red" href='/'>Выйти из аккаунта</a>
        </div>
      </section>
    </>
  );
}

export default Profile;