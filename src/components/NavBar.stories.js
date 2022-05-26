import React from "react";
import NavBar from "./NavBar";

export default {
  title: "Navigation bar",
  component: NavBar,
};

export const Popular = () => <NavBar status={1} />;
export const Search = () => <NavBar status={2} />;
export const Upload = () => <NavBar status={3} />;
export const Profile = () => <NavBar status={4} />;

Popular.story = {
  parameters: {
    zeplinLink: [
      {
        name: "NavBar-popular",
        link: "zpl://components?pid=62875620de8426106a4f4785&coids=628c7c8de1264abd266cfb6e",
      },
    ],
  },
};
Search.story = {
  name: "Search",
  parameters: {
    zeplinLink: [
      {
        link: "zpl://components?coids=628c7c8c966153b94353642a&pid=62875620de8426106a4f4785",
      },
    ],
  },
};
Upload.story = {
  name: "Upload",
  parameters: {
    zeplinLink: [
      {
        link: "zpl://components?pid=62875620de8426106a4f4785&coids=628c7c8c38dc2fbe84fc72b4",
      },
    ],
  },
};
