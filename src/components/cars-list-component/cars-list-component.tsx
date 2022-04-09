import { CarListItem } from '../car-list-item';
import { Pagination } from '../pagination';
import styles from './cars-list-component.module.scss';
import { TCarsList } from './types';

export function CarsListComponent({
  data,
  currentPage,
  nextPageClickhandler,
  paginationRange,
  prevPageClickhandler,
  setCurrentPage,
  isNextPage,
  isPrevPage,
  clickHandler,
  carName,
}: TCarsList) {
  return (
    <article className={styles.flex_wrapper}>
      <div className={styles.cars_list_container}>
        {data?.map(item => (
          <CarListItem
            name={item.name}
            path={item.thumbnail.path}
            priceMax={item.priceMax}
            priceMin={item.priceMin}
            key={item.id}
            clickHandler={clickHandler}
            carName={carName}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        nextPageClickhandler={nextPageClickhandler}
        paginationRange={paginationRange}
        prevPageClickhandler={prevPageClickhandler}
        setCurrentPage={setCurrentPage}
        isNextPage={isNextPage}
        isPrevPage={isPrevPage}
      />
    </article>
  );
}
