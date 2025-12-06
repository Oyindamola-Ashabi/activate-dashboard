// src/admin-user/corrected-layout/CorrectedLayout.jsx

import Rightside from "../common/right-bar/Rightside";
import SideBar from "../common/side-bar/data/SideBar"; 
import { Outlet } from "react-router-dom";
import './CorrectedLayout.css'
import { useState } from "react"; // <-- Make sure to import useState

const CorrectedLayout = () => {
    // 1. State to manage the visibility of the sidebar on mobile
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="correct-layout-container">
            {/* 2. Pass state and toggle function to SideBar */}
            <SideBar isOpen={isSidebarOpen} onToggle={toggleSidebar} /> 
            
            {/* 3. Mobile Overlay: Renders a transparent layer to close the menu when clicking outside */}
            {isSidebarOpen && <div className="overlay-mobile" onClick={toggleSidebar}></div>}

            <div className="middle-content">
                <Outlet />
            </div>
            <Rightside />
        </div>
    );
};

export default CorrectedLayout;