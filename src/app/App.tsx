import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
