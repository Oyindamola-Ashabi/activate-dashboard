import './NavTop.css'
import bellIcon from '../../../assets/Notif.png'
import searchIcon from '../../../assets/search.png'

const NavTop = () => {
    return (
        <div className='navcontainer'>
            
                <p className="greeting">
                    Good morning <span className="username">Sofiyah</span>
                </p>
                <img src={bellIcon} alt="notification-bell" className="bell" />
           

            
                
                <div className="search-box">
                    <img src={searchIcon} alt="search-img" className="search" />
                    <input type="text" placeholder="Search items" />
                </div>

                <button className="search-btn">Search</button>
            

        </div>
    )
}

export default NavTop