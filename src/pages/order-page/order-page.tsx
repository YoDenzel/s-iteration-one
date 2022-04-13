import { useState } from 'react';
import {
  BreadcrumbsComponent,
  CheckoutForm,
  HeaderComponent,
  OrderGeolocationComponent,
} from '../../components';
import { useAppSelector } from '../../shared/custom-hooks';
import { isButtonActive } from '../../shared/functions';
import { breadcrumbsArr } from './constants';
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
  const buttonActive = isButtonActive({
    activeIndex: activeComponentIndex,
    firstStep: firstStepObj,
  });

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
          isButtonActive={buttonActive}
          buttonTitle="Выбрать модель"
          firstStepObj={firstStepObj}
        />
      </main>
    </section>
  );
}
