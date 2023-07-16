import fs from "node:fs/promises";
import path from "node:path";
import { getPlaiceholder } from "plaiceholder";

type getPlaceHolderProps = {
  src: string;
};

export default async function getPlaceHolder({
  src,
}: getPlaceHolderProps): Promise<{
  base64: string;
}> {
  const buffer = await fs.readFile(path.join("./public", src));
  const { base64 } = await getPlaiceholder(buffer);
  return { base64 };
}
