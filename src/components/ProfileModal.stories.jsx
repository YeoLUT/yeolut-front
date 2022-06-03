import React from "react";
import ProfileModal from "./ProfileModal";

export default {
  title: "Profile modal",
  component: ProfileModal,
};

// 활용예시를 const로 작성
export const Default = () => (
  <ProfileModal name="Author's Name" likes={34000} downloads={12900} />
);

Default.story = {
  name: "Default",
  parameters: {
    zeplinLink: [
      {
        name: "ProfileModal-sample",
        link: "zpl://components?coids=628c7c8b47ed77bb418a24e5&pid=62875620de8426106a4f4785",
      },
    ],
  },
};
