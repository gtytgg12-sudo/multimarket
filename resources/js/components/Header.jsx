import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="container header-content">
                <a href="/" className="logo">
                    Multi<span>market</span>
                </a>
                <nav className="nav">
                    <a href="/">Home</a>
                    <a href="/products">Products</a>
                    <a href="/contact">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
