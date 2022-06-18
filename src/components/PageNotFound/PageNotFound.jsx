const data = {
  code: 404,
  text: 'Страница не найдена',
  link: {
    url: '/',
    label: 'Назад',
  }
};

function PageNotFound() {
  return(
    <section className="error">
      <h2 className="error__code">{data.code}</h2>
      <p className="error__text">{data.text}</p>
      <a className="error__link" href={data.link.url}>
        {data.link.label}
      </a>
    </section>
  );
}

export default PageNotFound;
