import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
  const { products, initialCart } = useLoaderData(); // { products, initialCart }
  const [cart, setCart] = useState(initialCart);
  return (
    <div>
      <h1>Orders {products.length}</h1>
      <h1>initial cart {cart.length}</h1>
    </div>
  );
};

export default Orders;
