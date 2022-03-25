import styles from './single-slide-component.module.css';

type TSingleSlideComponent = {
  sliderImage: string;
  buttonColor: string;
  description: string;
  title: string;
  more: string;
};

export function SingleSlideComponent({
  sliderImage,
  buttonColor,
  description,
  title,
  more,
}: TSingleSlideComponent) {
  return (
    <div
      className={styles.slide}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${sliderImage})`,
      }}
    >
      <div className={styles.description_block}>
        <h1 className={styles.header}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <button
          className={styles.more_info}
          style={{
            background: `${buttonColor}`,
          }}
        >
          {more}
        </button>
      </div>
    </div>
  );
}
