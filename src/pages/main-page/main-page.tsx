import { useEffect, useRef, useState } from 'react';
import {
  CarsharingComponent,
  CarsharingSliderComponent,
} from '../../components';
import styles from './main-page.module.scss';
import { images } from '../../shared/images';
import { useAppSelector, useWindowWidth } from '../../shared/custom-hooks';

export function MainPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);
  const { windowWidth } = useWindowWidth();
  const isMenuActive = useAppSelector(state => state.sidebarSlide.isMenuActive);

  const autoPlayRef = useRef<() => void>();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayEnabled && autoPlayRef.current && autoPlayRef.current();
    };

    const interval = setInterval(play, 2 * 1000);
    return () => clearInterval(interval);
  }, [autoPlayEnabled]);

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setActiveIndex(images.length - 1);
    }
    setActiveIndex(activeIndex - 1);
  };

  const nextSlide = () => {
    if (activeIndex === images.length - 1) {
      return setActiveIndex(0);
    }
    setActiveIndex(activeIndex + 1);
  };

  return (
    <div className={styles.container}>
      <CarsharingComponent />
      {windowWidth > 1023 ? (
        <CarsharingSliderComponent
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          sliderImagesArr={images}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          setAutoPlayEnabled={setAutoPlayEnabled}
          isMenuActive={isMenuActive}
        />
      ) : null}
    </div>
  );
}
