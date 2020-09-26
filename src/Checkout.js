import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckOutProduct from "./CheckOutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/03/credit/img20/EoSS/eos_2020_maple_ur_770x60._CB406658813_.jpg"
          alt=""
          className="checkout__ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping basket is empty</h2>
            <p>
              You have no items in your basket.Click "Add to basket" next to
              product to buy one
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">your shopping basket</h2>
            {/* List out products
             */}
            {basket.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
