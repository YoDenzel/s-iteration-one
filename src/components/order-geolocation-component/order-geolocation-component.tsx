import { useMemo, useState } from 'react';
import { TextInput } from '../text-input';
import styles from './order-geolocation-component.module.scss';

const addressesArr = [
  {
    city: 'Ульяновск',
    address: [
      'Хрустальная 42',
      'Нариманова 42',
      'Варейкиса 36',
      'Кольцевая 49',
    ],
  },
  {
    city: 'Самара',
    address: [
      'Гагарина 109',
      'Мориса Тореза 137',
      'Гагарина 296',
      'Авроры 103',
    ],
  },
  {
    city: 'Казань',
    address: ['Яхина 8', 'Шахиди 75', 'Нариманова 15', 'Профсоюзная 48'],
  },
  {
    city: 'Тольятти',
    address: [
      'Горького 55',
      'Первомайская 113',
      'Льва Толстого 20',
      'Студенческий 90',
    ],
  },
];

export function OrderGeolocationComponent() {
  const [inputCity, setInputCity] = useState('');
  const [inputAddress, setInputAddress] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const citiesArr: string[] | undefined = [];

  useMemo(
    () =>
      addressesArr
        .filter(item => {
          if (item.city.toUpperCase().includes(inputCity.toUpperCase()))
            return true;
          else return false;
        })
        .forEach(item => citiesArr.push(item.city)),
    [inputCity],
  );

  const streetsArr = addressesArr.filter(item => item.city === inputCity)[0];
  console.log(streetsArr);

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
        />
        <TextInput
          title="Пункт выдачи"
          placeholder="Введите адрес"
          inputValue={inputAddress}
          setInputValue={setInputAddress}
          listItems={streetsArr?.address}
          setDropdownOpen={setDropdownOpen}
          isDropDownOpen={isDropdownOpen}
        />
      </form>
    </section>
  );
}
