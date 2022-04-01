import { CheckoutItem } from '../checkout-item';
import { TCheckoutForm } from './types';
import styles from './checkout-form.module.scss';

export function CheckoutForm({
  firstStepObj,
  isButtonActive,
  price,
  buttonTitle,
}: TCheckoutForm) {
  return (
    <form className={styles.form_wrapper}>
      <div className={styles.container}>
        <h4 className={styles.title}>Ваш заказ</h4>
        {(!firstStepObj.information || firstStepObj.information.length > 5) && (
          <CheckoutItem
            title={firstStepObj.title}
            information={firstStepObj.information}
          />
        )}
        <div className={styles.summary_block}>
          <h4 className={styles.summary_title}>Цена:</h4>
          <p className={styles.summary_price}> от {price} ₽</p>
        </div>
        <button
          type="button"
          className={styles.checkout_button}
          disabled={isButtonActive}
        >
          {buttonTitle}
        </button>
      </div>
    </form>
  );
}
