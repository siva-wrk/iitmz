import styles from "./gallery.module.scss";
import Image from "next/image";
import Slider from "./slider";
import Img from "./image";

export default function Gallery() {
  return (
    <section>
      <Slider slidesToShow={5}>
        <div className={styles.item}>
          <Img
            src="/gal1.jpg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/gal2.jpg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/gal3.jpg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/gal4.jpg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/gal5.jpg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/gal6.jpg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
      </Slider>
    </section>
  );
}
