// src/admin-user/common/ProductCardGrid.jsx

import React from 'react';
import { useNavigate } from "react-router-dom";
// 🛑 IMPORTANT: This path (four levels up) is relative to the common folder. Check if it's correct for your assets.
// import smallImgage from '../../../../assets/group-pics.png'; 

const ProductCardGrid = ({ products, title, className }) => {
    const navigate = useNavigate();

    // ... (rest of the logic)

    return (
        <div className={`cards-wrapper ${className || ''}`}>
            {title && <p className="cards-title">{title}</p>} 
            
            <div className="cards-container">
                {products.map((p) => (
                    <div className="card" key={p.id}>
                        <div className="card-img-wrapper">
                            <img src={p.img} alt={p.title} className="card-img" /> 
                            <img src={p.loveImg} alt="love icon" className="card-red" /> 
                        </div>

                        <div className="card-row">
                            <h4>{p.title}</h4>
                            <p className="price">{p.price}</p>
                        </div>

                        <div className="avatars">
                            {/* <img src={smallImgage} alt="stock group" className="card-img2" /> */}
                            <p className="stock">{p.stock} units in stock</p>
                        </div>
                        <button
                            className="cart-btn"
                            onClick={() => navigate(`/product/${p.id}`)}
                        >
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductCardGrid;