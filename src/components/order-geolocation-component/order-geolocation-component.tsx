import { useState } from 'react';
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
  const [input, setInput] = useState('');
  const citiesArr: string[] | undefined = [];

  addressesArr.forEach(item => citiesArr.push(item.city));

  console.log(
    citiesArr.filter(item => item.toLowerCase().includes(input.toLowerCase())),
  );

  return (
    <section>
      <form>
        <TextInput
          title="Город"
          placeholder="Введите город"
          inputValue={input}
          setInputValue={setInput}
          listItems={citiesArr.filter(item => {
            if (item.toUpperCase().includes(input.toUpperCase())) return true;
            else return false;
          })}
        />
      </form>
    </section>
  );
}
