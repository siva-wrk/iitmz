import styles from "./admission-widget.module.scss";
import Link from "next/link";

export default function AdmissionWidget() {
  return (
    <div className={styles.widget}>
      <button>Admissions 2023</button>
      <div className={styles.content}>
        <Link href="/admission">Apply Now</Link>
        <Link target="_blank" href="/selection_process.pdf">
          Information Brochure
        </Link>
        <Link target="_blank" href="/bs-sample-questions_v2.pdf">
          BS Sample Questions
        </Link>
        <Link target="_blank" href="/mtech-sample-questions.pdf">
          MTech Sample Questions
        </Link>
      </div>
    </div>
  );
}
