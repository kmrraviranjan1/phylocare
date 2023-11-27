import React from "react";
import { productList } from "../data/productList";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = productList.find((product) => product.id === Number(id));
  if (!product) return <>We don't need you</>;
  const { name, image } = product;
  return (
    <div className="flex flex-col md:flex-row p-2">
      <img src={image} alt={name} className="flex-1 h-96 w-full object-contain" />
      <div className="flex-1">
        <p className="text-2xl text-center md:text-4xl font-bold tracking-wider text-slate-600">{name}</p>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
