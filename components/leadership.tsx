import styles from "./leadership.module.scss";
import Img from "./image";
import Link from "next/link";

export default function Leadership() {
  return (
    <div className={styles.section}>
      <h2 className="section-title center line">IITM Zanzibar Leadership</h2>
      <div className="container">
        <Link href="/schools/engineering-and-science/faculty/prof-preeti-aghalayam">
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
        </Link>
        <Link href="/schools/engineering-and-science/faculty/prof-ligy-philip">
          <div className={styles.card}>
            <Img
              src="/ligy-1.png"
              height={250}
              width={250}
              alt="Image of Professor Ligy Philip"
            />
            <h3>Prof Ligy Philip</h3>
            <h4>Professor in Charge</h4>
            <p>Infrastructure</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
