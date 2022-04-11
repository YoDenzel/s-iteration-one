import { useState } from 'react';
import { FilterRadioButton } from '../filter-radio-button';
import styles from './car-rate-component.module.scss';

export function CarRateComponent() {
  const [activeButtonName, setActiveButtonName] = useState('Поминутно, 7₽/мин');
  const carsRateTitleArr = ['Поминутно, 7₽/мин', 'На сутки, 1999 ₽/сутки'];
  return (
    <form className={styles.car_rate_container}>
      <h1 className={styles.header_title}>Тариф</h1>
      {carsRateTitleArr.map((item, index) => (
        <div className={styles.cars_title_wrapper} key={item + index}>
          <FilterRadioButton
            activeButtonName={activeButtonName}
            clickRadioButtonHandler={setActiveButtonName}
            name={item}
          />
        </div>
      ))}
    </form>
  );
}
