import React from 'react';
import { Link } from 'react-router-dom';
import BasketItem from '../BasketItem/BasketItem';
import './Checkout.css';
import { useStateValue } from '../../contextAPI/StateProvider';
import Subtotal from '../Subtotal/Subtotal';

const Checkout = () => {

    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                    alt=""
                />

                {basket?.length > 0 ? (
                    <div>
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>
                    {basket.map(({id, title, image, rating, price}, i) => (
                        <BasketItem title={title} image={image} rating={rating} price={price} key={i} id={id} />
                    ))}
                </div>
                ) : (
                    <div>
                        <h2 className='checkout__empty'>Your Amazon Cart is empty.</h2>
                        <p>Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more.
Continue shopping on the Amazon.in <Link to='/'>homepage</Link>, learn about today's deals, or visit your Wish List.</p>
                    </div>
                )}
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
