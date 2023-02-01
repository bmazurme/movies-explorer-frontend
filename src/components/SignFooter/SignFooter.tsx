import React from 'react';

export default function SignFooter({ text, link }
  : { text: string, link: Record<string, string> }) {
  return (
    <div className="sign__footer">
      <p className="sign__help">{text}</p>
      <a className="sign__link" href={link?.url}>{link?.label}</a>
    </div>
  );
}
