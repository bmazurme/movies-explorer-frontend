import React from 'react';

export default function NotFound({ title, description }: Record<string, string>) {
  return (
    <div className="not-found">
      <h4 className="not-found__title">{title}</h4>
      <h5 className="not-found__description">{description}</h5>
    </div>
  );
}
