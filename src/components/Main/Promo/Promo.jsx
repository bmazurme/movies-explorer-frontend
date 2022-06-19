import { links } from "./links";

function Promo() {
  return(
    <section className="promo">
      <div className="promo__header">
        <a className="promo__logo" href="/">      
          <div className="promo__icon">
          </div>
        </a>
        <div className="promo__menu">
          <a href="/signup" className="promo__signup">
            Регистрация
          </a>
          <a href="/signin" className="promo__signin">
            Войти
          </a>
        </div>
      </div>
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <ul className="promo__tabs">
        {links.map((link, index) => 
          <li className="promo__tab" key={index}>
            <a className="promo__link" href={link.url}>
              {link.name}
            </a>
          </li>
        )}
      </ul>
    </section>
  );
}

export default Promo;
