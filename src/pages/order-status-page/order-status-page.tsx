import { useParams } from 'react-router-dom';
import { format, intervalToDuration, formatDuration } from 'date-fns';
import { ru } from 'date-fns/locale';
import {
  CheckoutForm,
  ErrorComponent,
  FinalInfoComponent,
  HeaderComponent,
} from '../../components';
import { useGetData, usePutCarOrder } from '../../shared/custom-hooks';
import { stepThreeObjIntoArray } from '../../shared/functions/step-three-obj-into-array';
import { TGetCarOrder, TOrderStatus } from '../../shared/types';
import styles from './order-status-page.module.scss';
import { useEffect, useState } from 'react';

export function OrderStatusPage() {
  const id = useParams();
  const [isOrderCanceled, setisOrderCanceled] = useState(false);
  const { data, isError, isLoading } = useGetData<TGetCarOrder>({
    QUERY_KEY: 'order',
    url: `order/${id.id}`,
  });
  const { mutateAsync, data: orderId } = usePutCarOrder();
  const { data: orderStatus } = useGetData<TOrderStatus>({
    QUERY_KEY: 'orderStatus',
    url: 'orderStatus',
  });
  const availableFrom = format(
    new Date(data?.data.dateFrom || 0),
    'dd.MM.yyyy HH:mm',
  );
  const fuel = !data?.data.carId.tank
    ? 'Нет данных'
    : `${data.data.carId.tank}%`;

  const interval = intervalToDuration({
    start: data?.data.dateFrom || 0,
    end: data?.data.dateTo || 0,
  });
  const rentalDuration = formatDuration(interval, {
    format: ['years', 'months', 'weeks', 'days', 'hours', 'minutes'],
    locale: ru,
  });

  const firstStepObj = {
    title: 'Пункт выдачи',
    information: `${data?.data.cityId.name}, ${data?.data.pointId.address}`,
  };

  const secondStepObj = {
    title: 'Модель',
    information: data?.data.carId.name || '',
  };

  const thirdStepObj = {
    color: data?.data.color || '',
    rentalDuration: rentalDuration,
    rate: `${data?.data.rateId.rateTypeId.name}`,
    fullTank: data?.data.isFullTank || false,
    babyChair: data?.data.isNeedChildChair || false,
    rightHandDrive: data?.data.isRightWheel || false,
  };

  const checkoutClickhandler = () => {
    mutateAsync({
      orderId: data?.data.id || '',
      orderStatusId: orderStatus?.data[2],
    });
  };

  const carNumber = data?.data.carId.number
    ?.replace(/(?<=\D)(?=\d)|(?<=\d)(?=\D)/g, ' ')
    .toUpperCase();

  useEffect(() => {
    (orderId?.data.orderStatusId.name === 'Отмененые' ||
      data?.data.orderStatusId.name === 'Отмененые') &&
      setisOrderCanceled(true);
  }, [orderId, data, isLoading]);

  return (
    <div className={styles.container}>
      <div className={styles.header_wrapper}>
        <HeaderComponent />
      </div>
      <article className={styles.order_id_block}>
        <p className={styles.order_id}>Заказ номер {id.id}</p>
      </article>
      {isError && (
        <div className={styles.error_wrapper}>
          <ErrorComponent errorMessage="Вероятно такого заказа не существует" />
        </div>
      )}
      {isLoading && <h1 className={styles.loader}>Загрузка...</h1>}
      {!isError && !isLoading && (
        <main className={styles.info_block}>
          <section className={styles.text_info_wrapper}>
            <FinalInfoComponent
              carName={data?.data.carId.name || 'Нет данных'}
              carNumber={carNumber || 'Нет данных'}
              fuel={fuel}
              availableFrom={availableFrom}
              carImageUrl={data?.data.carId.thumbnail.path}
            />
          </section>
          <CheckoutForm
            firstStepObj={firstStepObj}
            secondStepObj={secondStepObj}
            thirdStepObj={stepThreeObjIntoArray(thirdStepObj)}
            price={`${data?.data.price} ₽`}
            buttonTitle={isOrderCanceled ? 'Отменено' : 'Отменить'}
            clickHandler={() => checkoutClickhandler()}
            isButtonActive={isOrderCanceled ? true : false}
            isOrderStatusPage={true}
          />
        </main>
      )}
    </div>
  );
}
