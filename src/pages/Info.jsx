import classNames from "classnames/bind";
import style from "@/assets/styles/Info.module.scss";
import Button from "@/components/Button";
import Images from "@/assets/images";
import Icons from "@/assets/icons";
import Input from "@/components/Input";

const cx = classNames.bind(style);

function Info() {
  return (
    <div className={cx("wapper")}>
      <div className={cx("container")}>
        <div className={cx("info")}>
          <div className={cx("group-info")}>
            <h2 className={cx("title")}>Tên người dùng</h2>
            <Input
              type="text"
              idInput="name"
              name="name"
              value="Nguyễn Văn Mơ"
              enable={true}
              notMarginBottom
            />
            <Button onlyIcon leftIcon={Icons.edit}></Button>
          </div>
          <div className={cx("group-info")}>
            <h2 className={cx("title")}>Email</h2>
            <Input
              type="text"
              idInput="name"
              name="name"
              value="vanmerr020403@gmail.com"
              enable={true}
              notMarginBottom
            />
            <Button onlyIcon leftIcon={Icons.edit}></Button>
          </div>
          <div className={cx("group-info")}>
            <h2 className={cx("title")}>Số điện thoại</h2>
            <Input
              type="text"
              idInput="name"
              name="name"
              value="0886460385"
              enable={true}
              notMarginBottom
            />
            <Button onlyIcon leftIcon={Icons.edit}></Button>
          </div>
        </div>
        <div className={cx("image")}>
          <img src={Images.avatar} alt="avatar" />
          <div className={cx("edit")}>
            <Input
              idInput="setAvtar"
              name="avatar"
              type="file"
              placeholder={Icons.edit}
            />
          </div>
        </div>
      </div>
      <div className={cx("acction")}>
        <Button>Lưu</Button>
      </div>
    </div>
  );
}

export default Info;
