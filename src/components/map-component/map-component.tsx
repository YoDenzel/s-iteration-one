import { MapContainer, TileLayer } from 'react-leaflet';
import { ChangeCityView, ChangeStreetView } from '../../shared/functions';
import { TAddressesArr } from '../../shared/types';
import { MapMarker } from '../map-marker';
import styles from './map-component.module.scss';

type TMapComponent = {
  cityTitle: string;
  center: [number, number];
  zoom: number;
  infoArr?: TAddressesArr[];
  streetTitle: string;
  clickHandler: (city: string, street?: string) => void;
};

export function MapComponent({
  center,
  cityTitle,
  infoArr,
  zoom,
  streetTitle,
  clickHandler,
}: TMapComponent) {
  return (
    <div>
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        className={styles.map_container}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cityTitle.length < 5
          ? infoArr?.map((item, index) => {
              return (
                <div key={item.city + index}>
                  <ChangeCityView item={item} cityTitle={cityTitle} />
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
                        streetTitle={streetTitle}
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
