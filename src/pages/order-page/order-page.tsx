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
import { breadcrumbsArr, buttonTitle } from './constants';
import styles from './order-page.module.scss';

export function OrderPage() {
  const [activeComponentIndex, setActiveComponentIndex] = useState(1);
  const stepOne = useAppSelector(state => state.stepOneOrderForm);
  const stepTwo = useAppSelector(state => state.stepTwoOrderForm.carName);
  const firstStepObj = {
    title: 'Пункт выдачи',
    information:
      stepOne.inputCity && stepOne.inputStreet
        ? `${stepOne.inputCity}, ${stepOne.inputStreet}`
        : '',
  };

  const secondStepObj = {
    title: 'Модель',
    information: stepTwo,
  };

  const buttonActive = isButtonActive({
    activeIndex: activeComponentIndex,
    firstStep: firstStepObj,
    secondStep: secondStepObj,
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

  const isBreadcrumbDisabled = (index: number) => {
    return isButtonActive({
      activeIndex: index - 1,
      firstStep: firstStepObj,
      secondStep: secondStepObj,
    });
  };

  return (
    <section className={styles.order_container}>
      <div className={styles.wrapper}>
        <HeaderComponent />
      </div>
      <BreadcrumbsComponent
        breadcrumbsArr={breadcrumbsArr}
        activeComponentIndex={activeComponentIndex}
        setActiveIndex={setActiveComponentIndex}
        isButtonActive={isBreadcrumbDisabled}
      />
      <main className={styles.main_container}>
        {showComponent(activeComponentIndex)}
        <CheckoutForm
          price="8000 до 12000"
          isButtonActive={buttonActive}
          buttonTitle={buttonTitle[activeComponentIndex]}
          firstStepObj={firstStepObj}
          secondStepObj={secondStepObj}
          clickHandler={clickHandler}
        />
      </main>
    </section>
  );
}
