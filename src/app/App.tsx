import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HamburgerMenu } from '../components';
import { MainPage, OrderPage, OrderStatusPage } from '../pages';
import { useAppSelector, useWindowWidth } from '../shared/custom-hooks';

export function App() {
  const [language, setLanguage] = useState('Eng');
  const isMenuActive = useAppSelector(state => state.sidebarSlide.isMenuActive);
  const { windowWidth } = useWindowWidth();

  return (
    <div className="flex">
      <HamburgerMenu
        windowWidth={windowWidth}
        isMenuActive={isMenuActive}
        language={language}
        setLanguage={setLanguage}
      />
      <Routes>
        <Route path="/s-iteration-one" element={<MainPage />} />
        <Route path="/s-iteration-one/order" element={<OrderPage />} />
        <Route
          path="/s-iteration-one/order/:id"
          element={<OrderStatusPage />}
        />
      </Routes>
    </div>
  );
}
