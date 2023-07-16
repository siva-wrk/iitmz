import styles from "./events.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CiClock1 } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";

export default function Events() {
  return (
    <section className={styles.section}>
      <h2 className="section-title">Upcoming Events</h2>

      <div className={styles.item}>
        <div className={styles.date}>
          <h4>29</h4>
          <h5>May 23</h5>
        </div>
        <div className={styles.content}>
          <div>
            <h3>
              <a href="event-details.html">Education Summer Tour</a>
            </h3>
            <span>
              <CiClock1 />
              12:30 AM
            </span>
            <span>
              <SlLocationPin />
              IITZ, Zanzibar
            </span>
          </div>
          <a href="event-details.html" className={styles.arrow}>
            <AiOutlineArrowRight />
          </a>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.date}>
          <h4>20</h4>
          <h5>Sept 23</h5>
        </div>
        <div className={styles.content}>
          <div>
            <h3>
              <a href="event-details.html">Education Spring Tour</a>
            </h3>
            <span>
              <CiClock1 />
              10:30 AM
            </span>
            <span>
              <SlLocationPin />
              IITM, Chennai
            </span>
          </div>
          <a href="event-details.html" className={styles.arrow}>
            <AiOutlineArrowRight />
          </a>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.date}>
          <h4>01</h4>
          <h5>Jan 24</h5>
        </div>
        <div className={styles.content}>
          <div>
            <h3>
              <a href="event-details.html">Education Winter Tour</a>
            </h3>
            <span>
              <CiClock1 />
              09:30 AM
            </span>
            <span>
              <SlLocationPin />
              IITZ, Zanzibar
            </span>
          </div>
          <a href="event-details.html" className={styles.arrow}>
            <AiOutlineArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
