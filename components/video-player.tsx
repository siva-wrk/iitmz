"use client";
import ReactPlayer from "react-player/youtube";
import styles from "./video-player.module.scss";

export default function VideoPlayer({ url }: { url: string }) {
  return (
    <div className={styles.skelton}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${url}`}
        light={true}
        height="100%"
        width="100%"
        playing={true}
      />
    </div>
  );
}
