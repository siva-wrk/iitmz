import styles from "./page.module.scss";
import Img from "@/components/image";
import Link from "next/link";

export const metadata = {
  title: "Discover Our Campus",
  description:
    "Experience an Enriching Campus Life at IIT Madras Zanzibar. Diverse Clubs, Sports, Cultural Events, And Excellent Facilities Await. Learn More.",
  alternates: {
    canonical: `campus-life`,
  },
};

export default function CampusLife() {
  return (
    <>
      <section className={styles.campus}>
        <div className="container">
          <div className={styles.content}>
          <h1 className="main-title">
            IITM Zanzibar Transit Campus : A Glimpse of Excellence
            </h1>
            <p>
            Our Transit Campus in Bweleo, Zanzibar, Tanzania, represents a vital stepping stone 
            towards the realization of our vision at the Indian Institute of Technology Madras (IIT Madras). 
            This interim facility, set to open in mid-October 2023, stands as a testament to our unwavering 
            commitment to providing students and faculty with an exceptional educational and research environment. 
            Equipped with modern amenities such as smart classrooms, auditoriums, a dedicated dispensary, 
            and comprehensive security measures, our Transit Campus is poised to be a vibrant center for 
            learning, innovation, and collaboration..
            </p>
            <p>
            While we eagerly anticipate the completion of the Permanent Zanzibar Campus, 
            this page offers a sneak peek into the world of opportunities that await you right now. 
            Explore the meticulously planned facilities, infrastructure, and campus life that will soon 
            become an integral part of your educational journey..
            </p>
            <p>We invite you to join us on this extraordinary adventure as we build a brighter future together.
               The Zanzibar Campus is not just a place; it's a promise of boundless possibilities and limitless horizons. 
               We look forward to welcoming you to our global family at IIT Madras.</p>
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
      <div className={styles.gallery}>
        <Img
          src="/campus1.png"
          width={400}
          height={300}
          alt="Image of IITM Zanzibar Campus"
        />
        <Img
          src="/campus1.jpg"
          width={400}
          height={300}
          alt="Image of IITM Zanzibar Campus"
        />
        <Img
          src="/campus2.png"
          width={400}
          height={300}
          alt="Image of IITM Zanzibar Campus"
        />
      </div>
    </>
  );
}
