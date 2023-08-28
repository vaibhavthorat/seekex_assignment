import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import img5 from './images/Rectangle 3.png';
import img2 from './images/Rectangle 4.png';
import img3 from './images/Rectangle 5.png';
import img4 from './images/Rectangle 6.png';

export default function ProductDetails() {
    const {id}  = useParams();
    

    const items=[
        {id:1,title:'Men Henley Neck Full Sleeve Red Wine', price:399,img:img5},
        {id:2,title:'Men Henley Neck Full Sleeve Red Wine', price:399,img: img4},
        {id:3,title:'Men Henley Neck Full Sleeve Red Wine', price:399,img: img2},
        {id:4,title:'Men Henley Neck Full Sleeve Red Wine', price:399,img:img3},
        {id:5,title:'Men Henley Neck Full Sleeve Red Wine', price:399,img: img4},
        {id:6,title:'Men Henley Neck Full Sleeve Red Wine', price:399,img: img5},
        {id:7,title:'Men Henley Neck Full Sleeve Red Wine', price:399,img: img2},
        {id:8,title:'Men Henley Neck Full Sleeve Red Wine', price:399,img: img3},
    ]
  
      const [prod, setProd] = useState(items);
      let found = items.find(function (element) {
        return element.id== id;
    });
      

    
     
  return <>
 <div>
    <h1 style={{textAlign:"center"}}>Product Details</h1>
    <hr/>
    <img style={{marginLeft:"46%",width:"100px"}} src={found.img}/>
    <h3 style={{textAlign:"center"}} >Title:- {found.title}</h3>
    <h4 style={{textAlign:"center"}}>Price :- {found.price}</h4>

 </div>
  </>
}
