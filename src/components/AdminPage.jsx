import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles.css';
import FlashMessage from './FlashMessage';

const AdminPage = () => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [flashMessage, setFlashMessage] = useState(null);
    const [flashType, setFlashType] = useState(null);

    useEffect(() => {
        axios.get('https://egerton-freemarket-90oc.onrender.com/products')
            .then(response => setProducts(response.data))
            .catch(error => {
                console.error(error);
                setFlashMessage('Failed to fetch products');
                setFlashType('error');
            });
    }, []);

    const handleAddProduct = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        axios.post('https://egerton-freemarket-90oc.onrender.com/products', formData)
            .then(response => {
                setProducts([...products, response.data.product]);
                e.target.reset();
                setFlashMessage('Product added successfully');
                setFlashType('success');
            })
            .catch(error => {
                console.error(error);
                setFlashMessage('Failed to add product');
                setFlashType('error');
            });
    };

    const handleEditProduct = (id) => {
        axios.get(`https://egerton-freemarket-90oc.onrender.com/products/${id}`)
            .then(response => {
                setProduct(response.data);
                setIsEditing(true);
                setModalOpen(true);
            })
            .catch(error => {
                console.error(error);
                setFlashMessage('Failed to fetch product details');
                setFlashType('error');
            });
    };

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        axios.put(`https://egerton-freemarket-90oc.onrender.com/products/${product.id}`, formData)
            .then(response => {
                setProducts(products.map(p => p.id === product.id ? response.data.product : p));
                setModalOpen(false);
                setIsEditing(false);
                setProduct(null);
                setFlashMessage('Product updated successfully');
                setFlashType('success');
            })
            .catch(error => {
                console.error(error);
                setFlashMessage('Failed to update product');
                setFlashType('error');
            });
    };

    const handleDeleteProduct = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            axios.delete(`https://egerton-freemarket-90oc.onrender.com/products/${id}`)
                .then(() => {
                    setProducts(products.filter(p => p.id !== id));
                    setFlashMessage('Product deleted successfully');
                    setFlashType('success');
                })
                .catch(error => {
                    console.error(error);
                    setFlashMessage('Failed to delete product');
                    setFlashType('error');
                });
        }
    };

    const closeFlashMessage = () => {
        setFlashMessage(null);
        setFlashType(null);
    };

    return (
        <div className="admin-container">
            {flashMessage && <FlashMessage message={flashMessage} type={flashType} onClose={closeFlashMessage} />}
            <header className="admin-header">
                <h1>Admin Panel</h1>
            </header>
            <form onSubmit={isEditing ? handleUpdateProduct : handleAddProduct} className="product-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" defaultValue={product?.name || ''} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" defaultValue={product?.description || ''}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" id="price" name="price" step="0.01" defaultValue={product?.price || ''} />
                </div>
                <div className="form-group">
                    <label htmlFor="contact_number">Contact Number</label>
                    <input type="text" id="contact_number" name="contact_number" defaultValue={product?.contact_number || '+254'} />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="file" id="image" name="image" />
                    {isEditing && product?.image_filename && (
                        <div>
                            <p>Current image: <a href={`https://egerton-freemarket-90oc.onrender.com/uploads/${product.image_filename}`} target="_blank" rel="noopener noreferrer">View</a></p>
                            <img src={`https://egerton-freemarket-90oc.onrender.com/uploads/${product.image_filename}`} alt="Current" style={{ maxHeight: '100px' }} />
                        </div>
                    )}
                </div>
                <button type="submit">{isEditing ? 'Update Product' : 'Add Product'}</button>
            </form>
            <div className="product-grid">
                {products.map(p => (
                    <div key={p.id} className="card">
                        <img src={`https://egerton-freemarket-90oc.onrender.com/uploads/${p.image_filename}`} alt={p.name} />
                        <h2>{p.name}</h2>
                        <p>{p.description}</p>
                        <p>Price: ${p.price}</p>
                        <div className="card-actions">
                            <button onClick={() => handleEditProduct(p.id)}>Edit</button>
                            <button onClick={() => handleDeleteProduct(p.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            {modalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
                        <form onSubmit={handleUpdateProduct}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" defaultValue={product?.name || ''} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea id="description" name="description" defaultValue={product?.description || ''}></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Price</label>
                                <input type="number" id="price" name="price" step="0.01" defaultValue={product?.price || ''} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact_number">Contact Number</label>
                                <input type="text" id="contact_number" name="contact_number" defaultValue={product?.contact_number || ''} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Image</label>
                                <input type="file" id="image" name="image" />
                                {isEditing && product?.image_filename && (
                                    <div>
                                        <p>Current image: <a href={`https://egerton-freemarket-90oc.onrender.com/uploads/${product.image_filename}`} target="_blank" rel="noopener noreferrer">View</a></p>
                                        <img src={`https://egerton-freemarket-90oc.onrender.com/uploads/${product.image_filename}`} alt="Current" style={{ maxHeight: '100px' }} />
                                    </div>
                                )}
                            </div>
                            <button type="submit">Update Product</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPage;
