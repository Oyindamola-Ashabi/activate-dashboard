

// import SideBar from './admin-user/common/side-bar/data/SideBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './admin-user/layout/Layout'
import Dashboard from "./admin-user/dashboard/Dashboard";
import DistributeLayout from './admin-user/distribute-layout/DistributeLayout';
import Distribution from './admin-user/distribution/Distribution';
// import Distribution from './admin-user/distribution/Distribution';


const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      {/* <SideBar/> */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        {/* <Route path="/distribution" element={<Distribution/>}/> */}
                <Route path="/" element={<Layout/>}/>
                <Route path="/dist" element={<DistributeLayout/>}/>
                <Route path="/distribution" element={<Distribution/>}/>
                

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App