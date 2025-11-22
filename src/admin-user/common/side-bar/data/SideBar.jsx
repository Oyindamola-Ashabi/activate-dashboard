// import Data from '../side-bar/data/Data'
import Data from "./Data"
// import {Box, List, ListItems} from '@mui/material'
// import { useState } from "react"
import './SideBar.css'
import { Link } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';


const SideBar = () => {

    // const [selected, setSelected] = useState(0);
    // const [expanded, setExpanded] = useState(true)
    return (
        <div className="container">

            <div className="bar" style={{display: "none"}}>
                <MenuIcon/>
            </div>
            {Data.map((item) => {
                return (
                    <div key={item.id} className="inner-element">
                        <div className="side-bar">
                            <Link to={item.path} className="new">
                                <img src={item.icon} alt="icon-image" />
                                <div>{item.heading}</div>
                            </Link>
                        </div>



                    </div>
                )
            })}


        </div>

    )
}

export default SideBar