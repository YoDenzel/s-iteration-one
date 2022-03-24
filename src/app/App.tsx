import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HamburgerMenu } from '../components';
import { MainPage, OrderPage } from '../pages';
import { useWindowWidth } from '../shared/custom-hooks';

export function App() {
  const [isMenuActive, setMenuActive] = useState(false);
  const [language, setLanguage] = useState('Eng');
  const { windowWidth } = useWindowWidth();
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <HamburgerMenu
        windowWidth={windowWidth}
        isMenuActive={isMenuActive}
        language={language}
        setLanguage={setLanguage}
        setMenuActive={setMenuActive}
      />
      <Routes>
        <Route path="/simbirsoft-iteration-one" element={<MainPage />} />
        <Route path="/simbirsoft-iteration-one/order" element={<OrderPage />} />
      </Routes>
    </div>
  );
}
