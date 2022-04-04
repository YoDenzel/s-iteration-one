import { useMemo, useState } from 'react';
import { useAppSelector } from '../../shared/custom-hooks';
import { MapComponent } from '../map-component';
import { TextInput } from '../text-input';
import styles from './order-geolocation-component.module.scss';

export function OrderGeolocationComponent() {
  const [inputCity, setInputCity] = useState('');
  const [inputStreet, setInputStreet] = useState('');
  const [isFirstDropdownOpen, setFirstDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setSecondDropdownOpen] = useState(false);

  const addressesArr = useAppSelector(state => {
    return state.mapPoints;
  });

  const citiesArr = useMemo(
    () =>
      addressesArr
        .filter(item => {
          return item.city
            .toUpperCase()
            .includes(inputCity.toUpperCase().replace(/\s/g, ''));
        })
        .map(({ city }) => city),
    [inputCity],
  );

  // addresses я решил оставить так как было, потому что нужное мне значние (title) находится глубоко внутри массива,
  // а я честно говоряю не знаю, как это сделать красиво, думал над flatmap и reduce, но не получилось

  const addresses: string[] = [];
  useMemo(
    () =>
      addressesArr.filter(val =>
        val.address
          .filter(item => {
            return item.title
              .toLowerCase()
              .replace(/\s/g, '')
              .includes(inputStreet.toLowerCase().replace(/\s/g, ''));
          })
          .map(value => {
            if (val.city === inputCity) {
              addresses.push(value.title);
            }
          }),
      ),
    [inputStreet, isFirstDropdownOpen, isSecondDropdownOpen],
  );

  const mapClickHandler = (city: string, street?: string) => {
    setInputCity(city);
    street && setInputStreet(street);
  };

  const clearInputHandler = () => {
    setInputCity('');
    setInputStreet('');
  };

  const inputClickHandler = (variant: number) => {
    switch (variant) {
      case 1: {
        setFirstDropdownOpen(!isFirstDropdownOpen);
        setSecondDropdownOpen(false);
        break;
      }
      case 2: {
        setFirstDropdownOpen(false);
        setSecondDropdownOpen(!isSecondDropdownOpen);
        break;
      }
    }
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
          setDropdownOpen={setFirstDropdownOpen}
          isDropDownOpen={isFirstDropdownOpen}
          clearInputHandler={() => clearInputHandler()}
          inputClickHandler={() => inputClickHandler(1)}
        />
        <TextInput
          title="Пункт выдачи"
          placeholder="Введите адрес"
          inputValue={inputStreet}
          setInputValue={setInputStreet}
          listItems={addresses}
          setDropdownOpen={setSecondDropdownOpen}
          isDropDownOpen={isSecondDropdownOpen}
          clearInputHandler={() => setInputStreet('')}
          inputClickHandler={() => inputClickHandler(2)}
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
          clickHandler={mapClickHandler}
        />
      </div>
    </section>
  );
}
