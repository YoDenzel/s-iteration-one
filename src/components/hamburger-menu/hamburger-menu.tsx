import { Icons } from '../../shared/icons';
import { ChangeLanguageButton } from '../change-language-button';
import { MenuComponent } from '../menu-component';
import styles from './hamburger-menu.module.scss';
import { menuIcons, menuTitlesArr } from './constants';
import { THamburgerMenu } from './types';

export function HamburgerMenu({
  isMenuActive,
  language,
  setLanguage,
  setMenuActive,
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
        {windowWidth > 767 && (
          <ChangeLanguageButton language={language} setLanguage={setLanguage} />
        )}
      </aside>
      <MenuComponent
        windowWidth={windowWidth}
        menuIconsArr={menuIcons}
        menuTitlesArr={menuTitlesArr}
        setMenuActive={setMenuActive}
        language={language}
        setLanguage={setLanguage}
        isActive={isMenuActive}
      />
    </>
  );
}
