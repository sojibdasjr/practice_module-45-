import React from "react";
import { useLoaderData } from "react-router-dom";

const Cart = () => {
  const cart = useLoaderData();
  return (
    <div>
      <div>
        <h1>my Cart{cart.length}</h1>
      </div>
    </div>
  );
};

export default Cart;
