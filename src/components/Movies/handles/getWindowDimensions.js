import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const {
    innerWidth: width,
    innerHeight: height
  } = window;
  return { width, height };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
}

const visibleCardsNumbers = {
  1280: { slice: 12, step: 3 },
  768: { slice: 8, step: 2 },
  480: { slice: 5, step: 1 },
};

export function getVisualProps({width}) {
  let point = 0;
  if (width > 1280) {
    point = 1280;
  } else if (width > 768) {
    point = 768;
  } else {
    point = 480;
  };
  return visibleCardsNumbers[point];
};

// Ширина 1280px — 12 карточек по 3 в ряд. Кнопка «Ещё» загружает по 3 карточки.
// Ширина 768px — 8 карточек по 2 в ряд. Кнопка «Ещё» загружает по 2 карточки.
// Ширина от 320px до 480px — 5 карточек по 1 в ряд. Кнопка «Ещё» загружает по 2 карточки.


// function getScreenDimensions() {
//   const { width, height } = window.screen;
//   return { width, height };
// }

// export function useScreenDimensions() {
//   const [screenDimensions] = useState(getScreenDimensions());
//   return screenDimensions;
// }
