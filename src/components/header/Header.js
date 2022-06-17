import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header({ children }) {
    return (
        <header className="outer-content-container">
            <div className="inner-content-container">
                <nav>
                    <ul>
                        <li><Link to="/">BeginPagina</Link></li>
                        <li><Link to="/subreddit/memes">profielpagina</Link></li>
                    </ul>
                </nav>
                <div className="hero-content">
                    {children}
                </div>
            </div>
        </header>
    );
}

export default Header;