import React from 'react'
import './Footer.css'
import Facebook from '../img/Facebook.png'
import Twitter from '../img/Twitter.png'
import Linkedin from '../img/Linkedin.png'
import Youtube from '../img/Youtube.png'
import Medium from '../img/Medium.png'
import Pinterest from '../img/Pinterest.png'
import line from '../img/Line 6.png'
import Logo from "../img/logo.png"


const Footer = () => {
  return (
    <div className='footer'>
      <img src={line} style={{
        position: 'absolute',
        left : '45%'
      }} alt=''/>
      <div className='LHS'>
        <div style={{width:'66%' , fontWeight:'800'}}>
          <div className='email-text'>
            <input type="text" placeholder='Enter Your Email Here'/>
            <button>Subscribe To Newsletter</button>
          </div>
          <p style={{fontSize: '24px' , lineHeight: '33.6px', paddingTop: '2rem'}}>Signup and start enjoying the benifits today!</p>
          <button className='signup'>Sign Up To Lilypads</button>
        </div>
        <div className='social'>
          <img src={Facebook} alt="" />
          <img src={Twitter} alt="" />
          <img src={Linkedin} alt="" />
          <img src={Youtube} alt="" />
          <img src={Medium} alt="" />
          <img src={Pinterest} alt="" />
        </div>
      </div>
      <div className='RHS'>
        <div className='row'>
          <div className='col' style={{width: '32%'}}>
            <img src={Logo} alt="Logo" height={'80px'}/>
          </div>
          <div className='col'>
            <p>Reach Us At</p>
            <p style={{ opacity: '60%' , fontWeight:'400'}}>6751 Columbia Gateway Dr., 3rd floor, Columbia, MD 21046</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <p>Network</p>
            <ul>
              <li>Community</li>
              <li>Investor</li>
              <li>Broker</li>
            </ul>
          </div>
          <div className='col'>
          <p>Product</p>
            <ul>
              <li>Invest</li>
              <li>Discover</li>
              <li>Transact</li>
              <li>Manage</li>
            </ul>
          </div>
          <div className='col'>
          <p>Our Story</p>
            <ul>
              <li>Approach</li>
              <li>AboutUs</li>
            </ul>
          </div>
        </div>
        <div className='row'>
        <div className='col'>
            <p>Technology</p>
            <ul>
              <li>Artificial Intelligence</li>
              <li>Block Chain</li>
            </ul>
          </div>
          <div className='col'>
          <p>Highlights</p>
            <ul>
              <li>Impact of COVID-19 on the food and beverage industry and the retail sector</li>
              <li>Commercial lending during COVID-19: navigating the impact</li>
            </ul>
          </div>
          <div className='col'>
          <p>Knowledge Center</p>
            <ul>
              <li>Resource</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer