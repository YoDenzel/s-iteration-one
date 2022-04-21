import { useAppDispatch, useAppSelector } from '../../shared/custom-hooks';
import { orderFormCheckboxIsActive } from '../../shared/functions';
import { Icons } from '../../shared/icons';
import styles from './checkbox-item.module.scss';
import { TCheckboxItem } from './types';

export function CheckboxItem({
  isButtonActive,
  title,
  setCheckboxItem,
  checkboxArr,
}: TCheckboxItem) {
  const dispatch = useAppDispatch();
  const price = useAppSelector(state => state.checkoutPrice);
  return (
    <article
      className={styles.checkbox_container}
      onClick={() =>
        orderFormCheckboxIsActive({
          activeTitle: title,
          checkboxArr: checkboxArr,
          dispatch: dispatch,
          price: price,
        })
      }
    >
      <article className={styles.icon_container}>
        <span
          className={`${styles.icon_border} ${
            isButtonActive && styles.active_border_color
          }`}
        >
          <span className={styles.icon_wrapper}>
            {isButtonActive && <Icons.CheckMarkIcon />}
          </span>
        </span>
        <input type="checkbox" className={styles.checkbox_input} />
      </article>
      <p
        className={`${styles.checkbox_title} ${
          !isButtonActive && styles.checkbox_inactive
        }`}
      >
        {title}
      </p>
    </article>
  );
}
