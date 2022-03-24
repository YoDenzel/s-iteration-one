import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages';

export function App() {
  return (
    <Routes>
      <Route path="/simbirsoft-iteration-one" element={<MainPage />} />
    </Routes>
  );
}
