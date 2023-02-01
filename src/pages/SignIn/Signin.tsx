import React, { useEffect, useState } from 'react';

import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';
import useUser from '../../hook/useUser';
import { useSignInMutation } from '../../store';

import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import SignFooter from '../../components/SignFooter';
import InfoTooltip from '../../components/Popup';

type FormPayload = {
  login: string;
  password: string;
};

const inputs = [
  {
    name: 'login',
    label: 'Login',
    pattern: {
      value: /^[a-z0-9_-]{3,15}$/,
      message: 'Login is invalid',
    },
    required: true,
    autoComplete: 'username',
  },
  {
    name: 'password',
    label: 'Password',
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,15}$/,
      message: 'Password is invalid',
    },
    required: true,
    type: 'password',
    autoComplete: 'current-password',
  },
];

export default function Signin() {
  const navigate = useNavigate();
  const userData = useUser();
  const errorHandler = useErrorHandler();
  const [signIn] = useSignInMutation();
  const [isOpen, setIsOpen] = useState(false);
  const text = {
    title: 'Произошла ошибка',
    description: 'Проверьте пароль и логин',
  };

  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (userData) {
      navigate('/');
    }
  });

  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const result: unknown = await signIn(data);

      if ((result as Record<string, Record<string, string>>)?.error?.message === 'Unauthorized error') {
        setIsOpen(true);
        setTimeout(() => onClose(), 3000);
      } else {
        navigate('/');
      }
    } catch ({ status, data: { reason } }) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  return (
    <section className="sign">
      <div className="container">
        <Logo />
        <h2 className="sign__title">Рады видеть!</h2>
        <form onSubmit={onSubmit}>
          {inputs.map((input) => (
            <Controller
              key={input.name}
              name={input.name as keyof FormPayload}
              rules={{
                pattern: input.pattern,
                required: input.required,
              }}
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  {...input}
                  className="input inbox__input"
                  errorText={fieldState.error?.message}
                />
              )}
            />
          ))}
          <Button submit isValid className="button_submit" value="Войти" />
        </form>
        <SignFooter
          text="Еще не зарегистрированы?"
          link={{ url: '/signup', label: 'Регистрация' }}
        />
      </div>
      <InfoTooltip isOpen={isOpen} onClose={onClose} text={text} />
    </section>
  );
}
