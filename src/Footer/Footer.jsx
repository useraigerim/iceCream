import React from 'react'
import './Footer.scss'
import logo2 from '../shered/img/logo2.svg'
import fb from "../shered/img/fb.svg"
import twit from "../shered/img/twit.svg"
import insta from '../shered/img/insta.svg'
import linkedin from '../shered/img/link.svg'
import blue from '../shered/img/blue.svg'
import mk from '../shered/img/mk.svg'
import visa from '../shered/img/visa.svg'



function Footer() {
  return (
    <div className='footer'>
        <div className='footer__logo'>
            <img src={logo2} alt="logo2" />
            <p>Some food has looked so awful that it's looked like 
                something that the dog's brought home.</p>
                <div className='follow'>
                    <p>Fllow Us</p>
 
                </div>
            <div className='follow__img'>
                        <img src={fb} alt="fb" />
                        <img src={twit} alt="twit" />
                        <img src={insta} alt="insta" />
                        <img src={linkedin} alt="link" />

            </div>

        </div>

        <div className='home'>
            <p>Home</p>
            <a href="#">Product</a>
            <a href="#">Blog</a>
            <a href="#">Pricing</a>
            <a href="#">Testimonials</a>
            <a href="#">Contact Us</a>
            

        </div>
        <div className='delivery'>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Condition</a>
            <a href="#">Search Terms</a>
            <a href="#">Order & Return</a>

        </div>

        <div className='newsletter'>
        <p>Newsletter</p>

        <form className='footer__form'>
           
        <input type="email" className='email' placeholder='Your Email'/>
            <button className='subscribe'>Subscribe</button>


        </form>
        <div className='pay'>
            <img src={blue} alt="blue" />
            <img src={mk} alt="mk" />
            <img src={visa} alt="visa" />

        </div>

        </div>

    </div>
  )
}

export default Footer