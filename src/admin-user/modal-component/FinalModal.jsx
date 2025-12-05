import './Modals.css';

function FinalModal({ close }) {
  return (
    <>
      <div className="overlay" onClick={close}></div>

      <div className="modal small final-modal">
        <div className="modal-body">
          {/* Success Icon */}
          <div className="success-icon-container">
            {/* In a real app, this would be an SVG or an icon font/component */}
            <svg className="success-icon" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </div>

          <h3>Congratulations!!!</h3>
          <p>Your order request was successfully processed with reference number **#234ABHL450**. Kindly check my orders page to track items.</p>

          <div className="final-modal-actions">
            <button className="btn-secondary">Download Receipt</button>
            <button className="btn-primary done-btn" onClick={close}>Done</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FinalModal;