import React from 'react'
import Logo from "../img/logo.png"
import './Header.css'


const Header = () => {
  return (
    <div className='mainclass'>
      <div className='list'>
        <img src={Logo} alt="Logo"/>
        <ul>
          <li className='active'>Home <p style={{fontSize:'50px' , margin : '0px' , lineHeight: '0px' , marginLeft:'40%'}}>.</p></li>
          <li>Network</li>
          <li>Product</li>
          <li>Technology</li>
          <li>Our story</li>
          <li>Knowledge center </li>
        </ul>
      </div>
      <div className='headerbutton'>
        <button className='contact'>Contact us</button>
        <button className='login'>Log In</button>
      </div>
    </div>
  )
}

export default Header