import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Hero from './Hero';

function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.data || []);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <div className="app">
            <Header />
            <Hero />
            <main className="container">
                <h2 className="section-title">Featured Products</h2>
                {loading ? (
                    <div className="loading">Loading products...</div>
                ) : (
                    <ProductList products={products} />
                )}
            </main>
            <footer className="footer">
                <p>&copy; 2026 Multimarket.in. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
