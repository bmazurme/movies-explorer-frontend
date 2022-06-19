function AboutProject() {
  return(
    <section id="aboutproject" className="about-project">
      <h3 className="tag">О проекте</h3>
      <div className="block">
        <div className="cell">
          <h4 className="cell__title">
            Дипломный проект включал 5 этапов
          </h4>
          <p className="cell__text">
            Составление плана, работу над бэкендом, вёрстку, 
            добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="cell">
          <h4 className="cell__title">
            На выполнение диплома ушло 5 недель
          </h4>
          <p className="cell__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые 
            нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__progressbar">
        <div className="progressbar">
          <div className="progressbar__left">
            1 неделя
          </div>
          <div className="progressbar__right">
            4 недели
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
