import { Icons } from '../../shared/icons';
import { TMenuIcons, TMenuTitlesArr } from '../../shared/types';
import { HamburgerMenu } from '../hamburger-menu';
import { HeaderComponent } from '../header-component';
import styles from './carsharing-component.module.css';

type TCarsharingComponent = {
  isMenuActive: boolean;
  setMenuActive: (v: boolean) => void;
  language: string;
  setLanguage: (v: string) => void;
  menuIconsArr: TMenuIcons[];
  menuTitlesArr: TMenuTitlesArr[];
  windowWidth: number;
};

export function CarsharingComponent({
  isMenuActive,
  language,
  menuIconsArr,
  menuTitlesArr,
  setLanguage,
  setMenuActive,
  windowWidth,
}: TCarsharingComponent) {
  return (
    <section className={styles.carsharing}>
      <HamburgerMenu
        windowWidth={windowWidth}
        isMenuActive={isMenuActive}
        language={language}
        setLanguage={setLanguage}
        setMenuActive={setMenuActive}
        menuIconsArr={menuIconsArr}
        menuTitlesArr={menuTitlesArr}
      />
      <div className={styles.container}>
        <HeaderComponent />
        <div className={styles.main}>
          <div className={styles.main_text_content}>
            <h1 className={styles.main_header}>Каршеринг</h1>
            <h1 className={styles.main_tagline}>Need for drive</h1>
            <p className={styles.main_company_info}>
              Поминутная аренда авто твоего города
            </p>
          </div>
          <button className={`${styles.main_book__button}`}>
            Забронировать
          </button>
        </div>
        <footer className={styles.footer}>
          <p className={styles.copyright}>© 2016-2019 «Need for drive»</p>
          <p className={styles.company_number}>8 (495) 234-22-44</p>
        </footer>
      </div>
    </section>
  );
}
