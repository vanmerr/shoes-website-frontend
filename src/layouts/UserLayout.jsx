import React, { useState } from "react";
import classNames from "classnames/bind";
import style from "@/assets/styles/UserLayout.module.scss";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Icons from "@/assets/icons";
import { logout } from "@/untils/logout";
import Images from "@/assets/images";


const cx = classNames.bind(style);

function UserLayout({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // const {loading, error, result} = getAllProducts(0);

  // if (loading) return <Loading />;

  const navLinks = [
    { icon: Icons.user, to: "/account", text: "Hồ sơ", action: true },
    {
      icon: Icons.address,
      to: "/account/address",
      text: "Địa chỉ",
      action: true,
    },
    {
      icon: Icons.bank,
      to: "/account/method-pay",
      text: "Phương thức thanh toán",
      action: true,
    },
    { icon: Icons.ship, to: "/account/history-order", text: "Đơn hàng" },
    {
      icon: Icons.key,
      to: "/account/change-password",
      text: "Thay đổi mật khẩu",
    },
  ];

  // if(loading) return <Loading/>;
  // else if(error) return <div>Error: {error.message}</div>;
  // else
  return (
    <div className={cx("wapper")}>
      <Header />
      <div className={cx("container")}>
        <div className={cx("navbar")}>
          <div className={cx("info")}>
            <img
              src={Images.avatar}
              alt="User Avatar"
              className={cx("avatar")}
            />
            <span className={cx("name")}>Văn Mơ</span>
          </div>
          <ul className={cx("nav-links")}>
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={cx("nav-link", { active: index === activeIndex })}
                onClick={() => setActiveIndex(index)}
              >
                <Button
                  styleOrther={{
                    padding: "2rem 1rem",
                    width: "100%",
                    justifyContent: "start",
                  }}
                  text
                  leftIcon={link.icon}
                  to={link.to}
                >
                  {link.text}
                </Button>
              </li>
            ))}
          </ul>
          <div className={cx("logout")}>
            <Button primary onClick={() => logout()}>
              <span style={{ marginRight: ".5rem" }}>{Icons.logout}</span>
              Đăng xuất
            </Button>
          </div>
        </div>
        <div className={cx("main")}>
          {navLinks[activeIndex].action && (
            <div className={cx("action")}>
              <span>{navLinks[activeIndex].text}</span>
            </div>
          )}
          {/* {loading && <Loading />} */}
          {children}
        </div>
      </div>
    </div>
  );
}

export default UserLayout;
