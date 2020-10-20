import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

export default function Product({id, title, image, price, rating}) {
   // eslint-disable-next-line
  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () => {
    // Dispatch the item into th Daa Layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    })
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
        {Array(rating).fill().map((_,i) => (<span role="img" aria-label="emoji">⭐</span>))}
        </div>
      </div>
      <img
        src={image}
        alt=""
      />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}
