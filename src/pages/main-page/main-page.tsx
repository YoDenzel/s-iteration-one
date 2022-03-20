import { useState } from 'react';
import {
  CarsharingComponent,
  CarsharingSliderComponent,
} from '../../components';
import styles from './main-page.module.css';
import { images } from '../../shared/images';
import { Icons } from '../../shared/icons';
import { useWindowWidth } from '../../shared/custom-hooks';

export function MainPage() {
  const [isClicked, setClicked] = useState(false);
  const [isMenuActive, setMenuActive] = useState(false);
  const [language, setLanguage] = useState('Eng');
  const { windowWidth, isMobile } = useWindowWidth();

  console.log(windowWidth);

  const menuIcons = [
    {
      linkTo: '/simbirsoft-iteration-one',
      icon: Icons.TelegramIcon,
    },
    {
      linkTo: '/simbirsoft-iteration-one',
      icon: Icons.FacebookIcon,
    },
    {
      linkTo: '/simbirsoft-iteration-one',
      icon: Icons.InstagramIcon,
    },
  ];

  const menuTitlesArr = [
    {
      title: 'Парковка',
      linkTo: '/simbirsoft-iteration-one',
    },
    {
      title: 'Страховка',
      linkTo: '/simbirsoft-iteration-one',
    },
    {
      title: 'Бензин',
      linkTo: '/simbirsoft-iteration-one',
    },
    {
      title: 'Обслуживание',
      linkTo: '/simbirsoft-iteration-one',
    },
  ];

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
      <CarsharingComponent
        windowWidth={windowWidth}
        isClicked={isClicked}
        setClicked={setClicked}
        isMenuActive={isMenuActive}
        language={language}
        menuIconsArr={menuIcons}
        menuTitlesArr={menuTitlesArr}
        setLanguage={setLanguage}
        setMenuActive={setMenuActive}
      />
      {windowWidth > 1023 ? (
        <CarsharingSliderComponent
          translate={translate}
          transition={transition}
          width={2}
          sliderImagesArr={images}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          activeIndex={activeIndex}
          setAnimation={setAnimation}
        />
      ) : null}
    </div>
  );
}
