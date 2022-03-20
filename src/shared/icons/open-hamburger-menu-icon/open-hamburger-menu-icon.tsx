import { TIconProps } from '../../types';

export const OpenHamburgerMenuIcon = ({
  height = 32,
  width = 32,
  color,
}: TIconProps) => (
  <svg
    width={height}
    height={width}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 16h24M4 8h24M4 24h24"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
