import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "@/assets/styles/FormLogin.module.scss";
import Input from "./Input";
import Icons from "@/assets/icons";
import Button from "./Button";
import validatePassword from "@/untils/validatePassword";
import Images from "@/assets/images";
import { validateUserName } from "@/untils/validateUserName";
import { login } from "@/redux/toolkits/authSlice";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const cx = classNames.bind(style);

function FormLogin() {
  const [errorPass, setErrorPass] = useState({ isError: true, error: "" });
  const [errorUsername, setErrorUsername] = useState({
    isError: true,
    error: "",
  });
  const [typePass, setTypePass] = useState(true);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  // const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    // const body = {
    //   username,
    //   password,
    // }
    // setLoading(true);
    // const resultLogin = await postApi('/auth0/login', body);
    // setLoading(false);
    localStorage.setItem("token", username);
    dispatch(login("user"));
    navigate(location.state || "/");
  };

  useEffect(() => {
    const resultValidaUser = validateUserName(username);
    const resultValidatePass = validatePassword(password);
    setErrorPass({
      isError: !resultValidatePass.result,
      error: resultValidatePass.message,
    });
    setErrorUsername({
      isError: !resultValidaUser.isValid,
      error: resultValidaUser.message,
    });
  }, [username, password]);

  return (
    <div className={cx("container")}>
      <div className={cx("heading")}>Sign In</div>
      <form onSubmit={submit}>
        <Input
          icon={Icons.user}
          type="text"
          idInput="username"
          name="username"
          placeholder="User name"
          value={username}
          alertError={errorUsername}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className={cx("actionPassword")}>
          <Input
            icon={Icons.lock}
            type={typePass ? "password" : "text"}
            idInput="password"
            name="password"
            placeholder="Password"
            value={password}
            alertError={errorPass}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            styleOrther={{
              position: "absolute",
              right: "-1rem",
              top: "50%",
              transform: "translate(-1rem, -50%)",
            }}
            type="checkbox"
            iconcheck
            name="showPass"
            idInput="showPass"
            placeholder_icon={typePass ? Icons.eyeSlash : Icons.eye}
            onChange={() => setTypePass(!typePass)}
          ></Input>
        </div>
        <div className={cx("actionForgotPass")}>
          <Button to="/forgot-password" textLink>
            Forgot password ?
          </Button>
        </div>
        <div className={cx("btn-submit")}>
          <Button
            type="submit"
            primary={!errorPass.isError && !errorUsername.isError}
            disable={errorPass.isError || errorUsername.isError}
            styleOrther={{ width: "60%" }}
            onClick={submit}
          >
            {/* {loading && "Sign in ..."}
            {!loading && "Sign in"} */}
          </Button>
        </div>
      </form>
      <div className={cx("social-account-container")}>
        <span className={cx("title")}>Or Sign in with</span>
        <div className={cx("social-account-item")}>
          <Button onlyImage>{Images.logoGG}</Button>
          <Button onlyImage>{Images.logoFB}</Button>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
