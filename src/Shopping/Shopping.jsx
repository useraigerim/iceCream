import React from 'react'
import './Shopping.scss'
import img1 from '../shered/img/1.svg' 
import img2 from '../shered/img/2.svg' 
import img3 from '../shered/img/3.svg' 
import img4 from '../shered/img/4.svg' 


function Shopping() {
  return (
    <div className='Shopping container'>
        

        <div className='shopping__info'>
                <img src={img1} alt="img1" />
                <h2>Free Shipping</h2>
                <p>Last Chance! Free shipping on all orders ends today.</p>

        </div>
        <div className='shopping__info'>
                <img src={img2} alt="img2" />
                <h2>Quick Packaging</h2>
                <p>Last Chance! Free shipping on all orders ends today.</p>

        </div>
        <div className='shopping__info'>
                <img src={img3} alt="img3" />
                <h2>100% Money Back</h2>
                <p>Last Chance! Free shipping on all orders ends today.</p>

        </div>
        <div className='shopping__info'>
                <img src={img4} alt="img4" />
                <h2>Fast Delivery</h2>
                <p>Last Chance! Free shipping on all orders ends today.</p>

        </div>

        


    </div>
  )
}

export default Shopping