import Logo from "../Logo/Logo";
import Inbox from "../Inbox/Inbox";

function Signin() {
  return(
    <section className="sign">
      <div className="container">
        <Logo/>
        <h2 className="sign__title">Рады видеть!</h2>
        <Inbox name={'E-mail'}/>
        <Inbox name={'Пароль'}/>
        <button className="button button_submit">Войти</button>
        <div className="sign__footer">
          <p className="sign__help">
            Еще не зарегистрированы?
          </p>
          <a className="sign__link" href="/signup">Регистрация</a>
        </div>
      </div>
    </section>
  );
}

export default Signin;
