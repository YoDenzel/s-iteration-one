import { useMap } from 'react-leaflet';
import { TCoordinates } from '../../types';

type TChangeCityView = {
  item: TCoordinates;
  cityTitle: string;
};

export const ChangeCityView = ({ item, cityTitle }: TChangeCityView) => {
  const map = useMap();
  if (
    item.label.substring(0, item.label.indexOf(',')).toLowerCase() ===
    cityTitle.toLowerCase()
  ) {
    map.setView([item.y, item.x], 14);
    return null;
  } else if (!cityTitle) {
    map.setZoom(4);
  }
  return null;
};
