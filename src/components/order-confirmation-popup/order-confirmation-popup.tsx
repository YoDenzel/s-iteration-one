import { setPopup } from '../../redux/order-confirmation-popup-status-slice/order-confirmation-popup-status-slice';
import { useAppDispatch } from '../../shared/custom-hooks';
import styles from './order-confirmation-popup.module.scss';
import { TOrderConfirmationPopup } from './types';

export function OrderConfirmationPopup({
  popupRef,
  clickHandler,
}: TOrderConfirmationPopup) {
  const dispatch = useAppDispatch();
  return (
    <section className={styles.popup_wrapper}>
      <article className={styles.popup_container} ref={popupRef}>
        <h1 className={styles.popup_title}>Подтвердить заказ</h1>
        <form className={styles.buttons_container}>
          <button
            type="button"
            className={styles.agree_button}
            onClick={() => clickHandler()}
          >
            Подтвердить
          </button>
          <button
            type="button"
            className={styles.decline_button}
            onClick={() =>
              dispatch(
                setPopup({
                  isPopupActive: false,
                }),
              )
            }
          >
            Вернуться
          </button>
        </form>
      </article>
    </section>
  );
}
