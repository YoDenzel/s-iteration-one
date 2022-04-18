import { setPopup } from '../../redux/order-confirmation-popup-status-slice/order-confirmation-popup-status-slice';
import {
  useAppDispatch,
  useAppSelector,
  useClickOutside,
} from '../../shared/custom-hooks';
import { FinalInfoComponent } from '../final-info-component';
import { OrderConfirmationPopup } from '../order-confirmation-popup';
import styles from './order-final-step-component.module.scss';

export function OrderFinalStepComponent() {
  const carItem = useAppSelector(state => state.stepTwoOrderForm.car);
  const dispatch = useAppDispatch();
  const popupRef = useClickOutside<HTMLDivElement>(() =>
    dispatch(setPopup({ isPopupActive: false })),
  );
  const isCarFuelFull = useAppSelector(
    state => state.stepThreeOrderForm.fullTank,
  );
  const isPopupActive = useAppSelector(
    state => state.orderConfirmationPopupStatusSlice.isPopupActive,
  );

  return (
    <>
      <section className={styles.final_step_wrapper}>
        <FinalInfoComponent
          carName={carItem.name}
          availableFrom="12.06.2019 12:00"
          carImageUrl={carItem.thumbnail.path}
          carNumber={carItem.number}
          fuel={isCarFuelFull ? '100%' : `${carItem.tank}%`}
        />
      </section>
      {isPopupActive && <OrderConfirmationPopup popupRef={popupRef} />}
    </>
  );
}
