import { setPopup } from '../../redux/order-confirmation-popup-status-slice/order-confirmation-popup-status-slice';
import { RootState } from '../../redux/store';
import {
  getCityObj,
  getPointId,
} from '../../redux/step-one-order-form-slice/step-one-order-form-slice';
import {
  getRateId,
  getStepThreeObj,
} from '../../redux/step-three-order-form-slice/step-three-order-form-slice';
import {
  useAppDispatch,
  useAppSelector,
  useClickOutside,
  usePostCarOrder,
} from '../../shared/custom-hooks';
import { FinalInfoComponent } from '../final-info-component';
import { OrderConfirmationPopup } from '../order-confirmation-popup';
import styles from './order-final-step-component.module.scss';
import {
  getDateFromInNumber,
  getDateToInNumber,
} from '../../redux/rent-date/rent-date';

export function OrderFinalStepComponent() {
  const mapState = (state: RootState) => ({
    stepThree: getStepThreeObj(state),
    checkoutPrice: state.checkoutPrice,
    dateFrom: getDateFromInNumber(state),
    dateTo: getDateToInNumber(state),
    rateId: getRateId(state),
    cityObj: getCityObj(state),
    pointId: getPointId(state),
  });
  const carItem = useAppSelector(state => state.stepTwoOrderForm.car);
  const { mutateAsync, data } = usePostCarOrder();
  const dispatch = useAppDispatch();
  const popupRef = useClickOutside<HTMLDivElement>(() =>
    dispatch(setPopup({ isPopupActive: false })),
  );
  const {
    dateFrom,
    dateTo,
    checkoutPrice,
    stepThree,
    rateId,
    cityObj,
    pointId,
  } = useAppSelector(mapState);
  const isPopupActive = useAppSelector(
    state => state.orderConfirmationPopupStatusSlice.isPopupActive,
  );
  const finalPrice = checkoutPrice.minPrice + checkoutPrice.rentTimePrice;

  const submitOrderHandler = () => {
    mutateAsync({
      carId: carItem.id,
      dateFrom: dateFrom,
      dateTo: dateTo,
      price: finalPrice,
      isFullTank: stepThree.fullTank,
      isNeedChildChair: stepThree.babyChair,
      isRightWheel: stepThree.babyChair,
      color: stepThree.color,
      rateId: rateId,
      cityId: cityObj,
      pointId: pointId,
      orderStatusId: {
        name: 'Новые',
        id: '61b30fe9bb7a006c05c54e2b',
      },
    });
    dispatch(
      setPopup({
        isPopupActive: false,
      }),
    );
  };

  return (
    <>
      <section className={styles.final_step_wrapper}>
        <FinalInfoComponent
          carName={carItem.name}
          availableFrom="12.06.2019 12:00"
          carImageUrl={carItem.thumbnail.path}
          carNumber={carItem.number}
          fuel={stepThree.fullTank ? '100%' : `${carItem.tank}%`}
        />
      </section>
      {isPopupActive && (
        <OrderConfirmationPopup
          popupRef={popupRef}
          clickHandler={() => submitOrderHandler()}
        />
      )}
    </>
  );
}
