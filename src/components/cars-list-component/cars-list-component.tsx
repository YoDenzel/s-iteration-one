import { TCars } from '../../shared/types';
import { CarListItem } from '../car-list-item';
import styles from './cars-list-component.module.scss';

type TCarsList = {
  data?: TCars;
};

export function CarsListComponent({ data }: TCarsList) {
  return (
    <section className={styles.cars_list_container}>
      {data?.data.map(item => (
        <CarListItem
          name={item.name}
          path={item.thumbnail.path}
          priceMax={item.priceMax}
          priceMin={item.priceMin}
          key={item.id}
        />
      ))}
    </section>
  );
}
