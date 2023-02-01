import React, { useEffect, useState } from 'react';

import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';
import useUser from '../../hook/useUser';
import { useSignUpMutation } from '../../store';

import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import SignFooter from '../../components/SignFooter';
import InfoTooltip from '../../components/Popup';

type FormPayload = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

const inputs = [
  {
    name: 'login',
    label: 'Login',
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,15}$/,
      message: 'Login is invalid',
    },
    required: true,
    autoComplete: 'current-login',
  },
  {
    name: 'first_name',
    label: 'First name',
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,15}$/,
      message: 'First name is invalid',
    },
    required: true,
    autoComplete: 'current-first_name',
  },
  {
    name: 'second_name',
    label: 'Second name',
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,15}$/,
      message: 'Second name is invalid',
    },
    required: true,
    autoComplete: 'current-second_name',
  },
  {
    name: 'email',
    label: 'E-mail',
    pattern: {
      value: /[a-z0-9._%+-]+@[a-z0-9.-]+[.{0}][a-z]{2,3}$/,
      message: 'Email is invalid',
    },
    required: true,
    autoComplete: 'current-email',
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
  {
    name: 'phone',
    label: 'Phone',
    pattern: {
      value: /^[0-9]{9,15}$/,
      message: 'Phone is invalid',
    },
    required: true,
    autoComplete: 'current-phone',
  },
];

export default function Signup() {
  const navigate = useNavigate();
  const userData = useUser();
  const errorHandler = useErrorHandler();
  const [signUp] = useSignUpMutation();
  const [isOpen, setIsOpen] = useState(false);
  const text = {
    title: 'Произошла ошибка',
    description: 'Проверьте вводимые данные',
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
      first_name: '',
      second_name: '',
      login: '',
      email: '',
      password: '',
      phone: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      // eslint-disable-next-line no-undef
      const result = await signUp(data as Omit<User, 'id' | 'display_name'>);

      if ((result as Record<string, Record<string, string>>)?.error) {
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
        <h2 className="sign__title">Добро пожаловать!</h2>
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
          <Button submit isValid className="button_submit" value="Зарегистрироваться" />
        </form>
        <SignFooter text="Уже зарегистрированы?" link={{ url: '/signin', label: 'Войти' }} />
      </div>
      <InfoTooltip isOpen={isOpen} onClose={onClose} text={text} />
    </section>
  );
}
