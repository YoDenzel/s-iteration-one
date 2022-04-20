import { MapContainer, TileLayer } from 'react-leaflet';
import { ChangeCityView, ChangeStreetView } from '../../shared/functions';
import { MapMarker } from '../map-marker';
import styles from './map-component.module.scss';
import { TMapComponent } from './types';

export function MapComponent({
  center,
  cityTitle,
  zoom,
  streetTitle,
  clickHandler,
  cityCoordinatesArr,
  streetsCoordinatesArr,
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
        {!cityTitle
          ? cityCoordinatesArr?.map((item, index) => {
              return (
                <div key={item.label + index}>
                  <ChangeCityView item={item} cityTitle={cityTitle} />
                  <MapMarker
                    coordinates={[item.y, item.x]}
                    clickHandler={() =>
                      clickHandler(
                        item.label.substring(0, item.label.indexOf(',')),
                      )
                    }
                    zoom={4}
                  />
                </div>
              );
            })
          : cityCoordinatesArr.map(val =>
              streetsCoordinatesArr.map((item, index) => {
                const cityName = val.label.split(',')[0];
                const streetName = item.label.split(',')[0];
                if (cityName.toLowerCase() === cityTitle.toLowerCase()) {
                  return (
                    <div key={item.label + index}>
                      <ChangeStreetView
                        val={item}
                        cityCoordinates={[item.y, item.x]}
                        streetTitle={streetTitle}
                      />
                      <MapMarker
                        coordinates={[item.y, item.x]}
                        clickHandler={() => clickHandler(cityName, streetName)}
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
