import { Marker, useMap } from 'react-leaflet';

type TMapMarker = {
  clickHandler: () => void;
  coordinates: number[];
  zoom: number;
};

export function MapMarker({ clickHandler, coordinates, zoom }: TMapMarker) {
  const map = useMap();

  return (
    <Marker
      eventHandlers={{
        click: () => {
          map.setView([coordinates[0], coordinates[1]], zoom);
          clickHandler();
        },
      }}
      position={[coordinates[0], coordinates[1]]}
    ></Marker>
  );
}
