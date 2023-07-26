import styles from "./page.module.scss";
import Img from "@/components/image";
import Link from "next/link";

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
            The infrastructure at IIT Madras Zanzibar will comprise of four, 70
            seater classrooms and five, 30 seater classrooms. There will be
            three labs for - IT, Chemistry and Physics which will cater to the
            first batch of students at IITM Zanzibar. There will be hostels for
            70 students, a dining hall, a multipurpose store, a smart seminar
            hall and an auditorium.
          </p>
        </div>
        <div className={styles.images}>
          <Link target="_blank" href="/layout-ground-floor.webp">
            <Img
              width={200}
              height={180}
              src="/layout-ground-floor.webp"
              alt=""
              loading="eager"
            />
          </Link>
          <Link target="_blank" href="/layout-gate.webp">
            <Img
              width={200}
              height={360}
              src="/layout-gate.webp"
              alt=""
              loading="eager"
            />
          </Link>
          <Link target="_blank" href="/layout-furniture.webp">
            <Img
              width={200}
              height={180}
              src="/layout-furniture.webp"
              alt=""
              loading="eager"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
