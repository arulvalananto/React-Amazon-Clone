import { Room } from '@material-ui/icons';
import React from 'react';
import { useStateValue } from '../../contextAPI/StateProvider';
import './SubHeader.css';

const SubHeader = () => {
    const [{user}] = useStateValue();
    return (
        <div className="subheader">
            <div className="subheader__left">
                <Room />
                <div className="subheader__address">
                    <h6>Deliver to {user?.email.split('@')[0].split('').filter(el => !(/[0-9]/).test(el)).join('')}</h6>
                    <h4>Tirunelveli 627011</h4>
                </div>
            </div>
            <div className="subheader__right">
                <div className="subheader__rightOne">
                    <h5>Mobiles</h5>
                    <h5>{user?.email.split('@')[0].split('').filter(el => !(/[0-9]/).test(el)).join('')}'s Amazon.in</h5>
                    <h5>Amazon Pay</h5>
                    <h5>Customer Service</h5>
                    <h5>Today's Deals</h5>  
                </div>
                <div className="subheader__rightTwo">
                    <h5>Buy Again</h5>
                    <h5>Best Sellers</h5>
                </div>
            </div>
        </div>
    )
}

export default SubHeader
