import { format } from 'date-fns';
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
  useGetData,
  usePostCarOrder,
} from '../../shared/custom-hooks';
import { FinalInfoComponent } from '../final-info-component';
import { OrderConfirmationPopup } from '../order-confirmation-popup';
import styles from './order-final-step-component.module.scss';
import {
  getDateFromInNumber,
  getDateToInNumber,
} from '../../redux/rent-date/rent-date';
import { TOrderStatus } from '../../shared/types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export function OrderFinalStepComponent() {
  const mapState = (state: RootState) => ({
    stepThree: getStepThreeObj(state),
    checkoutPrice: state.checkoutPrice,
    dateFrom: getDateFromInNumber(state),
    dateTo: getDateToInNumber(state),
    rateId: getRateId(state),
    cityObj: getCityObj(state),
    pointId: getPointId(state),
    carItem: state.stepTwoOrderForm.car,
  });
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
    carItem,
  } = useAppSelector(mapState);
  let navigate = useNavigate();
  const isPopupActive = useAppSelector(
    state => state.orderConfirmationPopupStatusSlice.isPopupActive,
  );
  const { data: orderStatus } = useGetData<TOrderStatus>({
    QUERY_KEY: 'orderStatus',
    url: 'orderStatus',
  });
  const finalPrice = checkoutPrice.minPrice + checkoutPrice.rentTimePrice;
  const availableFrom = format(new Date(dateFrom), 'dd.MM.yyyy HH:mm');
  const fuel = !carItem.tank ? 'Нет данных' : `${carItem.tank}%`;

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
      orderStatusId: orderStatus?.data[0],
    });
    dispatch(
      setPopup({
        isPopupActive: false,
      }),
    );
  };

  useEffect(() => {
    data && navigate(`/s-iteration-one/order/${data.data.id}`);
  }, [data]);

  return (
    <>
      <section className={styles.final_step_wrapper}>
        <FinalInfoComponent
          carName={carItem.name}
          availableFrom={availableFrom}
          carImageUrl={carItem.thumbnail.path}
          carNumber={carItem.number || 'Нет данных'}
          fuel={stepThree.fullTank ? '100%' : `${fuel}`}
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
