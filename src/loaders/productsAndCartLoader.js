import React from "react";
import { getStoredCart } from "../utilities/fakedb";

const productsAndCartLoader = async () => {
  // get products data
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  // get cart
  const savedCart = getStoredCart();

  for (const id in savedCart) {
    const addedProduct = products.find((product) => product.id === id);
    console.log(id, addedProduct);
  }
  return products;

  //   return <div></div>;
};

export default productsAndCartLoader;
