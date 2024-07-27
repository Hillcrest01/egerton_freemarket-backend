import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://egerton-freemarket-90oc.onrender.com/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="container">
            <hr />
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="card">
                        <div className="card-content">
                        <Link to={`/products/${product.id}`}><img src={`https://egerton-freemarket-90oc.onrender.com/uploads/${product.image_filename}`} alt={product.name} /></Link>
                        <Link to={`/products/${product.id}`} className="no-underline-link"><h2>{product.name}</h2></Link>
                        <p>{product.description}</p>
                        <p>Price: Ksh.{product.price}</p>
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
        </div>
    );
};

export default HomePage;
