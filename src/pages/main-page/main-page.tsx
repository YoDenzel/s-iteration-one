import { useState } from 'react';
import { CarsharingComponent } from '../../components';

export function MainPage() {
  const [isClicked, setClicked] = useState(false);

  return <CarsharingComponent isClicked={isClicked} setClicked={setClicked} />;
}
