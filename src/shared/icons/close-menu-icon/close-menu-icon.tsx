import { TIconProps } from '../../types';

export const CloseMenuIcon = ({ width = 32, height = 32 }: TIconProps) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 8 8 24M8 8l16 16"
      stroke="#fff"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
