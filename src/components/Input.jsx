import React from "react";
import classNames from "classnames/bind";
import style from "@/assets/styles/Input.module.scss";
import Icons from "@/assets/icons";

const cx = classNames.bind(style);

function Input({
  idInput,
  type,
  placeholder,
  value,
  icon,
  name,
  notMarginBottom,
  notLabel,
  notBoxShadow,
  onChange,
  placeholder_icon,
  iconcheck,
  styleOrther,
  alertError = { isError: false, error: "" },
  ...ortherProps
}) {
  let classes = cx("wapper", { notMarginBottom, notBoxShadow});
  if (type === "number") {
    classes = cx("number", { notMarginBottom, notBoxShadow});
  } else if (type === "checkbox") {
    classes = cx("checkbox", { iconcheck });
  }

  const handleOnChange = (e) => {
    let inputValue = e.target.value;
    if (inputValue.startsWith(" ")) {
      inputValue = inputValue.trimStart();
    }
    onChange({ ...e, target: { ...e.target, value: inputValue } });
  };

  return (
    <div className={classes} style={styleOrther}>
      {icon && <div className={cx("icon")}>{icon}</div>}
      <div className={cx("group")}>
        <input
          id={idInput}
          value={value}
          type={type}
          placeholder=""
          name={name}
          required
          onChange={handleOnChange}
          {...ortherProps}
        />
        {(placeholder || placeholder_icon) && (
          <label className={notLabel ? cx("notLabel") : ""} htmlFor={idInput}>{placeholder || placeholder_icon}</label>
        )}
        {alertError.isError && (
          <div className={cx("alertError")}>
            <div className={cx("icon-warning")}>{Icons.warning}</div>
            <span>{alertError.error}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Input;
