import React from "react";
import classNames from "classnames/bind";
import style from "@/assets/styles/Navbar.module.scss";
import Button from "./Button";
import Icons from "@/assets/icons";
import { useSelector } from "react-redux";
const cx = classNames.bind(style);

function Navbar() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);


  return (
    <ul className={cx("wapper")}>
      <li>
        <Button text to="/" leftIcon={Icons.home}>
          Home
        </Button>
      </li>
      <li>
        <Button text to="/notification" leftIcon={Icons.bell}>
          Notification
        </Button>
      </li>
      <li>
        {isAuthenticated ? (
          <Button text to="/account" leftIcon={Icons.user}>
            Account
          </Button>
        ) : (
          <Button primary to="/authen">
            Sign in
          </Button>
        )}
      </li>
    </ul>
  );
}

export default Navbar;
