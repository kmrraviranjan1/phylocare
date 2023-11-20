import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="shadow-xl bg-zinc-200 rounded-3xl flex flex-col justify-between">
      <div className="flex justify-center align-middle">
        <img src={product.image} alt={product.name} className="h-60 w-40" />
      </div>
      <p className="rounded-3xl bg-red-300 text-center p-2 mt-2">{product.name}</p>
    </div>
  );
};

export default ProductCard;
