import './AddCartLayout.css'
import SideBar from '../common/side-bar/data/SideBar'
import AddCardDetails from '../add-cart-details/AddCardDetails'
import Rightside from '../common/right-bar/Rightside'

const AddCartLayout = () => {
  return (
    <div className='add-cart-layout'>
        <SideBar/>
        <AddCardDetails/>
        <Rightside/>
    
    </div>
  )
}

export default AddCartLayout