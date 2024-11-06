import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Listing.css";

const ProductListingPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from backend API
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="product-listing">
            <h2>Product Listing</h2>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product._id} className="product-card">
                        <Link to={`/ProductDetailPage/${product._id}`}>
                            <h3>{product.name}</h3>
                        </Link>
                        <p>Price: ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListingPage;
