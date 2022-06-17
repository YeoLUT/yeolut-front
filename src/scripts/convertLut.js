/* eslint-disable new-cap */
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
const ffmpeg = createFFmpeg({
  corePath: "https://unpkg.com/@ffmpeg/core@0.10.0/dist/ffmpeg-core.js",
  log: true,
});

const convertLut = async (beforeImgUrl, lutUrl, id = 0) => {
  const tStart = new Date().getTime();

  // const beforeImgUrl = URL.createObjectURL(beforeImgUrl);
  // const lutUrl = URL.createObjectURL(lutUrl);

  if (!ffmpeg.isLoaded()) {
    console.log("Loading ffmpeg...");
    try {
      await ffmpeg.load();
    } catch (e) {
      console.error(e);
    }
  }

  console.log("Start converting...");
  ffmpeg.FS("writeFile", `${id}.jpg`, await fetchFile(beforeImgUrl));
  ffmpeg.FS("writeFile", `${id}.cube`, await fetchFile(lutUrl));
  // ffmpeg -i '{IMG_NAME}.jpg' \
  // -vf lut3d='{LUT_NAME}.cube' \
  // -q:v 1 -y '{OUT_NAME}.jpg' \
  await ffmpeg.run(
    "-i",
    `${id}.jpg`,
    "-vf",
    `lut3d=${id}.cube`,
    "-q:v",
    "1",
    "-y",
    `${id}_result.jpg`,
  );
  const data = ffmpeg.FS("readFile", `${id}_result.jpg`);
  const dataBlob = new Blob([data.buffer], { type: "image/jpeg" });
  const dataUrl = URL.createObjectURL(dataBlob);
  console.log("URL: " + dataUrl);
  const tEnd = new Date().getTime();
  console.log(`${id} convert completed (${tEnd - tStart}ms)`);

  return dataUrl;
};

const convertLutMulti = async (beforeImg, luts, setSrc) => {
  if (!ffmpeg.isLoaded()) {
    console.log("Loading ffmpeg...");
    try {
      await ffmpeg.load();
    } catch (e) {
      console.error(e);
    }
  }

  const tStart = new Date().getTime();
  // const newImgs = await Promise.all(
  //   luts.map(async (lut, idx) => {
  //     try {
  //       const dataUrl = await convertLut(beforeImg, lut, idx);
  //       console.log(idx + " Converted result: " + dataUrl);
  //       return dataUrl;
  //     } catch (e) {
  //       console.error(`${idx} error: ` + e);
  //       return null;
  //     }
  //   }),
  // );
  const newImgs = [];
  for (let idx = 0; idx < luts.length; idx++) {
    try {
      const dataUrl = await convertLut(beforeImg, luts[idx], idx);
      newImgs.push(dataUrl);
    } catch (e) {
      console.error(`${idx} error: ` + e);
      newImgs.push(null);
    }
  }
  const tEnd = new Date().getTime();
  console.log(`convert ${luts.length} luts completed in ${tEnd - tStart} ms`);

  setSrc(newImgs);
};

export { convertLut, convertLutMulti };
