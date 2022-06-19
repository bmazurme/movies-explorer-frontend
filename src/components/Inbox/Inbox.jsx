function Inbox(props) {
  return(
    <div className="inbox" >
      <label className="inbox__label">
        {props.name}
      </label>
      <input
        className="input inbox__input" 
        type="text"
        id="" required 
        data-validation=""
      />
      <span className=""></span>
      <span className=""></span>
    </div>
  );
}

export default Inbox;
