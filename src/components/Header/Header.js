import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';

const Header = () => {
    return (
            
            <nav className="header">
            <img className="logo" src={logo} alt="" />
                {/* <a href="/shop">Shop</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Inventory</a> */}
            </nav>
    );
};

export default Header;