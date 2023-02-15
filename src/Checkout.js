import React  from "react";
import "./Checkout.css";
import CheckoutProduct  from "./CheckoutProduct";
import Subtotal from "./Subtotal";


function Checkout() {
    return (
      <div className="checkout">
        <div className="checkout__left">
            <img src="https://i.pinimg.com/originals/fd/2e/16/fd2e16de809e4727308251edf81a2831.png" alt="" className="checkout__ad" />
        <div>
            <h2 className="checkout__title"> Shopping Cart</h2>
            <CheckoutProduct />
            <CheckoutProduct />
            <CheckoutProduct />
        </div>
        
        </div>
    
        <div className="checkout__right"></div>
            <Subtotal />
      </div>
    );
  }
  
  export default Checkout;