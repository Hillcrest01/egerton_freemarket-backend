import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        axios.get('https://egerton-freemarket-90oc.onrender.com/products')
            .then(response => {
                setProducts(response.data);
                setIsLoading(false); // Set loading to false after data is fetched
            })
            .catch(error => {
                console.error(error);
                setError('Failed to fetch products'); // Set error message
                setIsLoading(false); // Set loading to false in case of error
            });
    }, []);

    return (
        <div className="container">
            <div className="welcome-message">
                <h1>Welcome to Egerton FreeMarket!</h1>
                <p>Your one-stop destination for discovering and connecting with local sellers. Browse our collection of unique items and support your community's talent.</p>
            </div>
            {isLoading && <div className="loading">Loading...</div>} {/* Display loading message */}
            {error && <div className="error">{error}</div>} {/* Display error message */}
            {!isLoading && !error && (
                <>
                    <div className="card-content"></div>
                    <hr />
                    <div className="product-grid">
                        {products.map(product => (
                            <div key={product.id} className="card">
                                <div className="card-content">
                                    <Link to={`/products/${product.id}`}><img src={`https://egerton-freemarket-90oc.onrender.com/uploads/${product.image_filename}`} alt={product.name} /></Link>
                                    <Link to={`/products/${product.id}`} className="no-underline-link"><h2>{product.name}</h2></Link>
                                    <p>{product.description}</p>
                                    <p>Price: ${product.price}</p>
                                </div>
                                <div className="card-actions">
                                    <a href={`tel:${product.contact_number}`}>
                                        <button>Call</button>
                                    </a>
                                    <a href={`https://wa.me/${product.contact_number}`}>
                                        <button>WhatsApp</button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default HomePage;
