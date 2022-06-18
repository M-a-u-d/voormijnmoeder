
import React from 'react';
import './ErrorMessage.css';

function ErrorMessage({ children }) {
    return (

        <div className="inner-content-container">
        <p className="error-message">{children}</p>
        </div>
    );
}

export default ErrorMessage;