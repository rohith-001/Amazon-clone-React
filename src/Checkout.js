import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

export default function Checkout() {
    // eslint-disable-next-line no-unused-vars
    const [{basket, user}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/1242x450_13._CB405467206_SY250_.jpg"
                    alt=""
                />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Shopping Basket</h2>
                    {basket.map(item => (<CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />))}
                                       
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal /> 
            </div>
        </div>
    );
}
