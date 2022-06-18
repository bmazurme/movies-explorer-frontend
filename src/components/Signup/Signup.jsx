import Logo from "../Logo/Logo";

function Signup() {
  return(
    <section className="sign">
      <div className="container">
        <Logo/>
        <h2 className="sign__title">Добро пожаловать!</h2>

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

        <button className="button button_submit">Зарегистрироваться</button>
        <div className="sign__footer">
          <p className="sign__help">Уже зарегистрированы?</p>
          <a className="sign__link" href="/signin">Войти</a>
        </div>
      </div>
    </section>
  );
}

export default Signup;
