import { useAppDispatch } from '../../custom-hooks';

export type TCalculatePriceDependOnRate = {
  activeCarRateButtonName: string;
  dateFrom: Date | null;
  dateTo: Date | null;
  minPrice: number;
  dispatch: ReturnType<typeof useAppDispatch>;
  price?: number;
};
