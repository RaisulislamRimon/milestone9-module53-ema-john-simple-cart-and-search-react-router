import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product }) => {
  const { name, img, price, quantity } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <p>{name}</p>
          <p>{price}</p>
          <p>Quantity : {quantity}</p>
        </div>
        <div className="delete-container">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
