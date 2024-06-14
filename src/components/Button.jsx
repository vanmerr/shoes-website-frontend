import React from "react";
import classNames from "classnames/bind";
import style from "@/assets/styles/Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function Button({
  type,
  to,
  href,
  primary,
  product,
  disable,
  children,
  leftIcon,
  rightIcon,
  onClick,
  onlyIcon = false,
  styleOrther,
  onlyImage,
  textLink = false,
  text = false,
  ...ortherProps
}) {
  let Comp = "button";
  let props = {
    onClick,
    type,
    ...ortherProps,
  };

  if (disable) {
    props = Object.fromEntries(
      Object.entries(props).filter(([key]) => !key.startsWith('on'))
    );
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  const classes = cx("wapper", {
    primary,
    disable,
    product,
    onlyIcon,
    onlyImage,
    textLink,
    text,
    href
  });

  return (
    <Comp className={classes} {...props} style = {styleOrther}> 
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      {children && <span className={cx("title")}>{children}</span>}
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
