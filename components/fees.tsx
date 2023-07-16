import styles from "./fees.module.scss";
import { CiMoneyCheck1 } from "react-icons/ci";
import { SlGraduation } from "react-icons/sl";

export default function Fees() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <CiMoneyCheck1 />
          <h2>Fees & Scholarships</h2>
          {/* <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p> */}
          {/* <a className="edo-theme-btn" href="#">
            View In Detail
          </a> */}
        </div>

        <div className={styles.card}>
          <ul>
            <li>
              Bachelor of Science (DS & AI): USD 12000 per year* + Accommodation
              costs additional
            </li>
            <li>
              MTech (DS & AI): USD 4000 per year* + Accommodation costs
              additional
            </li>
            <li>
              Qualifying students will be eligible for attractive scholarships
              which will include tuition breaks. <br />* Tuition fee waiver up
              to 80% will be available for meritorious candidates
            </li>
          </ul>
          {/* <a
            className="edo-course-sec-btn"
            href="https://admissions.ge.iitm.ac.in"
          >
            Apply now
          </a> */}
        </div>
        {/* <div className={styles.card}>
          <h3>M.Tech in Data Science & AI</h3>
          <ul>
            <li>
              Admission Fee: <span>$500</span>
            </li>
            <li>
              Semester I: <span>$2000</span>
            </li>
            <li>
              Semester II: <span>$2000</span>
            </li>
            <li>
              Semester III: <span>$2000</span>
            </li>
            <li>
              Semester IV: <span>$2000</span>
            </li>
            <li>
              Medical Insurance: <span>$300</span>
            </li>
          </ul>
          <a
            className="edo-course-sec-btn"
            href="https://admissions.ge.iitm.ac.in"
          >
            Apply now
          </a>
        </div> */}
      </div>
    </section>
  );
}
