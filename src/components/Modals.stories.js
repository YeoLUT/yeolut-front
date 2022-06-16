import React from "react";
import { ModalButton, ModalItem } from "./Modals";
import {
  gammaExample,
  styleExample,
  colorExample,
} from "../scripts/demoContents";

export default {
  title: "Filter buttons",
  component: ModalButton,
  subcomponents: { ModalItem },
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

// Gamma.story = {
//   name: "Skleton",
//   parameters: {},
// };
