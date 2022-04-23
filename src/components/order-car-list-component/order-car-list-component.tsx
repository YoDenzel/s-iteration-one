import { useEffect, useMemo, useState } from 'react';
import {
  setMinMaxPrice,
  setPrice,
} from '../../redux/checkout-price-slice/checkout-price-slice';
import {
  setCarFilter,
  setCarItem,
} from '../../redux/step-two-order-form-slice/step-two-order-form-slice';
import { RootState } from '../../redux/store';
import {
  useAppDispatch,
  useAppSelector,
  useGetData,
  usePagination,
} from '../../shared/custom-hooks';
import { clearOrderDataOnChange } from '../../shared/functions';
import { TCarCategory, TCars } from '../../shared/types';
import { CarsListComponent } from '../cars-list-component';
import { ErrorComponent } from '../error-component';
import { FilterRadioForm } from '../filter-radio-form';
import { LoadingComponent } from '../loading-component';
import { PAGE_LIMIT } from './constants';
import styles from './order-car-list-component.module.scss';

export function OrderCarListComponent() {
  const mapState = (state: RootState) => ({
    carNameRedux: state.stepTwoOrderForm.car.name,
    carFilter: state.stepTwoOrderForm.carFilter,
    carTitle: state.stepTwoOrderForm.carFilterButtonTitle,
  });
  const { carFilter, carNameRedux, carTitle } = useAppSelector(mapState);
  const [activeButtonName, setActiveButtonName] = useState(carTitle);
  const [car, setCar] = useState(carNameRedux);
  const [filter, setFilter] = useState(carFilter);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();
  const { data, isError, isLoading } = useGetData<TCars>({
    QUERY_KEY: 'cars',
    url: `car?${filter}&page=${currentPage - 1}&limit=${PAGE_LIMIT}`,
  });
  const { data: carCategory } = useGetData<TCarCategory>({
    QUERY_KEY: 'carCategory',
    url: 'category',
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
  const carCategoryNames = carCategory?.data.map(item => item.name);
  const radioFilterButtonsArr = ['Все модели'].concat(carCategoryNames || '');

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
    const categoryId = carCategory?.data.filter(item => item.name === name)[0];
    setFilter(() => {
      return categoryId ? `categoryId=${categoryId?.id}` : '';
    });
    dispatch(
      setCarFilter({
        carFilter: `categoryId=${categoryId?.id}`,
        carFilterButtonTitle: name,
      }),
    );
    setCurrentPage(1);
  };

  console.log(activeCarItem);
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
