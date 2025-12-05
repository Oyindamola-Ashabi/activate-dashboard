import './Modals.css';
import closeImg from '../../assets/close.png'
// import imgWallet from '../../assets/wallet.png'
import imgBlur from '../../assets/blur.png'
import imgSim from '../../assets/sim.png'

function PaymentCardModal({ close, switchToDelivery, proceedToCheckout }) {
  return (
    <>
      <div className="overlay" onClick={close}></div>

      <div className="modal">
        {/* Modal Header for Tabs and Close Button */}
        <div className="modal-tabs">
          <div className="tab-switch-group">
            <button className="tab active">Card</button>
            <button className="tab" onClick={switchToDelivery}>
              Pay on Delivery
            </button>
          </div>
        </div>
        <span className="close-btn" onClick={close}><img src={closeImg} alt="close" /></span>

        <div className="modal-body">
          {/* Card Preview Section */}
          <div className="card-preview">
            <div className="card-header-row">
              <span className="account-type">Savings Account</span>
              <span className="active-status">Active</span>
            </div>
            <div className='sim'>
              <div className="card-user-name">Egbetayo Damiloa Ezekiel</div>
              <div className='real-sim'><img src={imgSim} alt="" /></div>
            </div>
            {/* <div className="card-user-name">Egbetayo Damiloa Ezekiel</div> */}
            <div className="card-number">N XXXX XXXX XXX</div>
            <div className='card-num'>
              <div className="card-number">5329 **** **** 7890</div>
              <button className="fund-wallet-btn">fund wallet</button>
              {/* <button className="fund-wallet-btn"><img src={imgWallet} alt="wallet" /></button> */}
            </div>
            {/* <div className="card-number">5329 **** **** 7890</div>
            <button className="fund-wallet-btn"><img src={imgWallet} alt="wallet" /></button> */}
            <img src={imgBlur} alt="blur" className='blur' />
          </div>

          {/* Input Fields - Organized into two columns with labels */}
          <div className="input-grid">
            {/* Row 1 */}
            <div className="input-group">
              <label>Card Number</label>
              <input defaultValue="5339 4532 7890 7890" />
              <div className="input-subtext">Egbetayo Damiloa Ezekiel</div>
            </div>
            <div className="input-group">
              <label>Account type</label>
              <input defaultValue="N 56,000" /> {/* This should probably be Amount based on the image */}
            </div>

            {/* Row 2 */}
            <div className="input-group">
              <label>Expiry Date</label>
              <input type="text" defaultValue="09 - September - 2023" />
            </div>
            <div className="input-group">
              <label>Amount</label>
              <input type="text" defaultValue="N 56,000" />
            </div>

            {/* Row 3 */}
            <div className="input-group">
              <label>PIN</label>
              <input type="password" defaultValue="****" />
            </div>
            <div className="input-group">
              <label>Description</label>
              <input type="text" defaultValue="Payment for fabrics." />
            </div>
          </div>

          {/* Subtotal and Save for Later toggle */}
          <div className="checkout-footer">
            <div className="subtotal-text">
              Subtotal: <span className="subtotal-amount">₦56,000</span>
            </div>
            <div className="toggle-switch">
              <span>Save for later</span>
              <input type="checkbox" id="saveLater" />
              <label htmlFor="saveLater" className="switch-label"></label>
            </div>
          </div>

          {/* Proceed Button */}
          <div className='btn-width'>
            <button className="btn-primary" onClick={proceedToCheckout}>
              Proceed to checkout
            </button>
          </div>
          {/* <button className="btn-primary" onClick={proceedToCheckout}>
            Proceed to checkout
          </button> */}
        </div>
      </div>
    </>
  );
}

export default PaymentCardModal;