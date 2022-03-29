import { useMemo, useState } from 'react';
import { useAppSelector } from '../../shared/custom-hooks';
import { MapComponent } from '../map-component';
import { TextInput } from '../text-input';
import styles from './order-geolocation-component.module.scss';

export function OrderGeolocationComponent() {
  const [inputCity, setInputCity] = useState('');
  const [inputStreet, setInputStreet] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const addressesArr = useAppSelector(state => {
    return state.mapPoints;
  });

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
    <section className={styles.container}>
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
