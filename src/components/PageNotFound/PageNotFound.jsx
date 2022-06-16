function PageNotFound() {
  return(
    <section className="error">
      <h2 className="error__code">404</h2>
      <p className="error__text">Страница не найдена</p>
      <a className="error__link" href="/">Назад</a>
    </section>
  );
}

export default PageNotFound;