import React from "react";
import classNames from "classnames/bind";
import style from "@/assets/styles/Footer.module.scss";
import Button from "./Button";
import Icons from "@/assets/icons";

const cx = classNames.bind(style);

function Footer() {
  return (
    <footer className={cx("wapper")}>
      <ul className={cx("container")}>
        <li>
          <span className={cx("heading")}>CUSTOMER CARE</span>
          <ul className={cx("content")}>
            <li>
              <Button href="https://help.shopee.vn/portal/4" target="_blank">
                Help Center
              </Button>
            </li>
            <li>
              <Button
                href="https://help.shopee.vn/portal/4/article/79180-[Th%c3%a0nh-vi%c3%aan-m%e1%bb%9bi]-L%c3%a0m-sao-%c4%91%e1%bb%83-mua-h%c3%a0ng-%2F-%c4%91%e1%ba%b7t-h%c3%a0ng-tr%c3%aan-%e1%bb%a9ng-d%e1%bb%a5ng-Shopee%3F"
                target="_blank"
              >
                Shopping Guide
              </Button>
            </li>
            <li>
              <Button
                href="https://help.shopee.vn/portal/4/category/59-Thanh-To%C3%A1n/708-V%C3%AD-ShopeePay?page=1"
                target="_blank"
              >
                Pay
              </Button>
            </li>
            <li>
              <Button
                href="https://help.shopee.vn/portal/4/article/79258-Tr%e1%ba%a3-h%c3%a0ng%2FHo%c3%a0n-ti%e1%bb%81n]-C%e1%ba%a9m-nang-Tr%e1%ba%a3-h%c3%a0ng-ho%c3%a0n-ti%e1%bb%81n"
                target="_blank"
              >
                Return & Refund
              </Button>
            </li>
            <li>
              <Button
                href="https://help.shopee.vn/portal/4/article/79046-[Quy-%c4%91%e1%bb%8bnh]-Ch%c3%adnh-s%c3%a1ch-b%e1%ba%a3o-h%c3%a0nh-cho-s%e1%ba%a3n-ph%e1%ba%a9m-mua-t%e1%ba%a1i-Shopee"
                target="_blank"
              >
                Warranty Policy
              </Button>
            </li>
          </ul>
        </li>
        <li>
          <span className={cx("heading")}>ABOUT</span>
          <ul className={cx("content")}>
            <li>
              <Button href="https://careers.shopee.vn/about" target="_blank">
                Introduce
              </Button>
            </li>
            <li>
              <Button
                href="https://help.shopee.vn/portal/4/article/77242"
                target="_blank"
              >
                Privacy Policy
              </Button>
            </li>
            <li>
              <Button
                href="https://help.shopee.vn/portal/4/article/77244"
                target="_blank"
              >
                Terms Of Use
              </Button>
            </li>
          </ul>
        </li>
        <li className={cx("pay-ship")}>
          <span className={cx("heading")}>PAYMENT</span>
          <ul className={cx("content")}></ul>
          <span className={cx("heading")}>SHIPPING</span>
          <ul className={cx("content")}></ul>
        </li>
        <li>
          <span className={cx("heading")}>FLOWING</span>
          <ul className={cx("content")}>
            <li><Button leftIcon={Icons.FB} href='/facebook'>Facebook</Button></li>
            <li><Button leftIcon={Icons.IG} href='/facebook'>Instagram</Button></li>
            <li><Button leftIcon={Icons.LK} href='/facebook'>Linked In</Button></li>
          </ul>
        </li>
      </ul>
      <div className={cx("copy-right")}>
        <span className={cx("icon")}>{Icons.copyRight}</span>
        <span className={cx("text")}>2024. Nguyen Van Mo</span>
      </div>
    </footer>
  );
}

export default Footer;
