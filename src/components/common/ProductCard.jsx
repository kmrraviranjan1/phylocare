import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div>
      <h4>{product.name}</h4>
      <img src={product.image} alt="" />
    </div>
  );
};

export default ProductCard;
