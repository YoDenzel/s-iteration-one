import { useEffect, useMemo, useState } from 'react';
import { setCarName } from '../../redux/step-two-order-form-slice/step-two-order-form-slice';
import {
  useAppDispatch,
  useGetData,
  usePagination,
} from '../../shared/custom-hooks';
import { TCars } from '../../shared/types';
import { CarsListComponent } from '../cars-list-component';
import { ErrorComponent } from '../error-component';
import { FilterCarsForm } from '../filter-cars-form';
import { LoadingComponent } from '../loading-component';
import { PAGE_LIMIT } from './constants';
import styles from './order-car-list-component.module.scss';

export function OrderCarListComponent() {
  const [activeButtonName, setActiveButtonName] = useState('all');
  const [car, setCar] = useState('');
  const [filter, setFilter] = useState('');
  const [image, setImage] = useState('');
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

  useEffect(() => {
    dispatch(
      setCarName({
        carInput: car,
      }),
    );
  }, [car]);

  const isNextPage = () => {
    if (currentPage === totalPageCount) return true;
    else return false;
  };

  const isPrevPage = () => {
    if (currentPage === 1) return true;
    else return false;
  };

  const clickRadioButtonHandler = (name: string, filter: string) => {
    setActiveButtonName(name);
    setFilter(filter);
    setCurrentPage(1);
  };

  return (
    <div className={styles.container}>
      <FilterCarsForm
        activeButtonName={activeButtonName}
        clickRadioButtonHandler={clickRadioButtonHandler}
      />
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
          image={image}
          setImage={setImage}
          clickHandler={setCar}
          carName={car}
        />
      )}
    </div>
  );
}
