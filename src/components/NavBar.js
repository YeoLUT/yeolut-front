import React from "react";
import styles from "./NavBar.module.css";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

const cs = classNames.bind(styles);
NavBar.propTypes = {
  status: PropTypes.number,
};

/**
 * @param {props} props
 * @return {HTML}
 */
function NavBar(props) {
  return (
    <div className={cs("nav-container")}>
      <div className={cs("nav-logo")}>
        <img src="logo.svg" />
      </div>
      <div className={cs("menu")}>
        <div
          className={cs("menu-popular", props.status == 1 ? "selected" : "")}
        >
          많이 찾는
        </div>
        <div className={cs("menu-search", props.status == 2 ? "selected" : "")}>
          탐색
        </div>
        <div className={cs("menu-upload", props.status == 3 ? "selected" : "")}>
          LUT 업로드
        </div>
        <div
          className={cs("menu-profile", props.status == 4 ? "selected" : "")}
        >
          프로필
        </div>
      </div>
    </div>
  );
}
export default NavBar;
