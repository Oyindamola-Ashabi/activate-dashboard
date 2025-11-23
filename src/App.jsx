

// import SideBar from './admin-user/common/side-bar/data/SideBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './admin-user/layout/Layout'
import DashboardNew from './admin-user/dashboard/DashboardNew'

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      {/* <SideBar/> */}
      <Routes>
        <Route path='/dashboard' element={<DashboardNew/>}/>
                <Route path="/" element={<Layout/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App