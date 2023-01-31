import React from 'react';

export default function More({ handleMoreClick }: { handleMoreClick: () => void }) {
  return (
    <div className="more">
      <button onClick={handleMoreClick} type="button" className="button button_more">
        Еще
      </button>
    </div>
  );
}
