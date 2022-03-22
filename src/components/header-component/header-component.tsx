import { Icons } from '../../shared/icons';
import styles from './header-component.module.css';

export function HeaderComponent() {
  return (
    <header className={styles.header}>
      <p className={styles.header_tagline}>Need for drive</p>
      <div className={styles.location_block}>
        <Icons.LocationIcon />
        <p className={styles.location}>Ульяновск</p>
      </div>
    </header>
  );
}
