// src/admin-user/distribution/DistributionForm.jsx

import React from 'react';
// 🛑 Import the global modal context hook
import { useGlobalModal } from '../global/GlobalModalContext'; 
import { selectedProductsPreview } from './DistributionData';
import './Distribution.css';

const DistributionForm = ({ goBackToSelection }) => {
    // 🛑 Get the function to open the modal
    const { openCardCheckoutModal } = useGlobalModal(); 
    
    const paymentMethods = [
        "Transfer to bank",
        "Pay with Card",
        "USSD Payment",
        "Wallet Balance"
    ];

    const handleProceedClick = () => {
        // This opens the CardCheckoutModal (Image C) directly over the Distribution page.
        openCardCheckoutModal(); 
        
        // NO navigate() call is needed here, as the modal is global.
    };

    return (
        <div className="distribution-form-container">
            <h2 className="distribution-form-title">Distribution</h2>

            {/* Selected Products Section (The Overlapping Images) */}
            <div className="selected-products-section">
                <div className="selected-products-label-wrapper">
                    <span className="selected-products-label-bg">Selected Products</span>
                    <p className="scroll-instruction">Scroll to see selected products</p>
                </div>
                <div className="product-carousel-window">
                    <div className="product-carousel">
                        {selectedProductsPreview.map((p, index) => (
                            <img
                                key={p.id}
                                src={p.img}
                                alt={`Selected Product ${p.id}`}
                                className="scroll-product-image"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Search Bar for Customer */}
            <div className="search-customer-container">
                <input type="text" placeholder="Search customer by name" className="customer-search-input" />
            </div>

            {/* Two-Column Form Layout */}
            <div className="distribution-form-grid">
                <div className="form-group">
                    <label>Customer's ID</label>
                    <input type="text" value="87632p3242erDRTT" readOnly />
                    <small className="customer-name-hint">Egbetayo Damilola Ezekield</small>
                </div>

                <div className="form-group">
                    <label>Preferred Payment Method</label>
                    <select defaultValue="Transfer to bank">
                        {paymentMethods.map(method => (
                            <option key={method} value={method}>{method}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Amount to pay</label>
                    <input type="text" value="₦ 56,000" readOnly />
                </div>

                <div className="form-group">
                    <label>PIN</label>
                    <input type="password" value="****" />
                </div>
            </div>

            <div className="description-group">
                <label>Description</label>
                <textarea rows="5" readOnly>
                   Colourful Tops for Women. Well packed and contains about 30 yards of materials. Colourful Tops for Women. Well packed and contains about 30 yards of materials. Colourful Tops for Women. Well packed and contains about 30 yards of materials. Colourful Tops for Women. Well packed and contains about 30 yards of materials. Colourful Tops for Women. Well packed and contains about 30 yards of materials. 
                </textarea>
            </div>

            <button 
                className="proceed-btn"
                onClick={handleProceedClick}
            >
                Proceed
            </button>
        </div>
    );
}

export default DistributionForm;