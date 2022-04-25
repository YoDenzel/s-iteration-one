import { TStepThree } from '../../types';

export const stepThreeObjIntoArray = (stepThree: TStepThree) => {
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
      information: stepThree.rate.split(',')[0],
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
