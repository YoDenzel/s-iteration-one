import slide1 from './slide-1.png';
import slide2 from './slide-2.png';
import slide3 from './slide-3.png';
import slide4 from './slide-4.png';

const SliderImages = {
  slide1,
  slide2,
  slide3,
  slide4,
};

export const images = [
  {
    title: 'Бесплатная праковка',
    description:
      'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
    sliderImage: SliderImages.slide1,
    buttonColor: 'linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)',
  },
  {
    title: 'Страховка',
    description: 'Полная страховка страховка автомобиля',
    sliderImage: SliderImages.slide2,
    buttonColor: 'linear-gradient(90deg, #132949 0%, #0C7B67 100%)',
  },
  {
    title: 'Бензин',
    description: 'Полный бак на любой заправке города за наш счёт',
    sliderImage: SliderImages.slide3,
    buttonColor: 'linear-gradient(90deg, #493013 0%, #7B0C3B 100%)',
  },
  {
    title: 'Обслуживание',
    description: 'Автомобиль проходит еженедельное ТО',
    sliderImage: SliderImages.slide4,
    buttonColor: 'linear-gradient(90deg, #281349 0%, #720C7B 100%)',
  },
];
