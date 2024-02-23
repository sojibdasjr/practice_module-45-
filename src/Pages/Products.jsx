import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const products = useLoaderData();

  return (
    <div>
      <h1>Provide We Products : {products.length} </h1>
      <div className="grid grid-cols-4">
        {products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
