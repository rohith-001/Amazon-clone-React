import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'

export default function CheckoutProduct({ id, title, image, price, rating }) {

    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] = useStateValue();
   

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""></img>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price"><small>$</small><strong>{price}</strong></p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (<span role="img" aria-label="emoji">⭐</span>))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}
