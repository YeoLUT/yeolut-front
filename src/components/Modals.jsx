import React, { useState, useRef } from "react";
import styles from "./Modals.module.css";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { MdExpandMore } from "react-icons/md";
import { FlagSpinner } from "react-spinners-kit";
const cs = classNames.bind(styles);

ModalItem.propTypes = {
  items: PropTypes.array,
};
/**
 * @param {*} props
 * @return {HTML}
 */
function ModalItem({ items }) {
  return (
    <div className={cs("container-modal", "items")}>
      <ul>
        {items.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

ModalButton.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
};
/**
 * @param {*} props
 * @return {HTML}
 */
function ModalButton({ name, children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleGammaModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className={cs("container-modal-button")}>
      <button
        className={cs(
          "btn",
          isModalOpen ? "btn-active" : "btn-disabled",
          "btn-font",
        )}
        onClick={toggleGammaModal}
      >
        {name} <MdExpandMore />
      </button>
      {isModalOpen && children}
    </div>
  );
}

LoadingModal.propTypes = {
  size: PropTypes.number,
};
/**
 * @param {*} props
 * @return {HTML}
 */
function LoadingModal({ size }) {
  return (
    <div className={cs("loading-background")}>
      <div className={cs("conatiner-modal", "loading")}>
        <FlagSpinner size={size} color="#e87c2f" />
        변환 중...
      </div>
    </div>
  );
}

export { ModalButton, ModalItem, LoadingModal };
