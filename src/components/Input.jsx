import { useState } from "react";
import classNames from "classnames/bind";
import style from "@/assets/styles/Info.module.scss";
import Button from "@/components/Button";
import Images from "@/assets/images";
import Icons from "@/assets/icons";
import Input from "@/components/Input";

const cx = classNames.bind(style);

const InfoGroup = ({ title, value, onChange, isEditable, onEdit }) => (
  <div className={cx("group-info")}>
    <h2 className={cx("title")}>{title}</h2>
    <Input
      type="text"
      value={value}
      onChange={onChange}
      readOnly={!isEditable}
      notMarginBottom
    />
    <Button onlyIcon leftIcon={Icons.edit} onClick={onEdit}></Button>
  </div>
);

function Info() {
  const [name, setName] = useState("Nguyễn Văn Mơ");
  const [email, setEmail] = useState("vanmerr020403@gmail.com");
  const [phone, setPhone] = useState("0886460385");

  const [isNameEditable, setIsNameEditable] = useState(false);
  const [isEmailEditable, setIsEmailEditable] = useState(false);
  const [isPhoneEditable, setIsPhoneEditable] = useState(false);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("info")}>
          <InfoGroup
            title="Tên người dùng"
            value={name}
            onChange={(e) => setName(e.target.value)}
            isEditable={isNameEditable}
            onEdit={() => setIsNameEditable(!isNameEditable)}
          />
          <InfoGroup
            title="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isEditable={isEmailEditable}
            onEdit={() => setIsEmailEditable(!isEmailEditable)}
          />
          <InfoGroup
            title="Số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            isEditable={isPhoneEditable}
            onEdit={() => setIsPhoneEditable(!isPhoneEditable)}
          />
        </div>
        <div className={cx("image")}>
          <img src={Images.avatar} alt="avatar" />
          <div className={cx("edit")}>
            <Input
              idInput="setAvatar"
              name="avatar"
              type="file"
              placeholder={Icons.edit}
            />
          </div>
        </div>
      </div>
      <div className={cx("action")}>
        <Button>Lưu</Button>
      </div>
    </div>
  );
}

export default Info;
