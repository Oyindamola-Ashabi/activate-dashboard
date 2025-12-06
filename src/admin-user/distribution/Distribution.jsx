// src/admin-user/distribution/Distribution.jsx

import React, { useState } from 'react';
import NavTop from '../common/nav-top/NavTop'; 
import DistributionGrid from './DistributionGrid'; 
import DistributionForm from './DistributionForm'; // Form view component
import './Distribution.css'; 

const Distribution = () => {
    // State to toggle between the grid selection view (false) and the form view (true)
    const [isViewingForm, setIsViewingForm] = useState(false);

    // Function passed to the grid button to switch to the form view
    const switchToForm = () => {
        setIsViewingForm(true);
    };

    // Function to switch back to the grid view (if needed)
    const switchToGrid = () => {
        setIsViewingForm(false);
    };

    return (
        <div className="distribution-page-container">
            <NavTop />
            
            {/* Render DistributionForm when isViewingForm is true */}
            {isViewingForm ? (
                <DistributionForm 
                    // We can pass the back function, although the image doesn't show a back button
                    goBackToSelection={switchToGrid} 
                />
            ) : (
                /* Render DistributionGrid when isViewingForm is false */
                <DistributionGrid 
                    // 🛑 Pass the function that changes the state to the Grid component
                    onSimilarProductsClick={switchToForm} 
                />
            )}
        </div>
    );
}

export default Distribution;