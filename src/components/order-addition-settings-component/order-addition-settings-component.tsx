import { useEffect, useMemo, useState } from 'react';
import {
  isSameDay,
  setHours,
  formatDuration,
  intervalToDuration,
  addMinutes,
} from 'date-fns';
import ru from 'date-fns/locale/ru';
import { useAppDispatch, useAppSelector } from '../../shared/custom-hooks';
import { CarRateComponent } from '../car-rate-component';
import { CheckboxComponent } from '../checkbox-component';
import { ColorFilterForm } from '../color-filter-form';
import { DateFilterComponent } from '../date-filter-component';
import { carsRateTitleArr, checkboxArrState } from './constants';
import styles from './order-addition-settings-component.module.scss';
import {
  setCarColor,
  setRate,
  setRentalDuration,
} from '../../redux/step-three-order-form-slice/step-three-order-form-slice';
import { additionalServicesCheck } from '../../shared/functions';

export function OrderAdditionSettingsComponent() {
  const [activeColorButtonName, setActiveColorButtonName] = useState('');
  const [dateFrom, setDateFrom] = useState<Date | null>(null);
  const [dateTo, setDateTo] = useState<Date | null>(null);
  const [checkboxArr, setCheckbox] = useState(checkboxArrState);
  const [activeCarRateButtonName, setActiveCarRateButtonName] = useState('');
  const dispatch = useAppDispatch();
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

  const colorClickhandler = (color: string) => {
    setActiveColorButtonName(color);
    dispatch(
      setCarColor({
        carColor: color,
      }),
    );
  };

  const rateClickhandler = (rateProp: string) => {
    setActiveCarRateButtonName(rateProp);
    dispatch(
      setRate({
        rate: rateProp === 'Поминутно, 7₽/мин' ? 'Поминутно' : 'На сутки',
      }),
    );
  };

  const interval = intervalToDuration({
    start: dateFrom || 0,
    end: dateTo || 0,
  });

  useEffect(() => {
    if ((dateFrom && dateTo) || (!dateFrom && !dateTo)) {
      dispatch(
        setRentalDuration({
          rentalDuration: formatDuration(interval, {
            format: ['years', 'months', 'weeks', 'days', 'hours', 'minutes'],
            locale: ru,
          }),
        }),
      );
    }
  }, [dateFrom, dateTo]);

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
      checkboxArray.map(item => {
        if (item.title === activeTitle) {
          additionalServicesCheck(activeTitle, item, dispatch);
          return { ...item, isActive: !item.isActive };
        } else return item;
      }),
    );
  };

  const minTime = () => {
    return isSameDay(dateFrom || 0, dateTo || dateFrom || 0)
      ? addMinutes(dateFrom || 0, 1)
      : undefined;
  };

  return (
    <section className={styles.settings_container}>
      <div className={styles.color_filter_form_wrapper}>
        <ColorFilterForm
          title="Цвет"
          activeButtonName={activeColorButtonName}
          titleArr={filterRadioButtonTitlesArr}
          clickRadioButtonHandler={colorClickhandler}
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
        minTime={minTime()}
      />
      <div className={styles.car_rate_wrapper}>
        <CarRateComponent
          activeButtonName={activeCarRateButtonName}
          carsRateTitleArr={carsRateTitleArr}
          setActiveButtonName={rateClickhandler}
        />
      </div>
      <CheckboxComponent
        checkboxArr={checkboxArr}
        setCheckboxItem={checkboxActivity}
      />
    </section>
  );
}
