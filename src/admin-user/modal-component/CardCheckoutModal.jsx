import './Modals.css';
import closeImg from '../../assets/close.png'
import imgCursor from '../../assets/cursor.png'

// This is the intermediate screen that shows price breakdown but keeps the 'Card' tab active
function CardCheckoutModal({ close, switchToDelivery, confirmOrder }) {
  return (
    <>
      <div className="overlay" onClick={close}></div>

      <div className="modal">
        {/* Modal Header: 'Card' is active */}
        <div className="modal-tabs">
          <div className="tab-switch-group">
            <button className="tab active">Card</button>
            <button className="tab" onClick={switchToDelivery}>
              Pay on Delivery
            </button>
          </div>
        </div>
        <span className="close-btn" onClick={close}><img src={closeImg} alt="close" /></span>
        <div className="modal-body delivery-body">
          {/* Price Breakdown Section (Shared structure with PayOnDeliveryModal) */}
          <div className="price-list">
            <div className="price-item">
              <span>Item's Total(2)</span>
              <span className="amount">₦4,968</span>
            </div>
            <div className="price-item">
              <span>Delivery Fees</span>
              <span className="amount">₦620</span>
            </div>
            <div className="price-item">
              <span>International Customs Fees</span>
              <span className="amount">₦1,245</span>
            </div>
            <div className="price-item total-item">
              <span>Total</span>
              <span className="amount">₦6,845</span>
            </div>
          </div>

          {/* Delivery Address Section */}
          <div className="delivery-section">
            <div className="section-header">
              <label className="section-title">Delivery Address</label>
              <div className='coxx'>
                <button className="edit-btn">Edit</button>
                <img src={imgCursor} alt="cursor" className='cox' />
              </div>
            </div>
            <div className="delivery-box">
              24, Abasi Ojukwu Street, Alakuko, Lagos state
            </div>
          </div>

          {/* Door Delivery Section */}
          <div className="delivery-section">
            <label className="section-title">Door Delivery</label>
            <div className="delivery-box">
              Delivery between 10th October and 17th October, 2023
            </div>
          </div>

          <div className='btn-width'>
            <button className="btn-primary confirm-delivery-btn" onClick={confirmOrder}>
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardCheckoutModal;