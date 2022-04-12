import { TSliderImagesArr } from '../../shared/types';

export type TCarsharingSliderComponent = {
  sliderImagesArr: TSliderImagesArr[];
  activeIndex: number;
  setActiveIndex: (v: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  setAutoPlayEnabled: (v: boolean) => void;
  isMenuActive: boolean;
};
