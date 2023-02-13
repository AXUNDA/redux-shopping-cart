import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import Notification from "./components/Notification";

import { sendCart } from "./store/cart.slice";
import { fetchCart } from "./store/cart.slice";

let first = true




function App() {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const cart = useSelector((state) => state.cart)
  var itemList = cart.itemList
  const notification = useSelector((state) => state.ui.notification)


  useEffect(() => {

    dispatch(fetchCart());




  }, [dispatch]);


  useEffect(() => {
    if (first) {
      first = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCart(cart))


    }




  }, [itemList, dispatch]);
  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message} />}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
