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
      <div className={styles.left_arrow} style={{}}>
        <button className={styles.nav_button} onClick={() => prevSlide()}>
          <Icons.LeftArrow color="#ffffff" />
        </button>
      </div>
      <div className={styles.right_arrow}>
        <button className={styles.nav_button} onClick={() => nextSlide()}>
          <Icons.RightArrow color="#ffffff" />
        </button>
      </div>
    </>
  );
}
