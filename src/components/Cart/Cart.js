import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    return (
        <div>
            <h5>Items Ordered:</h5>
            <br />
            <p>Total:</p>
            <p>Shipping: </p>
            <p>tax:</p>
            <p>Grand Total:</p>
        </div>
    );
};

export default Cart;