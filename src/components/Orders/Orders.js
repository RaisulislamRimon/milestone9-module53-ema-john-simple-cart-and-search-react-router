import React from "react";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
  const { products, initialCart } = useLoaderData(); // { products, initialCart }
  return (
    <div>
      <h1>Orders {products.length}</h1>
      <h1>initial cart {initialCart.length}</h1>
    </div>
  );
};

export default Orders;
