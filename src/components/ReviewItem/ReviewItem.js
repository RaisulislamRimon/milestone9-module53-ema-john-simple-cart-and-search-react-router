import React from "react";

const ReviewItem = ({ product }) => {
  const { name, price, quantity } = product;
  return (
    <div>
      <h1>ReviewItem</h1>
      <p>{name}</p>
    </div>
  );
};

export default ReviewItem;
