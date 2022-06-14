import React from "react";
import CardItem from "../components/CardItem";
import NavBar from "../components/NavBar";
import AuthorCard from "../components/AuthorCard";
import "./Home.css";
import { MdExpandMore } from "react-icons/md";

const publicImgSrc = (src) => {
  return process.env.PUBLIC_URL + src;
};

// eslint-disable-next-line require-jsdoc
function Home() {
  let imgCnt = 0;
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
            <AuthorCard
              name="SHAAM WORX"
              likes={34000}
              downloads={12900}
              picSrc={"https://picsum.photos/100/100?random=" + imgCnt++}
            />
            <AuthorCard
              name="SHAAM WORX"
              likes={34000}
              downloads={12900}
              picSrc={"https://picsum.photos/100/100?random=" + imgCnt++}
            />
            <AuthorCard
              name="SHAAM WORX"
              likes={34000}
              downloads={12900}
              picSrc={"https://picsum.photos/100/100?random=" + imgCnt++}
            />
            <AuthorCard
              name="Cube Frames"
              likes={34000}
              downloads={12900}
              picSrc={"https://picsum.photos/100/100?random=" + imgCnt++}
            />
            <AuthorCard
              name="J. T. Semple"
              likes={34000}
              downloads={12900}
              picSrc={"https://picsum.photos/100/100?random=" + imgCnt++}
            />
            <AuthorCard
              name="Ohad Peretz"
              likes={34000}
              downloads={12900}
              picSrc={"https://picsum.photos/100/100?random=" + imgCnt++}
            />
            <AuthorCard
              name="MediaKing"
              likes={34000}
              downloads={12900}
              picSrc={"https://picsum.photos/100/100?random=" + imgCnt++}
            />
            <AuthorCard
              name="Hong Gildong"
              likes={34000}
              downloads={12900}
              picSrc={"https://picsum.photos/100/100?random=" + imgCnt++}
            />
            <AuthorCard
              name="Zodiac"
              likes={34000}
              downloads={12900}
              picSrc={"https://picsum.photos/100/100?random=" + imgCnt++}
            />
          </div>
        </div>
        <div className="container-filters">
          <button className="btn-primary btn-font"> 썸네일 업로드 </button>
          <button className="btn-dropdown btn-font">
            {" "}
            Gamma <MdExpandMore />{" "}
          </button>
          <button className="btn-dropdown btn-font">
            {" "}
            Style <MdExpandMore />{" "}
          </button>
          <button className="btn-dropdown btn-font">
            {" "}
            Color <MdExpandMore />{" "}
          </button>
        </div>
        <div className="body-home">
          <CardItem
            name="Killstreak"
            src={"https://picsum.photos/500/400?random=" + imgCnt++}
            logname="Other"
            author="Cube Frames"
            download={805}
            like={805}
          />
          <CardItem
            name="THRILLER"
            src={"https://picsum.photos/500/400?random=" + imgCnt++}
            logname="DJI D-log"
            author="SHAAM WORX"
            download={805}
            like={805}
          />
          <CardItem
            name="LateAfternoonWanderlust"
            src={"https://picsum.photos/500/400?random=" + imgCnt++}
            logname="Canon Cinestyle"
            author="J. T. Semple"
            download={805}
            like={805}
          />
          <CardItem
            name="CINEMA 2"
            src={"https://picsum.photos/500/400?random=" + imgCnt++}
            logname="Rec 709"
            author="Andy"
            download={805}
            like={805}
          />
          <CardItem
            name="TEAL LOOK FOR REC 709 V2"
            src={"https://picsum.photos/500/400?random=" + imgCnt++}
            logname="Rec 709"
            author="tjtop"
            download={805}
            like={805}
          />
          <CardItem
            name="Hypnosis"
            src={"https://picsum.photos/500/400?random=" + imgCnt++}
            logname="Panasonic V-log"
            author="Cube Frames"
            download={805}
            like={805}
          />
          <CardItem
            name="cinematic green"
            src={"https://picsum.photos/500/400?random=" + imgCnt++}
            logname="Rec 709"
            author="pushpak dsilva"
            download={805}
            like={805}
          />
          <CardItem
            name="BMP4K PEAKY BLİNDERS"
            src={"https://picsum.photos/500/400?random=" + imgCnt++}
            logname="Blackmagic BMD Film 4K"
            author="berat"
            download={805}
            like={805}
          />
          <CardItem
            name="Cine Teal"
            src={"https://picsum.photos/500/400?random=" + imgCnt++}
            logname="Other"
            author="I WANT TO MAKE A FILM PODCAST"
            download={805}
            like={805}
          />
          <CardItem
            name="Relatives | Creative LUT"
            src={"https://picsum.photos/500/400?random=" + imgCnt++}
            logname="Rec.709"
            author="Alexander Barrels"
            download={805}
            like={805}
          />
          <CardItem
            name="True Colors"
            src={"https://picsum.photos/500/400?random=" + imgCnt++}
            logname="Sony S-Log 3"
            author="Ohad Peretz"
            download={805}
            like={805}
          />
          <CardItem
            name="Vintage Warmth"
            src={"https://picsum.photos/500/400?random=" + imgCnt++}
            logname="Sony S-Log 3"
            author="Ohad Peretz"
            download={805}
            like={805}
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
