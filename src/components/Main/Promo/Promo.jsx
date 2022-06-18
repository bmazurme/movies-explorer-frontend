import Logo from "../../Logo/Logo";
function Promo() {
  return(
    <section className="promo">
      <div className="promo__header">

        <a className="promo__logo" href="/">      
          <div className="promo__icon">
          </div>
        </a>

        <div className="promo__menu">
          <a href="/signup" className="promo__signup">Регистрация</a>
          <a href="/signin" className="promo__signin">Войти</a>
        </div>
      </div>

      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>

      <ul className="promo__tabs">
        <li className="promo__tab">
          <a className="promo__link" href="/">О проекте</a>
        </li>
        <li className="promo__tab">
          <a className="promo__link" href="/">Технологии</a>
        </li>
        <li className="promo__tab">
          <a className="promo__link" href="/">Студент</a>
        </li>
      </ul>
    </section>
  );
}

export default Promo;