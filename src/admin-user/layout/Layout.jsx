import { Dashboard } from "@mui/icons-material"
import SideBar from "../common/side-bar/data/SideBar"
import './Layout.css'
import Rightside from "../common/right-bar/Rightside"


const Layout = () => {
  return (
    <div className="layout-container">
        <SideBar/>
        <Dashboard/>
        <Rightside/>

    </div>
  )
}

export default Layout