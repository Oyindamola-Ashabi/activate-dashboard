
import SideBar from "../common/side-bar/data/SideBar"
import './Layout.css'
import Rightside from "../common/right-bar/Rightside"
import Dashboard from "../dashboard/Dashboard"






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