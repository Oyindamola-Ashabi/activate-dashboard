

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { GlobalModalProvider } from './admin-user/global/GlobalModalContext';
import Distribution from './admin-user/distribution/Distribution';
import AddCardDetails from './admin-user/add-cart-details/AddCardDetails';
import CorrectedLayout from './admin-user/corrected-layout/CorrectedLayout';
import Dashboard from './admin-user/dashboard/Dashboard';
import Collections from './admin-user/collections/Collections';
import SavedItem from './admin-user/saved-item/SavedItem';
import Wallet from './admin-user/wallet/Wallet';
import EditProfile from './admin-user/edit-profile/EditProfile';
import Contact from './admin-user/contact-support/Contact';


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <GlobalModalProvider> {/* sir, my GlobalModalProvider wraps the entire application routes */}
                    <Routes>
                        <Route path="/" element={<CorrectedLayout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="/dist" element={<Distribution />} />
                            <Route path='saved-item' element={<SavedItem/>}/>
                            <Route path='/collection' element={<Collections/>}/>
                            <Route path='/wallet' element={<Wallet/>}/>
                            <Route path='/edit-profile' element={<EditProfile/>}/>
                            <Route path='/contact-support' element={<Contact/>}/>

              
              <Route path="/product/:id" element={<AddCardDetails />} />
                        </Route>
                    </Routes>
                </GlobalModalProvider>
            </BrowserRouter>
        </div>
    )
}

export default App