import React from 'react'
import BtnBuy from '../components/BtnBuy/BtnBuy'
import './Part2.scss'
import iceCream from '../shered/img/iceCream.svg'

function Part2() {
  return (
    <div className='part2'>
        <div className='part2__left'>
            <h1>Brown Sugar Oatmea</h1>
            <p>Together with McDonald’s, Burger King has grown to become synonymous with burgers in the US.Together with McDonald’s, Burger King has grown to become synonymous.</p>
            <BtnBuy/>

        </div>
        <div className="part2__right">
            <img src={iceCream} alt="iceCream" className='ice_img'/>
        </div>

    </div>
  )
}

export default Part2