import React from 'react'
import './Simple.scss'
import ice55 from '../shered/img/ice55.svg'
import select from '../shered/img/select.svg'
import add from '../shered/img/add.svg'
import order from '../shered/img/order.svg'
import pm from '../shered/img/pm.svg'
import as from '../shered/img/as.svg'

function Simple() {
  return (
    <div className='simple'>
        <div className='simple__left'>
            <img src={ice55} alt="ice55" />

        </div>
        <div className='simple__right'>
            <h1>Simple Way To Order Your Food</h1>
             <p>Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts.</p>
             <div className='choose'>
            <div className='choose__item'>
                <img src={select} alt="select" />
                <p>Select Your Food</p>

            </div>
            <div className='choose__item'>
                <img src={add} alt="add" />
                <p>Add To Cart</p>

            </div>
            <div className='choose__item'>
                <img src={order} alt="order" />
                <p>Order Your Food</p>

            </div>

        </div>
        <div className='download'>
            <img src={pm} alt="pm" />
            <img src={as} alt="as" />

        </div>
        
        </div>

        

    </div>
  )
}

export default Simple