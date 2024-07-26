import React, { useEffect, useState } from 'react';
import '../styles.css'; // Create this CSS file for styling

const FlashMessage = ({ message, type, onClose }) => {
    const [width, setWidth] = useState(100);

    useEffect(() => {
        if (message) {
            const interval = setInterval(() => {
                setWidth(prev => prev - 1);
            }, 70); // 7 seconds total

            const timeout = setTimeout(() => {
                onClose();
            }, 7000);

            return () => {
                clearInterval(interval);
                clearTimeout(timeout);
            };
        }
    }, [message, onClose]);

    if (!message) return null;

    return (
        <div className={`flash-message ${type}`}>
            <span>{message}</span>
            <button onClick={onClose}>&times;</button>
            <div className="progress-bar" style={{ width: `${width}%` }}></div>
        </div>
    );
};

export default FlashMessage;
