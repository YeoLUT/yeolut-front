import React from "react";
import styles from "./Footer.module.css";
import classNames from "classnames/bind";

const cs = classNames.bind(styles);

/**
 * @return {HTML}
 */
export default function Footer() {
  return (
    <div className={cs("footer-container")}>
      <div className={cs("content")}>
        <div className={cs("title")}>여럿</div>
        <div className={cs("subtitle")}>2022-1 Meda Project</div>
        <div className={cs("explain")}>
          모든 LUT의 저작권은 각 LUT 파일의 제작자, 제작사에 있습니다.
          <br />
          LUT 사용에 대한 라이센스 문의는 제작자, 제작사에 문의해주세요.
        </div>
        <div className={cs("agreement")}>이용약관 | 개인정보처리방침</div>
      </div>
      <div className={cs("menu")}>
        <ul>
          <li>여럿 소개</li>
          <li>LUT 라이선스</li>
          <li>컨택 문의</li>
        </ul>
      </div>
    </div>
  );
}
