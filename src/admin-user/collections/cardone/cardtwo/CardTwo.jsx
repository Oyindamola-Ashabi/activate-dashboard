import './CardTwo.css'
import bigClothOne from '../../../../assets/top-cloth-one.png'
import bigClothTwo from '../../../../assets/clothhhhh.png'
import bigClothThree from '../../../../assets/clothhh.png'
import bigClothFour from '../../../../assets/clothhh.png'
import bigClothFive from '../../../../assets/clothhhh.png'
import bigClothSix from '../../../../assets/cloth.png'
import smallImgage from '../../../../assets/group-pics.png'
import redImage from '../../../../assets/red-love.png'
import myLove from '../../../../assets/white-love.png'
import { useNavigate } from "react-router-dom";



const products = [
    { id: 1, img: bigClothOne, title: "Thick Vintage", price: "₦4300", stock: 40, img2: smallImgage, img3: redImage},
    { id: 2, img: bigClothTwo, title: "Thick Vintage", price: "₦4300", stock: 20, img2: smallImgage, img3: redImage},
    { id: 3, img: bigClothThree, title: "Thick Vintage", price: "₦4300", stock: 30, img2: smallImgage, img3: redImage },
    { id: 4, img: bigClothFour, title: "Thick Vintage", price: "₦4300", stock: 70, img2: smallImgage, img3: myLove },
    { id: 5, img: bigClothFive, title: "Thick Vintage", price: "₦4300", stock: 60, img2: smallImgage, img3: myLove },
    { id: 6, img: bigClothSix, title: "Thick Vintage", price: "₦4300", stock: 50, img2: smallImgage, img3: myLove }
];





const CardTwo = () => {
    const navigate = useNavigate();
    return (
        <div className="cards-wrapper">
            <p className="cards-title">Latest Trends in Stock</p>
            <div className="cards-container">
                {products.map((p) => (
                    <div className="card" key={p.id}>
                        <div className="card-img-wrapper">
                            <img src={p.img} alt="name" className="card-img" />
                            <img src={p.img3} alt="red" className="card-red" />

                        </div>

                        <div className="card-row">
                            <h4>{p.title}</h4>
                            <p className="price">{p.price}</p>
                        </div>

                        <div className="avatars">
                            <img src={p.img2} alt="name" className="card-img2" />
                            <p className="stock">{p.stock} units in stock</p>
                        </div>
                        <button
                            className="cart-btn"
                            onClick={() => navigate(`/product/${p.id}`)}
                        >
                            Add to cart
                        </button>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardTwo
