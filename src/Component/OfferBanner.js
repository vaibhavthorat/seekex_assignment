import React from 'react'
import OfferBannerCSS from './OfferBanner.module.css';
import img1 from './images/image 2.png';
import img2 from './images/image 3.png';
import img3 from './images/image 4.png';
import img4 from './images/image 5.png';
import img5 from './images/image 6.png';

export default function OfferBanner() {
  return <>
    <div className={OfferBannerCSS.banner}>
        <div className={OfferBannerCSS.div1}>
            <a href=''><img src={img1}/></a>
            <a href=''><img src={img2}/></a>
        </div>
        <div  className={OfferBannerCSS.div2}>
            <a href=''><img src={img3}/></a>
            <a href=''><img src={img5}/></a>
            <a href=''><img src={img4}/></a>
        </div>
    </div>
  </>
}
