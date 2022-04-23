export type TCarListItem = {
  name: string;
  priceMin: number;
  priceMax: number;
  path: string;
  clickHandler: (v: string) => void;
  carName: string;
};
