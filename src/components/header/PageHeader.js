import React from 'react';
import './PageHeader.css';


function PageHeader({ children }) {
    return (
        <header className="outer-content-container">
            <div className="inner-content-container">
                <div className="hero-content">
                    {children}
                </div>
            </div>
        </header>
    );
}

export default PageHeader;