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
      {carsRateTitleArr?.map(item => (
        <div className={styles.cars_title_wrapper} key={item.id}>
          <FilterRadioButton
            activeButtonName={activeButtonName}
            clickRadioButtonHandler={() => setActiveButtonName(item)}
            name={`${item.rateTypeId.name}, ${item.price} ₽`}
          />
        </div>
      ))}
    </section>
  );
}
