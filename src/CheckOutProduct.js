import React from "react";
import "./CheckOutProduct.css";
import { useStateValue } from "./StateProvider";

export default function CheckOutProduct({ id, title, image, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkOutProduct">
      <img className="checkOutProduct__image" src={image} alt="" />
      <div className="checkOutProduct__info">
        <p className="checkOutProduct__title">{title}</p>
        <p className="checkOutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {/* Making stars dynamically */}
          {Array(rating)
            .fill()
            .map(() => (
              <p>&#9733;</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}
