import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../../shared/icons';
import { TMenuIcons, TMenuTitlesArr } from '../../shared/types';
import { ChangeLanguageButton } from '../change-language-button';
import styles from './menu-component.module.scss';

type TMenuComponent = {
  menuTitlesArr: TMenuTitlesArr[];
  menuIconsArr: TMenuIcons[];
  setMenuActive: (v: boolean) => void;
  windowWidth: number;
  language: string;
  setLanguage: (v: string) => void;
  isActive: boolean;
};

type TState = {
  activeIndex: number | null;
  isHovered: boolean;
};

export function MenuComponent({
  menuIconsArr,
  menuTitlesArr,
  setMenuActive,
  windowWidth,
  language,
  setLanguage,
  isActive,
}: TMenuComponent) {
  const [mouseHover, setMouseHover] = useState<TState>({
    activeIndex: null,
    isHovered: false,
  });

  return (
    <nav
      className={
        isActive ? styles.menu_container__active : styles.menu_container
      }
    >
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
            onMouseEnter={() =>
              setMouseHover({
                activeIndex: index,
                isHovered: !mouseHover.isHovered,
              })
            }
            onMouseLeave={() =>
              setMouseHover({
                activeIndex: index,
                isHovered: !mouseHover.isHovered,
              })
            }
          >
            <item.icon
              color={
                index === mouseHover.activeIndex && mouseHover.isHovered
                  ? '#0EC261'
                  : '#ffffff'
              }
            />
          </Link>
        ))}
      </div>
      {windowWidth < 765 && (
        <ChangeLanguageButton language={language} setLanguage={setLanguage} />
      )}
    </nav>
  );
}
