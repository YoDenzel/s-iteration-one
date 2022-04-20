import { useMap } from 'react-leaflet';
import { TCoordinates } from '../../types';

type TChangeStreetView = {
  val: TCoordinates;
  cityCoordinates: number[];
  streetTitle: string;
};

export const ChangeStreetView = ({
  val,
  cityCoordinates,
  streetTitle,
}: TChangeStreetView) => {
  const map = useMap();
  if (streetTitle) {
    map.setView([val.y, val.x], 14);
    return null;
  } else if (!streetTitle) {
    map.setView([cityCoordinates[0], cityCoordinates[1]], 10);
    return null;
  }
  return null;
};
