import { useState } from 'react';
import { CarsharingComponent, HamburgerMenu } from '../../components';
import { CarsharingSliderComponent } from '../../components/carsharing-slider-component';
import styles from './main-page.module.css';
import { images } from '../../shared/images';

export function MainPage() {
  const [isClicked, setClicked] = useState(false);
  const [isMenuActive, setMenuActive] = useState(true);

  const getWidth = () => window.innerWidth;

  const [animation, setAnimation] = useState({
    translate: 0,
    transition: 0.45,
    activeIndex: 0,
  });

  const { translate, transition, activeIndex } = animation;

  const nextSlide = () => {
    if (activeIndex === images.length - 1) {
      return setAnimation({
        ...animation,
        activeIndex: 0,
      });
    }

    setAnimation({
      ...animation,
      activeIndex: activeIndex + 1,
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setAnimation({
        ...animation,
        activeIndex: images.length - 1,
      });
    }

    setAnimation({
      ...animation,
      activeIndex: activeIndex - 1,
    });
  };

  return (
    <div className={styles.container}>
      <HamburgerMenu isMenuActive={isMenuActive} />
      <CarsharingComponent isClicked={isClicked} setClicked={setClicked} />
      <CarsharingSliderComponent
        translate={translate}
        transition={transition}
        width={getWidth()}
        sliderImagesArr={images}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        activeIndex={activeIndex}
      />
    </div>
  );
}
