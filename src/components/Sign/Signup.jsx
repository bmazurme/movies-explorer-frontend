import Logo from "../Logo/Logo";
import Inbox from "../Inbox/Inbox";
import Button from "./Button";
import SignFooter from "./SignFooter";
import React from "react";

function Signup(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.signUp({email, password, name});
  }
  return(
    <section className="sign">
      <div className="container">
        <Logo/>
        <h2 className="sign__title">
          Добро пожаловать!
        </h2>
        <form onSubmit={handleSubmit}>
          <Inbox
            onChange={handleNameChange}
            name={'Имя'}
            type={'text'}
            id={`name-input`}
            autoComplete={`off`}
            value={name || ''}
          />
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
            value={`Зарегистрироваться`}
          />
        </form>
        <SignFooter 
          text={`Уже зарегистрированы?`}
          link={{url: '/signin', label: 'Войти'}}
        />
      </div>
    </section>
  );
}

export default Signup;
