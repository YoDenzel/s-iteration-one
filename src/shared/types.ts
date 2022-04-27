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
  orderStatusId?: TPointsCity;
  cityId: TPointsCity;
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

export type TOrderStatus = {
  fields: {};
  count: number;
  data: TPointsCity[];
};

export type TCarCategory = {
  fields: {};
  count: number;
  data: TCarCategoryData[];
};

export type TCarCategoryData = {
  updatedAt: number;
  createdAt: number;
  name: string;
  description: string;
  id: string;
};

export type TPostCarOrderResponse = {
  fields: {};
  data: TPostCarOrderResponseData;
};

export type TPostCarOrderResponseData = {
  updatedAt: number;
  createdAt: number;
  id: string;
  orderStatusId: TPointsCity;
  color: string;
  dateFrom: number;
  dateTo: number;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
  price: number;
  rateId: TPostCarOrderRateId;
  carId: TPostCarOrderResponseDataCarId;
  cityId: TPointsCity;
};

type TPostCarOrderRateId = {
  id: string;
  price: number;
  rateTypeId: TCarRateTypeId;
};

type TPostCarOrderResponseDataCarId = {
  categoryId: TCarCategoryId;
  colors: string[];
  description: string;
  id: string;
  name: string;
  number: string;
  priceMax: number;
  priceMin: number;
  tank: number;
  thumbnail: TCarThumbnail;
};

export type TGetCarOrder = {
  fields: {};
  data: TGetCarOrderData;
};

export type TGetCarOrderData = {
  updatedAt: number;
  createdAt: number;
  id: string;
  orderStatusId: TPointsCity;
  color: string;
  dateFrom: number;
  dateTo: number;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
  price: number;
  rateId: TPostCarOrderRateId;
  carId: TPostCarOrderResponseDataCarId;
  cityId: TPointsCity;
  pointId: TGetCarOrderDataPointId;
};

type TGetCarOrderDataPointId = {
  address: string;
  name: string;
  id: string;
};

export type TPutCarOrderStatus = {
  orderId: string;
  orderStatusId?: TPointsCity;
};
