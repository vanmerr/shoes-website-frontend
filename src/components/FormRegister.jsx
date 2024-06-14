import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import style from "@/assets/styles/FormRegister.module.scss";
import Input from "./Input";
import Icons from "@/assets/icons";
import Button from "./Button";
import validatePassword from "@/untils/validatePassword";
import { validatePhone } from "@/untils/validatePhone";
import { validateUserName } from "@/untils/validateUserName";

const cx = classNames.bind(style);

function FormRegister() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAgree, setIsAgree] = useState(false);

  const [errorUsername, setErrorUsername] = useState({
    isError: true,
    error: "",
  });
  const [errorPhone, setErrorPhone] = useState({ isError: true, error: "" });
  const [errorPass, setErrorPass] = useState({ isError: true, error: "" });
  const [errorConfirmPass, setErrorConfirmPass] = useState({
    isError: true,
    error: "",
  });

  const [typePass, setTypePass] = useState(true);
  const [typeConfirmPass, setTypeConfirmPass] = useState(true);

  useEffect(() => {
    const validate = validateUserName(username);
    setErrorUsername({ isError: !validate.isValid, error: validate.message });
  }, [username]);

  useEffect(() => {
    const validate = validatePassword(password);
    setErrorPass({ isError: !validate.result, error: validate.message });
  }, [password]);

  useEffect(() => {
    setErrorConfirmPass((prevState) => ({
      ...prevState,
      isError: confirmPassword !== password,
      error: confirmPassword !== password ? "Not match password" : "",
    }));
  }, [confirmPassword, password]);

  useEffect(() => {
    const validate = validatePhone(phone);
    setErrorPhone({ isError: !validate.isValid, error: validate.message });
  }, [phone]);

  const submit = (e) => {
    e.preventDefault();
    // Add your submission logic here
  };

  return (
    <div className={cx("container")}>
      <div className={cx("heading")}>Sign Up</div>
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
        <Input
          value={phone}
          icon={Icons.phone}
          type="number"
          idInput="phone"
          name="phone"
          placeholder="Phone"
          alertError={errorPhone}
          onChange={(e) => setPhone(e.target.value)}
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
            onChange={(e) => setTypePass(!typePass)}
          ></Input>
        </div>
        <div className={cx("actionConfirmPassword")}>
          <Input
            icon={Icons.shield}
            type={typeConfirmPass ? "password" : "text"}
            idInput="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            alertError={errorConfirmPass}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            name="showConfirmPass"
            idInput="showConfirmPass"
            placeholder_icon={typeConfirmPass ? Icons.eyeSlash : Icons.eye}
            onChange={() => setTypeConfirmPass(!typeConfirmPass)}
          ></Input>
        </div>
        <div className={cx("policy")}>
          <Input
            type="checkbox"
            checked={isAgree}
            onChange={() => setIsAgree(!isAgree)}
            placeholder="I agree with "
            idInput="agree"
          />
          <Button to="/policy" styleOrther={{"fontSize": "1.4rem"}} textLink>
            terms & policies
          </Button>
        </div>
        <div className={cx("btn-submit")}>
          <Button
            type="submit"
            primary={
              !errorUsername.isError &&
              !errorPhone.isError &&
              !errorPass.isError &&
              !errorConfirmPass.isError &&
              isAgree
            }
            disable={
              errorUsername.isError ||
              errorPhone.isError ||
              errorPass.isError ||
              errorConfirmPass.isError ||
              !isAgree
            }
            styleOrther={{ width: "60%" }}
          >
            Sign up
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormRegister;
