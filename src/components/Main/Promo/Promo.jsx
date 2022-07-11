import { links } from './links';
import Header from '../../Header/Header';
import { NavLink } from 'react-router-dom';

function Promo(props) {
  return(
    <section className='promo'>
      {props.loggedIn 
        ? <Header />
        : <>
              <div className='promo__header'>
        <a className='promo__logo' href='/'>      
          <div className='promo__icon'>
          </div>
        </a>
        <div className='promo__menu'>
          <NavLink to='/signup' className='promo__signup'>
            Регистрация
          </NavLink>
          <NavLink to='/signin' className='promo__signin'>
            Войти
          </NavLink>
        </div>
      </div>
      <div className='promo__cover'>
      <h1 className='promo__title'>
        Учебный проект студента факультета Веб-разработки.
      </h1>
        <ul className='promo__tabs'>
          {links.map((link, index) => 
            <li className='promo__tab' key={index}>
              <a className='promo__link' href={link.url}>
                {link.name}
              </a>
            </li>
          )}
        </ul>
      </div>
        </>
        }
    </section>
  );
}

export default Promo;
