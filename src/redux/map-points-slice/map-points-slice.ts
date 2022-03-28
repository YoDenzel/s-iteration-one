import { createSlice } from '@reduxjs/toolkit';

export const mapPointsSlice = createSlice({
  name: 'mapPoints',
  initialState: [
    {
      city: 'Ульяновск',
      address: [
        { title: 'Хрустальная 42', coordinates: [54.257746, 48.332694] },
        { title: 'Нариманова 42', coordinates: [54.33728, 48.382905] },
        { title: 'Варейкиса 36', coordinates: [54.255539, 48.337545] },
        { title: 'Кольцевая 49', coordinates: [54.253558, 48.342374] },
      ],
      cityCoordinates: [54.3187, 48.3978],
    },
    {
      city: 'Самара',
      address: [
        { title: 'Гагарина 109', coordinates: [53.200993, 50.20321] },
        { title: 'Мориса Тореза 137', coordinates: [53.197492, 50.207668] },
        { title: 'Промышленности 253', coordinates: [53.191309, 50.212204] },
        { title: 'Авроры 103', coordinates: [53.18962, 50.191602] },
      ],
      cityCoordinates: [53.2038, 50.1606],
    },
    {
      city: 'Казань',
      address: [
        { title: 'Яхина 8', coordinates: [55.790025, 49.102125] },
        { title: 'Шахиди 75', coordinates: [55.786774, 49.104956] },
        { title: 'Нариманова 15', coordinates: [55.785388, 49.103684] },
        { title: 'Профсоюзная 50', coordinates: [55.788395, 49.12206] },
      ],
      cityCoordinates: [55.7879, 49.1233],
    },
    {
      city: 'Тольятти',
      address: [
        { title: 'Горького 55', coordinates: [53.521242, 49.425379] },
        { title: 'Первомайская 113', coordinates: [53.519479, 49.41181] },
        { title: 'Льва Толстого 20', coordinates: [53.53895, 49.399548] },
        { title: 'Студенческий 90', coordinates: [53.533527, 49.408606] },
      ],
      cityCoordinates: [53.5085, 49.4182],
    },
  ],
  reducers: {},
});

export default mapPointsSlice.reducer;
