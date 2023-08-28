import React, { useState } from 'react'
import TrendingCSS from './TrendingTshirt.module.css';
import img5 from './images/Rectangle 3.png';
import img2 from './images/Rectangle 4.png';
import img3 from './images/Rectangle 5.png';
import img4 from './images/Rectangle 6.png';
import { Link } from 'react-router-dom';

// import cart from './images/Group 68.png';
// import like from './images/Group 68.png';
// import share from './images/Group 68.png';

export default function TrendingTshirt() {

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

const [item,setItem]=useState(items);

  return <>
  <div className={TrendingCSS.container}>
    <h1>Trending T-Shirts</h1>
  </div>
  <div className={TrendingCSS.cardcontainer}>
    {item.map((product,index)=>(
        <Link to={`/productdetails/${product.id}`} style={{textDecoration:"none"}}><div key={index}className={TrendingCSS.card}>
            <div>
                <div className={TrendingCSS.data}><img src={product.img}/>
                    <div>
                      <button>Add to Cart</button><button>Like</button><button>Share</button>
                      </div>
                </div>
                <h5>{product.title}</h5>
                <p>Rs <span>{product.price}</span></p>
            </div>
            <div className={TrendingCSS.sizebutton}>
            <button>S</button><button>M</button><button>L</button><button>XL</button><button>XXL</button>
            </div>
          </div>
          </Link>
    ))}
  </div>
  <div className={TrendingCSS.viewallbutton}>
    <button>VIEW ALL</button>
  </div>
  </>
}
