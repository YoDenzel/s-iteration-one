import { TIconProps } from "../../types";

export const RadioButtonInactive = ({height = 12, width = 12} : TIconProps) => (
  <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx={6} cy={6} r={5.5} stroke="#999" />
  </svg>
);
