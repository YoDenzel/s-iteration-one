import { useState } from 'react';
import slide1 from '../../shared/images/slider/slide-1.png';
import styles from './car-list-item.module.scss';
import { TCarListItem } from './types';

export function CarListItem({
  name,
  path,
  priceMax,
  priceMin,
  clickHandler,
  carName,
}: TCarListItem) {
  const [image, setImage] = useState('');
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
          alt="Фотография машины"
        />
      </div>
    </button>
  );
}
