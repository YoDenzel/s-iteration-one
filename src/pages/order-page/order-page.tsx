import { useState } from 'react';
import { BreadcrumbsComponent, HeaderComponent } from '../../components';

import styles from './order-page.module.css';

export function OrderPage() {
  const [activeComponentIndex, setActiveComponentIndex] = useState(0);
  const breadcrumbsArr = [
    {
      title: 'Местоположение',
      linkTo: '/simbirsoft-iteration-one/order',
    },
    {
      title: 'Модель',
      linkTo: '/simbirsoft-iteration-one/order',
    },
    {
      title: 'Дополнительно',
      linkTo: '/simbirsoft-iteration-one/order',
    },
    {
      title: 'Итого',
      linkTo: '/simbirsoft-iteration-one/order',
    },
  ];

  return (
    <section className={styles.order_container}>
      <div className={styles.wrapper}>
        <HeaderComponent />
      </div>
      <BreadcrumbsComponent
        breadcrumbsArr={breadcrumbsArr}
        activeComponentIndex={activeComponentIndex}
      />
    </section>
  );
}
