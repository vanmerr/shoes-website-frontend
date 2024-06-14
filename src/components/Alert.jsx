import classNames from "classnames/bind";
import style from "@/assets/styles/Alert.module.scss";
import Icons from "@/assets/icons";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { offAlert } from "@/redux/toolkits/alertSlice";

const cx = classNames.bind(style);

function Alert({ type, message }) {
  const props = {
    success: type === "success",
    error: type === "error",
    warning: type === "warning",
  };

  const dispatch = useDispatch();

  
  return (
    <div className={cx("wapper", { ...props })}>
      <div className={cx("icon")}>
        {(props.success && Icons.success) ||
          (props.warning && Icons.warning) ||
          (props.error && Icons.error)}
      </div>
      <div className={cx("message")}>{message}</div>
      <Button text leftIcon={Icons.close} onClick = { () => dispatch(offAlert())}></Button>
    </div>
  );
}

export default Alert;
