import { TIconProps } from '../../types';

export const LocationIcon = ({ height = 21, width = 17 }: TIconProps) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 8.5c0 5.833-7.5 10.833-7.5 10.833S1 14.333 1 8.5a7.5 7.5 0 0 1 15 0Z"
      stroke="#999"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      stroke="#999"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
