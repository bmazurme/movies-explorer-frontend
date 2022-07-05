import Header from "../Header/Header";
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useContext } from "react";
import Button from "../Sign/Button";
import Inbox from "../Inbox/Inbox";
import { useFormWithValidation } from "../../utils/validator";

function ProfileEdit(props) {
  const currentUser = useContext(CurrentUserContext);
  const {values, handleChange, errors, isValid} = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.handleUpdateUser({
      email: values.email || currentUser.email,
      name: values.name || currentUser.name 
    })
  }

  return(
    <>
      <Header/>
      <section className="profile">
        <h2 className="profile__title">
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
            value={values.name || currentUser.name  || ''}
            minLength={4}
            maxLength={20}
          />
          <Inbox
            onChange={handleChange}
            placeholder={'E-mail'}
            errors={errors}
            name={'email'}
            type={'email'}
            id={`email-input`}
            autoComplete={`off`}
            value={values.email || currentUser.email  || ''}
          />

          <Button
            type='submit'
            isValid={isValid}
            class={`button_save`}
            value={`Сохранить`}
          />
        </form>
      </section>
    </>
  );
}

export default ProfileEdit;
