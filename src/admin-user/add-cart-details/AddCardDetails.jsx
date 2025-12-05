import { useState } from "react";
import { useParams } from "react-router-dom";
import bigClothOne from "../../assets/bigCloth.png";
import "./AddCardDetails.css";
import NavTop from "../common/nav-top/NavTop";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Import all 4 components needed for the flow
import PaymentCardModal from '../modal-component/PaymentCardModal';
import CardCheckoutModal from '../modal-component/CardCheckoutModal'; // <<< NEW
import PayOnDeliveryModal from '../modal-component/PayOnDeliveryModal';
import FinalModal from '../modal-component/FinalModal';

import myLove from '../../assets/love-me.png'

const AddCardDetails = () => {
    const { id } = useParams();

    // Modal state manager
    // State values: "card" (Image A), "cardCheckout" (Image C), "delivery" (Image B), "final" (Image D)
    const [activeModal, setActiveModal] = useState(null);

    const openCardModal = () => setActiveModal("card");
    const openCardCheckoutModal = () => setActiveModal("cardCheckout"); // State for Image C (Price Breakdown, Card active)
    const openDeliveryModal = () => setActiveModal("delivery");
    const openFinalModal = () => setActiveModal("final");
    const closeModals = () => setActiveModal(null);

    return (
        <div className="product-details-page">

            {/* Applies blur effect when any modal is active */}
            <div className={`product-details ${activeModal ? "blur" : ""}`}>
                <NavTop />

                <div className="colorful">
                    <ArrowBackIcon />
                    <h2>Colourful Ankara Fabrics</h2>
                </div>

                <div className="wrap">
                    <div className="product-img-wrapper">
                        <img src={bigClothOne} alt="Product" className="product-img" />
                    </div>

                    <h3>Description</h3>

                    <p>
                        Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and
                        more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics
                        and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabr
                        ics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara
                        Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more
                        Ankara Fabrics and more Ankara Fabrics and more...
                    </p>

                    <div className="btn-row">
                        <button id="share-btn">Share</button>

                        {/* ADD TO CART triggers the first modal (Image A) */}
                        <button className="add-btn" onClick={openCardModal}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Pop-up Modals Rendering --- */}

            {/* 1. Payment Input Modal (Image A) */}
            {activeModal === "card" && (
                <PaymentCardModal
                    close={closeModals}
                    switchToDelivery={openDeliveryModal}
                    // FIX: This button now opens the intermediate checkout modal
                    proceedToCheckout={openCardCheckoutModal} 
                />
            )}
            
            {/* 2. Card Checkout Modal (Image C) */}
            {activeModal === "cardCheckout" && (
                <CardCheckoutModal
                    close={closeModals}
                    switchToDelivery={openDeliveryModal} // Tab switches to Image B
                    confirmOrder={openFinalModal} // Button goes to Image D
                />
            )}

            {/* 3. Pay on Delivery Modal (Image B) */}
            {activeModal === "delivery" && (
                <PayOnDeliveryModal
                    close={closeModals}
                    switchToCard={openCardModal} // Tab switches to Image A
                    confirmOrder={openFinalModal} // Button goes to Image D
                />
            )}

            {/* 4. Final Modal (Image D) */}
            {activeModal === "final" && <FinalModal close={closeModals} />}

            <div className="love-me">
                <img src={myLove} alt="" />
            </div>
        </div>
    );
};

export default AddCardDetails;