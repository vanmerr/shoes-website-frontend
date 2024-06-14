import classNames from "classnames/bind";
import style from "@/assets/styles/Alert.module.scss";

const cx = classNames.bind(style);

function Alert({ type, message }) {
  return <div className={cx("wapper")}> </div>;
}

export default Alert;
