import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);

    


    return (
        <div className="shop-container">
            <div className="product-container">
             
            </div>
            <div className="cart-container">
                
            </div>
        </div>
    );
};

export default Shop;