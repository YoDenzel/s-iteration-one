import { TSliderImagesArr } from '../../shared/types';
import { CarsharingSliderArrows, SingleSlideComponent } from '../index';
import { SliderPaginationDots } from '../slider-pagination-dots';
import styles from './carsharing-slider-component.module.css';

type TCarsharingSliderComponent = {
  sliderImagesArr: TSliderImagesArr[];
  activeIndex: number;
  setActiveIndex: (v: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  setAutoPlayEnabled: (v: boolean) => void;
};

export function CarsharingSliderComponent({
  sliderImagesArr,
  activeIndex,
  setActiveIndex,
  nextSlide,
  prevSlide,
  setAutoPlayEnabled,
}: TCarsharingSliderComponent) {
  return (
    <div className={styles.container}>
      <CarsharingSliderArrows
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        setAutoPlayEnabled={setAutoPlayEnabled}
      />
      <SliderPaginationDots
        activeIndex={activeIndex}
        sliderImagesArr={sliderImagesArr}
        setActiveIndex={setActiveIndex}
      />
      <div className={styles.slider_content}>
        {sliderImagesArr.map(
          (item, index) =>
            activeIndex === index && (
              <SingleSlideComponent
                key={item.title + index}
                sliderImage={item.sliderImage}
                buttonColor={item.buttonColor}
                description={item.description}
                title={item.title}
                more="Подробнее"
              />
            ),
        )}
      </div>
    </div>
  );
}
