import { setMenuActive } from '../../redux/sidebar-slice/sidebar-slice';
import { useAppDispatch } from '../../shared/custom-hooks';
import { CarsharingSliderArrows, SingleSlideComponent } from '../index';
import { SliderPaginationDots } from '../slider-pagination-dots';
import styles from './carsharing-slider-component.module.scss';
import { TCarsharingSliderComponent } from './types';

export function CarsharingSliderComponent({
  sliderImagesArr,
  activeIndex,
  setActiveIndex,
  nextSlide,
  prevSlide,
  setAutoPlayEnabled,
  isMenuActive,
}: TCarsharingSliderComponent) {
  const dispatch = useAppDispatch()
  return (
    <section className={styles.container} onClick={() => dispatch(setMenuActive({
      menuActive: false
    }))}>
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
      <div
        className={`${
          isMenuActive ? styles.fogger_active : styles.fogger_inactive
        }`}
      />
    </section>
  );
}
