import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './PageNotFound.css'
import { useStateValue } from '../../contextAPI/StateProvider';

const PageNotFound = () => {

    const [{basket}] = useStateValue();
    const location = useLocation();
    
    const currentLocation = location.pathname === '/payment';

    return !basket.length > 0 && currentLocation ? (
        <div className="pagenotfound">
            <div className="pagenotfound__imageContainer">
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'  
                    alt="" className="pagenotfound__image"
                />
            </div>
            <div className="pagenotfound__details">
                    <h1>Cart is Empty</h1>
                    <p>You have to add something into your cart.</p>
            </div>
            <p>Please Go to Amazon.in's <Link to="/">Home</Link> Page </p>
        </div>
    ) : (
        <div className="pagenotfound">
            <div className="pagenotfound__imageContainer">
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'  
                    alt="" className="pagenotfound__image"
                />
            </div>
            <div className="pagenotfound__details">
                    <h3>Looking for something?</h3>
                    <p>We're sorry. The Web address you entered is not a functioning page on our site.</p>
            </div>
            <p>Go to Amazon.in's <Link to="/">Home</Link> Page </p>            
        </div>
    )
}

export default PageNotFound
