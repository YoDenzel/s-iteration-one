import { TCars } from '../../shared/types';
import { CarListItem } from '../car-list-item';
import { Pagination } from '../pagination';
import styles from './cars-list-component.module.scss';

type TCarsList = {
  data?: TCars;
  currentPage: number;
  setCurrentPage: (v: number) => void;
  paginationRange: (string | number)[] | undefined;
  nextPageClickhandler: () => void;
  prevPageClickhandler: () => void;
};

export function CarsListComponent({
  data,
  currentPage,
  nextPageClickhandler,
  paginationRange,
  prevPageClickhandler,
  setCurrentPage,
}: TCarsList) {
  return (
    <section className={styles.flex_wrapper}>
      <div className={styles.cars_list_container}>
        {data?.data.map(item => (
          <CarListItem
            name={item.name}
            path={item.thumbnail.path}
            priceMax={item.priceMax}
            priceMin={item.priceMin}
            key={item.id}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        nextPageClickhandler={nextPageClickhandler}
        paginationRange={paginationRange}
        prevPageClickhandler={prevPageClickhandler}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}
