function Inbox(props) {
  return(
    <div className="inbox" >
      <label className="inbox__label">
        {props.name}
      </label>
      <input
        onChange={props.onChange}
        className="input inbox__input"
        type={props.type}
        id={props.id}
        required 
        autoComplete={props.autoComplete}
        value={props.value}
      />
      <span className={``}></span>
      <span className={``}></span>
    </div>
  );
}

export default Inbox;
