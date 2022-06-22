function ProfileButton(props) {
  return(
    <a 
      className={`profile-button
      ${props.isOpen
        ? 'profile-button_opened'
        : ''}
      `} 
      href="/profile">
      <p className="profile-button__label" >
        Аккаунт
      </p>
      <div className="profile-button__icon"></div>
    </a>
  );
}

export default ProfileButton;
