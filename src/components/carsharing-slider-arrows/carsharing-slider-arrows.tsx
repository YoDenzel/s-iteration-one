import { Icons } from '../../shared/icons';
import styles from './carsharing-slider-arrows.module.css';

type TCarsharingSliderArrows = {
  prevSlide: () => void;
  nextSlide: () => void;
  setAutoPlayEnabled: (v: boolean) => void;
};

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
        <Icons.LeftArrow color="#ffffff" />
      </button>
      <button
        className={styles.right_arrow}
        onClick={() => {
          setAutoPlayEnabled(false);
          nextSlide();
        }}
      >
        <Icons.RightArrow color="#ffffff" />
      </button>
    </>
  );
}
