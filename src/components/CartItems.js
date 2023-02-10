import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemList)

  return (

    <div className="cart-container">

      <h2>Your Cart</h2>
      <ul>

        {cartItems.map((item) =>
          <li key={item.id}>


            <CartItem price={item.price} name={item.name} total={item.totalPrice} quantity={item.quantity} id={item.id} />
          </li>

        )}

      </ul>
    </div>
  );
};

export default CartItems;
