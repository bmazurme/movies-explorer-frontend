import Logo from "../Logo/Logo";
function Signin() {
  return(
    <section className="sign">
      <div className="container">
        <Logo/>
        <h2 className="sign__title">Рады видеть!</h2>
        <div className="inbox" >
          <label className="inbox__label">E-mail</label>
          <input
            className="input inbox__input" 
            type="text"
            // autocomplete="off"
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
          // autocomplete="off"
          id="" required 
          data-validation=""
        />
        <span className=""></span>
        
        <span className=""></span>
      </div>

      <button className="button button_submit">Войти</button>

      <div className="sign__footer">
        <p className="sign__help">Еще не зарегистрированы?</p>
        <a className="sign__link" href="/signup">Регистрация</a>
      </div>



      </div>
    </section>
  );
}

export default Signin;