import styles from './checkout-item.module.scss';

type TCheckoutItem = {
  title?: string;
  information?: string;
};

export function CheckoutItem({ information, title }: TCheckoutItem) {
  return (
    <div className={styles.order_info_item}>
      <p className={styles.item_title}>{title}</p>
      <span className={styles.dots} />
      <p className={`${styles.item_text} ${title === 'Пункт выдачи' && styles.first_item}`}>{information}</p>
    </div>
  );
}
