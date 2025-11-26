

// import SideBar from './admin-user/common/side-bar/data/SideBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './admin-user/layout/Layout'
import Dashboard from "./admin-user/dashboard/Dashboard";
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

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App