"use client";
import ReactPlayer from "react-player/youtube";

export default function VideoPlayer({ url }: { url: string }) {
  return (
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${url}`}
      light={true}
      height="340px"
      width="calc(50% - 1.3rem)"
      playing={true}
    />
  );
}
