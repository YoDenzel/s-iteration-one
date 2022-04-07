import { useState } from 'react';
import slide1 from '../../shared/images/slider/slide-1.png';
import styles from './car-list-item.module.scss';

type TCarListItem = {
  name: string;
  priceMin: number;
  priceMax: number;
  path: string;
  image: string;
  setImage: (v: string) => void;
  clickHandler: (v: string) => void;
  carName: string;
};

export function CarListItem({
  name,
  path,
  priceMax,
  priceMin,
  image,
  setImage,
  clickHandler,
  carName,
}: TCarListItem) {
  return (
    <button
      className={`${styles.car_item_container} ${
        carName === name && styles.car_choosed
      }`}
      onClick={() => clickHandler(name)}
    >
      <div className={styles.text_info_block}>
        <h4 className={styles.title_info}>{name}</h4>
        <p className={styles.price_info}>
          {priceMin} - {priceMax} ₽
        </p>
      </div>
      <div className={styles.image_block}>
        <img
          src={image || path}
          className={styles.car_image}
          onError={() => setImage(slide1)}
        />
      </div>
    </button>
  );
}
