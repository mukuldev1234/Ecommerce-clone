import React, { useState } from 'react';
import axios from 'axios';

const AddProductPage = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/products', {
                name,
                description,
                price: parseFloat(price),
            });
            alert('Product added successfully');
            setName('');
            setDescription('');
            setPrice('');
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Failed to add product');
        }
    };

    return (
        <div className="container">
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Product Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <textarea 
                    placeholder="Product Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    required 
                />
                <input 
                    type="number" 
                    placeholder="Price" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    required 
                />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProductPage;
