import React, { useCallback, useState } from "react";
import classNames from "classnames/bind";
import style from "@/assets/styles/Product.module.scss";
import Button from "./Button";
import fomartMoneyVN from "@/untils/fomartMoneyVN";
import { useNavigate } from "react-router-dom";
import Icons from "@/assets/icons";
import Input from "./Input";
import { debounce } from "lodash";

const cx = classNames.bind(style);
function Product({
  product,
  normal = false,
  flashSale = false,
  productDetails = false,
}) {
  let classes = cx("wapper");
  if (flashSale) {
    classes = cx("wapper", { flashSale });
  } else if (productDetails) {
    classes = cx("wapper", { productDetails });
  } else if (normal) {
    classes = cx("wapper", { normal });
  }

  const navigate = useNavigate();

  const findFirstAvailableSize = (sizes) => {
    return sizes.find((size) => size.stock_quantity > 0) || sizes[0];
  };

  const [selectedColor, setSelectedColor] = useState(product.options[0].color);
  const [sizes, setSizes] = useState(product.options[0].sizes);
  const initialSize = findFirstAvailableSize(sizes);
  const [selectedSize, setSelectedSize] = useState(initialSize.size);
  const [stockQuantity, setStockQuantity] = useState(
    initialSize.stock_quantity,
  );
  const [quantity, setQuantity] = useState(1);

  const handleColorChange = (color, sizes) => {
    setSelectedColor(color);
    setSizes(sizes);
    const firstAvailableSize = findFirstAvailableSize(sizes);
    setSelectedSize(firstAvailableSize.size);
    setStockQuantity(firstAvailableSize.stock_quantity);
    setQuantity(1); // reset quantity when color changes
  };

  const handleSizeChange = (size, stock) => {
    setSelectedSize(size);
    setStockQuantity(stock);
    setQuantity(1); // reset quantity when size changes
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    setQuantity(value);
    debounceUpdateQuantity(value);
  };

  const handleAddToCart = () => {
    const cartItem = {
      productId: product.product_id,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity > stockQuantity ? stockQuantity : quantity,
    };

    // Get the current cart from session storage
    const currentCart = JSON.parse(sessionStorage.getItem("carts")) || [];

    // Check if the product is already in the cart
    const existingItemIndex = currentCart.findIndex(
      (item) =>
        item.productId === cartItem.productId &&
        item.color === cartItem.color &&
        item.size === cartItem.size,
    );

    if (existingItemIndex !== -1) {
      // If item exists, update the quantity
      currentCart[existingItemIndex].quantity += quantity;
      if (currentCart[existingItemIndex].quantity > stockQuantity) {
        currentCart[existingItemIndex].quantity = stockQuantity;
      }
    } else {
      currentCart.push(cartItem);
    }

    // Save the updated cart back to session storage
    sessionStorage.setItem("carts", JSON.stringify(currentCart));

  };

  const debounceUpdateQuantity = useCallback(
    debounce((value) => {
      if (value < 1) {
        setQuantity(1);
      } else if (value > stockQuantity) {
        setQuantity(stockQuantity);
      }
    }, 500),
    [stockQuantity],
  );

  const handleClickProduct = () => {
    if (normal || flashSale) {
      navigate(`/product-detail/${product.product_id}`);
    }
    return;
  };

  const handleMinus = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handlePlus = () => {
    if (quantity < stockQuantity) setQuantity(quantity + 1);
  };

  return (
    <div className={classes}>
      <div className={cx("container")} onClick={handleClickProduct}>
        <div className={cx("images")}>
          <div className={cx("main")}>
            <img src={product.options[0].image_url} alt="" />
          </div>
          <div
            className={cx("footer")}
            style={{ display: productDetails ? "block" : "none" }}
          ></div>
        </div>
        <div className={cx("detail")}>
          <div
            style={{
              display: normal || productDetails ? "-webkit-box" : "none",
            }}
            className={cx("name")}
          >
            <span>{product.name}</span>
          </div>
          <div className={cx("prices")}>
            <span
              style={{
                display:
                  (productDetails || normal) &&
                  product.price_old > product.price_new
                    ? "block"
                    : "none",
              }}
              className={cx("price-old")}
            >
              {fomartMoneyVN(product.price_old)}
            </span>
            <span className={cx("price-new")}>
              {fomartMoneyVN(product.price_new)}
            </span>
          </div>
          {productDetails && (
            <div className={cx("colors")}>
              <div className={cx("title")}>
                <span>Màu sắc</span>
              </div>
              <div className={cx("size-body")}>
                <div className={cx("size-content")}>
                  {product.options.map((option, index) => (
                    <div
                      onClick={() =>
                        handleColorChange(option.color, option.sizes)
                      }
                      key={index}
                      className={cx("color")}
                      style={{ backgroundColor: option.color }}
                    >
                      {selectedColor === option.color && <span></span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {productDetails && (
            <div className={cx("sizes")}>
              <div className={cx("title")}>
                <span>Kích thước</span>
              </div>
              <div className={cx("size-body")}>
                <div className={cx("size-content")}>
                  {sizes.map((data, index) => {
                    if (data.stock_quantity > 0)
                      return (
                        <div
                          key={index}
                          className={cx("size", {
                            selected: data.size === selectedSize,
                          })}
                          onClick={() =>
                            handleSizeChange(data.size, data.stock_quantity)
                          }
                        >
                          <span>{data.size}</span>
                        </div>
                      );
                  })}
                </div>
              </div>
            </div>
          )}
          {productDetails && (
            <div className={cx("quantity")}>
              <div className={cx("title")}>
                <span>Số lượng</span>
              </div>
              <div className={cx("number")}>
                <Button
                  onlyIcon
                  leftIcon={Icons.minus}
                  onClick={handleMinus}
                ></Button>
                <Input
                  idInput="quantity"
                  type="number"
                  name="quantity"
                  value={quantity}
                  min={1}
                  onChange={handleQuantityChange}
                  notLabel
                  notMarginBottom
                  notBoxShadow
                  styleOrther={{ width: "6rem", height: "4rem" }}
                />
                <Button
                  onlyIcon
                  leftIcon={Icons.plus}
                  onClick={handlePlus}
                ></Button>
              </div>
              <div className={cx("stock")}>
                <span>{`Kho ${stockQuantity} sản phẩm`}</span>
              </div>
            </div>
          )}
          <div className={cx("action")}>
            <Button
              styleOrther={{
                display: productDetails ? "block" : "none",
                minWidth: "15rem",
              }}
              primary
            >
              Mua ngay
            </Button>
            <button
              style={{ display: productDetails ? "block" : "none" }}
              className={cx("add-cart")}
              onClick={handleAddToCart}
            >
              <span>Thêm vào giỏ hàng</span>
              <span className={cx("icon")}>{Icons.cartPlus}</span>
            </button>
          </div>
        </div>
        {flashSale && (
          <div className={cx("quantity-flash-sale")}>
            <div className={cx("range")} style={{ width: `1%` }}></div>
            <span>Đang Bán Chạy</span>
          </div>
        )}
      </div>
      <div
        className={cx("discount")}
        style={{
          display:
            normal && product.price_old > product.price_new ? "flex" : "none",
        }}
      >
        <span>{`-${
          100 - Math.floor((product.price_new / product.price_old) * 100)
        }%`}</span>
      </div>
      <div
        className={cx("description")}
        style={{ display: productDetails ? "block" : "none" }}
      >
        <div className={cx("title")}>
          <span>MÔ TẢ SẢN PHẨM</span>
        </div>
        <div className={cx("content")}>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
