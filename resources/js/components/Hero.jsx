import React from 'react';

function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <h1>Welcome to Multimarket</h1>
                <p>Your one-stop marketplace for everything you need</p>
                <a href="/products" className="btn btn-primary">Browse Products</a>
            </div>
        </section>
    );
}

export default Hero;
