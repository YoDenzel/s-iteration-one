import { useState } from 'react';
import { Link } from 'react-router-dom';
import { setMenuActive } from '../../redux/sidebar-slice/sidebar-slice';
import { useAppDispatch } from '../../shared/custom-hooks';
import { Icons } from '../../shared/icons';
import { ChangeLanguageButton } from '../change-language-button';
import styles from './menu-component.module.scss';
import { TMenuComponent, TState } from './types';

export function MenuComponent({
  menuIconsArr,
  menuTitlesArr,
  windowWidth,
  language,
  setLanguage,
  isActive,
}: TMenuComponent) {
  const [mouseHover, setMouseHover] = useState<TState>({
    activeIndex: null,
    isHovered: false,
  });
  const dispatch = useAppDispatch();
  return (
    <nav
      className={
        isActive ? styles.menu_container__active : styles.menu_container
      }
    >
      <button
        className={styles.close_menu}
        onClick={() => dispatch(setMenuActive({ menuActive: false }))}
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
