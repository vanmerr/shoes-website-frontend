import classNames from "classnames/bind";
import style from "@/assets/styles/Cart.module.scss";
import { useSelector } from "react-redux";
import CartItem from "@/components/CartItem";
import Button from "@/components/Button";
import Icons from "@/assets/icons";
import Input from "@/components/Input";

const cx = classNames.bind(style);
function Cart() {
  const products = useSelector((state) => state.products.data);
  //   const carts = [];
  console.log(products);
  const cartsSession = JSON.parse(sessionStorage.getItem("carts")) || [];
  //   const uniqueIds = [...new Set(cartsSession.map((item) => item.productId))];

  return (
    <div className={cx("wapper")}>
      <div className={cx("container")}>
        {cartsSession.map((cart, index) => (
          <CartItem key={index} option={cart} />
        ))}
      </div>
      <div className={cx("footer")}>
        <div className={cx("select")}>
          <Input idInput="selectAll" type="checkbox" placeholder="Chọn tất cả"/>
        </div>
        <div className={cx('total')}>
          <span>Tổng tiền: 200000đ</span>
        </div>
        <div className={cx("actions")}>
          <Button primary styleOrther={{display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "5rem"
          }}>
            <span>Mua hàng</span>
            <span style={{margin: "0 1rem"}}>{Icons.pay}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
