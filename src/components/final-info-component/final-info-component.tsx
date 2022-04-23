import { useState } from 'react';
import { CarDetailsItem } from '../car-details-item';
import { TFinalInfoComponent } from './types';
import slide1 from '../../shared/images/slider/slide-1.png';
import styles from './final-info-component.module.scss';

export function FinalInfoComponent({
  availableFrom,
  carImageUrl,
  carName,
  carNumber,
  fuel,
}: TFinalInfoComponent) {
  const [image, setImage] = useState('');
  return (
    <article className={styles.final_info_wrapper}>
      <article className={styles.order_text_info}>
        <h1 className={styles.car_title}>{carName}</h1>
        <p className={styles.car_number}>{carNumber}</p>
        <CarDetailsItem title="Топливо" info={fuel} />
        <CarDetailsItem title="Доступна с" info={availableFrom} />
      </article>
      <img
        src={image || carImageUrl}
        className={styles.car_image}
        onError={() => setImage(slide1)}
      />
    </article>
  );
}
