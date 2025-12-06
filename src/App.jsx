import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Distribution from './admin-user/distribution/Distribution';
import AddCardDetails from './admin-user/add-cart-details/AddCardDetails';
import CorrectedLayout from './admin-user/corrected-layout/CorrectedLayout';
import Dashboard from './admin-user/dashboard/Dashboard';
import SavedItem from './admin-user/save-item/SavedItem';



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CorrectedLayout />}>
            <Route index element={<Dashboard/>}/>
            <Route path="/dist" element={<Distribution />} />
            <Route path='saved-item' element={<SavedItem/>}/>
            
            <Route path="/product/:id" element={<AddCardDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App