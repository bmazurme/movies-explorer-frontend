import { cards } from "./cards";

function Portfolio() {
  return(
    <section className="portfolio">
      <h3 className="portfolio__title">
        Портфолио
      </h3>
      <ul className="portfolio__list">
        {cards.map((card, index) => 
          <li className="portfolio__item" key={index}>
            <a href={card.url} className="portfolio__link">
              {card.name}
            </a>
          </li>
        )}
      </ul>
    </section>
  );
}

export default Portfolio;
