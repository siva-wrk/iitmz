import styles from "./page.module.scss";
import Courses from "@/components/courses";
import Img from "@/components/image";
import { FaUniversity } from "react-icons/fa";
import Button from "@/components/button";
import Link from "next/link";

export default function AcademicsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Img
          src="/school-eng1w.png"
          alt="Header Image depicting technology"
          width={1400}
          height={900}
        />
        <h1>
          <FaUniversity /> School Of Engineering & Science
        </h1>
      </div>
      <div className="container">
        <div id="pac" className={styles.pac}>
          <h2 className="section-title center line">
            Program Advisory Committee
          </h2>
          <div>
            <div className={styles.card}>
              <Img
                src="/sharat.jpg"
                alt="Photo of Prof Sharat Chandran"
                width={250}
                height={250}
              />
              <h3>Prof Sharat Chandran</h3>
              <h4>IIT, Bombay</h4>
              <Link target="_blank" href="https://www.cse.iitb.ac.in/~sharat/">
                <Button kind="SECONDARY">Know More</Button>
              </Link>
            </div>

            <div className={styles.card}>
              <Img
                src="/pandurangan.jpeg"
                alt="Photo of Prof Pandurangan"
                width={250}
                height={250}
              />
              <h3>Prof C Pandurangan</h3>
              <h4>IISc, Bangalore</h4>
              <Link
                target="_blank"
                href="https://odaa.iisc.ac.in/prof-pandurangan-medal/"
              >
                <Button kind="SECONDARY">Know More</Button>
              </Link>
            </div>
            <div className={styles.card}>
              <Img
                src="/mark.png"
                alt="Photo of Prof Mark Lee"
                width={250}
                height={250}
              />
              <h3>Prof Mark Lee</h3>
              <h4>University of Birmingham</h4>
              <Link
                target="_blank"
                href="https://www.birmingham.ac.uk/staff/profiles/computer-science/academic-staff/lee-mark.aspx"
              >
                <Button kind="SECONDARY">Know More</Button>
              </Link>
            </div>
          </div>
        </div>
        <div id="courses">
          <Courses layout="VERTICAL" />
        </div>
        <div id="faculty" className={styles.faculty}>
          <h2 className="section-title center line">Faculty</h2>
          <div>
            <div className={styles.card}>
              <Img
                src="/ligy-1.png"
                alt="Photo of Prof Ligy Phillip"
                width={200}
                height={200}
              />
              <h3>Prof. Ligy Phillip</h3>
              <h4>Chair Professor, Civil Engg</h4>
              <Link
                target="_blank"
                href="https://civil.iitm.ac.in/faculty/ligy/"
              >
                <Button kind="SECONDARY">Know More</Button>
              </Link>
            </div>

            <div className={styles.card}>
              <Img
                src="/ramkrishna.png"
                alt="Photo of Prof Ramkrishna Pasumarthy"
                width={200}
                height={200}
              />
              <h3>Prof. Ramkrishna Pasumarthy</h3>
              <h4>Program Chair, BS DS & AI</h4>
              <Link
                target="_blank"
                href="https://www.ee.iitm.ac.in/ramkrishna/"
              >
                <Button kind="SECONDARY">Know More</Button>
              </Link>
            </div>
            <div className={styles.card}>
              <Img
                src="/nirav-1.jpg"
                alt="Photo of Prof Nirav Bhatt"
                width={200}
                height={200}
              />
              <h3>Dr. Nirav Bhatt</h3>
              <h4>Program Chair, MTech DS & AI</h4>
              <Link
                target="_blank"
                href="https://biotech.iitm.ac.in/faculty/nirav-p-bhatt/"
              >
                <Button kind="SECONDARY">Know More</Button>
              </Link>
            </div>
            <div className={styles.card}>
              <Img
                src="/raghunathan-1.jpg"
                alt="Photo of Prof Raghunathan Rengaswamy"
                width={200}
                height={200}
              />
              <h3>Prof. Raghunathan Rengaswamy</h3>
              <h4>Chair Professor, Chemical Engg</h4>
              <Link
                target="_blank"
                href="https://ibse.iitm.ac.in/people/raghunathan-rengaswamy/"
              >
                <Button kind="SECONDARY">Know More</Button>
              </Link>
            </div>
            <div className={styles.card}>
              <Img
                src="/preeti-a.jpg"
                alt="Photo of Prof Preeti Aghalayam"
                width={200}
                height={200}
              />
              <h3>Prof. Preeti Aghalayam</h3>
              <h4>Professor, Chemical Engg</h4>
              <Link target="_blank" href="https://che.iitm.ac.in/preeti/">
                <Button kind="SECONDARY">Know More</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
