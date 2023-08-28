import React from 'react'
import HeaderCss from './Navbar.module.css';
import img from './images/Frame.png';
import img2 from './images/Frame (1).png';
import img3 from './images/Frame (2).png';
import img4 from './images/Frame (3).png';
import g3 from './images/Group 3.png';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return <>
   <div className={HeaderCss.header}>
    <h4>Welcome to Our Store Hiscraves</h4>
    <h4>Call Us: 1234567890</h4>
   </div>
   <div className={HeaderCss.navbar}>
      <div><h4><img src={g3}/></h4></div>
      <div><h4 style={{marginLeft:"200px"}}><Link style={{textDecoration:"none"}} to="/">LOGO</Link></h4></div>
      <div style={{marginLeft:"00px"}}>
       <ul>
          <li><a href='#'><img src={img}/></a></li>
          <li><a href='#'><img src={img2}/></a></li>
          <li><a href='#'><img src={img3}/></a></li>
          <li><a href='#'><img src={img4}/></a></li>
      </ul> 
      </div>
   </div>
  </>
}
