import { TCarRateData } from '../../shared/types';

export type TCarRateComponent = {
  carsRateTitleArr?: TCarRateData[];
  activeButtonName: string;
  setActiveButtonName: (v: TCarRateData) => void;
};
