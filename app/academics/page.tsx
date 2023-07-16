import styles from "./page.module.scss";
import Courses from "@/components/courses";

export default function AcademicsPage() {
  return (
    <div className={styles.page}>
      <Courses layout="VERTICAL" />
    </div>
  );
}
