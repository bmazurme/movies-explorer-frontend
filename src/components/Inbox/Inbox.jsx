function Inbox(props) {
  return(
    <div className='inbox' >
      <label className='inbox__label'>
        {props.label}
      </label>
      <input
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        minLength={props.minLength ? props.minLength : ''}
        maxLength={props.maxLength ? props.maxLength : ''}
        required={props.required}
        className={`input inbox__input ${props.errors[props.name] ? 'inbox__input_error' : ''}`}
        type={props.type}
        id={props.id}
        autoComplete={props.autoComplete}
        value={props.value}
      />

      <span className={`${props.label}-input-error inbox__label_error`}>
        {props.errors ? props.errors[props.name] : ''}
      </span>
    </div>
  );
}

export default Inbox;
