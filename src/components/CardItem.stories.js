import React from "react";
import CardItem from "./CardItem";

export default {
  title: "CardItem",
  component: CardItem,
};

// 활용예시를 const로 작성
export const Default = () => (
  <CardItem
    name="title"
    logname="log name"
    src="https://picsum.photos/500/400?random=0"
    author="author"
    like={1}
    download={1}
  />
);

Default.story = {
  name: "Default",
  parameters: {
    zeplinLink: [
      {
        name: "CardItem-sample",
        link: "zpl://components?pid=62875620de8426106a4f4785&coids=628c7c55b76173bba90c2598",
      },
    ],
  },
};
