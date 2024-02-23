import React from "react";
import { Link, Navigate, useLoaderData, useNavigate } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const { title, price, description, image } = details;
  return (
    <div className="flex border border-red-200 max-w-6xl mx-auto my-4 justify-evenly p-10 gap-1">
      <img src={image} width="250px" alt="" className="w-2/6" />
      <div className="w-2/6">
        <h1 className="font-bold text-2xl">{title}</h1>
        <h1>{description}</h1>
        <h1 className="my-2">Price : $ {price}</h1>
        <Link className="p-2 bg-yellow-300 rounded mt-2">Add to Cart</Link>{" "}
        <br />
        <button onClick={handleBack} className="p-2 bg-yellow-300 rounded mt-2">
          Back
        </button>
      </div>
    </div>
  );
};

export default Details;
