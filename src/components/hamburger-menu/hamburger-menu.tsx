import styles from './hamburger-menu.module.css';

type THamburgerMenu = {
  isMenuActive: boolean;
  setMenuActive?: (v: boolean) => void;
};

export function HamburgerMenu({ isMenuActive }: THamburgerMenu) {
  return isMenuActive ? (
    <aside className={styles.container}>
      <div className={styles.burger_btn}>
        <span className={styles.burger_btn_middle} />
      </div>
    </aside>
  ) : (
    <div>Hello World</div>
  );
}
