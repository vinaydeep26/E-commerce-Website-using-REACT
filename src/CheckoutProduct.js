import React from "react";
import "./CheckoutProduct.css";



function CheckoutProduct() {
    return (

            <div className="checkoutProduct">
                <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="" className="checkoutProduct__image" />
                <div className="checkoutProduct__info">

                    <p className="checkoutProduct__title">
                        xyz
                    </p>
                    <p className="checkout__price">
                    <small>$</small>
                    <strong>$20</strong>
                    </p>
                    <div className="checoutProduct__rating">
                        *****
                    </div>
                    <button> REMOVE THE CART </button>
                </div>

            </div>
    )
}
export default CheckoutProduct;