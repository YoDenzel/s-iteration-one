import { useState } from 'react';
import {
  BreadcrumbsComponent,
  HeaderComponent,
  OrderGeolocationComponent,
} from '../../components';
import { breadcrumbsArr } from './constants';
import styles from './order-page.module.scss';

export function OrderPage() {
  const [activeComponentIndex, setActiveComponentIndex] = useState(0);

  return (
    <section className={styles.order_container}>
      <div className={styles.wrapper}>
        <HeaderComponent />
      </div>
      <BreadcrumbsComponent
        breadcrumbsArr={breadcrumbsArr}
        activeComponentIndex={activeComponentIndex}
      />
      <main className={styles.main_container}>
        <OrderGeolocationComponent />
      </main>
    </section>
  );
}
