import { useMemo, useState } from 'react';
import { useAppSelector } from '../../shared/custom-hooks';
import { ColorFilterForm } from '../color-filter-form';
import { InputDatePicker } from '../input-datepicker';
import styles from './order-addition-settings-component.module.scss';

export function OrderAdditionSettingsComponent() {
  const [activeButtonName, setActiveButtonName] = useState('Любой');
  const [dateFrom, setDateFrom] = useState<Date | null>(null);
  const [dateTo, setDateTo] = useState<Date | null>(null);
  const carColors = useAppSelector(state =>
    useMemo(
      () =>
        state.stepTwoOrderForm.carColors.filter(
          (item, index, arr) => arr.indexOf(item) === index,
        ),
      [],
    ),
  );
  const filterRadioButtonTitlesArr = ['Любой'].concat(carColors);

  const clearInputClickHandler = () => {
    setDateFrom(null);
    setDateTo(null);
  };

  return (
    <section className={styles.settings_container}>
      <ColorFilterForm
        title="Цвет"
        activeButtonName={activeButtonName}
        titleArr={filterRadioButtonTitlesArr}
        clickRadioButtonHandler={setActiveButtonName}
      />
      <article className={styles.date_form_wrapper}>
        <InputDatePicker
          title="С"
          date={dateFrom}
          setDate={setDateFrom}
          isDisabled={false}
          clearInputClickHandler={() => clearInputClickHandler()}
        />
        <article className={styles.second_input_wrapper}>
          <InputDatePicker
            title="По"
            date={dateTo}
            setDate={setDateTo}
            minDate={dateFrom}
            isDisabled={dateFrom ? false : true}
            clearInputClickHandler={() => setDateTo(null)}
          />
        </article>
      </article>
    </section>
  );
}
