function Signin() {
  return(
    <section className="signin">

      <div className="logo"></div>

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

      <button className="button button_submit">Войти</button>

      <p className="">Еще не зарегистрированы?</p>
      <a className="link" href="/signup">Регистрация</a>
    </section>
  );
}

export default Signin;