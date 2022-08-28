import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Cart.css';


const Cart = () => {

    const [products, setProdcut] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProdcut(data))
    }, [])

    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(cart);
    }


    return (
        <div className='cart_main'>
            <div className="left_area">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }


            </div>
            <div className="right_area">
                <h1>Order Summary</h1>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: $1140</p>
                <p>Total Shipping Charge: $5</p>
                <p>Tax: $114</p>
                <p>Grand Total: $1559</p>
                <button>Clear Cart</button>
                <button>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;