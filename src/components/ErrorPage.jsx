import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Create this file to add styles for your error page

const ErrorPage = () => {
    return (
        <div className="error-page">
            <h1>404</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <p>
                <Link to="/">Go back to the homepage</Link>
            </p>
        </div>
    );
};

export default ErrorPage;
