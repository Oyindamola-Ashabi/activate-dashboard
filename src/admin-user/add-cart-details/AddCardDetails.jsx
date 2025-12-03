import { useParams } from "react-router-dom";
import bigClothOne from '../../assets/bigCloth.png';
import './AddCardDetails'

const AddCardDetails = () => {
    const { id } = useParams();

    return (
        <div className="product-details">
            <h2>Colourful Ankara Fabrics</h2>

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
    );
};

export default AddCardDetails