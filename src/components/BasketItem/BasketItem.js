/* eslint-disable no-unused-vars */
import React from 'react';
import './BasketItem.css';
import { useStateValue } from '../../contextAPI/StateProvider';
import { useLocation } from 'react-router-dom';

const BasketItem = ({ id, image, title, price, rating }) => {

    const [state, dispatch] = useStateValue();
    const location = useLocation();

    

    const removeFromBasket = async (id) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
        
    }
    return (
        <div className="basketItem">
            <img src={image}alt={title}/>
            <div className="basketItem__info">
                <p className="basketItem__title">{title}</p>
                <p className="basketItem__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="basketItem__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            // eslint-disable-next-line jsx-a11y/accessible-emoji
                            <p key={i}><span>⭐</span></p>
                        ))}
                </div>
                {location.pathname === '/checkout' ? (
                    <button onClick={() => removeFromBasket(id)}>Remove from basket</button>
                ) : null}
            </div>
        </div>
    )
}

export default BasketItem
