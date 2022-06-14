function Signup() {
  return(
    <section className="signup">

    <div className="logo"></div>

    <h2 className="signin__title">Добро пожаловать!</h2>

    <div className="inbox" >
      <input
        className="input" 
        type="text"
        // autocomplete="off"
        id="" required 
        data-validation=""
      />
      <span className=""></span>
      <label className="">Имя</label>
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

    <button className="button button_submit">Зарегистрироваться</button>

    <p className="">Уже зарегистрированы?</p>
    <a className="link" href="/signin">Войти</a>
    </section>
  );
}

export default Signup;