import { Icons } from '../../shared/icons';
import styles from './carsharing-slider-arrows.module.scss';
import { TCarsharingSliderArrows } from './types';

export function CarsharingSliderArrows({
  prevSlide,
  nextSlide,
  setAutoPlayEnabled,
}: TCarsharingSliderArrows) {
  return (
    <>
      <button
        className={styles.left_arrow}
        onClick={() => {
          setAutoPlayEnabled(false);
          prevSlide();
        }}
      >
        <div className={styles.left_arrow_hover} />
        <span>
          <Icons.LeftArrow color="#ffffff" />
        </span>
      </button>

      <button
        className={styles.right_arrow}
        onClick={() => {
          setAutoPlayEnabled(false);
          nextSlide();
        }}
      >
        <div className={styles.right_arrow_hover} />
        <span>
          <Icons.RightArrow color="#ffffff" />
        </span>
      </button>
    </>
  );
}
