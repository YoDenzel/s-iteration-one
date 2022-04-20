import { useEffect, useMemo, useState } from 'react';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import {
  useAppSelector,
  useClickOutside,
  useAppDispatch,
  useGetData,
} from '../../shared/custom-hooks';
import {
  setCityInput,
  setStreetInput,
} from '../../redux/step-one-order-form-slice/step-one-order-form-slice';
import { MapComponent } from '../map-component';
import { TextInput } from '../text-input';
import styles from './order-geolocation-component.module.scss';
import { TCoordinates, TPoints, TPointsData } from '../../shared/types';
import { createMapCoordinatesArr } from '../../shared/functions';

export function OrderGeolocationComponent() {
  const { inputCity: inputCityRedux, inputStreet: inputStreetRedux } =
    useAppSelector(state => state.stepOneOrderForm);
  const { data } = useGetData<TPointsData[]>({
    QUERY_KEY: 'points',
    url: 'point',
    selectorFunction: (state: TPoints) =>
      state.data.filter(item => item.cityId !== null),
  });
  const [inputCity, setInputCity] = useState(inputCityRedux);
  const [cityArr, setCityArr] = useState<TCoordinates[]>([]);
  const [streetsArr, setStreets] = useState<TCoordinates[]>([]);
  const [inputStreet, setInputStreet] = useState(inputStreetRedux);
  const [isFirstDropdownOpen, setFirstDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setSecondDropdownOpen] = useState(false);
  const provider = new OpenStreetMapProvider({
    params: {
      email: 'kombogame6@gmail.com',
      'accept-language': 'ru-RU',
      countrycodes: 'ru',
      addressdetails: 0,
    },
  });
  const firstInputRef = useClickOutside<HTMLDivElement>(() => {
    setFirstDropdownOpen(false);
  });
  const secondInputRef = useClickOutside<HTMLDivElement>(() => {
    setSecondDropdownOpen(false);
  });
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
      data
        ?.filter(item => {
          return item.cityId?.name
            .toUpperCase()
            .replace(/\s/g, '')
            .includes(inputCity.toUpperCase().replace(/\s/g, ''));
        })
        .map(item => item.cityId?.name),
    [inputCity, data],
  );

  const addresses = useMemo(
    () =>
      data
        ?.filter(val => {
          return (
            val.cityId?.name === inputCity &&
            val.address
              .toLowerCase()
              .replace(/\s/g, '')
              .includes(inputStreet.toLowerCase().replace(/\s/g, ''))
          );
        })
        .map(value => {
          return value.address;
        }),
    [
      inputStreetRedux,
      isFirstDropdownOpen,
      isSecondDropdownOpen,
      inputCityRedux,
    ],
  );

  useEffect(() => {
    cityArr.length === 0
      ? citiesArr?.map(item =>
          createMapCoordinatesArr(item || '', setCityArr, provider),
        )
      : null;
    streetsArr.length === 0 && cityArr.length > 0 && inputCity
      ? addresses?.map(item =>
          createMapCoordinatesArr(
            ` ${inputCityRedux} ${item}` || '',
            setStreets,
            provider,
          ),
        )
      : null;
  }, [citiesArr, addresses, inputCity, inputStreet]);

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
        setStreets([]);
        break;
      case 2:
        dispatchInputStreet('');
        setInputStreet('');
        setStreets([]);
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
          zoom={2}
          center={[54.233722, 47.962227]}
          cityTitle={inputCityRedux}
          streetTitle={inputStreetRedux}
          clickHandler={mapClickHandler}
          cityCoordinatesArr={cityArr}
          streetsCoordinatesArr={streetsArr}
        />
      </div>
    </section>
  );
}
