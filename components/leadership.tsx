import styles from "./leadership.module.scss";
import Img from "./image";

export default function Leadership() {
  return (
    <div className={styles.section}>
      <h2 className="section-title center line">IITM Zanzibar Leadership</h2>
      <div className="container">
        <div className={styles.card}>
          <Img
            src="/preeti-a.jpg"
            height={250}
            width={250}
            alt="Image of Professor Preeti Aghalayam"
          />
          <h3>Prof Preeti Aghalayam</h3>
          <h4>Director in Charge</h4>
          <p>Dean of School of Engineering & Science</p>
        </div>
        <div className={styles.card}>
          <Img
            src="/ligy-1.png"
            height={250}
            width={250}
            alt="Image of Professor Preeti Aghalayam"
          />
          <h3>Prof Ligy Philip</h3>
          <h4>Professor in Charge</h4>
          <p>Infrastructure</p>
        </div>
      </div>
    </div>
  );
}
