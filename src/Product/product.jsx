import React from 'react'
import './Product.scss'
import BtnBuy from '../components/BtnBuy/BtnBuy'
import ice11 from '../shered/img/ice11.svg'
import ice22 from '../shered/img/ice22.svg'
import ice33 from '../shered/img/ice33.svg'
import ice44 from '../shered/img/ice44.svg'
import tLeft from '../shered/img/tLeft.svg'
import tRight from '../shered/img/tRight.svg'
import adele from '../shered/img/adele.svg'
import woman from '../shered/img/woman.svg'
import man from '../shered/img/man.svg'
import arrowL from '../shered/img/arrowL.svg'
import arrowR from '../shered/img/arrowR.svg'


function Product() {
  return (
    <div className='product'>

      <h1 className='our'> Our Product</h1>
   
    <div className='product__links'>
      <a href="">ICE CREAM</a>
      <a href="">CAYENNE CHOCOLATE</a>
      <a href="">CAKE BATTER</a>
      <a href="">CANDY CANE</a>
      <a href="">PLATTERS</a>
      <a href="">DESSERT</a>
    </div>
    <div className='product__teams'>

    
    <div className='product__item'>
    <div className='product__left'>
        <img src={ice11} alt="ice11" />

    </div>

    <div className='product__right'>
        <h2>Brown bread</h2>
        <p>Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is 
        a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.</p>
        <h3>$19.55 <span>$22.55</span></h3>
        <BtnBuy/>

    </div>

    </div>

    <div className='product__item'>
    <div className='product__right2'>
        <h2>Cayenne chocolate</h2>
        <p>Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is 
          a pioneer in the healthy fast food scene.</p>
        <h3>$19.55 <span>$22.55</span></h3>
        <BtnBuy/>

    </div>
    <div className='product__left2'>
        <img src={ice22} alt="ice22"/>

    </div>
    

    </div>
    <div className='product__item'>
    <div className='product__left'>
        <img src={ice33} alt="ice33" />

    </div>

    <div className='product__right'>
        <h2>Brown bread</h2>
        <p>Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is 
        a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.</p>
        <h3>$19.55 <span>$22.55</span></h3>
        <BtnBuy/>

    </div>

    </div>

    <div className='review'>
      <div className='review__left'>
        <div className='adele'>
          <div className='adele__img'>
            <img src={adele} alt="adele" />
          </div>
          <div className='adele__info'>
            <h3>Adele A. McNeill</h3>
            <p>AMIRICAN</p>

          </div>

        </div>

        <div className='text'>
          <img src={tLeft} alt="tLeft" className='tLeft' />
          <h3>Thanks a lot for the prompt service. Really appreciate. 
          Excellence taste in Every Bite.Add a joy of best Taste. Foodie Moments.</h3>
          <img src={tRight} alt="tRight" className='tRight'/>

        </div>
        <div className='review__img'>
          <img src={arrowL}alt="arrowL" className='arrowL' />
          <img src={man} alt="man" className='man' />
          <img src={adele} alt="adele" className='adele'/>
          <img src={woman} alt="woman" className='woman' />
          <img src={arrowR} alt="arrowR" className='arrowR' />

        </div>

      </div>

      <div className='review__right'>
        <img src={ice44} alt="ice44" />

      </div>


    </div>
    
    </div>


    




   </div>
  )
}

export default Product