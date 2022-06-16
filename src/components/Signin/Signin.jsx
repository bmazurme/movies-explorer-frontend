function Signin() {
  return(
    <section className="signin">
      <div className="container">
      <div className="logo signin__logo"></div>
      <h2 className="signin__title">Рады видеть!</h2>
      <div className="inbox" >
        <input
          className="input" 
          type="text"
          // autocomplete="off"
          id="" required 
          data-validation=""
        />
        <span className=""></span>
        <label className="">E-mail</label>
        <span className=""></span>
      </div>

      <div className="inbox" >
        <input
          className="input" 
          type="text"
          // autocomplete="off"
          id="" required 
          data-validation=""
        />
        <span className=""></span>
        <label className="">Пароль</label>
        <span className=""></span>
      </div>

      <button className="button button_submit signin__button">Войти</button>

      <p className="signin__help">Еще не зарегистрированы?</p>
      <a className="signin__link" href="/signup">Регистрация</a>

      </div>
    </section>
  );
}

export default Signin;