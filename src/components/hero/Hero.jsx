import React from "react";
import { productData } from "../../static/productsData";
import "./hero.scss";
import Products from "../cards/Products";

function Hero() {
  console.log(productData);
  return (
    <section className="products container">
      <h1 className="products__title">Products</h1>
      <div className="products__cards">
        {productData.map((product) => (
          <Products product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}

export default Hero;
