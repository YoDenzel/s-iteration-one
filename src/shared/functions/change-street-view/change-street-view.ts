import { useMap } from 'react-leaflet';
import { TAddress } from '../../types';

type TChangeStreetView = {
  val: TAddress;
  cityCoordinates: number[];
  streetTitle: string;
};

export const ChangeStreetView = ({
  val,
  cityCoordinates,
  streetTitle,
}: TChangeStreetView) => {
  const map = useMap();
  if (val.title.toLowerCase() === streetTitle.toLowerCase()) {
    map.setView([val.coordinates[0], val.coordinates[1]], 14);
    return null;
  } else if (!streetTitle) {
    map.setView([cityCoordinates[0], cityCoordinates[1]], 10);
    return null;
  }
  return null;
};
