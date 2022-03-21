export type TIconProps = {
  height?: number;
  width?: number;
  color?: string;
  isActive?: boolean;
};

export type TSliderImagesArr = {
  title: string;
  description: string;
  buttonColor: string;
  sliderImage: any;
};

export type TMenuTitlesArr = {
  title: string;
  linkTo: string;
};

export type TMenuIcons = {
  icon: ({ height, width }: TIconProps) => JSX.Element;
  linkTo: string;
};
