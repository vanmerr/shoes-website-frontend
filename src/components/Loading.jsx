import React from "react";
import classNames from "classnames/bind";
import style from "@/assets/styles/Loading.module.scss";

const cx = classNames.bind(style);

function Loading() {
  return (
    <div className={cx("wapper")}>
      <div className={cx('loader')}></div>
    </div>
  );
}

export default Loading;
