import React from "react";

import "../styles/Product.scss";
import { ItemInfo } from "@/types";

type Props = {
  data: ItemInfo;
};

const Product = ({ data }: Props) => {
  return (
    <div className="product">
      <div className="product__container">
        <img className="product__image" src={data.image} alt={data.name} />
        <div className="product__upper-info">
          <h3 className="product__upper-info-name">{data.name}</h3>
          <p className="product__upper-info-price">From ${data.price}</p>
        </div>
        <button className="product__bottom-btn">Details</button>
      </div>
    </div>
  );
};

export default Product;
