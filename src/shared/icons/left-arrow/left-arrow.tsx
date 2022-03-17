import { TIconProps } from '../../types';

export const LeftArrow = ({ height = 20, width = 10, color }: TIconProps) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m9 1-8 9 8 9"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
