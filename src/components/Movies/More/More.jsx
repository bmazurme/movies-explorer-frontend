function More(props) {
  return(
    <div className="more">
      <button
        onClick={props.handleMoreClick}
        type="button"
        className="button button_more">
          Еще
      </button>
    </div>
  );
}

export default More;
