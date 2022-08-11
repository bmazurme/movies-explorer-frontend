function InfoTooltip(props) {
  return(
    <div 
      onClick={ e => (e.currentTarget === e.target) && props.onClose()}
      className={`popup popup_tooltip ${props.isOpen 
        ? 'popup_active' 
        : ''}`} 
    >
      <div className='popup__container'>
        <button 
          aria-label='Close'
          className='popup__close' 
          type='button' 
          onClick={props.onClose}
        />
        <div className='tooltip'>
          <p className='popup__title'>
            {props.text.title}
          </p>
          <p className='popup__text'>
            {props.text.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
