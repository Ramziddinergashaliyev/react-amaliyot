import React from "react";
import "./products.scss";

const Products = ({ product }) => {
  const { img, name, info, category, price, rating, unit, size } = product;
  return (
    <div className="products__card">
      <div className="products__card__img">
        <img src={img} alt="" />
      </div>
      <div className="products__card__info">
        <h3 className="products__card__title">name: {name}</h3>
        <p className="products__card__text">category: {category}</p>
        <p className="products__card__desc">info: {info}</p>
        <p className="products__card__desc">unit: {unit}</p>
        <p className="products__card__desc">price: {price}</p>
        <button className="products__card__btn">Add</button>
      </div>
    </div>
  );
};

export default Products;
