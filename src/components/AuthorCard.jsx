import React from "react";
import PropTypes from "prop-types";
import styles from "./AuthorCard.module.css";
import classNames from "classnames/bind";
import { FiThumbsUp, FiDownload } from "react-icons/fi";

const cs = classNames.bind(styles);

AuthorCard.propTypes = {
  name: PropTypes.string,
  picSrc: PropTypes.string,
  id: PropTypes.number,
  likes: PropTypes.number,
  downloads: PropTypes.number,
};
/**
 * @param {props} props
 * @return {HTML}
 */
export default function AuthorCard(props) {
  return (
    <div className={cs("author-container")}>
      <div className={cs("author-pic")}>
        <img crossOrigin="" src={props.picSrc} />
      </div>
      <div className={cs("author-name")}> {props.name} </div>
      <div className={cs("author-statics")}>
        <span>
          <FiThumbsUp /> {" " + props.likes}
        </span>
        <span>
          <FiDownload />
          {" " + props.downloads}
        </span>
      </div>
      <button className={cs("button-profile")}>프로필</button>
    </div>
  );
}
