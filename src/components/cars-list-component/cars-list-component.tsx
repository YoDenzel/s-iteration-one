import { TCarsData } from '../../shared/types';
import { CarListItem } from '../car-list-item';
import { Pagination } from '../pagination';
import styles from './cars-list-component.module.scss';

type TCarsList = {
  data?: TCarsData[];
  currentPage: number;
  setCurrentPage: (v: number) => void;
  paginationRange: (string | number)[] | undefined;
  nextPageClickhandler: () => void;
  prevPageClickhandler: () => void;
  isPrevPage: () => boolean;
  isNextPage: () => boolean;
  image: string;
  setImage: (v: string) => void;
};

export function CarsListComponent({
  data,
  currentPage,
  nextPageClickhandler,
  paginationRange,
  prevPageClickhandler,
  setCurrentPage,
  isNextPage,
  isPrevPage,
  image, setImage
}: TCarsList) {
  return (
    <section className={styles.flex_wrapper}>
      <div className={styles.cars_list_container}>
        {data?.map(item => (
          <CarListItem
            name={item.name}
            path={item.thumbnail.path}
            priceMax={item.priceMax}
            priceMin={item.priceMin}
            key={item.id}
            image={image}
            setImage={setImage}
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
    </section>
  );
}
