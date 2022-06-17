function Signup() {
  return(
    <section className="signup">
      <div className="container">
        <a href="/">      
          <div className="logo signup__logo">
          </div>
        </a>
        <h2 className="signup__title">Добро пожаловать!</h2>

          <div className="inbox" >
              <label className="inbox__label">Имя</label>
              <input
                className="input inbox__input" 
                type="text"
                id="" required 
                data-validation=""
              />
            <span className=""></span>
            <span className=""></span>
          </div>

          <div className="inbox" >
            <label className="inbox__label">E-mail</label>
            <input
              className="input inbox__input" 
              type="text"
              id="" required 
              data-validation=""
            />
          <span className=""></span>
          <span className=""></span>
        </div>

        <div className="inbox" >
          <label className="inbox__label">Пароль</label>
          <input
            className="input inbox__input" 
            type="text"
            id="" required 
            data-validation=""
          />
          <span className=""></span>
          <span className=""></span>
        </div>

        <button className="button button_submit signin__button">Зарегистрироваться</button>
        <div className="signin__footer">
          <p className="signin__help">Уже зарегистрированы?</p>
          <a className="signin__link" href="/signin">Войти</a>
        </div>
      </div>
    </section>
  );
}

export default Signup;