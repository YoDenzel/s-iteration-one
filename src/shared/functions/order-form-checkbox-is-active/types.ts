import { useAppDispatch } from '../../custom-hooks';

export type TOrderFormCheckboxIsActive = {
  dispatch: ReturnType<typeof useAppDispatch>;
  activeTitle: string;
  checkboxArr: { title: string; isActive: boolean; price: number }[];
  price: {
    price: string;
    minPrice: number;
    maxPrice: number;
  };
};
