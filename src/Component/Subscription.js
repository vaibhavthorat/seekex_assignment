import React from 'react'
import FooterCSS from './Footer.module.css';

export default function Subscription() {
  return <>
   <div className={FooterCSS.subscription}>
        <h1>Subscribe to get updates on exciting offers & deals</h1>
        <input type='text' placeholder='Enter Your Email' /><button>Subscribe</button>
    </div>
  </>
}
