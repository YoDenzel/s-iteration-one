import { TIconProps } from '../../types';

export const RadioButtonActive = ({ width = 12, height = 12 }: TIconProps) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx={6} cy={6} r={4.5} stroke="#0EC261" strokeWidth={3} />
  </svg>
);
