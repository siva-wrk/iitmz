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

        {/* <div className={styles.card}>
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
        </div> */}
        <div className={styles.card}>
          <h3>BS in Data Science & AI</h3>
          <ul>
            <li>
              Tution Fee: <span>USD 12000 / p.a.</span>
            </li>
            <li>
              Accomodation (Twin Sharing): <span>USD 4000 / p.a.</span>
            </li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>M.Tech in Data Science & AI</h3>
          <ul>
            <li>
              Tution Fee: <span>USD 4000 / p.a.</span>
            </li>
            <li>
              Accomodation (Twin Sharing): <span>USD 4000 / p.a.</span>
            </li>
          </ul>
        </div>
      </div>
      <p>
        Qualifying students will be eligible for attractive scholarships which
        will include tuition breaks. * Tuition fee waiver up to 80% will be
        available for meritorious candidates
      </p>
    </section>
  );
}
