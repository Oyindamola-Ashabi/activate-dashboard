import Data from "./Data";
import './SideBar.css';
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../../../assets/logo.png';
import Logout from '../../../../assets/Logout.png'

const SideBar = () => {
    // const handleLogout = () => {
    //     alert("Logging out...");
        
    // };

    return (
        <div className="container">
            <img src={Logo} alt="" className="logo" />
            <div className="bar" style={{ display: "none" }}>
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
                            >
                                <img src={item.icon} alt="icon-image" className="iconn-img" />
                                <div className="text">{item.heading}</div>
                            </NavLink>

                        </div>
                    </div>

                );

            })}
            {/* LOGOUT BUTTON method 1
            <button className="logout-btn" onClick={handleLogout}>
                <img src={Logout} alt="logout icon" className="iconn-img" />
                <span>Logout</span>
            </button> */}

            <div className="logout">
                <img src={Logout} alt="" className="logout-now" />
                <p>Logout</p>
            </div>



            
        </div>
    );
};

export default SideBar;
