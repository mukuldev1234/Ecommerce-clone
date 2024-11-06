import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
    return (
        <div>
            <h2>Checkout</h2>
            <div>
                <p>Product 1: $20</p>
                <p>Product 2: $15</p>
                <p>Total: $35</p>
            </div>
            <Link to="/payment-status?status=success">
                <button>Confirm Payment</button>
            </Link>
            <Link to="/payment-status?status=failure">
                <button>Cancel Payment</button>
            </Link>
        </div>
    );
};

export default CheckoutPage;
