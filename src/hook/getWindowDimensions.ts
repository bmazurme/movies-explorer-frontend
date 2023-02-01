import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

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

const visibleCardsNumbers: Record<number, Record<string, number>> = {
  1280: { slice: 12, step: 3 },
  768: { slice: 8, step: 2 },
  480: { slice: 5, step: 1 },
};

export function getVisualProps({ width }: { width: number }) {
  let point = 0;

  if (width > 1280) {
    point = 1280;
  } else if (width > 768) {
    point = 768;
  } else {
    point = 480;
  }

  return visibleCardsNumbers[point];
}
