import { useMemo, useState } from 'react';
import {
  useAppSelector,
  useClickOutside,
  useAppDispatch,
} from '../../shared/custom-hooks';
import {
  setCityInput,
  setStreetInput,
} from '../../redux/step-one-order-form/step-one-order-form';
import { MapComponent } from '../map-component';
import { TextInput } from '../text-input';
import styles from './order-geolocation-component.module.scss';

export function OrderGeolocationComponent() {
  const [inputCity, setInputCity] = useState('');
  const [inputStreet, setInputStreet] = useState('');
  const [isFirstDropdownOpen, setFirstDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setSecondDropdownOpen] = useState(false);
  const firstInputRef = useClickOutside<HTMLDivElement>(() => {
    setFirstDropdownOpen(false);
  });
  const secondInputRef = useClickOutside<HTMLDivElement>(() => {
    setSecondDropdownOpen(false);
  });
  const addressesArr = useAppSelector(state => state.mapPoints);
  const dispatch = useAppDispatch();

  const dispatchInputCity = (value: string) => {
    dispatch(
      setCityInput({
        cityInput: value,
      }),
    );
  };

  const dispatchInputStreet = (value: string) => {
    dispatch(
      setStreetInput({
        streetInput: value,
      }),
    );
  };

  const inputLiClickhandler = (value: string, inputCase: number) => {
    switch (inputCase) {
      case 1:
        dispatchInputCity(value);
        setInputCity(value);
        break;
      case 2:
        dispatchInputStreet(value);
        setInputStreet(value);
    }
  };

  const citiesArr = useMemo(
    () =>
      addressesArr
        .filter(item => {
          return item.city
            .toUpperCase()
            .replace(/\s/g, '')
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
    dispatchInputCity(city);
    street && setInputStreet(street);
    street && dispatchInputStreet(street);
  };

  const clearInputHandler = (inputCase: number) => {
    switch (inputCase) {
      case 1:
        dispatchInputCity('');
        setInputCity('');
        dispatchInputStreet('');
        setInputStreet('');
        break;
      case 2:
        dispatchInputStreet('');
        setInputStreet('');
        break;
    }
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
          isDropDownOpen={isFirstDropdownOpen}
          clearInputHandler={() => clearInputHandler(1)}
          inputClickHandler={() => setFirstDropdownOpen(!isFirstDropdownOpen)}
          referal={firstInputRef}
          onClickLi={(value: string) => inputLiClickhandler(value, 1)}
        />
        <TextInput
          title="Пункт выдачи"
          placeholder="Введите адрес"
          inputValue={inputStreet}
          setInputValue={setInputStreet}
          listItems={addresses}
          isDropDownOpen={isSecondDropdownOpen}
          clearInputHandler={() => clearInputHandler(2)}
          inputClickHandler={() => setSecondDropdownOpen(!isSecondDropdownOpen)}
          referal={secondInputRef}
          onClickLi={(value: string) => inputLiClickhandler(value, 2)}
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
