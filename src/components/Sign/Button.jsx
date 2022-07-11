function Button(props) {
  return(
    <button 
      className={`button ${props.class} ${!props.isValid ? 'button_inactive' : ''}`}
      disabled={!props.isValid}
    >
      {props.value}
    </button>
  );
}

export default Button;
