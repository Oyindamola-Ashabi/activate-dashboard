// src/admin-user/global/GlobalModalContext.jsx

import React, { createContext, useState, useContext } from 'react';

// Import all 4 modal components needed for the flow
import PaymentCardModal from '../modal-component/PaymentCardModal';
import CardCheckoutModal from '../modal-component/CardCheckoutModal'; 
import PayOnDeliveryModal from '../modal-component/PayOnDeliveryModal';
import FinalModal from '../modal-component/FinalModal';

export const GlobalModalContext = createContext();

export const GlobalModalProvider = ({ children }) => {
    // State values: "card", "cardCheckout", "delivery", "final"
    const [activeModal, setActiveModal] = useState(null);

    // Modal control functions
    const openCardModal = () => setActiveModal("card");
    const openCardCheckoutModal = () => setActiveModal("cardCheckout"); 
    const openDeliveryModal = () => setActiveModal("delivery");
    const openFinalModal = () => setActiveModal("final");
    const closeModals = () => setActiveModal(null);

    const ModalRenderer = () => {
        // Renders the active modal as a fixed overlay above all content
        if (!activeModal) return null;

        const commonProps = {
            close: closeModals,
            switchToDelivery: openDeliveryModal,
            confirmOrder: openFinalModal,
            switchToCard: openCardModal, // For delivery modal switch
        };

        switch (activeModal) {
            case "card":
                return (
                    <PaymentCardModal
                        {...commonProps}
                        proceedToCheckout={openCardCheckoutModal}
                    />
                );
            case "cardCheckout":
                return <CardCheckoutModal {...commonProps} />;
            case "delivery":
                return <PayOnDeliveryModal {...commonProps} />;
            case "final":
                return <FinalModal close={closeModals} />;
            default:
                return null;
        }
    };

    return (
        <GlobalModalContext.Provider 
            value={{ activeModal, openCardCheckoutModal, openCardModal, closeModals }}
        >
            {children}
            {/* The ModalRenderer lives here, outside of the main content flow, covering the screen */}
            <ModalRenderer /> 
            
            {/* Overlay/backdrop for blurring or darkening the background */}
            {activeModal && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 900 // Below modal, above content
                }} />
            )}
        </GlobalModalContext.Provider>
    );
};

export const useGlobalModal = () => useContext(GlobalModalContext);