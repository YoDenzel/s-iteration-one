import { CheckoutItem } from '../checkout-item';
import { TCheckoutForm } from './types';
import styles from './checkout-form.module.scss';

export function CheckoutForm({
  firstStepObj,
  isButtonActive,
  price,
  buttonTitle,
  clickHandler,
  secondStepObj,
  thirdStepObj,
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
        {secondStepObj.information && (
          <CheckoutItem
            title={secondStepObj.title}
            information={secondStepObj.information}
          />
        )}
        {thirdStepObj.map(
          (item, index) =>
            item.information && (
              <CheckoutItem
                key={item.title + index}
                title={item.title}
                information={item.information}
              />
            ),
        )}
        <div className={styles.summary_block}>
          <h4 className={styles.summary_title}>Цена:</h4>
          <p className={styles.summary_price}>{price}</p>
        </div>
        <button
          className={styles.checkout_button}
          disabled={isButtonActive}
          type="button"
          onClick={clickHandler}
        >
          {buttonTitle}
        </button>
      </div>
    </form>
  );
}
