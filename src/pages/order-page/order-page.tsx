import { useState } from 'react';
import {
  BreadcrumbsComponent,
  CheckoutForm,
  HeaderComponent,
  OrderGeolocationComponent,
} from '../../components';
import { breadcrumbsArr } from '../../shared/constants';
import { useAppSelector } from '../../shared/custom-hooks';
import styles from './order-page.module.scss';

export function OrderPage() {
  const [activeComponentIndex, setActiveComponentIndex] = useState(0);
  const stepOne = useAppSelector(state => state.stepOneOrderForm);
  const firstStepObj = {
    title: 'Пункт выдачи',
    information: `${stepOne.inputCity}${
      stepOne.inputStreet.length > 6 ? ', ' + stepOne.inputStreet : ''
    }`,
  };

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
        <CheckoutForm
          price="8000 до 12000"
          isButtonActive={true}
          buttonTitle="Выбрать модель"
          firstStepObj={firstStepObj}
        />
      </main>
    </section>
  );
}
