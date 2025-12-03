import Data from "./Data";
import './SideBar.css';
import { NavLink } from "react-router-dom";  
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../../../assets/logo.png';

const SideBar = () => {
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
        </div>
    );
};

export default SideBar;
