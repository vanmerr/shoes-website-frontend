import React from "react";
import classNames from "classnames/bind";
import style from "@/assets/styles/DefaultLayout.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wapper")}>
      <Header />
      <div className={cx("container")}>{children}</div>
      <Footer/>
    </div>
  );
}

export default DefaultLayout;
