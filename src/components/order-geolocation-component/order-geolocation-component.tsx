import { useMemo, useState } from 'react';
import { MapComponent } from '../map-component';
import { TextInput } from '../text-input';
import styles from './order-geolocation-component.module.scss';

export const addressesArr = [
  {
    city: 'Ульяновск',
    address: [
      { title: 'Хрустальная 42', coordinates: [54.257746, 48.332694] },
      { title: 'Нариманова 42', coordinates: [54.33728, 48.382905] },
      { title: 'Варейкиса 36', coordinates: [54.29185, 48.34392] },
      { title: 'Кольцевая 49', coordinates: [54.3484, 48.4023] },
    ],
    cityCoordinates: [54.3187, 48.3978],
  },
  {
    city: 'Самара',
    address: [
      { title: 'Гагарина 109', coordinates: [53.123123, 50.45421] },
      { title: 'Мориса Тореза 137', coordinates: [54.2392, 50.2323] },
      { title: 'Гагарина 296', coordinates: [55.1223, 51.1542] },
      { title: 'Авроры 103', coordinates: [53.20122, 52.12312] },
    ],
    cityCoordinates: [53.2038, 50.1606],
  },
  {
    city: 'Казань',
    address: [
      { title: 'Яхина 8', coordinates: [54.2121, 49.1236] },
      { title: 'Шахиди 75', coordinates: [55.2323, 49.1858] },
      { title: 'Нариманова 15', coordinates: [55.5948, 49.8675] },
      { title: 'Профсоюзная 48', coordinates: [55.86868, 49.1958] },
    ],
    cityCoordinates: [55.7879, 49.1233],
  },
  {
    city: 'Тольятти',
    address: [
      { title: 'Горького 55', coordinates: [53.86858, 49.8668] },
      { title: 'Первомайская 113', coordinates: [53.95962, 49.48585] },
      { title: 'Льва Толстого 20', coordinates: [53.5858, 49.4886] },
      { title: 'Студенческий 90', coordinates: [53.5185, 49.4696] },
    ],
    cityCoordinates: [53.5085, 49.4182],
  },
];

export function OrderGeolocationComponent() {
  const [inputCity, setInputCity] = useState('');
  const [inputStreet, setInputStreet] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const citiesArr: string[] = [];
  const addresses: string[] = [];

  useMemo(
    () =>
      addressesArr
        .filter(item => {
          if (
            item.city
              .toUpperCase()
              .includes(inputCity.toUpperCase().replace(/\s/g, ''))
          )
            return true;
          else return false;
        })
        .forEach(item => {
          citiesArr.push(item.city);
        }),
    [inputCity],
  );

  useMemo(
    () =>
      addressesArr.map(item => {
        if (item.city === inputCity) {
          item.address.map(val => addresses.push(val.title));
        }
      }),
    [inputStreet],
  );
  const streetsArr = addresses.filter(item =>
    item.toLowerCase().includes(inputStreet.toLowerCase().replace(/\s/g, '')),
  );

  const clickHandler = (city: string, street?: string) => {
    setInputCity(city);
    street && setInputStreet(street);
  };

  const clearInputHandler = () => {
    inputStreet && setInputCity('');
    setInputStreet('');
  };

  return (
    <section>
      <form className={styles.form}>
        <TextInput
          title="Город"
          placeholder="Введите город"
          inputValue={inputCity}
          setInputValue={setInputCity}
          listItems={citiesArr}
          setDropdownOpen={setDropdownOpen}
          isDropDownOpen={isDropdownOpen}
          clearInputHandler={() => setInputCity('')}
        />
        <TextInput
          title="Пункт выдачи"
          placeholder="Введите адрес"
          inputValue={inputStreet}
          setInputValue={setInputStreet}
          listItems={streetsArr}
          setDropdownOpen={setDropdownOpen}
          isDropDownOpen={isDropdownOpen}
          clearInputHandler={() => clearInputHandler()}
        />
      </form>
      <div className={styles.map_wrapper}>
        <p className={styles.title}>Выбрать на карте:</p>
        <MapComponent
          zoom={6}
          center={[54.233722, 47.962227]}
          cityTitle={inputCity}
          infoArr={addressesArr}
          streetTitle={inputStreet}
          clickHandler={clickHandler}
        />
      </div>
    </section>
  );
}
