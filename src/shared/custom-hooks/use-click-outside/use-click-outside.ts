import { useEffect, useRef } from 'react';

export const useClickOutside = <T extends HTMLElement>(
  clickHandler: () => void,
) => {
  const domNode = useRef<T>(null);

  useEffect(() => {
    const eventHandler = ({ target }: MouseEvent): void => {
      if (!domNode.current?.contains(target as Node)) {
        clickHandler();
      }
    };

    document.addEventListener('mousedown', eventHandler);

    return () => {
      document.removeEventListener('mousedown', eventHandler);
    };
  });

  return domNode;
};
