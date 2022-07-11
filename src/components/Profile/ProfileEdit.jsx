import Header from '../Header/Header';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useContext } from 'react';
import Button from '../Sign/Button';
import Inbox from '../Inbox/Inbox';
import { useFormWithValidation } from '../../utils/validator';
import {useEffect} from 'react';
import InfoTooltip from '../Popup/Popup';
import { EMAIL_REGEXP } from '../../utils/constants';

function ProfileEdit(props) {
  const currentUser = useContext(CurrentUserContext);
  const {values, handleChange, errors, isValid} = useFormWithValidation({
    email: currentUser.email,
    name: currentUser.name 
  });
  function handleSubmit(e) {
    e.preventDefault();
    props.handleUpdateUser({
      email: values.email,
      name: values.name
    });
  }

  useEffect(() => {
    values.name = currentUser.name;
    values.email = currentUser.email;
  }, []);

  return(
    <>
      <Header/>
      <section className='profile'>
        <h2 className='profile__title'>
          Редактировать профиль
        </h2>
        <form onSubmit={handleSubmit}>
          <Inbox
            onChange={handleChange}
            placeholder={'Имя'}
            errors={errors}
            name={'name'}
            type={'text'}
            id={`name-input`}
            autoComplete={`off`}
            value={values.name || currentUser.name || ''}
            minLength={4}
            maxLength={20}
          />

          <Inbox
            pattern={EMAIL_REGEXP}
            onChange={handleChange}
            placeholder={'E-mail'}
            errors={errors}
            name={'email'}
            type={'email'}
            id={`email-input`}
            autoComplete={`off`}
            value={values.email || currentUser.email || ''}
          />

          <Button
            type='submit'
            isValid={
              (isValid && values.name !== currentUser.name)
              || (isValid && values.email !== currentUser.email)
            }
            class={`button_save`}
            value={`Сохранить`}
          />
        </form>
        <InfoTooltip 
          isOpen={props.isOpen}
          onClose={props.onClose}
          text={props.text}
      />
      </section>
    </>
  );
}

export default ProfileEdit;
