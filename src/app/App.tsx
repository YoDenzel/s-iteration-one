import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HamburgerMenu } from '../components';
import { MainPage, OrderPage } from '../pages';
import {
  useAppDispatch,
  useAppSelector,
  useWindowWidth,
} from '../shared/custom-hooks';
import { setMenuActive } from '../redux/sidebar-slice/sidebar-slice';

export function App() {
  const [language, setLanguage] = useState('Eng');
  const isMenuActive = useAppSelector(state => state.sidebarSlide.isMenuActive);
  const dispatch = useAppDispatch();
  const { windowWidth } = useWindowWidth();

  const setMenu = (value: boolean) => {
    dispatch(
      setMenuActive({
        menuActive: value,
      }),
    );
  };

  return (
    <div className="flex">
      <HamburgerMenu
        windowWidth={windowWidth}
        isMenuActive={isMenuActive}
        language={language}
        setLanguage={setLanguage}
        setMenuActive={setMenu}
      />
      <Routes>
        <Route path="/s-iteration-one" element={<MainPage />} />
        <Route path="/s-iteration-one/order" element={<OrderPage />} />
      </Routes>
    </div>
  );
}
