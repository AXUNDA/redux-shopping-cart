import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";

import { cartActions } from "../store/cart.slice";
const Cart = () => {

  const quantity = useSelector((state) => state.cart.totalQuantity)
  const dispatch = useDispatch()
  function showCart() {

    dispatch(cartActions.showCart())
  }



  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
