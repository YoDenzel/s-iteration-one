import { useMap } from 'react-leaflet';
import { TAddressesArr } from '../../types';

type TChangeCityView = {
  item: TAddressesArr;
  cityTitle: string;
};

export const ChangeCityView = ({ item, cityTitle }: TChangeCityView) => {
  const map = useMap();
  if (item.city.toLowerCase() === cityTitle.toLowerCase()) {
    map.setView([item.cityCoordinates[0], item.cityCoordinates[1]], 14);
    return null;
  } else if (!cityTitle) {
    map.setZoom(6);
  }
  return null;
};
