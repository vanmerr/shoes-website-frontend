import Slider from "@/components/Slider";
import classNames from "classnames/bind";
import style from "@/assets/styles/Home.module.scss";
import Products from "@/components/Products";
import { useSelector } from "react-redux";
const cx = classNames.bind(style);

function Home() {
  const products = useSelector((state) => state.products.data);

  return (
    <div className={cx("wapper")}>
      <div className={cx("slider")}>
        <Slider />
      </div>
      <div className={cx("flash-sale")}>
        <Products flashSale products={products} />
      </div>
      <div className={cx("will-likely")}>
        <Products normal products={products} />
      </div>
    </div>
  );
}

export default Home;
