import { useEffect, useMemo, useState } from 'react';

type TReturn = {
  isMobile?: boolean;
  isTablet?: boolean;
  windowWidth: number;
};

const checkIsTabletWidth = (width: number) => width <= 1023 && width >= 768;
const checkIsPhoneWidth = (width: number) => width <= 768;

export const useWindowWidth = (): TReturn => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = useMemo(() => checkIsPhoneWidth(windowWidth), [windowWidth]);
  const isTablet = useMemo(
    () => checkIsTabletWidth(windowWidth),
    [windowWidth],
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile,
    isTablet,
    windowWidth,
  };
};
