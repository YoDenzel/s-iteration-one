import { useParams } from 'react-router-dom';
import { format, intervalToDuration, formatDuration } from 'date-fns';
import { ru } from 'date-fns/locale';
import {
  CheckoutForm,
  FinalInfoComponent,
  HeaderComponent,
} from '../../components';
import { useGetData } from '../../shared/custom-hooks';
import { stepThreeObjIntoArray } from '../../shared/functions/step-three-obj-into-array';
import { TGetCarOrder } from '../../shared/types';
import styles from './order-status-page.module.scss';

export function OrderStatusPage() {
  const id = useParams();
  const { data } = useGetData<TGetCarOrder>({
    QUERY_KEY: 'order',
    url: `order/${id.id}`,
  });
  const availableFrom = format(
    new Date(data?.data.dateFrom || 0),
    'dd.MM.yyyy HH:mm',
  );

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

  return (
    <div className={styles.container}>
      <div className={styles.header_wrapper}>
        <HeaderComponent />
      </div>
      <article className={styles.order_id_block}>
        <p className={styles.order_id}>Заказ номер {id.id}</p>
      </article>
      <main className={styles.info_block}>
        <section className={styles.text_info_wrapper}>
          <FinalInfoComponent
            carName={data?.data.carId.name || ''}
            carNumber={data?.data.carId.number || ''}
            fuel={`${data?.data.carId.tank}%`}
            availableFrom={availableFrom}
            carImageUrl={data?.data.carId.thumbnail.path}
          />
        </section>
        <CheckoutForm
          firstStepObj={firstStepObj}
          secondStepObj={secondStepObj}
          thirdStepObj={stepThreeObjIntoArray(thirdStepObj)}
          price={`${data?.data.price} ₽`}
          buttonTitle={'Отменить'}
          clickHandler={() => void 0}
          isButtonActive={false}
          isOrderStatusPage={true}
        />
      </main>
    </div>
  );
}
