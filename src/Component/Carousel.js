import React from 'react'
import banner1 from './images/banner1.png';
import CarouselCss from './Carousel.module.css';
export default function Carousel() {
  return <>
  <div className={CarouselCss.main}>
    <img src={banner1}/>
  </div>
  </>
}
