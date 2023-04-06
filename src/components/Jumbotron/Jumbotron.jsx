import React from 'react'
import BtnBuy from '../BtnBuy/BtnBuy'
import "./style.scss"
import ice from '../../shered/img/ice.svg'
import bg from '../../shered/img/milk.svg'


function Jumbotron() {
  return (
    <div className='jumbotrom'>
        <div className="left">
            <p className='left__head'>Sweet fun, full of milk.</p>
            <h1>Feel inside cold with our delicious <span>ice-cream.</span></h1>
            <p className='left__info'>Some food has looked so awful that it's looked like something that the dog's brought home, yet after 
            one mouthful I've been left eating my thoughts, my words.</p>
            <BtnBuy/>
        </div>
         <div className="right">
            <img src={ice} alt="ice" className='right_ice'/>
            <img src={bg} alt="bg" className='right_bg' />
            <div className='right__round'></div>

        </div>
    </div>
  )
}

export default Jumbotron