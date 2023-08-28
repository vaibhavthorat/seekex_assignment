import React from 'react'
import img1 from './images/Group 50.png';
import img2 from './images/Group 51.png';
import img3 from './images/Group 52.png';
import img4 from './images/Group 53.png';
import img5 from './images/Group 54.png';
import img6 from './images/Group 55.png';
import OfferCategoryCSS from './OfferCategory.module.css';

export default function OfferCategory() {
  return <>
  <div className={OfferCategoryCSS.container}>
  <div>
    <img src={img1}/>
    <h4 className={OfferCategoryCSS.overdiv}>Streetwear Collections</h4>
  </div>
  <div>
    <img src={img2}/>
    <h4 className={OfferCategoryCSS.overdiv}>Striped T-Shirts</h4>
  </div>
  <div>
    <img src={img3}/>
    <h4 className={OfferCategoryCSS.overdiv}>Round Neck T-Shirts</h4>
  </div>
  <div>
    <img src={img4}/>
    <h4 className={OfferCategoryCSS.overdiv}>Printed T-Shirts</h4>
  </div>
  <div>
    <img src={img5}/>
    <h4 className={OfferCategoryCSS.overdiv}>Oversized T-Shirts</h4>
  </div>
  <div>
    <img src={img6}/>
    <h4 className={OfferCategoryCSS.overdiv}>Half Sleeves T-Shirts</h4>
  </div>
  </div>
  </>
}
