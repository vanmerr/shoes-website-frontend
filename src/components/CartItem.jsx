import classNames from "classnames/bind";
import style from "@/assets/styles/CartItem.module.scss";
import { useState } from "react";
import Images from "@/assets/images";
import Button from "./Button";
import Icons from "@/assets/icons";
import Input from "./Input";
import fomartMoneyVN from "@/untils/fomartMoneyVN";

const cx = classNames.bind(style);

function CartItem({ product, option }) {
  const [isselect, setSelect] = useState(false);
  const [color, setColor] = useState("#000");
  const [size, setSize] = useState(27);

  const handleDelete = () => {
    const carts = JSON.parse(sessionStorage.getItem("carts"));
    const newCarts = carts.filter(
      (cart) =>
        !(
          cart.productId === option.productId &&
          cart.color === option.color &&
          cart.size === option.size &&
          cart.quantity === option.quantity
        ),
    );
    sessionStorage.setItem("carts", JSON.stringify(newCarts));
    window.location.reload();
  };

  return (
    <div className={cx("wapper")}>
      <div className={cx("select")}>
        <input
          type="checkbox"
          checked={isselect}
          onChange={(e) => setSelect(!isselect)}
        />
      </div>
      <div className={cx("product")}>
        <div className={cx("image")}>
          <img src={Images.product} alt="" />
        </div>
        <div className={cx("option")}>
          <div className={cx("name")}>
            <span>Giày đẹp</span>
          </div>
          <div className={cx("option-select")}>
            <div className={cx("option-color")}>
              <span className={cx("title")}>Màu</span>
              <select
                id="option-color"
                name="color"
                value={color}
                style={{ backgroundColor: color }}
                onChange={(e) => setColor(e.target.value)}
              >
                <option
                  value="#000"
                  style={{ backgroundColor: "#000" }}
                ></option>
                <option
                  value="#423"
                  style={{ backgroundColor: "#423" }}
                ></option>
                <option
                  value="#878"
                  style={{ backgroundColor: "#878" }}
                ></option>
              </select>
            </div>
            <div className={cx("option-size")}>
              <span className={cx("title")}>Size</span>
              <select
                id="option-size"
                name="size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
              </select>
            </div>
            <div className={cx("option-quantity")}>
              <div className={cx("number")}>
                <Button onlyIcon leftIcon={Icons.minus}></Button>
                <Input
                  idInput="quantity"
                  type="number"
                  name="quantity"
                  value={1}
                  min={1}
                  notLabel
                  notMarginBottom
                  notBoxShadow
                  styleOrther={{ width: "6rem", height: "4rem" }}
                />
                <Button onlyIcon leftIcon={Icons.plus}></Button>
              </div>
              <div className={cx("stock")}>
                <span>{`Kho sản phẩm`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cx("prices")}>
        <div className={cx("price")}>{`Giá: ${fomartMoneyVN(20000)}`}</div>
        <div className={cx("total")}>
          {`Thành tiền: ${fomartMoneyVN(40000)}`}
        </div>
      </div>
      <div className={cx("delete")}>
        <Button onlyIcon leftIcon={Icons.trash} onClick={handleDelete}></Button>
      </div>
    </div>
  );
}

export default CartItem;
