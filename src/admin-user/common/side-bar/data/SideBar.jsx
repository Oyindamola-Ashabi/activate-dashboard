// src/admin-user/common/side-bar/data/SideBar.jsx

import Data from "./Data";
import './SideBar.css';
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../../../assets/logo.png';
import Logout from '../../../../assets/Logout.png'

// CRITICAL: Accept props for mobile functionality
const SideBar = ({ isOpen, onToggle }) => { 
    return (
        <div className={`container ${isOpen ? 'open' : ''}`}>
            <img src={Logo} alt="" className="logo" />
            
            {/* CRITICAL FIX: The inline style has been REMOVED! onClick added. */}
            <div className="bar" onClick={onToggle}> 
                <MenuIcon />
            </div>

            {Data.map((item) => {
                return (
                    <div key={item.id} className="inner-element">
                        <div className="side-bar">

                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive ? "new active-link" : "new"
                                }
                                onClick={onToggle} // Close sidebar on link click
                            >
                                <img src={item.icon} alt="icon-image" className="iconn-img" />
                                <div className="text">{item.heading}</div>
                            </NavLink>

                        </div>
                    </div>
                );
            })}
            
            <div className="logout">
                <img src={Logout} alt="" className="logout-now" />
                <p>Logout</p>
            </div>
        </div>
    );
};

export default SideBar;