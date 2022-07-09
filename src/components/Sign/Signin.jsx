import Logo from "../Logo/Logo";
import Inbox from "../Inbox/Inbox";
import Button from "./Button";
import SignFooter from "./SignFooter";
import React from "react";
import { useFormWithValidation } from "../../utils/validator";
import InfoTooltip from "../Popup/Popup";

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
            label={'E-mail'}
            errors={errors}
            name={'email'}
            type={'email'}
            id={`email-input`}
            autoComplete={`off`}
            value={values.email || ''}
            required={true}
          />
          <Inbox
            onChange={handleChange}
            label={'Пароль'}
            errors={errors}
            name={'password'}
            type={'password'}
            id={`password-input`}
            autoComplete={`off`}
            value={values.password || ''}
            minLength={6}
            maxLength={20}
            required={true}
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
      <InfoTooltip 
        isOpen={props.isOpen}
        onClose={props.onClose}
        text={props.text}
      />
    </section>
  );
}

export default Signin;
