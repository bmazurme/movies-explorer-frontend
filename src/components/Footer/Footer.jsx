import { links } from "./links";

function Footer() {
  return(
    <section className="footer">
      <div className="footer__top">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">
          &copy; 2022
        </p>
        <ul className="footer__menu">
          {links.map((link,index) => 
            <li key={index}>
              <a className="footer__link" href={link.url}>
                {link.name}
              </a>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}

export default Footer;
