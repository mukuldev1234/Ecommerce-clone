import React from 'react';
import { useLocation } from 'react-router-dom';

const PaymentStatusPage = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const status = params.get('status');

    return (
        <div>
            {status === 'success' ? (
                <h2>Payment Successful! Thank you for your purchase.</h2>
            ) : (
                <h2>Payment Failed. Please try again.</h2>
            )}
        </div>
    );
};

export default PaymentStatusPage;
