import { Icons } from '../../shared/icons';
import styles from './carsharing-slider-arrows.module.css';

type TCarsharingSliderArrows = {
  prevSlide: () => void;
  nextSlide: () => void;
};

export function CarsharingSliderArrows({
  prevSlide,
  nextSlide,
}: TCarsharingSliderArrows) {
  return (
    <>
      <button className={styles.left_arrow} onClick={() => prevSlide()}>
        <Icons.LeftArrow color="#ffffff" />
      </button>
      <button className={styles.right_arrow} onClick={() => nextSlide()}>
        <Icons.RightArrow color="#ffffff" />
      </button>
    </>
  );
}
