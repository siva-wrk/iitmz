import styles from "./page.module.scss";
import media from "@/data/media";
import NewsCard from "@/components/news-card";
import VideoPlayer from "@/components/video-player";

export default function MediaPage() {
  return (
    <div className="container">
      <div className={styles.section}>
        <div className={styles.youtube_container}>
          {media.yt.map((video) => (
            <VideoPlayer key={video.id} url={video.id} />
          ))}
        </div>
        <div className={styles.news_container}>
          {media.articles.map((article) => (
            <NewsCard key={article.title} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}
