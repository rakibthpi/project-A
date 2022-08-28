import React from 'react';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    // console.log(product);
    const { img, name, ratings, price, seller } = product


    return (



        <div className='single_main_cart'>
            {/* single item area start  */}
            <div className="single_cart">
                <img src={img} alt="photos" />
                <div className="single-cart_text">
                    <h2>{name}</h2>
                    <p>Price: ${price} </p>
                    <p>Manufacturer : {seller}</p>
                    <p>Rating : {ratings} start</p>
                </div>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;