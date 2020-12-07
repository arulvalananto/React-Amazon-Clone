import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../contextAPI/StateProvider';
import './Subtotal.css';

const Subtotal = () => {
    const history = useHistory();
    const [{ basket, user }] = useStateValue();

    const proceedToPayment = () => {
        if(user && basket.length > 0) {
            history.push('/payment')
        } else if(basket.length === 0) {
            history.push('/')
        } else {
            history.push('/login')
        }
    }

    return (
        <div className="subtotal">
            <React.Fragment>
                        <p>
                            {`Subtotal (${basket?.length} items): `}
                            <strong>₹{(basket?.reduce((acc, cur) => acc + cur.price, 0))?.toLocaleString('en-IN')}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a subtotal__gift
                        </small>
            </React.Fragment>
            <button onClick={proceedToPayment}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
