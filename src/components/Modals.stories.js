import React from "react";
import { ModalButton, ModalItem, LoadingModal } from "./Modals";
import {
  gammaExample,
  styleExample,
  colorExample,
} from "../scripts/demoContents";

export default {
  title: "Filter buttons",
  component: ModalButton,
  subcomponents: { ModalItem, LoadingModal },
};

export const Gamma = () => (
  <ModalButton name="Gamma">
    <ModalItem items={gammaExample} />
  </ModalButton>
);
export const Style = () => (
  <ModalButton name="Style">
    <ModalItem items={styleExample} />
  </ModalButton>
);
export const Color = () => (
  <ModalButton name="Color">
    <ModalItem items={colorExample} />
  </ModalButton>
);
export const Loading = () => (
  <div>
    <LoadingModal size={30} />
  </div>
);

// Gamma.story = {
//   name: "Skleton",
//   parameters: {},
// };
