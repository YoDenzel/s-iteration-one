import { Icons } from '../../shared/icons';

import { ChangeLanguageButton } from '../change-language-button';
import { MenuComponent } from '../menu-component';
import styles from './hamburger-menu.module.css';

type THamburgerMenu = {
  isMenuActive: boolean;
  setMenuActive: (v: boolean) => void;
  language: string;
  setLanguage: (v: string) => void;
  windowWidth: number;
};

export function HamburgerMenu({
  isMenuActive,
  language,
  setLanguage,
  setMenuActive,
  windowWidth,
}: THamburgerMenu) {
  const menuIcons = [
    {
      linkTo: '/simbirsoft-iteration-one',
      icon: Icons.TelegramIcon,
    },
    {
      linkTo: '/simbirsoft-iteration-one',
      icon: Icons.FacebookIcon,
    },
    {
      linkTo: '/simbirsoft-iteration-one',
      icon: Icons.InstagramIcon,
    },
  ];

  const menuTitlesArr = [
    {
      title: 'Парковка',
      linkTo: '/simbirsoft-iteration-one',
    },
    {
      title: 'Страховка',
      linkTo: '/simbirsoft-iteration-one',
    },
    {
      title: 'Бензин',
      linkTo: '/simbirsoft-iteration-one',
    },
    {
      title: 'Обслуживание',
      linkTo: '/simbirsoft-iteration-one',
    },
  ];
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
