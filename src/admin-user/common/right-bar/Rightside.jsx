import './Rightside.css'
import React, { useState } from "react";
import clothImg from '../../../assets/top-cloth-one.png'
import cartImg from '../../../assets/small-cart.png'
import imgOne from '../../../assets/cloth-one.png'
import imgTwo from '../../../assets/cloth-two.png'
import imgThree from '../../../assets/cloth-three.png'
import imgFour from '../../../assets/cloth-four.png'
import imgFive from '../../../assets/cloth-five.png'
const Rightside = () => {
  const [qty, setQty] = useState(2);

  const increase = () => setQty(qty + 1);
  const decrease = () => qty > 1 && setQty(qty - 1);



  return (
    <div className='right-side-container'>
      <div className='cart-container'>
        <div className='cart-logo'>
          <h3>Cart Items</h3>
          <img src={cartImg} alt="img" className='mainCart' />
        </div>

        <div className="cart-item">
          <img src={clothImg} alt="item" className="cart-img" />

          <div className="cart-details">
            <p className="item-title">Colourful Ankara Fabrics...</p>

            <div className="qty-box">
              <button onClick={decrease} className="qty-btn">-</button>
              <span className="qty-number">{qty}</span>
              <button onClick={increase} className="qty-btn">+</button>
            </div>

            <button className="remove-btn">Remove Item</button>
          </div>
        </div>

        <button className="checkout-btn">Proceed to checkout</button>

        <div className='advert-text'>
          <h3 className='advert'>Stay up to date with our adverts here</h3>
          <h3 className='advert'>3 / 5</h3>
        </div>
        <div className='grouped-images'>
          <img src={imgOne} alt="" className='img-one'/>
          <img src={imgTwo} alt="" className='img-two'/>
          <img src={imgThree} alt="" className='img-three'/>
          <img src={imgFour} alt="" className='img-four'/>
          <img src={imgFive} alt="" className='img-five'/>
        </div>
      </div>
      {/* <div className='below-cloth'>
        <div className='advert-text'>
          <h3 className='advert'>Stay up to date with our adverts here</h3>
          <h3 className='advert'>3 / 5</h3>
        </div>

      </div> */}

    </div>
  );

};

export default Rightside