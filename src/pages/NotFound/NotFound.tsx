import React from 'react';

import { data } from '../../mock/data';

export default function NotFound() {
  return (
    <section className="error">
      <h2 className="error__code">{data.code}</h2>
      <p className="error__text">{data.text}</p>
      <a className="error__link" href={data.link.url}>
        {data.link.label}
      </a>
    </section>
  );
}
