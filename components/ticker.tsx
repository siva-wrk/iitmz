"use client";

import styles from "./ticker.module.scss";
import announcements from "@/data/announcements";
import Marquee from "react-fast-marquee";

export default function Ticker() {
  return (
    <div className={styles.section}>
      <div className={styles.head}>Announcements</div>
      <div className={styles.body}>
        <Marquee>
          {announcements.map((announcement) => (
            <p>{announcement?.title}</p>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
