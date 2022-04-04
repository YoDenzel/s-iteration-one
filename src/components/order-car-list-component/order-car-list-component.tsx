import { useState } from 'react';
import { useGetData } from '../../shared/custom-hooks';
import { createPaginationArray } from '../../shared/functions';
import { TCars } from '../../shared/types';
import { CarsListComponent } from '../cars-list-component';
import { FilterCarsForm } from '../filter-cars-form';
import { Pagination } from '../pagination';
import { PAGE_LIMIT } from './constants';
import styles from './order-car-list-component.module.scss';

export function OrderCarListComponent() {
  const [activeButtonName, setActiveButtonName] = useState('all');
  const [page, setPage] = useState(1);
  const { data } = useGetData<TCars>({
    QUERY_KEY: 'cars',
    url: `car?page=1&limit=${PAGE_LIMIT}`,
  });
  const totalPageCount = Math.ceil((data?.count ?? 83) / PAGE_LIMIT);
  console.log(createPaginationArray({ start: 1, end: totalPageCount }));
  return (
    <div className={styles.container}>
      <FilterCarsForm
        activeButtonName={activeButtonName}
        setActiveButtonName={setActiveButtonName}
      />
      <CarsListComponent data={data} />
      <Pagination />
    </div>
  );
}
