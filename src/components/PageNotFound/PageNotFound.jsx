function PageNotFound() {
  return(
    <section className="error">
      <h2 className="error__title">PageNotFound</h2>
      <p className="error__text">Страница не найдена</p>
      <a className="link" href="/">Назад</a>
    </section>
  );
}

export default PageNotFound;