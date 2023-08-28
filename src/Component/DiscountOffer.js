import React from 'react'
import DiscountOfferCSS from './DiscountOffer.module.css';
import img1 from './images/diamond 1.png';
import img2 from './images/discount 1.png';
import g1 from './images/Group.png';
import g2 from './images/Group 196.png';
import g3 from './images/Group 197.png';
import g4 from './images/Group 198.png';

export default function DiscountOffer() {
  return <>
    <div className={DiscountOfferCSS.container}>
          <div className={DiscountOfferCSS.div1}>
            <img src={img1}/>
            <h3>Hurry Up!</h3>
            <h1>85 % OFF</h1>
            <h5>Sale</h5>
            <button>SHOP NOW</button>
          </div>
          <div className={DiscountOfferCSS.div2}>
          <img src={img2}/>
            <h3>Hurry Up!</h3>
            <h1>75 % OFF</h1>
            <h5>Sale</h5>
            <button>SHOP NOW</button>
          </div>
    </div>
    <div className={DiscountOfferCSS.service}>
      <div>
        <img src={g1}/>
        <h4>7 Days Return</h4>
      </div>
      <div>
        <img src={g2}/>
        <h4>Quality Products</h4>
      </div>
      <div>
        <img src={g3}/>
        <h4>Safe Payment</h4>
      </div>
      <div>
        <img src={g4}/>
        <h4>24x7 Helpline</h4>
      </div>

    </div>
  </>
}
