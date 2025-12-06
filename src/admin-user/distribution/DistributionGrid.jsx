// src/admin-user/distribution/DistributionGrid.jsx

import React, { useState } from 'react';
import { distributionItems } from './DistributionData';
import './Distribution.css'; 

// 🛑 Component now accepts the click handler function as a prop
const DistributionGrid = ({ onSimilarProductsClick }) => { 
    const [selectAll, setSelectAll] = useState(false);
    
    return (
        <div className="distribution-wrapper">
            
            <h2 className="distribution-title">Purchased Items ready for distribution</h2>
            
            <div className="distribution-select-row">
                <p className="distribution-subtitle">Select items to distribute</p>
                <div className="select-all-container">
                    <p>Select all</p>
                    <input 
                        type="checkbox" 
                        checked={selectAll}
                        onChange={() => setSelectAll(!selectAll)}
                        className="select-all-checkbox"
                    />
                </div>
            </div>

            <div className="distribution-cards-container">
                {distributionItems.map((item) => (
                    <div className="distribution-card" key={item.id}>
                        <div className="distribution-img-wrapper">
                            <img src={item.img} alt={`Item ${item.id}`} className="distribution-card-img" />
                            <img src={item.loveImg} alt="love icon" className="distribution-card-heart" /> 
                        </div>
                    </div>
                ))}
            </div>

            <div className="similar-products-container">
                <button 
                    className="similar-products-btn"
                    // 🛑 This button now calls the function passed from Distribution.jsx
                    onClick={onSimilarProductsClick} 
                >
                    Click to see similar products
                </button>
            </div>
        </div>
    );
}

export default DistributionGrid;