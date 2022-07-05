import Logo from "../Logo/Logo";
import Inbox from "../Inbox/Inbox";
import Button from "./Button";
import SignFooter from "./SignFooter";
import React from "react";
import { useFormWithValidation } from "../../utils/validator";

function Signup(props) {
  const {values, handleChange, errors, isValid} = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.signUp({email: values.email, password: values.password, name: values.name});
  }

  console.log(errors)

  return(
    <section className="sign">
      <div className="container">
        <Logo/>
        <h2 className="sign__title">
          Добро пожаловать!
        </h2>
        <form onSubmit={handleSubmit}>
          <Inbox
            onChange={handleChange}
            name={'name'}
            placeholder={'Имя'}
            type={'text'}
            id={`name-input`}
            autoComplete={`off`}
            value={values.name || ''}
            errors={errors}
            minLength={4}
            maxLength={20}
          />
          <Inbox
            onChange={handleChange}
            name={'email'}
            placeholder={'E-mail'}
            type={'email'}
            id={`email-input`}
            autoComplete={`off`}
            value={values.email || ''}
            errors={errors}
          />
          <Inbox
            onChange={handleChange}
            placeholder={'Пароль'}
            name={'password'}
            type={'password'}
            id={`password-input`}
            autoComplete={`off`}
            value={values.password || ''}
            errors={errors}
            minLength={6}
            maxLength={20}
          />
          <Button
            isValid={isValid}
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
