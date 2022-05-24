import React from "react";
import CardItem from "./CardItem";

export default {
  title: "CardItem",
  component: CardItem,
};

// 활용예시를 const로 작성
export const Default = () => (
  <CardItem name="Sample" src="https://placeimg.com/300/200" />
);
