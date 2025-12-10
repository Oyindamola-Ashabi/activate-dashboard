// src/admin-user/SavedItem/SavedItem.jsx (Assumed Location)

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// 🛑 Import CardTwo's CSS to apply the grid styles
import '../some-collections/cardtwo/CardTwo.css'; 

import NavTop from '../common/nav-top/NavTop'; 
// 🛑 Import both data arrays
import { CollectionsData, otherCollectionData } from './CollectionsData'; 
import './Collections.css';



const categories = [
  'Ankara', 
  'Vintage', 
  'Aso-Oke', 
  'Palazzo', 
  'Jeans', 
];


const Collections = () => {
    // State for which category tab is active
    const [activeCategory, setActiveCategory] = useState('Ankara');
    // State to track if the user is viewing the "others" collection
    const [isViewingOthers, setIsViewingOthers] = useState(false); 
    const navigate = useNavigate();

    // Function to handle category click
    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        // Reset "view others" to FALSE when a standard category is clicked
        setIsViewingOthers(false); 
    }

    // Determine which products to display based on the state
    const productsToDisplay = isViewingOthers 
        ? otherCollectionData // Display the 9 "other" items
        : CollectionsData.filter( // Otherwise, filter savedItemData by the active category
            item => item.category === activeCategory
          );


    return (
        <div className="saved-item-page-container">
            <NavTop />
            
            <div className="saved-content-wrapper">
                {/* Dynamically display the title */}
                <h2 className="saved-collections-title">
                    {isViewingOthers ? "Other Collections" : "Collections"}
                </h2>
                
                {/* Category Tabs */}
                <div className="categories-wrapper">
                    <div className="categories-list">
                        {categories.map((category) => (
                            <button
                                key={category}
                                // Button is active only if category matches AND we are NOT viewing others
                                className={`category-button ${activeCategory === category && !isViewingOthers ? 'active' : ''}`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </button>
                        ))}
                        <div className="view-others">
                            <button 
                                // Give the "View others" button an active style when its selected
                                className={`view-others-btn ${isViewingOthers ? 'active-view' : ''}`}
                                // Set the new state to TRUE when this button is clicked
                                onClick={() => setIsViewingOthers(true)} 
                            >
                                View others here <span className="arrow">→</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Product Grid (Renders the determined set of products) */}
                <div className="cards-wrapper no-title-padding">
                    <div className="cards-container">
                        {productsToDisplay.map((p) => (
                            <div className="card" key={p.id}>
                                <div className="card-img-wrapper">
                                    <img src={p.img} alt={p.title} className="card-img" />
                                    {/* p.img3 is the love icon (red or white) */}
                                    <img src={p.img3} alt="love icon" className="card-red" /> 
                                </div>

                                <div className="card-row">
                                    <h4>{p.title}</h4>
                                    <p className="price">{p.price}</p>
                                </div>

                                <div className="avatars">
                                    {/* p.img2 is the small group-pics.png icon */}
                                    <img src={p.img2} alt="stock group" className="card-img2" />
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
            </div>
        </div>
    );
}

export default Collections;