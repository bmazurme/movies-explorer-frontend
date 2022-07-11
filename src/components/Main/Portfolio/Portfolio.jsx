import { cards } from './cards';

function Portfolio() {
  return(
    <section className='portfolio'>
      <h3 className='portfolio__title'>
        Портфолио
      </h3>
      <ul className='portfolio__list'>
        {cards.map((card, index) => 
          <li className='portfolio__item' key={index}>
            <a href={card.url} target='_blank' className='portfolio__link' rel='noreferrer'>
              {card.name}
            </a>
          </li>
        )}
      </ul>
    </section>
  );
}

export default Portfolio;
