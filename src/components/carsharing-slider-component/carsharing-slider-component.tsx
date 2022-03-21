import { TSetAnimation, TSliderImagesArr } from '../../shared/types';
import { CarsharingSliderArrows, SingleSlideComponent } from '../index';
import { SliderPaginationDots } from '../slider-pagination-dots';
import styles from './carsharing-slider-component.module.css';

type TCarsharingSliderComponent = {
  translate: number;
  transition: number;
  width: number;
  sliderImagesArr: TSliderImagesArr[];
  nextSlide: () => void;
  prevSlide: () => void;
  activeIndex: number;
  setAnimation: TSetAnimation;
};

export function CarsharingSliderComponent({
  translate,
  transition,
  width,
  sliderImagesArr,
  nextSlide,
  prevSlide,
  activeIndex,
  setAnimation,
}: TCarsharingSliderComponent) {
  return (
    <div className={styles.container}>
      <CarsharingSliderArrows prevSlide={prevSlide} nextSlide={nextSlide} />
      <SliderPaginationDots
        activeIndex={activeIndex}
        sliderImagesArr={sliderImagesArr}
        setAnimation={setAnimation}
      />
      <div
        className={styles.slider_content}
        style={{
          transform: `translate(-${translate}px)`,
          transition: `transform ease-out 0.4s`,
        }}
      >
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
