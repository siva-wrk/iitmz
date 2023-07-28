import VideoPlayer from "./video-player";

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
  const url = `https://www.youtube.com/watch?v=${id}`;
  return <VideoPlayer url={url} previewImage={previewImage} />;
}
