import { useState } from 'react';
import {
  BreadcrumbsComponent,
  CheckoutForm,
  HeaderComponent,
  OrderAdditionSettingsComponent,
  OrderCarListComponent,
  OrderGeolocationComponent,
} from '../../components';
import { useAppSelector } from '../../shared/custom-hooks';
import { isButtonActive } from '../../shared/functions';
import { breadcrumbsArr, buttonTitle, thirdStepArrObj } from './constants';
import styles from './order-page.module.scss';

export function OrderPage() {
  const [activeComponentIndex, setActiveComponentIndex] = useState(0);
  const stepOne = useAppSelector(state => state.stepOneOrderForm);
  const stepTwo = useAppSelector(state => state.stepTwoOrderForm.carName);
  const stepThree = useAppSelector(state => state.stepThreeOrderForm);
  const checkoutPrice = useAppSelector(state => state.checkoutPrice.price);
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
    stepThree: stepThree,
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
      case 2: {
        return <OrderAdditionSettingsComponent />;
      }
    }
  }

  const isBreadcrumbDisabled = (index: number) => {
    return isButtonActive({
      activeIndex: index - 1,
      firstStep: firstStepObj,
      secondStep: secondStepObj,
      stepThree: stepThree,
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
          price={checkoutPrice}
          isButtonActive={buttonActive}
          buttonTitle={buttonTitle[activeComponentIndex]}
          firstStepObj={firstStepObj}
          secondStepObj={secondStepObj}
          clickHandler={clickHandler}
          thirdStepObj={thirdStepArrObj(stepThree)}
        />
      </main>
    </section>
  );
}
