import styles from "./page.module.scss";

export const metadata = {
  title: "Hostel",
  description:
    "At the Zanzibar Campus, we understand the importance of providing a comfortable and welcoming environment for our students. Our hostel facilities are designed to be your home away from home, fostering a sense of community and offering everything you need for a productive and enjoyable stay",
  alternates: {
    canonical: `hostel`,
  },
};

export default function hostelPage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.main}> 
          <div className={styles.item}>
            <div className={styles.title}>
              <h2>
              Your Home Away from Home
              </h2>
            </div>
            <div className={styles.content}>
              <p>
              At the Zanzibar Campus, we understand the importance of providing a comfortable 
              and welcoming environment for our students. Our hostel facilities are designed 
              to be your home away from home, fostering a sense of community and offering everything 
              you need for a productive and enjoyable stay.
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.title}>
              <h2>
              Accommodation Options
              </h2>
            </div>
            <div className={styles.content}>
              <p>
              We offer dedicated hostel blocks for both boys and girls, ensuring privacy, security, 
              and convenience. With an overall capacity of 70 beds, our hostels provide a tight-knit 
              community where friendships are forged.
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.title}>
              <h2>
              Dining Excellence
              </h2>
            </div>
            <div className={styles.content}>
              <p>
              Our campus boasts a large dining area with a seating capacity of 160, offering a diverse 
              menu of cuisines to cater to various tastes and preferences. The facility includes a well-equipped 
              kitchen, a gas bank, ample storage space, a plate wash area, and a serving area to provide a delightful 
              dining experience for our students and faculty.
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.title}>
              <h2>
              Room Configurations
              </h2>
            </div>
            <div className={styles.content}>
              <p>
              Our hostel rooms are designed for double occupancy, creating a cosy and sociable living space. 
              Each room is thoughtfully furnished with comfortable beds, study tables, wardrobes, and reliable
              Wi-Fi connections, allowing you to study and relax with ease.
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.title}>
              <h2>
              Common Areas
              </h2>
            </div>
            <div className={styles.content}>
              <p>
              In addition to your room, our hostels feature common rooms where you can unwind, socialise, 
              or engage in recreational activities. You'll also find TV rooms and quiet reading spaces for your leisure and study needs.
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.title}>
              <h2>
              Hygiene and Cleanliness
              </h2>
            </div>
            <div className={styles.content}>
              <p>
              We prioritise your well-being, which is why our hostels include washing rooms with laundry facilities, 
              ensuring your clothing stays fresh and clean. Our dedicated housekeeping staff maintains the highest 
              standards of cleanliness throughout the hostels.
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.title}>
              <h2>
              Safety and Security
              </h2>
            </div>
            <div className={styles.content}>
              <p>
              Your safety is paramount. Our hostels are equipped with biometric access control systems, CCTV surveillance, 
              and vigilant security personnel to ensure a secure living environment.
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.title}>
              <h2>
              Community and Camaraderie
              </h2>
            </div>
            <div className={styles.content}>
              <p>
              Our hostels are more than just places to sleep; they are hubs of camaraderie and collaboration. 
              Forge lifelong friendships, study together, and create memories that will last a lifetime. <br/>

              Living on campus offers more than just convenience—it's an opportunity to be part of a vibrant 
              academic community, share experiences, and make lasting connections. We look forward to providing 
              you with a comfortable and welcoming home during your time at the Zanzibar Campus.<br/>

              Explore the rest of our facilities to discover how we're committed to enhancing your overall campus experience. 
              If you have any questions or would like to know more about our hostel facilities, please don't hesitate to contact us.

              </p>
            </div>
          </div>



        </div> 
      </div>
    </section>
  );
}
