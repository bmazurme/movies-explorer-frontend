function NotFound(props) {
  return(
    <div className="not-found">
      <h4 className="not-found__title">
        {props.title}
      </h4>
      <h5 className="not-found__description">
      {props.description}
      </h5>
    </div>
  );
}

export default NotFound;
