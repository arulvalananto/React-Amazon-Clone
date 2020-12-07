import React from 'react';
import './Header.css';
import { Search, ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../contextAPI/StateProvider';
import { auth } from '../../firebase';
import SubHeader from '../SubHeader/SubHeader';


const Header = () => {
    const [{basket, user}] = useStateValue();
    

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <div>
            <div className="header">
                <Link to="/">
                    <img 
                        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                        alt="header logo"
                        className="header__logo"
                    />
                </Link>
                <div className="header__search">
                    <input type="text" className="header__searchInput" />
                    <Search />
                </div>
                <div className="header__nav">
                    <Link to={!user && '/login'}>
                        <div className='header__option' onClick={handleAuthentication}>
                            <span className="header__optionLineOne">Hello {user ? user?.email.split('@')[0].split('').filter(el => !(/[0-9]/).test(el)).join('') : 'Guest'}</span>
                            <span className="header__optionLineTwo">{user ? 'Sign Out' :'Sign In'}</span>
                        </div>
                    </Link>
                    <Link to='/orders'>
                        <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                    </Link>
                    <Link to='/prime'>
                        <div className="header__option">
                            <span className="header__optionLineOne">Your</span>
                            <span className="header__optionLineTwo">Prime</span>
                        </div>
                    </Link>

                    <Link to="/checkout">
                        <div className="header__optionBasket">
                            <div>
                                <span className="header__optionLineTwo header__basketCount">
                                {basket?.length}
                                </span>
                                <ShoppingCart />
                            </div>
                            <h5>Cart</h5>
                        </div>
                    </Link>
                </div>
            </div>
            {user && <SubHeader />}
        </div>
    )
}

export default Header
