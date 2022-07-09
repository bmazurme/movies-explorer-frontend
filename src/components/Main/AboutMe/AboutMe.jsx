import { links } from './links';
import { info } from './info';

function AboutMe() {
  return(
    <section id='aboutme' className='about-me'>
      <h3 className='tag'>Студент</h3>
      <div className='about-me__container'>
        <h2 className='about-me__title'>{info.name}</h2>
        <h4 className='about-me__major'>{info.major}</h4>
        <p className='about-me__text'>{info.text}</p>
        <ul className='about-me__links'>
          {links.map((link, index) =>
            <li key={index}>
              <a href={link.url} target='_blank' className='about-me__link' rel='noreferrer'>
                {link.name}
              </a>
            </li>
          )}
        </ul>
        <img
          className='about-me__photo'
          src='https://fb.ru/misc/i/gallery/117615/3252697.jpg'
          alt='ava'/>
      </div>
    </section>
  );
}

export default AboutMe;
