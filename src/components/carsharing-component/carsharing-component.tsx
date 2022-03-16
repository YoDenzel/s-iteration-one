import { Icons } from '../../shared/icons';
import styles from './carsharing-component.module.css';

type TCarsharingComponent = {
  isClicked: boolean;
  setClicked: (v: boolean) => void;
};

export function CarsharingComponent({
  isClicked,
  setClicked,
}: TCarsharingComponent) {
  return (
    <section className={styles.carsharing}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.header_tagline}>Need for drive</p>
          <div className={styles.location_block}>
            <Icons.LocationIcon />
            <p className={styles.location}>Ульяновск</p>
          </div>
        </header>
        <div className={styles.main}>
          <h1 className={styles.main_header}>Каршеринг</h1>
          <h1 className={styles.main_tagline}>Need for drive</h1>
          <p className={styles.main_company__info}>
            Поминутная аренда авто твоего города
          </p>
          <button
            className={`${styles.main_book__button} ${
              isClicked ? styles.main_book__button_clicked : ''
            }`}
            onClick={() => setClicked(true)}
          >
            Забронировать
          </button>
        </div>
        <footer className={styles.footer}>
          <p>© 2016-2019 «Need for drive»</p>
          <p className={styles.company_number}>8 (495) 234-22-44</p>
        </footer>
      </div>
    </section>
  );
}
