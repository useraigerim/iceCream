import React from 'react'
import Logo from "../../shered/img/logo.svg"
import "../../App.css"
import "./Header.scss"
import BtnBuy from '../BtnBuy/BtnBuy'

function Header() {
  return (
    <header className='header container'>
       
          <div className="header__logo">
            <img src={Logo} alt="logo" />
            </div>
            <div className="header__links">
                <a href="">Home</a>
                <a href="">Product</a>
                <a href="">Pricing</a>
                <a href="">Testimonials</a>
                <a href="">Contact Us</a>

            </div>

            <BtnBuy/>


    </header>
  )
}

export default Header