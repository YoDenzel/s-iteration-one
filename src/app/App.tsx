import { Route, Routes } from 'react-router-dom';
import { MainPage, OrderPage } from '../pages';

export function App() {
  return (
    <Routes>
      <Route path="/simbirsoft-iteration-one" element={<MainPage />} />
      <Route path="/simbirsoft-iteration-one/order" element={<OrderPage />} />
    </Routes>
  );
}
