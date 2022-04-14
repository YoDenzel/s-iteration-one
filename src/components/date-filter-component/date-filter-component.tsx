import { InputDatePicker } from '../input-datepicker';
import styles from './date-filter-component.module.scss';
import { TDateFilterComponent } from './types';

export function DateFilterComponent({
  clearInputClickHandler,
  dateFrom,
  dateTo,
  setDateFrom,
  setDateTo,
  minDate,
  firstInputTitle,
  secondInputTitle,
  maxTime,
}: TDateFilterComponent) {
  return (
    <section className={styles.date_form_wrapper}>
      <h1 className={styles.component_header}>Дата аренды</h1>
      <InputDatePicker
        title={firstInputTitle}
        date={dateFrom}
        setDate={setDateFrom}
        isDisabled={false}
        clearInputClickHandler={() => clearInputClickHandler()}
      />
      <article className={styles.second_input_wrapper}>
        <InputDatePicker
          title={secondInputTitle}
          date={dateTo}
          setDate={setDateTo}
          minDate={minDate}
          maxTime={maxTime}
          isDisabled={dateFrom ? false : true}
          clearInputClickHandler={() => setDateTo(null)}
        />
      </article>
    </section>
  );
}
