import { TSliderImagesArr } from '../../shared/types';
import styles from './slider-pagination-dots.module.css';

type TSliderPaginationDots = {
  sliderImagesArr: TSliderImagesArr[];
  activeIndex: number;
  setActiveIndex: (v: number) => void;
};

export function SliderPaginationDots({
  sliderImagesArr,
  activeIndex,
  setActiveIndex,
}: TSliderPaginationDots) {
  return (
    <nav className={styles.dots_container}>
      {sliderImagesArr.map((item, index) => (
        <div
          key={item.title + index}
          className={styles.single_dot}
          style={{
            backgroundColor: index === activeIndex ? '#0EC261' : '#FFFFFF',
          }}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </nav>
  );
}
