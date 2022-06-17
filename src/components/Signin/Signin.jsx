function Signin() {
  return(
    <section className="signin">
      <div className="container">
        <a href="/">      
          <div className="logo signin__logo">
            </div>
        </a>
        <h2 className="signin__title">Рады видеть!</h2>
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

      <button className="button button_submit signin__button">Войти</button>

      <div className="signin__footer">
        <p className="signin__help">Еще не зарегистрированы?</p>
        <a className="signin__link" href="/signup">Регистрация</a>
      </div>



      </div>
    </section>
  );
}

export default Signin;