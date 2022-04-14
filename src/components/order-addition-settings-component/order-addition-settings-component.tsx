import { useMemo, useState } from 'react';
import setHours from 'date-fns/setHours';
import { useAppSelector } from '../../shared/custom-hooks';
import { CarRateComponent } from '../car-rate-component';
import { CheckboxComponent } from '../checkbox-component';
import { ColorFilterForm } from '../color-filter-form';
import { DateFilterComponent } from '../date-filter-component';
import { carsRateTitleArr, checkboxArrState } from './constants';
import styles from './order-addition-settings-component.module.scss';

export function OrderAdditionSettingsComponent() {
  const [activeColorButtonName, setActiveColorButtonName] = useState('');
  const [dateFrom, setDateFrom] = useState<Date | null>(null);
  const [dateTo, setDateTo] = useState<Date | null>(null);
  const [checkboxArr, setCheckbox] = useState(checkboxArrState);
  const [activeCarRateButtonName, setActiveCarRateButtonName] = useState('');
  const maxTime = setHours(dateFrom || 0, 23);
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

  const checkboxActivity = (
    checkboxArray: typeof checkboxArr,
    activeTitle: string,
  ) => {
    setCheckbox(
      checkboxArray.map(item =>
        item.title === activeTitle
          ? { ...item, isActive: !item.isActive }
          : item,
      ),
    );
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
        maxTime={maxTime}
      />
      <div className={styles.car_rate_wrapper}>
        <CarRateComponent
          activeButtonName={activeCarRateButtonName}
          carsRateTitleArr={carsRateTitleArr}
          setActiveButtonName={setActiveCarRateButtonName}
        />
      </div>
      <CheckboxComponent
        checkboxArr={checkboxArr}
        setCheckboxItem={checkboxActivity}
      />
    </section>
  );
}
