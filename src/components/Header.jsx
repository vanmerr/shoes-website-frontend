import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "@/assets/styles/Header.module.scss";
import Search from "./Search";
import Images from "@/assets/images";
import Navbar from "./Navbar";
import Icons from "@/assets/icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        // You can adjust this value as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={cx("wapper", { scrolled })}>
      <div className={cx("logo")}>
        <img src={Images.logo} alt="" />
      </div>
      <div className={cx("search")}>
        <Search />
      </div>
      <div className={cx("nav")}>
        <Navbar />
      </div>
      <div className={cx("cart")}>
        <Link to="/cart">
          {Icons.cart}
          <span className={cx("quantity")}>0</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
