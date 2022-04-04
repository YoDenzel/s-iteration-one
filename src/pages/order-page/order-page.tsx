import { useState } from 'react';
import {
  BreadcrumbsComponent,
  CheckoutForm,
  HeaderComponent,
  OrderCarListComponent,
  OrderGeolocationComponent,
} from '../../components';
import { useAppSelector } from '../../shared/custom-hooks';
import { isButtonActive } from '../../shared/functions';
import { breadcrumbsArr } from './constants';
import styles from './order-page.module.scss';

export function OrderPage() {
  const [activeComponentIndex, setActiveComponentIndex] = useState(1);
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

  const clickHandler = () => {
    setActiveComponentIndex(prevState => prevState + 1);
  };

  function showComponent(activeIndex: number) {
    switch (activeIndex) {
      case 0: {
        return <OrderGeolocationComponent />;
      }
      case 1: {
        return <OrderCarListComponent />;
      }
    }
  }

  return (
    <section className={styles.order_container}>
      <div className={styles.wrapper}>
        <HeaderComponent />
      </div>
      <BreadcrumbsComponent
        breadcrumbsArr={breadcrumbsArr}
        activeComponentIndex={activeComponentIndex}
        setActiveIndex={setActiveComponentIndex}
      />
      <main className={styles.main_container}>
        {showComponent(activeComponentIndex)}
        <CheckoutForm
          price="8000 до 12000"
          isButtonActive={buttonActive}
          buttonTitle="Выбрать модель"
          firstStepObj={firstStepObj}
          clickHandler={clickHandler}
        />
      </main>
    </section>
  );
}
