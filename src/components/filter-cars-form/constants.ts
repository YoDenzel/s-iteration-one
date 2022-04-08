export const radioFilterButtonsArr = [
  {
    title: 'Все модели',
    name: 'all',
    filter: '',
  },
  {
    title: 'Эконом',
    name: 'cheap',
    filter: 'priceMin[$lt]=20000',
  },
  {
    title: 'Премиум',
    name: 'luxury',
    filter: 'priceMin[$gt]=20000',
  },
];
