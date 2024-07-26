import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles.css'; // Import the global styles

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://egerton-freemarket-90oc.onrender.com/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error(error));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="container">
            <header>
                <h1>{product.name}</h1>
            </header>
            <div className="card">
                <img src={`https://egerton-freemarket-90oc.onrender.com/uploads/${product.image_filename}`} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <a href={`tel:${product.contact_number}`}>
                    <button>Call</button>
                </a>
                <a href={`https://wa.me/${product.contact_number}`}>
                    <button>WhatsApp</button>
                </a>
            </div>
        </div>
    );
};

export default ProductPage;
