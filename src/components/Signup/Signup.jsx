import Logo from "../Logo/Logo";
import Inbox from "../Inbox/Inbox";

function Signup() {
  return(
    <section className="sign">
      <div className="container">
        <Logo/>
        <h2 className="sign__title">Добро пожаловать!</h2>
        <Inbox name={'Имя'}/>
        <Inbox name={'E-mail'}/>
        <Inbox name={'Пароль'}/>
        <button className="button button_submit">
          Зарегистрироваться
        </button>
        <div className="sign__footer">
          <p className="sign__help">Уже зарегистрированы?</p>
          <a className="sign__link" href="/signin">Войти</a>
        </div>
      </div>
    </section>
  );
}

export default Signup;
