import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    

    let total = 0;
    let shipping = 0;
    for (const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));

    const grandTotal = total + shipping +tax;
    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Items: {cart.length}</p>
            <h5>Items Ordered:</h5>
            <br />
            <p>Total:${total}</p>
            <p>Shipping:${shipping}</p>
            <p>tax:${tax}</p>
            <p>Grand Total:${grandTotal}</p>
        </div>
    );
};

export default Cart;