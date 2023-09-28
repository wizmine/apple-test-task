import React from "react";

import { getAllCategories, getAllProducts } from "@/services";
import Product from "@/shared/Product";
import { ItemInfo} from "@/types";

import "../styles/ProductList.scss";

const ProductList = async () => {
  const products: ItemInfo[] = await getAllProducts();
  const categories = await getAllCategories();

  return (
    <div className="products">
      <div className="products__title">
        <div className="products__title-name">
          <div>
            <span className="products__title-name-normal">Explore in</span>
            <span className="products__title-name-bald"> Products</span>
          </div>
        </div>
        <div className="products__title-tags">
          {categories.map((name, id) => (
            <button className={`products__title-tags-btn ${id !== 0 ? `` : `active`}`} key={id}>
              {name}
            </button>
          ))}
        </div>
      </div>
      <section className="products__list">
        {products.map((item, index) => (
          <Product key={index} data={item} />
        ))}
      </section>
    </div>
  );
};

export default ProductList;
