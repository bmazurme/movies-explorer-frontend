import Logo from '../Logo/Logo';
import Inbox from '../Inbox/Inbox';
import Button from './Button';
import SignFooter from './SignFooter';
import React from 'react';
import { useFormWithValidation } from '../../utils/validator';
import InfoTooltip from '../Popup/Popup';
import { EMAIL_REGEXP } from '../../utils/constants';

function Signup(props) {
  const {values, handleChange, errors, isValid} = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.signUp({email: values.email, password: values.password, name: values.name});
  }

  return(
    <section className='sign'>
      <div className='container'>
        <Logo/>
        <h2 className='sign__title'>
          Добро пожаловать!
        </h2>
        <form onSubmit={handleSubmit}>
          <Inbox
            required={true}
            onChange={handleChange}
            name={'name'}
            placeholder={'введите ваше имя'}
            label={'Имя'}
            type={'text'}
            id={`name-input`}
            autoComplete={`off`}
            value={values.name || ''}
            errors={errors}
            minLength={4}
            maxLength={20}
          />
          <Inbox
            required={true}
            onChange={handleChange}
            pattern={EMAIL_REGEXP}
            name={'email'}
            placeholder={'ваш e-mail в формате pochta@mail.com'}
            label={'E-mail'}
            type={'text'}
            id={`email-input`}
            autoComplete={`off`}
            value={values.email || ''}
            errors={errors}
          />
          <Inbox
            required={true}
            onChange={handleChange}
            placeholder={'пароль не менее 6 символов'}
            label={'Пароль'}
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
      <InfoTooltip 
        isOpen={props.isOpen}
        onClose={props.onClose}
        text={props.text}
      />
    </section>
  );
}

export default Signup;
