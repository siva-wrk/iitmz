import styles from "./page.module.scss";
import Img from "@/components/image";

export default function CampusLife() {
  return (
    <section className={styles.campus}>
      <div className="container">
        <div className={styles.content}>
          <h2>
            Discover <br /> Our University <span>.</span>
          </h2>
          <p>
            At IITM Zanzibar, campus life is an integral part of the educational
            experience. Our stimulating environment encourages personal growth,
            community, and exploration. With diverse clubs, sports facilities,
            cultural events, support services, and a serene atmosphere, students
            can thrive academically, socially, and personally.
          </p>
          <p>
            Nurturing Student Growth and Empowering Success: Fostering an
            Engaging and Inclusive Campus Environment at IITM Zanzibar
          </p>
        </div>
        <div className={styles.images}>
          <Img
            width={200}
            height={180}
            src="/research1.jpeg"
            alt=""
            loading="eager"
          />
          <Img
            width={200}
            height={360}
            src="/campus3.jpeg"
            alt=""
            loading="eager"
          />
          <Img
            width={200}
            height={180}
            src="/research2x.jpeg"
            alt=""
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
