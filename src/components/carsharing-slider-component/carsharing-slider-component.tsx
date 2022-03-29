import { TCarsharingSliderComponent } from './types';
import { CarsharingSliderArrows, SingleSlideComponent } from '../index';
import { SliderPaginationDots } from '../slider-pagination-dots';
import styles from './carsharing-slider-component.module.scss';

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
