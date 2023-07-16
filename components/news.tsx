import styles from "./news.module.scss";
import Button from "./button";
import Link from "next/link";
import Img from "./image";

export default function News() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.header}>
            <p>News</p>
            <h3>
              Discover The Latest <span>From IITM</span>
            </h3>
            <Link href="https://www.iitm.ac.in/happenings/IITM-news">
              <Button>View All</Button>
            </Link>
          </div>
          <div className={styles.card}>
            <a
              target="_blank"
              href="https://www.thecitizen.co.tz/tanzania/oped/iit-takes-on-tanzania-introducing-the-zanzibar-campus-4222024"
            >
              <Img
                src="/news4.jpg"
                width={200}
                height={100}
                alt="Image of human and machine"
              />

              <h3>IIT Madras takes on Tanzania</h3>
              <p>
                IIT Zanzibar will open its doors in October 2023 with a batch of
                50 undergraduate students and 20 master&rsquo;s students. For
                the first year, the institution will offer data science and
                artificial intelligence courses. Zanzibar will be one of three
                campuses outside of India, with the others located in Abu Dhabi
                and Kuala Lumpur.
              </p>
            </a>
          </div>
          <div className={styles.card}>
            <a
              target="_blank"
              href="https://hcindiatz.gov.in/tz-glr-08-02-2023-6.php"
            >
              <Img
                src="/news5.jpg"
                width={200}
                height={100}
                alt="Image of human and machine"
              />

              <h3>Delegation from IIT Madras visits Tanzania</h3>
              <p>
                A team of 5 Professors from Indian Institute of Technology
                Madras visited Tanzania to discuss setting up of IIT campus. The
                delegation met President of Zanzibar H.E. Dr. Hussein Ali
                Mwinyi, Minister of Vocational Training Zanzibar H.E. Lela
                Muhamed Mussa and Minister of Education, Science and Technology
                of Tanzania H.E. Adolf Mkenda.
              </p>
            </a>
          </div>
          <div className={styles.card}>
            <a
              target="_blank"
              href="https://www.thehindu.com/news/international/first-iit-in-tanzania-to-open-in-october-2023/article66915115.ece"
            >
              <Img
                src="/news5.jpeg"
                width={200}
                height={100}
                alt="Image of human and machine"
              />

              <h3>First IIT in Tanzania To Open in Oct 2023</h3>
              <p>
                The establishment of IIT in Tanzania marks a significant step in
                strengthening the ties between India and Africa. It reflects
                India&rsquo;s growing interest in the African continent and its
                commitment to promoting education and human resource development
                in Africa.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
