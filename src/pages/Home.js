import React from "react";
import CardItem from "./CardItem";
import NavBar from "./NavBar";
import AuthorCard from "./AuthorCard";
import "./Home.css";

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
            <AuthorCard name="Author's Name" likes={34000} downloads={12900} />
            <AuthorCard name="Author's Name" likes={34000} downloads={12900} />
            <AuthorCard name="Author's Name" likes={34000} downloads={12900} />
            <AuthorCard name="Author's Name" likes={34000} downloads={12900} />
            <AuthorCard name="Author's Name" likes={34000} downloads={12900} />
            <AuthorCard name="Author's Name" likes={34000} downloads={12900} />
            <AuthorCard name="Author's Name" likes={34000} downloads={12900} />
          </div>
        </div>
        <div className="body-home">
          <CardItem
            name="Thumbnail1"
            src={"https://picsum.photos/500/400?random=" + imgCnt++}
            logname="log name"
            author="author name"
            download={1}
            like={1}
          />
          <CardItem
            name="Thumbnail1"
            src={"https://picsum.photos/500/400?random=" + imgCnt++}
            logname="log name"
            author="author name"
            download={1}
            like={1}
          />
          <CardItem
            name="Thumbnail1"
            src={"https://picsum.photos/500/400?random=" + imgCnt++}
            logname="log name"
            author="author name"
            download={1}
            like={1}
          />
          <CardItem
            name="Thumbnail1"
            src={"https://picsum.photos/500/400?random=" + imgCnt++}
            logname="log name"
            author="author name"
            download={1}
            like={1}
          />
          <CardItem
            name="Thumbnail1"
            src={"https://picsum.photos/500/400?random=" + imgCnt++}
            logname="log name"
            author="author name"
            download={1}
            like={1}
          />
          <CardItem
            name="Thumbnail1"
            src={"https://picsum.photos/500/400?random=" + imgCnt++}
            logname="log name"
            author="author name"
            download={1}
            like={1}
          />
        </div>
      </main>
      <footer className="footer-home">Sample footer</footer>
    </div>
  );
}

export default Home;
