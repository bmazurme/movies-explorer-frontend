function Footer() {
  return(
    <div className="footer">
      <div className="footer__top">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">&copy; 2022</p>
        <ul className="footer__menu">
          <li>
            <a className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
          </li>
          <li>
            <a className="footer__link" href="https://github.com/">Github</a>
          </li>
          <li>
            <a className="footer__link" href="/">Facebook</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;