import { TSliderImagesArr } from '../../shared/types';

export type TSliderPaginationDots = {
  sliderImagesArr: TSliderImagesArr[];
  activeIndex: number;
  setActiveIndex: (v: number) => void;
};
