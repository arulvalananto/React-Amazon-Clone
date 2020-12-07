/* eslint-disable no-unused-vars */
import React from 'react';
import './Product.css';
import { useStateValue } from '../../contextAPI/StateProvider';

const Product = ({ id, title, image, price, rating}) => {
    const [state, dispatch] = useStateValue();


    const addToBasket = async () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
    
    return (
        <div className="product" key={id}>
            <div className="product__info">
                <p>{title}</p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                    
                            // eslint-disable-next-line jsx-a11y/accessible-emoji
                            <p key={i}><span>⭐</span></p>
                        ))}
                </div>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price.toLocaleString('en-IN')}</strong>
                    <small className="product__originalPrice">₹{(price + Math.floor(Math.random() * 500)).toLocaleString('en-IN')}</small>
                </p>
            </div>
            <img src={image} 
                     alt=""
            />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
