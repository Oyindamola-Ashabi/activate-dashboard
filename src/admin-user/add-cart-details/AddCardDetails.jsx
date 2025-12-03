import { useParams } from "react-router-dom";
import bigClothOne from '../../assets/bigCloth.png';
import './AddCardDetails.css'
import NavTop from "../common/nav-top/NavTop";
// import { FaArrowLeft } from "react-icons/fa";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const AddCardDetails = () => {
    const { id } = useParams();

    return (
        <div className="product-details">
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
                    Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more...
                </p>

                <div className="btn-row">
                    <button className="share-btn">Share</button>
                    <button className="add-btn">Add to cart</button>
                </div>
            </div>
        </div >
    );
};

export default AddCardDetails