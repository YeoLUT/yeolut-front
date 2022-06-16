import React, { useState, useRef } from "react";
import NavBar from "../components/NavBar";
import CardItem from "../components/CardItem";
import AuthorCard from "../components/AuthorCard";
import { ModalButton, ModalItem } from "../components/Modals";

import "./Home.css";

import {
  gammaExample,
  styleExample,
  colorExample,
} from "../scripts/demoContents";
import {
  MdExpandMore,
  MdArrowForwardIos,
  MdArrowBackIos,
} from "react-icons/md";

const isDemo = true;

const publicImgSrc = (src) => {
  return process.env.PUBLIC_URL + src;
};

/**
 *
 * @param {*} url
 */
async function getList(url) {
  const response = await fetch(url)
    .then((response) => {
      response.json();
    })
    .catch((error) => {
      console.error(error);
    });
  return response;
}

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const createDemoAuthor = (n) => {
  return [...new Array(n)].map((_, idx) => (
    <AuthorCard
      key={idx}
      name={"Author" + idx}
      likes={rand(10, 10000)}
      downloads={rand(10, 10000)}
      picSrc={"https://picsum.photos/100/100?random=" + idx}
    />
  ));
};
const createDemoLutCard = (n) => {
  return [...new Array(n)].map((_, idx) => (
    <CardItem
      key={idx}
      name={"LUT" + idx}
      src={"https://picsum.photos/500/400?random=" + idx}
      logname="log name"
      author="Sample author"
      download={rand(10, 10000)}
      like={rand(10, 10000)}
    />
  ));
};
const handleThumbnail = (e) => {};

// eslint-disable-next-line require-jsdoc
function Home() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const dimmerRef = useRef();
  // const openGammaModal = () => {
  //   setIsModalOpen(true);
  // };
  // const closeModal = () => {
  //   if (isModalOpen === true) return setIsModalOpen(false);
  // };

  return (
    <div className="container-home">
      {/* {isModalOpen && <div className="dimmer" ref={dimmerRef} />} */}
      <nav className="nav">
        <NavBar status={1} />
      </nav>
      <main className="main-home">
        <div className="container-trend">
          <div className="container-trend-bar">
            <div className="container-trend-title">
              <span className="trend-title">트렌드 LUTs 작가</span>
              <span className="trend-subtitle">
                지금 뜨고 있는 작가들의 트렌디한 LUT을 살펴보세요!
              </span>
            </div>
            <div className="trend-navigator">
              <MdArrowBackIos />
              <MdArrowForwardIos />
            </div>
          </div>
          <div className="trend-content hs scrolling-wrapper">
            {isDemo && createDemoAuthor(10)}
          </div>
        </div>
        <div className="container-filters">
          <label className="btn-primary btn-font" htmlFor="input-thumbnail">
            썸네일 업로드
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleThumbnail}
            id="input-thumbnail"
            style={{ display: "none" }}
          />
          <ModalButton name="Gamma">
            <ModalItem items={isDemo && gammaExample} />
          </ModalButton>
          <ModalButton name="Style">
            <ModalItem items={isDemo && styleExample} />
          </ModalButton>
          <ModalButton name="Color">
            <ModalItem items={isDemo && colorExample} />
          </ModalButton>
        </div>
        <div className="body-home">{isDemo && createDemoLutCard(30)}</div>
      </main>
    </div>
  );
}

export default Home;
