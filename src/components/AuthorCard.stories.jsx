import React from "react";
import AuthorCard from "./AuthorCard";

export default {
  title: "Author Profile card",
  component: AuthorCard,
};

// 활용예시를 const로 작성
export const Default = () => (
  <AuthorCard name="Author's Name" likes={34000} downloads={12900} />
);

Default.story = {
  name: "Default",
  parameters: {
    zeplinLink: [
      {
        name: "AuthorCard-sample",
        link: "zpl://components?coids=628c7c8cbe9ea5ba71558f36&pid=62875620de8426106a4f4785",
      },
    ],
  },
};
