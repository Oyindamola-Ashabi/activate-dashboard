// src/admin-user/add-cart-details/AddCardDetails.jsx

import React from "react"; 
import { useParams } from "react-router-dom"; 
import { useGlobalModal } from '../global/GlobalModalContext'; // 🛑 IMPORT CONTEXT HOOK
import bigClothOne from "../../assets/bigCloth.png";
import "./AddCardDetails.css";
import NavTop from "../common/nav-top/NavTop";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// REMOVE ALL MODAL IMPORTS and state hooks (useState, useEffect, useLocation)

import myLove from '../../assets/love-me.png'

const AddCardDetails = () => {
    const { id } = useParams();
    // 🛑 USE CONTEXT HOOK
    const { openCardModal } = useGlobalModal(); 

    // The entire component is now purely structural and functional for the product details page.

    return (
        <div className="product-details-page">

            <div className={`product-details`}> 
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

                        {/* Button now calls the context function (Image A) */}
                        <button className="add-btn" onClick={openCardModal}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Modals are rendered via GlobalModalContext, so no rendering here */}

            <div className="love-me">
                <img src={myLove} alt="" />
            </div>
        </div>
    );
};

export default AddCardDetails;