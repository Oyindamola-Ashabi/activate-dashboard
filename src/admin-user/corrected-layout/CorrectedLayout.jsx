import Rightside from "../common/right-bar/Rightside";
import SideBar from "../common/side-bar/data/SideBar";
import { Outlet } from "react-router-dom";
import './CorrectedLayout.css'


const CorrectedLayout = () => {
    return (
        <div className="correct-layout-container">
            <SideBar />
            <div className="middle-content">
                <Outlet /> {/* Renders Dashboard, AddCartDetails, Distribution, etc. */}
            </div>
            <Rightside />
        </div>
    );
};

export default CorrectedLayout