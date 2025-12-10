import CardOne from '../some-collections/cardone/cardOne'
import CardTwo from '../some-collections/cardtwo/CardTwo'


import NavTop from '../common/nav-top/NavTop'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <NavTop />
      <CardOne />
      <CardTwo/>
      

    </div>
  )
}

export default Dashboard