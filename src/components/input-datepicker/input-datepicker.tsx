import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import MaskedInput from 'react-text-mask';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import styles from './input-datepicker.module.scss';
import { TInputDatePicker } from './types';
import { Icons } from '../../shared/icons';

export function InputDatePicker({
  date,
  setDate,
  title,
  minDate,
  isDisabled,
  clearInputClickHandler
}: TInputDatePicker) {
  registerLocale('ru', ru);

  return (
    <article className={styles.date_wrapper}>
      <p className={styles.title}>{title}</p>
      <div className={styles.input_container}>
        <DatePicker
          selected={date}
          onChange={(date: Date) => setDate(date)}
          className={styles.datepicker}
          timeCaption="Время"
          showPopperArrow={false}
          showTimeSelect
          locale="ru"
          placeholderText="Введите дату и время"
          dateFormat="dd/MM/yyyy HH:mm"
          minDate={minDate}
          disabled={isDisabled}
          customInput={
            <MaskedInput
              type="text"
              mask={[
                /\d/,
                /\d/,
                '/',
                /\d/,
                /\d/,
                '/',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                ' ',
                /[0-2]/,
                /[0-9]/,
                ':',
                /[0-5]/,
                /[0-9]/,
              ]}
              guide={false}
            />
          }
        />
        <button
          className={styles.reset_button}
          onClick={() => clearInputClickHandler()}
          disabled={isDisabled}
        >
          <Icons.ResetInputIcon />
        </button>
      </div>
    </article>
  );
}
