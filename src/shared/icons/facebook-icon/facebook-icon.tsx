import { TIconProps } from '../../types';

export const FacebookIcon = ({ height = 32, width = 32 }: TIconProps) => (
  <svg
    width={height}
    height={width}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 16c0-8.838-7.163-16-16-16C7.162 0 0 7.162 0 16c0 7.988 5.85 14.606 13.5 15.806V20.625H9.437V16H13.5v-3.525c0-4.01 2.387-6.225 6.044-6.225 1.75 0 3.581.313 3.581.313V10.5h-2.019c-1.987 0-2.606 1.234-2.606 2.5v3h4.438l-.71 4.625H18.5v11.181C26.15 30.606 32 23.987 32 16Z"
      fill="#fff"
    />
  </svg>
);