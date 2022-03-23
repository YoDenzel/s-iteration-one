import { useState } from 'react';
import { HamburgerMenu, HeaderComponent } from '../../components';
import { useWindowWidth } from '../../shared/custom-hooks';
import styles from './order-page.module.css';

export function OrderPage() {
  const [isMenuActive, setMenuActive] = useState(false);
  const [language, setLanguage] = useState('Eng');
  const { windowWidth } = useWindowWidth();

  return (
    <section className={styles.order_container}>
      <HamburgerMenu
        windowWidth={windowWidth}
        isMenuActive={isMenuActive}
        setMenuActive={setMenuActive}
        language={language}
        setLanguage={setLanguage}
      />
      <div className={styles.wrapper}>
        <HeaderComponent />
      </div>
    </section>
  );
}
