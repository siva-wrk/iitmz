import VideoPlayer from "./video-player";
import getPlaceHolder from "@/lib/getPlaceHolder";

const fetchPreviewImage = async (id: string) => {
  let imageRes = await fetch(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);
  if (!imageRes.ok) {
    imageRes = await fetch(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`);
  }
  const buffer = await imageRes.arrayBuffer();
  const src = Buffer.from(buffer).toString("base64");
  return src;
};

type YoutubePlayerProps = {
  id: string;
};

export default async function YoutubePlayer({ id }: YoutubePlayerProps) {
  const previewImage = await fetchPreviewImage(id);
  return <VideoPlayer id={id} previewImage={previewImage} />;
}
