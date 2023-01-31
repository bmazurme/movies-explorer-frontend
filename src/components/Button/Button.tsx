/* eslint-disable max-len */
import React from 'react';

export default function Button({
  value, className, isValid, onClick, submit,
}
  : { value: string, className: string, isValid: boolean, onClick?: () => void, submit?: boolean }) {
  return (
    <button
      className={`button ${className} ${!isValid ? 'button_inactive' : ''}`}
      disabled={!isValid}
      onClick={onClick}
      type={submit ? 'submit' : 'button'}
    >
      {value}
    </button>
  );
}
