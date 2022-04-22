import { useEffect, useMemo, useState } from 'react';
import {
  isSameDay,
  setHours,
  formatDuration,
  intervalToDuration,
  addMinutes,
} from 'date-fns';
import ru from 'date-fns/locale/ru';
import {
  useAppDispatch,
  useAppSelector,
  useGetData,
} from '../../shared/custom-hooks';
import { CarRateComponent } from '../car-rate-component';
import { CheckboxComponent } from '../checkbox-component';
import { ColorFilterForm } from '../color-filter-form';
import { DateFilterComponent } from '../date-filter-component';
import styles from './order-addition-settings-component.module.scss';
import {
  setCarColor,
  setCarRateItem,
  setRate,
  setRentalDuration,
} from '../../redux/step-three-order-form-slice/step-three-order-form-slice';
import { calculatePriceDependOnRate } from '../../shared/functions';
import { TCarRate, TCarRateData } from '../../shared/types';
import { RootState } from '../../redux/store';
import {
  getDateFrom,
  getDateTo,
  setDateFromRedux,
  setDateToRedux,
} from '../../redux/rent-date/rent-date';

export function OrderAdditionSettingsComponent() {
  const mapState = (state: RootState) => ({
    colorRedux: state.stepThreeOrderForm.color,
    carRate: state.stepThreeOrderForm.rate,
    checkboxArr: state.orderFormCheckboxArr.checkboxArr,
    price: state.checkoutPrice,
    dateFromRedux: getDateFrom(state),
    dateToRedux: getDateTo(state),
    carColors: useMemo(
      () =>
        state.stepTwoOrderForm.car.colors.filter(
          (item, index, arr) => arr.indexOf(item) === index,
        ),
      [],
    ),
  });
  const {
    carRate,
    colorRedux,
    checkboxArr,
    price,
    carColors,
    dateFromRedux,
    dateToRedux,
  } = useAppSelector(mapState);
  const [activeColorButtonName, setActiveColorButtonName] =
    useState(colorRedux);
  const [dateFrom, setDateFrom] = useState<Date | null>(dateFromRedux || null);
  const [dateTo, setDateTo] = useState<Date | null>(dateToRedux || null);
  const [activeCarRateButtonName, setActiveCarRateButtonName] =
    useState(carRate);
  const [activeCarRatePrice, setActiveCarRatePrice] = useState<number>();
  const { data } = useGetData<TCarRate>({
    QUERY_KEY: 'rate',
    url: `rate`,
  });
  const dispatch = useAppDispatch();
  const maxTime = setHours(dateFrom || 0, 23);
  const colorClickhandler = (color: string) => {
    setActiveColorButtonName(color);
    dispatch(
      setCarColor({
        carColor: color,
      }),
    );
  };

  useEffect(() => {
    dispatch(
      setDateFromRedux({
        dateFrom: dateFrom?.toString() || '',
      }),
    );
    dispatch(
      setDateToRedux({
        dateTo: dateTo?.toString() || '',
      }),
    );
  }, [dateFrom, dateTo]);

  const rateClickhandler = (rateProp: TCarRateData) => {
    setActiveCarRatePrice(rateProp.price);
    setActiveCarRateButtonName(
      `${rateProp.rateTypeId.name}, ${rateProp.price} ₽`,
    );
    dispatch(
      setRate({
        rate: `${rateProp.rateTypeId.name}, ${rateProp.price} ₽`,
      }),
    );
    dispatch(
      setCarRateItem({
        rateItem: rateProp,
      }),
    );
  };

  useEffect(() => {
    const interval = intervalToDuration({
      start: dateFrom || 0,
      end: dateTo || 0,
    });

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

  useEffect(() => {
    calculatePriceDependOnRate({
      activeCarRateButtonName: activeCarRateButtonName,
      price: activeCarRatePrice,
      dateFrom: dateFrom,
      dateTo: dateTo,
      dispatch: dispatch,
      minPrice: price.minPrice,
    });
  }, [dateFrom, dateTo, activeCarRateButtonName, price.minPrice]);

  const filterRadioButtonTitlesArr = ['Любой'].concat(carColors);

  const clearInputClickHandler = () => {
    setDateFrom(null);
    setDateTo(null);
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
          carsRateTitleArr={data?.data}
          setActiveButtonName={rateClickhandler}
        />
      </div>
      <CheckboxComponent checkboxArr={checkboxArr} />
    </section>
  );
}
