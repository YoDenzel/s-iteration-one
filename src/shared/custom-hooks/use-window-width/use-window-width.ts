import { useEffect, useState } from 'react';

type TReturn = {
  isMobile?: boolean;
  isTablet?: boolean;
  windowWidth: number;
};

type TWidthFunction = {
  windowWidth: number;
  setState: (v: boolean) => void;
};

const tabletWidth = ({ windowWidth, setState }: TWidthFunction) => {
  if (windowWidth <= 1023 && windowWidth >= 768) {
    setState(true);
  } else {
    setState(false);
  }
};

const phoneWidth = ({ windowWidth, setState }: TWidthFunction) => {
  if (windowWidth < 768) {
    setState && setState(true);
  } else {
    setState && setState(false);
  }
};

export const useWindowWidth = (): TReturn => {
  const windowWidth = window.innerWidth;
  const [isMobile, setIsMobile] = useState<boolean>();
  const [isTablet, setIsTablet] = useState<boolean>();

  useEffect(() => {
    phoneWidth({ windowWidth: windowWidth, setState: setIsMobile });
    tabletWidth({ windowWidth: windowWidth, setState: setIsTablet });
  }, []);

  window.addEventListener('resize', function () {
    phoneWidth({ windowWidth: windowWidth, setState: setIsMobile });
    tabletWidth({ windowWidth: windowWidth, setState: setIsTablet });
  });

  return {
    isMobile,
    isTablet,
    windowWidth,
  };
};
