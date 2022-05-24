import React, { Component } from "react";
import CardItem from "./CardItem";
import PropTypes from "prop-types";

const publicImgSrc = (src) => {
  return process.env.PUBLIC_URL + src;
};

// eslint-disable-next-line require-jsdoc
function Home() {
  let imgCnt = 0;
  return (
    <div className="container">
      <header className="header">여럿</header>
      <main>
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
      </main>
      <footer></footer>
    </div>
  );
}

export default Home;
