import React from "react";
import { productData } from "../../static/productsData";
import "./hero.scss";
import Products from "../cards/Products";

function Hero() {
  console.log(productData);
  return (
    <section className="products container">
      <div className="products__cards">
        {productData.map((product) => (
          <Products product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}

export default Hero;
