import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
const Layout = () => {
  let total = 0;
  const cartState = useSelector((state) => state.cart.showCart)
  const cartItems = useSelector((state) => state.cart.itemList)

  const cartItemsList = useSelector((state) => state.cart.itemList)
  cartItemsList.forEach(item => {
    total += item.totalPrice

  });


  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {cartState && cartItems.length !== 0 ? <CartItems /> : null}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
