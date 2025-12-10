
import './Wallet.css';
import imgBlur from '../../assets/blur.png';
import imgSim from '../../assets/sim.png'

const Wallet = () => {

    // Data for the two cards
    const cardData = [
        {
            id: 1,
            status: 'Active',
            balance: 'N 54,000,657',
            name: 'Egbetayo Damilola',
            lastFour: '7890',
            isActive: true,
            // img1: imgBlur,
            // img2: imgSim,
        },
        {
            id: 2,
            status: 'Inactive',
            balance: 'N 54,000,657',
            name: 'Egbetayo Damilola',
            lastFour: '7890',
            isActive: false,
            // img1: imgBlur,
            // img2: imgSim,
        },
    ];

    const WalletCard = ({ card }) => (
        // The container holds the card's background and structure
        <div className={`wallet-card-preview ${card.isActive ? 'active-card' : 'inactive-card'}`}>
            <div className="card-header-row">
                <p className="account-type">Savings account</p>
            </div>


            <div className="card-use-sim">
                <div className="card-user-name">{card.name}</div>
                <img src={imgSim} alt="sim" className='sim' />
            </div>

            <div className="card-user-info">
                <div className="card-balance">{card.balance}</div>
                <div><button className="fund-wallet-btn">Fund Wallet</button></div>

            </div>

            <div className="card-footer-row">
                <div className="card-2-number">5339 4567 5432 {card.lastFour}</div>

                <p className="active-status">{card.status}</p>
            </div>
            {imgBlur && <img src={imgBlur} alt="blur" className='blur-design' />}
            {imgBlur && <img src={imgBlur} alt="blur" className='blur-second-design' />}
        </div>
    );


    return (
        <div className="wallet-page-container">
            <h1 className="wallet-title">Wallet</h1>
            <div className="wallet-cards-grid">
                {cardData.map(card => (
                    <WalletCard key={card.id} card={card} />
                ))}
            </div>
        </div>
    );
}

export default Wallet;