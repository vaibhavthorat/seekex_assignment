import React from 'react'
import CategoryCSS from './CategoryItems.module.css';
import img1 from './images/Group 244.png';
import img2 from './images/Group 245.png';
import img3 from './images/Group 246.png';
import img4 from './images/Group 247.png';
import img5 from './images/Group 248.png';
import img6 from './images/Group 249.png';


export default function CategoryItems() {
  return <>
    <div className={CategoryCSS.container}>
        <div>
            <img src={img1}/>
            <h4>Men’s T-Shirts</h4>
        </div>
        <div>
            <img src={img2}/>
            <h4>Women’s Wear</h4>
        </div>
        <div>
            <img src={img3}/>
            <h4>Winter Collections</h4>
        </div>
        <div>
            <img src={img4}/>
            <h4>Hooded T-Shirts</h4>
        </div>
        <div>
            <img src={img5}/>
            <h4>Polo Neck T-Shirts</h4>
        </div>
        <div>
            <img src={img6}/>
            <h4>Full Sleeves T-Shirts</h4>
        </div>
        
    </div>
  </>
}
