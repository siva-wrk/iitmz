import styles from "./news.module.scss";
import Button from "./button";
import Link from "next/link";
import NewsCard from "./news-card";

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
          <NewsCard
            link="https://www.thecitizen.co.tz/tanzania/oped/iit-takes-on-tanzania-introducing-the-zanzibar-campus-4222024"
            image={{
              url: "/news4.jpg",
              alt: "Image of IITM Zanzibar campus building",
            }}
            title="IIT Madras takes on Tanzania"
            desc="IIT Zanzibar will open its doors in October 2023 with a batch of
                50 undergraduate students and 20 master&rsquo;s students. For
                the first year, the institution will offer data science and
                artificial intelligence courses. Zanzibar will be one of three
                campuses outside of India, with the others located in Abu Dhabi
                and Kuala Lumpur."
          />
          <NewsCard
            link="https://hcindiatz.gov.in/tz-glr-08-02-2023-6.php"
            image={{
              url: "/news5.jpg",
              alt: "Image of Delegates from India and Tanzania",
            }}
            title="Delegation from IIT Madras visits Tanzania"
            desc="A team of 5 Professors from Indian Institute of Technology
                Madras visited Tanzania to discuss setting up of IIT campus. The
                delegation met President of Zanzibar H.E. Dr. Hussein Ali
                Mwinyi, Minister of Vocational Training Zanzibar H.E. Lela
                Muhamed Mussa and Minister of Education, Science and Technology
                of Tanzania H.E. Adolf Mkenda."
          />
          <NewsCard
            link="https://www.thehindu.com/news/international/first-iit-in-tanzania-to-open-in-october-2023/article66915115.ece"
            image={{
              url: "/news5.jpeg",
              alt: "Logo of IITM Zanzibar",
            }}
            title="First IIT in Tanzania To Open in Oct 2023"
            desc="The establishment of IIT in Tanzania marks a significant step in
                strengthening the ties between India and Africa. It reflects
                India&rsquo;s growing interest in the African continent and its
                commitment to promoting education and human resource development
                in Africa."
          />
        </div>
      </div>
    </section>
  );
}
