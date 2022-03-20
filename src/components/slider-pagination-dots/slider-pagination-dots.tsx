import { Dispatch, SetStateAction } from 'react';
import { TSetAnimation, TSliderImagesArr } from '../../shared/types';
import styles from './slider-pagination-dots.module.css';

type TSliderPaginationDots = {
  sliderImagesArr: TSliderImagesArr[];
  activeIndex: number;
  setAnimation: TSetAnimation;
};

export function SliderPaginationDots({
  sliderImagesArr,
  activeIndex,
  setAnimation,
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
          onClick={() =>
            setAnimation({
              translate: 0,
              transition: 0,
              activeIndex: index,
            })
          }
        />
      ))}
    </nav>
  );
}
