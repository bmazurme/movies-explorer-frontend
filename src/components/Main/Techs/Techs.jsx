import { tags } from "./tags";
import Tag from "./Tag";

function Techs() {
  return(
    <section id="techs" className="techs">
      <h3 className="tag">Технологии</h3>
      <h2 className="techs__title">7 технологий</h2>
      <p className="techs__description">
        На курсе веб-разработки мы освоили технологии, 
        которые применили в дипломном проекте.
      </p>
      <ul className="techs__list">
        {tags.map((tag, index) => <Tag tag={tag} key={index}/> )}
      </ul>
    </section>
  );
}

export default Techs;
