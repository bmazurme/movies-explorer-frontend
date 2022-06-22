function Field(props) {
  return(
    <div className="field field_border">
      <div className="field__label">{props.label}</div>
      <div className="field__value">{props.value}</div>
    </div>
  );
}

export default Field;
