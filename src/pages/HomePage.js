import React from 'react';
import { Link } from 'react-router-dom';
import Topnav from '../Homepagecmp/Topnav';

const HomePage = () => (
    <div className="homepage">
        <header class="header">
        <h1>Welcome to My eCommerce Store</h1>
    </header>
        <Topnav/>
        <h2>Popular Products</h2>
        <div className='link'>
            <Link to="/">Product 1</Link>
            <Link to="/">Product 2</Link>
            <Link to="/">Product 3</Link>
        </div>
        <Link to="/ProductListingPage">
            <button>View All Products</button>
        </Link>
        <footer class="footer">
        <p>&copy; 2024 My eCommerce Store. All rights reserved.</p>
    </footer>
    </div>
);

export default HomePage;
