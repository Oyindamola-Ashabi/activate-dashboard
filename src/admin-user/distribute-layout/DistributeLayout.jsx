import Rightside from '../common/right-bar/Rightside'
import SideBar from '../common/side-bar/data/SideBar'
import Distribution from '../distribution/Distribution'
import './DistributeLayout.css'

const DistributeLayout = () => {
  return (
    <div className='distribute-layout-container'>
        <SideBar/>
        <Distribution/>
        <Rightside/>

    </div>
  )
}

export default DistributeLayout