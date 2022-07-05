import Logo from "../Logo/Logo";
import Inbox from "../Inbox/Inbox";
import Button from "./Button";
import SignFooter from "./SignFooter";
import React from "react";
import { useFormWithValidation } from "../../utils/validator";

function Signin(props) {
  const {values, handleChange, errors, isValid} = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.signIn({email: values.email, password: values.password})
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
            onChange={handleChange}
            placeholder={'E-mail'}
            errors={errors}
            name={'email'}
            type={'email'}
            id={`email-input`}
            autoComplete={`off`}
            value={values.email || ''}
          />
          <Inbox
            onChange={handleChange}
            placeholder={'Пароль'}
            errors={errors}
            name={'password'}
            type={'password'}
            id={`password-input`}
            autoComplete={`off`}
            value={values.password || ''}
            minLength={6}
            maxLength={20}
          />
          <Button
            isValid={isValid}
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
