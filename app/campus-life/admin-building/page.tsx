import styles from "./page.module.scss";

export const metadata = {
  title: "Admin Building",
  description:
    "The Admin Building at the Zanzibar Campus, Indian Institute of Technology Madras, is the central hub where administrative, academic, and operational functions seamlessly come together. ",
  alternates: {
    canonical: `admin-building`,
  },
};

export default function adminBuildingPage() {
  return (
    <section className={styles.section}>
      <div className="container">
        
        <div className={styles.main}>
          <div className={styles.item}>
            <div className={styles.title}>
              <h2>
              The Heart of Campus Operations
              </h2>
            </div>
            <div className={styles.content}>
              <p>
              The Admin Building at the Zanzibar Campus, Indian Institute of Technology Madras, 
              is the central hub where administrative, academic, and operational functions seamlessly come together. 
              This state-of-the-art facility is equipped with everything needed to support the efficient functioning 
              of our campus and enhance the overall student and faculty experience.
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>
              <h2>
              Administrative Offices
              </h2>
            </div>
            <div className={styles.content}>
              <p>
              Within the Admin Building, you&rsquo;ll find a range of administrative offices
              to address your needs. These include rooms for admin staff, technical staff, and dedicated faculty rooms.
              </p>
            </div>
          </div>
          <br/>

          <div className={styles.item}>
            <div className={styles.title}>
              <h2>
              Director&rsquo;s Office
              </h2>
            </div>
            <div className={styles.content}>
              <p>
              The Director&rsquo;s Office serves as the epicenter of leadership and decision-making, 
              ensuring a cohesive vision for the campus&rsquo;s growth and development.
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.title}>
              <h2>
              Classrooms and Laboratories
              </h2>
            </div>
            <div className={styles.content}>
              <p>
              The Admin Building houses modern classrooms equipped with smart technology, 
              creating an environment conducive to interactive and technology-enhanced learning. 
              Additionally, sophisticated labs for chemistry and physics provide students with cutting-edge research opportunities.
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.title}>
              <h2>
              Conference Rooms
              </h2>
            </div>
            <div className={styles.content}>
              <p>
              Our well-equipped conference rooms serve as spaces for collaboration, 
              idea sharing, and academic discussions, fostering a vibrant intellectual community.
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.title}>
              <h2>
              Library
              </h2>
            </div>
            <div className={styles.content}>
              <p>
              The Admin Building features a library stocked with a wide array of books, 
              journals, and research materials, supporting academic excellence and promoting a culture of inquiry.
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.title}>
              <h2>
              Hybrid Classrooms
              </h2>
            </div>
            <div className={styles.content}>
              <p>
              Our hybrid classrooms are designed to facilitate both in-person and virtual learning, 
              ensuring flexibility and accessibility for students and faculty.<br/>

              The Admin Building is not just a place of operations; it&rsquo;s a space where ideas are nurtured, 
              knowledge is shared, and innovation is cultivated. It&rsquo;s where the foundations for your academic 
              journey are laid, and where you&rsquo;ll find the support and resources you need to thrive.<br/>

                As the heart of our campus, the Admin Building embodies our commitment to academic excellence 
                and the holistic development of our community. It is here that the aspirations and dreams of our 
                students and faculty come to life.

              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
