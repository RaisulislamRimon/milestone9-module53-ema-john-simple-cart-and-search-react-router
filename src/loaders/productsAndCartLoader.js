import React from "react";
import { getStoredCart } from "../utilities/fakedb";

const productsAndCartLoader = async () => {
  // get products data
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  // get cart
  const savedCart = getStoredCart();
  const previousCart = [];

  for (const id in savedCart) {
    const addedProduct = products.find((product) => product.id === id);
    // console.log(id, addedProduct);
    if (addedProduct) {
      const quantity = savedCart[id];
      //   console.log(id, quantity);
      savedCart.quantity = quantity;
      previousCart.push(addedProduct);
    }
  }
  return { products, previousCart };

  //   return <div></div>;
};

export default productsAndCartLoader;
