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

export type TStepThree = {
  color: string;
  rentalDuration: string;
  rate: string;
  fullTank: boolean;
  babyChair: boolean;
  rightHandDrive: boolean;
};

export type TCheckboxItem = {
  title: string;
  isActive: boolean;
};

export type TCarRate = {
  count: number;
  data: TCarRateData[];
  fields: {};
};

export type TCarRateData = {
  createdAt: number;
  id: string;
  price: number;
  rateTypeId: TCarRateTypeId;
  updatedAt: number;
};

type TCarRateTypeId = {
  id: string;
  name: string;
  unit: string;
};

export type TPoints = {
  fields: {};
  count: number;
  data: TPointsData[];
};

export type TPointsData = {
  address: string;
  name: string;
  cityId: TPointsCity | null;
  id: string;
};

type TPointsCity = {
  name: string;
  id: string;
};

export type TCoordinates = {
  x: number;
  y: number;
  label: string;
  bounds: [[number, number], [number, number]];
  raw: {};
};

export type TPostCarOrder = {
  orderStatusId: {
    name: string;
    id: string;
  };
  cityId: {
    name: string;
    id: string;
  };
  pointId: string;
  carId: string;
  color: string;
  dateFrom: number;
  dateTo: number;
  rateId: string;
  price: number;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
};
