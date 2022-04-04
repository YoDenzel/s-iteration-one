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

export type TFirstStepObj = {
  title: string;
  information: string;
};

export type TCars = {
  count: number;
  data: TCarsData[];
  fields: {};
};

export type TCarsData = {
  categoryId: TCarCategoryId;
  colors: string[];
  createdAt: number;
  description: string;
  id: string;
  name: string;
  number: string;
  priceMax: number;
  priceMin: number;
  tank: number;
  thumbnail: TCarThumbnail;
  updatedAt: number;
};

export type TCarCategoryId = {
  name: string;
  id: string;
  description: string;
};

export type TCarThumbnail = {
  mimetype: string;
  originalname: string;
  path: string;
  size: number;
};
