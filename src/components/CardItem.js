import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CardItem.module.css";
import classNames from "classnames/bind";
import { FiThumbsUp, FiDownload } from "react-icons/fi";
import { propTypes } from "react-bootstrap/esm/Image";

const cs = classNames.bind(styles);
CardItem.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  author: PropTypes.string,
  like: propTypes.number,
  download: propTypes.number,
  logname: propTypes.string,
};

/**
 * Card component
 * @param {props} props
 * @return {HTML}
 */
function CardItem(props) {
  return (
    <div className={cs("card-container")}>
      <div className={cs("card-thumbnail")}>
        <img crossOrigin="" src={props.src} alt={props.name}></img>
      </div>
      <div className={cs("card-content")}>
        <div className={cs("card-content-titlebar")}>
          <span className={cs("card-content", "title")}>{props.name}</span>
          <span className={cs("card-content", "logname")}>{props.logname}</span>
        </div>
        <hr className={cs("card-hr")}></hr>
        <div className={cs("card-extra")}>
          <div className={cs("card-extra", "author")}>{props.author}</div>
          <div className={cs("card-extra", "statics")}>
            <span className={cs("thumb", "icons")}>
              <FiThumbsUp /> {props.like}
            </span>
            <span className={cs("download", "icons")}>
              <FiDownload /> {props.download}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardItem;
