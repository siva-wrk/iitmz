import Testimonials from "@/components/testimonials";
import styles from "./page.module.scss";
import "blaze-slider/dist/blaze.css";

export default function TestimonialsPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <h2 className="section-title center line">
          What Students <br /> Think About IIT Madras
        </h2>
        <Testimonials
          type="SECONDARY"
          slidesToShow={3}
          slideGap="20px"
          showTracks={true}
        />
      </div>
    </div>
  );
}
