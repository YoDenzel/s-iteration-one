import { useState } from 'react';
import { FilterRadioButton } from '../filter-radio-button';
import styles from './car-rate-component.module.scss';
import { TCarRateComponent } from './types';

export function CarRateComponent({
  activeButtonName,
  carsRateTitleArr,
  setActiveButtonName,
}: TCarRateComponent) {
  return (
    <section className={styles.car_rate_container}>
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
    </section>
  );
}
