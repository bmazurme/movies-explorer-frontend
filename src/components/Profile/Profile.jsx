function Profile() {
  return(
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <div className="field">
        <div className="field__label">Имя</div>
        <div className="field__value">Виталий</div>
      </div>
      <div className="field">
        <div className="field__label">E-mail</div>
        <div className="field__value">pochta@yandex.ru</div>
      </div>
      <a className="link" href='/'>Редактировать</a>
      <a className="link" href='/'>Выйти из аккаунта</a>
    </section>
  );
}

export default Profile;