import React from 'react'
import FooterCSS from './Footer.module.css';
import img1 from './images/Group 230.png';
import img2 from './images/Group 231.png';
import img3 from './images/Group 232.png';
import img4 from './images/Group 233.png';
import img5 from './images/Group 234.png';


export default function Footer() {
  return <>
   
    <hr/>
    <div className={FooterCSS.container}>
        <div style={{marginBottom:"30px"}}>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries....</p>
        <img src={img1}/>
        <img src={img2}/>
        <img src={img3}/>
        <img src={img4}/>
        <img src={img5}/>
        </div>
        <div>
        <h2>ONLINE SHOPPING</h2>
        <ul>
            <li>Men’s T-Shirts</li>
            <li>Women’s Wear</li>
            <li>Winter Collections</li>
            <li>Hooded T-Shirts</li>
            <li>Streetwear Collections</li>
        </ul>
        </div>
        <div>
        <h2>CUSTOMER POLICIES</h2>
        <ul>
            <li> About Us</li>
            <li>Terms & Conditions</li>
            <li>Shipping & Returns Policy</li>
            <li>Cancellation & Refund Policy</li>
            <li>Contact Us</li>
        </ul>
        </div>
        <div>
        <h2>STORE INFORMATION</h2>
        <ul>
            <li>Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. </li>
            <li>Call Us: 1234567890</li>
            <li>Email Us: info@yourmail.com</li>
        </ul>
        </div>
    </div>
  </>
}
