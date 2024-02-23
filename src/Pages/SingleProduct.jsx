import React from "react";
import { useNavigate } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/product/${id}`);
  };

  const handleCart = () => {
    navigate(`/cart/${id}`);
  };
  const { id, title, price, description, image } = product;
  return (
    <div className="border border-stone-400 p-2 m-2 flex flex-col">
      <div>
        <img
          className="border-stone-600 border w-full h-64 "
          src={image}
          alt=""
        />
        <h1 className="text-2xl font-bold my-2">{title}</h1>
        <h1>{description.slice(0, 100)}........</h1>
        <h1>Price : $ {price}</h1>
      </div>
      <div className="flex justify-around mt-2 ">
        <button
          onClick={handleCart}
          className="bg-slate-400 p-2 rounded text-white"
        >
          Buy Now
        </button>
        <button
          onClick={handleDetails}
          className="bg-green-400 p-2 rounded text-white"
        >
          Show Details
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
