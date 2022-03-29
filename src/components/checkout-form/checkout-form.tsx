import styles from './checkout-form.module.scss';

export function CheckoutForm() {
  const arr = [
    {
      title: 'Пункт выдачи',
      information: 'Ульяновск, Нариманова 42',
    },
    {
      title: 'Модель',
      information: 'Самара, Шахиди 42',
    },
  ];

  return (
    <form className={styles.form_wrapper}>
      <div className={styles.container}>
        <h4 className={styles.title}>Ваш заказ</h4>
        {arr.map((item, index) => (
          <div className={styles.order_info_item} key={item.title + index}>
            <p className={styles.item_title}>{item.title}</p>
            <span className={styles.dots} />
            <p className={styles.item_text}>{item.information}</p>
          </div>
        ))}
        <div className={styles.summary_block}>
          <h4 className={styles.summary_title}>Цена:</h4>
          <p className={styles.summary_price}> от 8 000 до 12 000 ₽</p>
        </div>
        <button className={styles.checkout_button} disabled={true}>
          Выбрать модель
        </button>
      </div>
    </form>
  );
}
