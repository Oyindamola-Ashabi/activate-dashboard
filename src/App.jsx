

// import SideBar from './admin-user/common/side-bar/data/SideBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Layout from './admin-user/layout/Layout'
// import Dashboard from "./admin-user/dashboard/Dashboard";
// import DistributeLayout from './admin-user/distribute-layout/DistributeLayout';
import Distribution from './admin-user/distribution/Distribution';
import AddCardDetails from './admin-user/add-cart-details/AddCardDetails';

import CorrectedLayout from './admin-user/corrected-layout/CorrectedLayout';
import Dashboard from './admin-user/dashboard/Dashboard';



// import Distribution from './admin-user/distribution/Distribution';


const App = () => {
  return (
    <div>

      <BrowserRouter>
        {/* <SideBar/> */}
        <Routes>
          <Route path="/" element={<CorrectedLayout />}>
            <Route index element={<Dashboard />} />
            {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
            {/* <Route path="/distribution" element={<Distribution/>}/> */}
            {/* <Route path="/" element={<Layout/>}/> */}
            {/* <Route path="/dist" element={<DistributeLayout/>}/> */}
            <Route path="/dist" element={<Distribution />} />
            <Route path="/product/:id" element={<AddCardDetails />} />
          </Route>






        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App