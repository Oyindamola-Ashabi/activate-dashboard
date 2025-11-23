
import SideBar from "../common/side-bar/data/SideBar"
import './Layout.css'
import Rightside from "../common/right-bar/Rightside"
import DashboardNew from "../dashboard/DashboardNew"





const Layout = () => {
  return (
    <div className="layout-container">
        <SideBar/>
        <DashboardNew/>
       
        <Rightside/>

    </div>
  )
}

export default Layout