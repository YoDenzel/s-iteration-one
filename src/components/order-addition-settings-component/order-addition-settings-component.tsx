import { useMemo, useState } from 'react';
import { useAppSelector } from '../../shared/custom-hooks';
import { CarRateComponent } from '../car-rate-component';
import { ColorFilterForm } from '../color-filter-form';
import { DateFilterComponent } from '../date-filter-component';
import { InputDatePicker } from '../input-datepicker';
import styles from './order-addition-settings-component.module.scss';

export function OrderAdditionSettingsComponent() {
  const [activeButtonName, setActiveButtonName] = useState('Любой');
  const [dateFrom, setDateFrom] = useState<Date | null>(null);
  const [dateTo, setDateTo] = useState<Date | null>(null);
  const carColors = useAppSelector(state =>
    useMemo(
      () =>
        state.stepTwoOrderForm.carColors.filter(
          (item, index, arr) => arr.indexOf(item) === index,
        ),
      [],
    ),
  );
  const filterRadioButtonTitlesArr = ['Любой'].concat(carColors);

  const clearInputClickHandler = () => {
    setDateFrom(null);
    setDateTo(null);
  };

  return (
    <section className={styles.settings_container}>
      <div className={styles.color_filter_form_wrapper}>
        <ColorFilterForm
          title="Цвет"
          activeButtonName={activeButtonName}
          titleArr={filterRadioButtonTitlesArr}
          clickRadioButtonHandler={setActiveButtonName}
        />
      </div>
      <DateFilterComponent
        clearInputClickHandler={clearInputClickHandler}
        dateFrom={dateFrom}
        dateTo={dateTo}
        setDateFrom={setDateFrom}
        setDateTo={setDateTo}
        firstInputTitle="С"
        secondInputTitle="По"
        minDate={dateFrom}
      />
      <div className={styles.car_rate_wrapper}>
      <CarRateComponent /></div>
    </section>
  );
}
