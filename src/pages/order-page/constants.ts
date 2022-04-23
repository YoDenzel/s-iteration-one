import { TStepThree } from '../../shared/types';

export const breadcrumbsArr = [
  {
    title: 'Местоположение',
    linkTo: '/simbirsoft-iteration-one/order',
  },
  {
    title: 'Модель',
    linkTo: '/simbirsoft-iteration-one/order',
  },
  {
    title: 'Дополнительно',
    linkTo: '/simbirsoft-iteration-one/order',
  },
  {
    title: 'Итого',
    linkTo: '/simbirsoft-iteration-one/order',
  },
];

export const buttonTitle = [
  'Выбрать модель',
  'Дополнительно',
  'Итого',
  'Заказать',
];

export const thirdStepArrObj = (stepThree: TStepThree) => {
  return [
    {
      title: 'Цвет',
      information: stepThree.color,
    },
    {
      title: 'Длительность аренды',
      information: stepThree.rentalDuration,
    },
    {
      title: 'Тариф',
      information: stepThree.rate.substring(0, stepThree.rate.indexOf(',')),
    },
    {
      title: 'Полный бак',
      information: stepThree.fullTank ? 'Да' : '',
    },
    {
      title: 'Детское кресло',
      information: stepThree.babyChair ? 'Да' : '',
    },
    {
      title: 'Правый руль',
      information: stepThree.rightHandDrive ? 'Да' : '',
    },
  ];
};
