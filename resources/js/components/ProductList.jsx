import React from 'react';

function ProductList({ products }) {
    if (products.length === 0) {
        return <p className="no-products">No products available yet.</p>;
    }

    return (
        <div className="product-grid">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <div className="product-image">
                        {product.image ? (
                            <img src={product.image} alt={product.name} />
                        ) : (
                            <div className="placeholder">No Image</div>
                        )}
                    </div>
                    <div className="product-info">
                        <h3>{product.name}</h3>
                        <span className="category">{product.category}</span>
                        <p className="price">&#8377;{product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
