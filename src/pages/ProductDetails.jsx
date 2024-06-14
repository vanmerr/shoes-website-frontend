import classNames from "classnames/bind";
import style from "@/assets/styles/ProductDetails.module.scss";
import Products from "@/components/Products";
import { useSelector } from "react-redux";
import Product from "@/components/Product";
import { useParams } from "react-router-dom";
import Footer from "@/components/Footer";

const cx = classNames.bind(style);

function ProductDetails() {
  const { id } = useParams();
  const products = useSelector((state) => state.products.data);
  const product = products.find((product) => product.product_id === id);
  return (
    <div className={cx("wapper")}>
      <div className={cx("container")}>
        <Product productDetails product={product} />
      </div>
      <div className={cx("suggest")}>
        <Products normal textDetail products={products} />
      </div>
    </div>
  );
}

export default ProductDetails;
