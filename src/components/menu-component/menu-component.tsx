import { Link } from 'react-router-dom';
import { Icons } from '../../shared/icons';
import { TMenuIcons, TMenuTitlesArr } from '../../shared/types';
import { ChangeLanguageButton } from '../change-language-button';
import styles from './menu-component.module.css';

type TMenuComponent = {
  menuTitlesArr: TMenuTitlesArr[];
  menuIconsArr: TMenuIcons[];
  setMenuActive: (v: boolean) => void;
  windowWidth: number;
  language: string;
  setLanguage: (v: string) => void;
};

export function MenuComponent({
  menuIconsArr,
  menuTitlesArr,
  setMenuActive,
  windowWidth,
  language,
  setLanguage,
}: TMenuComponent) {
  return (
    <nav className={styles.menu_container__active}>
      <button
        className={styles.close_menu}
        onClick={() => setMenuActive(false)}
      >
        <Icons.CloseMenuIcon />
      </button>
      <div className={styles.menu}>
        {menuTitlesArr.map(item => (
          <Link to={item.linkTo} className={styles.menu_link} key={item.title}>
            {item.title}
          </Link>
        ))}
      </div>
      <div className={styles.social_media}>
        {menuIconsArr.map((item, index) => (
          <Link
            to={item.linkTo}
            key={item.linkTo + index}
            className={styles.social_media__item}
          >
            <item.icon />
          </Link>
        ))}
      </div>
      {windowWidth < 765 && (
        <ChangeLanguageButton language={language} setLanguage={setLanguage} />
      )}
    </nav>
  );
}
