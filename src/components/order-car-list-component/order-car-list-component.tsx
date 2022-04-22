import { useEffect, useMemo, useState } from 'react';
import {
  setMinMaxPrice,
  setPrice,
} from '../../redux/checkout-price-slice/checkout-price-slice';
import { setCheckboxFalse } from '../../redux/order-form-checkbox-arr/order-form-checkbox-arr';
import { clearDates } from '../../redux/rent-date/rent-date';
import { clearStepThreeStore } from '../../redux/step-three-order-form-slice/step-three-order-form-slice';
import { setCarItem } from '../../redux/step-two-order-form-slice/step-two-order-form-slice';
import {
  useAppDispatch,
  useAppSelector,
  useGetData,
  usePagination,
} from '../../shared/custom-hooks';
import { clearOrderDataOnChange } from '../../shared/functions';
import { TCars } from '../../shared/types';
import { CarsListComponent } from '../cars-list-component';
import { ErrorComponent } from '../error-component';
import { FilterRadioForm } from '../filter-radio-form';
import { LoadingComponent } from '../loading-component';
import { PAGE_LIMIT, radioFilterButtonsArr } from './constants';
import styles from './order-car-list-component.module.scss';

export function OrderCarListComponent() {
  const [activeButtonName, setActiveButtonName] = useState('Все модели');
  const carNameRedux = useAppSelector(state => state.stepTwoOrderForm.car.name);
  const [car, setCar] = useState(carNameRedux);
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();
  const { data, isError, isLoading } = useGetData<TCars>({
    QUERY_KEY: 'cars',
    url: `car?${filter}&page=${currentPage - 1}&limit=${PAGE_LIMIT}`,
  });
  const { paginationRange, totalPageCount } = usePagination({
    currentPage: currentPage,
    pageSize: PAGE_LIMIT,
    totalCount: data?.count ?? 1,
    siblingCount: 1,
  });

  const activeCarItem = useMemo(() => {
    return data?.data.filter(item => (item.name === car ? item : null))[0];
  }, [car]);

  useEffect(() => {
    if (activeCarItem) {
      dispatch(
        setCarItem({
          car: activeCarItem,
        }),
      );
    }
    if (car !== carNameRedux) {
      dispatch(
        setPrice({
          price: `от ${(activeCarItem?.priceMin || 0) + 8000} до ${
            (activeCarItem?.priceMax || 0) + 12000
          } ₽`,
        }),
      );
      dispatch(
        setMinMaxPrice({
          minPrice: (activeCarItem?.priceMin || 0) + 8000,
          maxPrice: (activeCarItem?.priceMax || 0) + 12000,
        }),
      );
      clearOrderDataOnChange(1, dispatch);
    }
  }, [car]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const isNextPage = () => {
    if (currentPage === totalPageCount) return true;
    else return false;
  };

  const isPrevPage = () => {
    if (currentPage === 1) return true;
    else return false;
  };

  const clickRadioButtonHandler = (name: string) => {
    setActiveButtonName(name);
    setFilter(() => {
      if (name === 'Эконом') return 'priceMin[$lt]=20000';
      else if (name === 'Премиум') return 'priceMin[$gt]=20000';
      else return '';
    });
    setCurrentPage(1);
  };

  return (
    <section className={styles.container}>
      <div className={styles.margin_wrapper}>
        <FilterRadioForm
          activeButtonName={activeButtonName}
          clickRadioButtonHandler={clickRadioButtonHandler}
          titleArr={radioFilterButtonsArr}
        />
      </div>
      {isError && <ErrorComponent />}
      {isLoading && <LoadingComponent />}
      {!isError && !isLoading && (
        <CarsListComponent
          isNextPage={isNextPage}
          isPrevPage={isPrevPage}
          data={data?.data}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          nextPageClickhandler={() =>
            setCurrentPage(prevValue => prevValue + 1)
          }
          paginationRange={paginationRange}
          prevPageClickhandler={() =>
            setCurrentPage(prevValue => prevValue - 1)
          }
          clickHandler={setCar}
          carName={car}
        />
      )}
    </section>
  );
}
