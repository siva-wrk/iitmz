import styles from "./page.module.scss";
import media from "@/data/media";
import YouTubePlayer from "@/components/youtube-player";
import NewsCard from "@/components/news-card";

export default function MediaPage() {
  return (
    <div className="container">
      <div className={styles.section}>
        <div className={styles.youtube_container}>
          {media.yt.map((video) => (
            <YouTubePlayer videoId={video.id} />
          ))}
        </div>
        <div className={styles.news_container}>
          {media.articles.map((article) => (
            <NewsCard {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}
