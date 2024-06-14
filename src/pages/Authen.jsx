import React from "react";
import FormLogin from "@/components/FormLogin";
import classNames from "classnames/bind";
import style from "@/assets/styles/Authen.module.scss";
import { useState } from "react";
import FormRegiter from "@/components/FormRegister";

const cx = classNames.bind(style);
function Authen() {
  const [isFormLogin, setIsFormLogin] = useState(true);

  const handleToggleForm = () => {
    setIsFormLogin(!isFormLogin);
  };

  return (
    <div className={cx("wapper")}>
      {/* <div className={cx("banner")}></div> */}
      <div className={cx("forms")}>
        {isFormLogin ? <FormLogin /> : <FormRegiter/>}
        <p onClick={handleToggleForm}>
          {isFormLogin
            ? "Don't have an account?"
            : "Already have an account?"}
        </p>
      </div>
    </div>
  );
}

export default Authen;
