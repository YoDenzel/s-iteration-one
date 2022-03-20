import { SetStateAction, Dispatch } from 'react';

export type TIconProps = {
  height?: number;
  width?: number;
  color?: string;
  isActive?: boolean
};

export type TSliderImagesArr = {
  title: string;
  description: string;
  buttonColor: string;
  sliderImage: any;
};

export type TSetAnimation = Dispatch<
  SetStateAction<{ translate: number; transition: number; activeIndex: number }>
>;

export type TAnimation = {
  translate: number;
  transition: number;
  activeIndex: number;
};

export type TMenuTitlesArr = {
  title: string;
  linkTo: string;
};

export type TMenuIcons = {
  icon: ({ height, width }: TIconProps) => JSX.Element;
  linkTo: string;
};
