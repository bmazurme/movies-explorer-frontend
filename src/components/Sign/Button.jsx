function Button(props) {
  return(
    <button className={`button ${props.class}`}>
      {props.value}
    </button>
  );
}

export default Button;