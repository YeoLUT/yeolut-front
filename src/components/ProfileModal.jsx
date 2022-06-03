import React from "react";
import PropTypes from "prop-types";
import styles from "./ProfileModal.module.css";
import classNames from "classnames/bind";

const cs = classNames.bind(styles);

ProfileModal.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  img: PropTypes.String,
};
/**
 * @param {props} props
 * @return {HTML}
 */
export default function ProfileModal(props) {
  return (
    <div className={cs("pm-container", "font-normal")}>
      <div className={cs("pm-profile")}>
        <div className={cs("pm-profile-pic")}>
          <img src={props.img} />
        </div>
        <div className={cs("pm-author")}>
          <div className={cs("author-name")}>Author Name</div>
          <div className={cs("author-email")}>example@example.com</div>
        </div>
      </div>
      <div className={cs("pm-menu1")}>
        <ul>
          <li>여럿 프로필</li>
          <li>설정</li>
          <li>도움말</li>
        </ul>
      </div>
      <div className={cs("pm-menu2")}>
        <span>로그아웃</span>
      </div>
    </div>
  );
}
