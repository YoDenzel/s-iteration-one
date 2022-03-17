import { images } from '../../shared/images';
import { CarsharingSliderArrows } from '../carsharing-slider-arrows';
import { SingleSlideComponent } from '../single-slide-component/single-slide-component';
import styles from './carsharing-slider-component.module.css';

type TCarsharingSliderComponent = {
  translate: number;
  transition: number;
  width: number;
  sliderImagesArr: typeof images;
  nextSlide: () => void;
  prevSlide: () => void;
  activeIndex: number;
};

export function CarsharingSliderComponent({
  translate,
  transition,
  width,
  sliderImagesArr,
  nextSlide,
  prevSlide,
  activeIndex,
}: TCarsharingSliderComponent) {
  return (
    <div className={styles.container}>
      <CarsharingSliderArrows prevSlide={prevSlide} nextSlide={nextSlide} />

      <div
        className={styles.slider_content}
        style={{
          transform: `translate(-${translate}px)`,
          transition: `transform ease-out 0.4s`,
        }}
      >
        {sliderImagesArr.map((item, index) =>
          activeIndex === index ? (
            <SingleSlideComponent
              key={item.title + index}
              sliderImage={item.sliderImage}
              buttonColor={item.buttonColor}
              description={item.description}
              title={item.title}
              more="Подробнее"
            />
          ) : null,
        )}
      </div>
    </div>
  );
}
