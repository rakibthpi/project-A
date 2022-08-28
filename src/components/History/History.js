import React from 'react';

const History = (props) => {
    console.log(props);
    return (
        <div className='amountHistory'>
            <h1>Order Summary</h1>
            <p>Selected Items: {props.sendhestory.length}</p>
            <p>Total Price: $1140</p>
            <p>Total Shipping Charge: $5</p>
            <p>Tax: $114</p>
            <p>Grand Total: $1559</p>
            <button>Clear Cart</button>
            <button>Review Order</button>
        </div>
    );
};

export default History;