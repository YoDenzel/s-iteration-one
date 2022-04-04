import styles from './car-list-item.module.scss';

type TCarListItem = {
  name: string;
  priceMin: number;
  priceMax: number;
  path: string;
};

export function CarListItem({ name, path, priceMax, priceMin }: TCarListItem) {
  return (
    <button className={styles.car_item_container}>
      <div className={styles.text_info_block}>
        <h4 className={styles.title_info}>{name}</h4>
        <p className={styles.price_info}>
          {priceMin} - {priceMax} ₽
        </p>
      </div>
      <div className={styles.image_block}>
        <img src={path} className={styles.car_image} />
      </div>
    </button>
  );
}
