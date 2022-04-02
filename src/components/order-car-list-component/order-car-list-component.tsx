import { useState } from 'react';
import { FilterCarsForm } from '../filter-cars-form';
import styles from './order-car-list-component.module.scss';

export function OrderCarListComponent() {
  const [activeButtonName, setActiveButtonName] = useState('all');
  return (
    <div className={styles.container}>
      <FilterCarsForm
        activeButtonName={activeButtonName}
        setActiveButtonName={setActiveButtonName}
      />
    </div>
  );
}
