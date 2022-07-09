function SignFooter(props) {
  return(
    <div className='sign__footer'>
    <p className='sign__help'>
      {props.text}
    </p>
    <a className='sign__link' href={props.link?.url}>
      {props.link?.label}
    </a>
  </div>
  );
}

export default SignFooter;