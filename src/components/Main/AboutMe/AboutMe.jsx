

function AboutMe() {
  return(
    <section className="about-me">
      <h3 className="about-me__tag">Студент</h3>

      <div className="about-me__container">
        <h2 className="about-me__title">Богдан</h2>
        <h4 className="about-me__major">Frontend developer</h4>
        <p className="about-me__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea 
          commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore 
          eu fugiat nulla pariatur. Excepteur sint occaecat 
          cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
        </p>

        <ul className="about-me__links">
          <li>
            <a href="/" className="about-me__link">Facebook</a>
          </li>
          <li>
            <a href="/" className="about-me__link">Github</a>
          </li>
        </ul>

        <img className="about-me__photo" src="https://fb.ru/misc/i/gallery/117615/3252697.jpg" alt=""/>
      </div>
    </section>
  );
}

export default AboutMe;