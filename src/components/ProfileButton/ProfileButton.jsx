import { NavLink } from "react-router-dom";

function ProfileButton(props) {
  return(
    <NavLink 
      className={`profile-button
      ${props.isOpen
        ? 'profile-button_opened'
        : ''}
      `} 
      to="/profile">
      <p className="profile-button__label" >
        Аккаунт
      </p>
      <div className="profile-button__icon"></div>
    </NavLink>
  );
}

export default ProfileButton;
