import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { TAddress, TAddressesArr } from '../../shared/types';
import { MapMarker } from '../map-marker';

type TMapComponent = {
  cityTitle: string;
  center: [number, number];
  zoom: number;
  infoArr?: TAddressesArr[];
  setCity: (v: string) => void;
  setStreet: (v: string) => void;
  streetTitle: string;
};

type TChangeStreetView = {
  val: TAddress;
  cityCoordinates: number[];
};

export function MapComponent({
  center,
  cityTitle,
  infoArr,
  zoom,
  setCity,
  setStreet,
  streetTitle,
}: TMapComponent) {
  const clickHandler = (city: string, street?: string) => {
    setCity(city);
    street && setStreet(street);
  };

  const ChangeCityView = (item: TAddressesArr) => {
    const map = useMap();
    if (item.city.toLowerCase() === cityTitle.toLowerCase()) {
      map.setView([item.cityCoordinates[0], item.cityCoordinates[1]], 14);
      return null;
    } else if (!cityTitle) {
      map.setZoom(6);
    }
    return null;
  };

  const ChangeStreetView = ({ val, cityCoordinates }: TChangeStreetView) => {
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

  return (
    <div>
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{
          height: '300px',
          width: '700px',
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cityTitle.length < 5
          ? infoArr?.map((item, index) => {
              return (
                <div key={item.city + index}>
                  <ChangeCityView
                    city={item.city}
                    address={item.address}
                    cityCoordinates={item.cityCoordinates}
                  />
                  <MapMarker
                    coordinates={item.cityCoordinates}
                    clickHandler={() => clickHandler(item.city)}
                    zoom={10}
                  />
                </div>
              );
            })
          : infoArr?.map(item =>
              item.address.map((val, index) => {
                if (item.city.toLowerCase() === cityTitle.toLowerCase()) {
                  return (
                    <div key={val.title + index}>
                      <ChangeStreetView
                        val={val}
                        cityCoordinates={item.cityCoordinates}
                      />
                      <MapMarker
                        coordinates={val.coordinates}
                        clickHandler={() => clickHandler(item.city, val.title)}
                        zoom={14}
                      />
                    </div>
                  );
                }
              }),
            )}
      </MapContainer>
    </div>
  );
}
