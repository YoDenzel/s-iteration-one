import { Icons } from '../../shared/icons';
import { TMenuIcons, TMenuTitlesArr } from '../../shared/types';
import { ChangeLanguageButton } from '../change-language-button';
import { MenuComponent } from '../menu-component';
import styles from './hamburger-menu.module.css';

type THamburgerMenu = {
  isMenuActive: boolean;
  setMenuActive: (v: boolean) => void;
  language: string;
  setLanguage: (v: string) => void;
  menuIconsArr: TMenuIcons[];
  menuTitlesArr: TMenuTitlesArr[];
  windowWidth: number;
};

export function HamburgerMenu({
  isMenuActive,
  language,
  setLanguage,
  setMenuActive,
  menuIconsArr,
  menuTitlesArr,
  windowWidth,
}: THamburgerMenu) {
  return (
    <>
      <aside className={styles.container}>
        <button
          className={styles.burger_btn}
          onClick={() => setMenuActive(true)}
        >
          <Icons.OpenHamburgerMenuIcon
            color={windowWidth < 768 ? '#000' : '#fff'}
          />
        </button>
        {windowWidth > 765 && (
          <ChangeLanguageButton language={language} setLanguage={setLanguage} />
        )}
      </aside>
      <MenuComponent
        windowWidth={windowWidth}
        menuIconsArr={menuIconsArr}
        menuTitlesArr={menuTitlesArr}
        setMenuActive={setMenuActive}
        language={language}
        setLanguage={setLanguage}
        isActive={isMenuActive}
      />
    </>
  );
}
