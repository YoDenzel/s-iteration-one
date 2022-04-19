import { useState } from 'react';
import {
  BreadcrumbsComponent,
  CheckoutForm,
  HeaderComponent,
  OrderAdditionSettingsComponent,
  OrderCarListComponent,
  OrderFinalStepComponent,
  OrderGeolocationComponent,
} from '../../components';
import { getCheckoutPrice } from '../../redux/checkout-price-slice/checkout-price-slice';
import { setPopup } from '../../redux/order-confirmation-popup-status-slice/order-confirmation-popup-status-slice';
import { getStepOneObj } from '../../redux/step-one-order-form-slice/step-one-order-form-slice';
import { getStepThreeObj } from '../../redux/step-three-order-form-slice/step-three-order-form-slice';
import { getCarItem } from '../../redux/step-two-order-form-slice/step-two-order-form-slice';
import { RootState } from '../../redux/store';
import { useAppDispatch, useAppSelector } from '../../shared/custom-hooks';
import { isButtonActive } from '../../shared/functions';
import { breadcrumbsArr, buttonTitle, thirdStepArrObj } from './constants';
import styles from './order-page.module.scss';

export function OrderPage() {
  const [activeComponentIndex, setActiveComponentIndex] = useState(0);
  const mapState = (state: RootState) => ({
    stepOne: getStepOneObj(state),
    stepTwo: getCarItem(state),
    stepThree: getStepThreeObj(state),
    checkoutPrice: getCheckoutPrice(state),
  });
  const { checkoutPrice, stepOne, stepThree, stepTwo } =
    useAppSelector(mapState);
  const dispatch = useAppDispatch();
  const firstStepObj = {
    title: 'Пункт выдачи',
    information:
      stepOne.inputCity && stepOne.inputStreet
        ? `${stepOne.inputCity}, ${stepOne.inputStreet}`
        : '',
  };

  const secondStepObj = {
    title: 'Модель',
    information: stepTwo?.name,
  };

  const buttonActive = isButtonActive({
    activeIndex: activeComponentIndex,
    firstStep: firstStepObj,
    secondStep: secondStepObj,
    stepThree: stepThree,
  });

  const clickHandler = () => {
    if (activeComponentIndex === 3) {
      dispatch(
        setPopup({
          isPopupActive: true,
        }),
      );
    } else setActiveComponentIndex(prevState => prevState + 1);
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
      case 3: {
        return <OrderFinalStepComponent />;
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
