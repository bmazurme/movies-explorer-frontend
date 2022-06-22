import Logo from "../Logo/Logo";
import Inbox from "../Inbox/Inbox";
import Button from "./Button";
import SignFooter from "./SignFooter";
import React from "react";

function Signin(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.signIn({email, password})
  }
  return(
    <section className="sign">
      <div className="container">
        <Logo/>
        <h2 className="sign__title">
          Рады видеть!
        </h2>
        <form onSubmit={handleSubmit}>
          <Inbox
            onChange={handleEmailChange}
            name={'E-mail'}
            type={'email'}
            id={`email-input`}
            autoComplete={`off`}
            value={email || ''}
          />
          <Inbox
            onChange={handlePasswordChange}
            name={'Пароль'}
            type={'password'}
            id={`password-input`}
            autoComplete={`off`}
            value={password || ''}
          />
          <Button
            class={`button_submit`}
            value={`Войти`}
          />
        </form>
        <SignFooter 
          text={`Еще не зарегистрированы?`}
          link={{url: '/signup', label: 'Регистрация'}}
        />
      </div>
    </section>
  );
}

export default Signin;
