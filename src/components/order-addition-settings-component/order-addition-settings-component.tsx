import { useMemo, useState } from 'react';
import { useAppSelector } from '../../shared/custom-hooks';
import { CarRateComponent } from '../car-rate-component';
import { CheckboxItem } from '../checkbox-item';
import { ColorFilterForm } from '../color-filter-form';
import { DateFilterComponent } from '../date-filter-component';
import { carsRateTitleArr } from './constants';
import compareAsc from 'date-fns/compareAsc';
import styles from './order-addition-settings-component.module.scss';

export function OrderAdditionSettingsComponent() {
  const [activeColorButtonName, setActiveColorButtonName] = useState('Любой');
  const [dateFrom, setDateFrom] = useState<Date | null>(null);
  const [dateTo, setDateTo] = useState<Date | null>(null);
  const [activeCarRateButtonName, setActiveCarRateButtonName] =
    useState('Поминутно, 7₽/мин');
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
          activeButtonName={activeColorButtonName}
          titleArr={filterRadioButtonTitlesArr}
          clickRadioButtonHandler={setActiveColorButtonName}
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
        <CarRateComponent
          activeButtonName={activeCarRateButtonName}
          carsRateTitleArr={carsRateTitleArr}
          setActiveButtonName={setActiveCarRateButtonName}
        />
      </div>
      <CheckboxItem />
    </section>
  );
}
