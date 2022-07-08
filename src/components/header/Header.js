import React from 'react';
import './Header.css';

function Header({ children }) {
    return (
        <header className="outer-content-container">
            <div className="inner-content-container">

                <div className="hero-content">
                    {children}
                    {/*<div className="line"></div>*/}
                </div>

            </div>
        </header>
    );
}

export default Header;