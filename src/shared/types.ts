export type TIconProps = Partial<{
  height: number;
  width: number;
  color: string;
  isActive: boolean;
}>;

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

export type TAddressesArr = {
  city: string;
  address: TAddress[];
  cityCoordinates: number[];
};

export type TAddress = {
  title: string;
  coordinates: number[];
};
