/* eslint-disable new-cap */
import React, { useState } from "react";
import "./lutDemo.css";

import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
const ffmpeg = createFFmpeg({
  corePath: "https://unpkg.com/@ffmpeg/core@0.10.0/dist/ffmpeg-core.js",
  log: true,
});

const LutDemo = () => {
  const [beforeImgSrc, setBeforeImgSrc] = useState("");
  const [afterImgSrc, setAfterImgSrc] = useState("");
  const [lutSrc, setLutSrc] = useState("");
  const [message, setMessage] = useState('Click "Upload" to select a file');
  const [elapsedTime, setElapsedTime] = useState("");

  const saveBeforeFileImage = (e) => {
    setElapsedTime("");
    setAfterImgSrc("");
    setMessage("");
    setBeforeImgSrc(URL.createObjectURL(e.target.files[0]));
    console.log("Image (before) URL: " + beforeImgSrc);
  };
  const saveAfterFileImage = (e) => {
    setAfterImgSrc(URL.createObjectURL(e));
    console.log("Image (after) URL: " + afterImgSrc);
  };
  const saveLut = (e) => {
    setLutSrc(URL.createObjectURL(e.target.files[0]));
    console.log("LUT URL: " + lutSrc);
  };

  const convert = async () => {
    const tStart = new Date().getTime();
    setMessage("Loading ffmpeg...");
    if (!ffmpeg.isLoaded()) await ffmpeg.load();

    setMessage("Start converting...");
    ffmpeg.FS("writeFile", "target.jpg", await fetchFile(beforeImgSrc));
    ffmpeg.FS("writeFile", "target.cube", await fetchFile(lutSrc));
    // ffmpeg -i '{IMG_NAME}.jpg' \
    // -vf lut3d='{LUT_NAME}.cube' \
    // -q:v 1 -y '{OUT_NAME}.jpg' \
    await ffmpeg.run(
      "-i",
      "target.jpg",
      "-vf",
      "lut3d=target.cube",
      "-q:v",
      "1",
      "-y",
      "result.jpg"
    );
    const data = ffmpeg.FS("readFile", "result.jpg");
    const dataBlob = new Blob([data.buffer], { type: "image/jpeg" });
    const dataURL = URL.createObjectURL(dataBlob);
    console.log(dataURL);
    saveAfterFileImage(dataBlob);
    setMessage("Convert completed!");

    const tEnd = new Date().getTime();
    console.log("Elapsed Time: " + (tEnd - tStart) + " ms");
    setElapsedTime(String(tEnd - tStart));
  };

  return (
    <div className="App">
      <header>
        <div className="black-nav">
          <header>LUT apply demo</header>
        </div>
      </header>
      <div className="container">
        <h2>Status:</h2>
        <p> {message}</p>
        <p>
          {elapsedTime && "Elapsed Time: "}
          {elapsedTime && elapsedTime}
          {elapsedTime && "ms"}
        </p>
        <div className="title">
          <div className="upload-title">
            Upload image...<br></br>
            <input
              type="file"
              accept="image/*"
              onChange={saveBeforeFileImage}
            />
          </div>
          <div className="upload-title">
            Upload LUT...<br></br>
            <input type="file" accept=".cube" onChange={saveLut} />
          </div>
          <button onClick={convert}>Convert</button>
        </div>
        <div className="image-container">
          <div className="img-before">
            {beforeImgSrc && <img src={beforeImgSrc} alt="preview-before" />}
          </div>
          <div className="img-after">
            {afterImgSrc && <img src={afterImgSrc} alt="preview-after" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LutDemo;
