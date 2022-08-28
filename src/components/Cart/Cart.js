import React, { useEffect, useState } from 'react';
import History from '../History/History';
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
                <History sendhestory={cart}></History>
            </div>
        </div>
    );
};

export default Cart;