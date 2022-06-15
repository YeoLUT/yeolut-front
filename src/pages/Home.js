import React from "react";
import CardItem from "../components/CardItem";
import NavBar from "../components/NavBar";
import AuthorCard from "../components/AuthorCard";
import "./Home.css";
import { MdExpandMore } from "react-icons/md";

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

// eslint-disable-next-line require-jsdoc
function Home() {
  return (
    <div className="container-home">
      <nav className="nav">
        <NavBar status={1} />
      </nav>
      <main className="main-home">
        <div className="container-trend">
          <div className="container-trend-title">
            <span className="trend-title">트렌드 LUTs 작가</span>
            <span className="trend-subtitle">
              지금 뜨고 있는 작가들의 트렌디한 LUT을 살펴보세요!
            </span>
          </div>
          <div className="trend-content hs scrolling-wrapper">
            {isDemo && createDemoAuthor(10)}
          </div>
        </div>
        <div className="container-filters">
          <button className="btn-primary btn-font"> 썸네일 업로드 </button>
          <button className="btn-dropdown btn-font">
            Gamma <MdExpandMore />
          </button>
          <button className="btn-dropdown btn-font">
            Style <MdExpandMore />
          </button>
          <button className="btn-dropdown btn-font">
            Color <MdExpandMore />
          </button>
        </div>
        <div className="body-home">{isDemo && createDemoLutCard(30)}</div>
      </main>
    </div>
  );
}

export default Home;
