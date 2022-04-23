import { TIconProps } from '../../types';

export const CheckMarkIcon = ({ width = 13, height = 10 }: TIconProps) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.625 3.333 0 5l4.875 5L13 1.667 11.375 0l-6.5 6.667-3.25-3.334Z"
      fill="#121212"
    />
  </svg>
);
