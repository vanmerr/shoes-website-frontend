import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "@/assets/styles/Products.module.scss";
import Product from "./Product";
import Loading from "./Loading";

const cx = classNames.bind(style);

const calculateTimeLeft = () => {
  const now = new Date();
  const targetTime = new Date();
  targetTime.setHours(now.getHours() + 2, 0, 0, 0);

  const difference = targetTime - now;
  if (difference > 0) {
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    return { hours, minutes, seconds };
  } else {
    return { hours: 0, minutes: 0, seconds: 0 };
  }
};

function Products({ products, flashSale, normal, textDetail}) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0
    ) {
      setTimeLeft(calculateTimeLeft());
    }
  }, [timeLeft]);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);
  let classes = cx("wapper");
  if (normal) classes = cx("wapper", { normal });
  else if (flashSale) classes = cx("wapper", { flashSale });


  return (
    <div className={classes}>
      {flashSale && (
        <div className={cx("flash-sale")}>
          <h2>FLASH SALE</h2>
          <div className={cx("discount")}>
            <span>{formatTime(timeLeft.hours)}</span>:
            <span>{formatTime(timeLeft.minutes)}</span>:
            <span>{formatTime(timeLeft.seconds)}</span>
          </div>
        </div>
      )}
      {(normal) && (
        <div className={cx("normal")}>
          <div className={cx("title")}>
            <span>{textDetail  ? "CÓ THỂ BẠN CŨNG THÍCH" : "GỢI Ý HÔM NAY"}</span>
          </div>
        </div>
      )}
      <div className={cx("container")}>
        <div className={cx("content")}>
          {products.length > 0 &&
            products.map((product) => (
              <Product
                key={product.product_id}
                flashSale={flashSale}
                normal={normal}
                product={product}
              />
            ))}
          {products.length <= 0 && <Loading />}
        </div>
      </div>
    </div>
  );
}

export default Products;
