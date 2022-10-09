import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product }) => {
  const { name, img, price, quantity } = product;
  return (
    <div className="review-item">
      <img src={img} alt={name} />
    </div>
  );
};

export default ReviewItem;
