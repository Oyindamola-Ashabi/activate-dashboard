import './CardTwo.css'
import bigClothOne from '../../../../assets/top-cloth-one.png'
import smallImgage from '../../../../assets/group-pics.png'


const products = [
    { id: 1, img: bigClothOne, title: "Thick Vintage", price: "₦4300", stock: 40, img2: smallImgage },
    { id: 2, img: bigClothOne, title: "Thick Vintage", price: "₦4300", stock: 40, img2: smallImgage },
    { id: 3, img: bigClothOne, title: "Thick Vintage", price: "₦4300", stock: 40, img2: smallImgage },
    { id: 4, img: bigClothOne, title: "Thick Vintage", price: "₦4300", stock: 40, img2: smallImgage },
    { id: 5, img: bigClothOne, title: "Thick Vintage", price: "₦4300", stock: 40, img2: smallImgage },
    { id: 6, img: bigClothOne, title: "Thick Vintage", price: "₦4300", stock: 40, img2: smallImgage }
];


const CardTwo = () => {
    return (
        <div className="cards-wrapper">
            <p className="cards-title">Latest Trends in Stock</p>
            <div className="cards-container">
                {products.map((p) => (
                    <div className="card" key={p.id}>
                        <div className="card-img-wrapper">
                            <img src={p.img} alt="name" className="card-img" />
                        </div>

                        <div className="card-row">
                            <h4>{p.title}</h4>
                            <p className="price">{p.price}</p>
                        </div>

                        <div className="avatars">
                            <img src={p.img2} alt="name" className="card-img2" />
                            <p className="stock">{p.stock} units in stock</p>
                        </div>
                        <button className="cart-btn">Add to cart</button>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardTwo
