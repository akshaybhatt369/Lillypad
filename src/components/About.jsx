import React from 'react'
import './About.css'
import col2 from '../img/col2.png'
import col3 from '../img/col3.png'
import col4 from '../img/col4.png'
import col5 from '../img/col5.png'
import col6 from '../img/col6.png'
import hline from '../img/hline.png'
import vline from '../img/vline.png'


const About = () => {
  return (
    <div className='aboutcontainer'>
      <img src={vline} style={{
        position: 'absolute',
        left : '33%'
      }} alt=''/>
      <img src={vline} style={{
        position: 'absolute',
        left : '65%'
      }} alt=''/>
      <div className='row1'>
        <div className='col'>
          <div style={{ display: 'flex', alignItems: 'center', width: '30%' }}>
            <hr style={{
              width: '1.4rem',
              height: '3px',
              color: '#9E2349',
              background: '#9E2349',
              marginRight: '1rem'
            }} />
            <p style={{ color: '#9E2349' , fontWeight: '600' }}>About Us</p>
          </div>
          <div>
            <p style={{
              fontSize: '36px',
              margin: '0px 0px',
              fontFamily: 'DM Serif Display',
              fontWeight: '600',
              width: '90%',
              lineHeight : '54px',
            }}>
              Lillypad is the only Real Estate Investment tool you need for your business
            </p>
          </div>
        </div>
        <div className='col'>
          <div style={{ display: 'flex', alignItems: 'center' , width: '90%' , marginLeft: '-15px'}}>
            <img src={col2} alt="" />
            <p style={{ fontSize: '18px' }}>Become a Data-Driven Investor</p>
          </div>
          <p>Lilypads is the cloud-based real estate investment platform that helps you make data-driven investment decisions and assists with reaching your long term investment objectives.</p>
        </div>
        <div className='col'>
          <div style={{ display: 'flex', alignItems: 'center' , width: '90%' , marginLeft: '-15px'}}>
            <img src={col3} alt="" />
            <p style={{ fontSize: '18px' }}>Lilypads can help you make smarter decisions.</p>
          </div>
          <p>Streamline your investment evaluation process and collaborate in reaching your long term investment objectives</p>
        </div>
      </div>
      <img src={hline} alt=''/>
      <div className='row2'>
        <div className='col'>
          <div style={{ display: 'flex', alignItems: 'center' , width: '90%', marginLeft: '-15px'}}>
            <img src={col4} alt="" />
            <p style={{ fontSize: '18px' }}>Manager Due Diligence
            </p>
          </div>
          <p>Evaluate managers against your objectives using traditional risk metrics with the addition of factor analysis. All it takes is a set of returns</p>
        </div>
        <div className='col'>
          <div style={{ display: 'flex', alignItems: 'center' , width: '90%' , marginLeft: '-15px'}}>
            <img src={col5} alt="" />
            <p style={{ fontSize: '18px' }}>Optimize Asset Allocation
            </p>
          </div>
          <p>Understand the underlying risk drivers in your portfolio using the Lilypads analysis factors  and then optimize that portfolio based on objectives
          </p>
        </div>
        <div className='col'>
          <div style={{ display: 'flex', alignItems: 'center' , width: '90%' , marginLeft: '-15px'}}>
            <img src={col6} alt="" />
            <p style={{ fontSize: '18px' }}>Our Subscribers</p>
          </div>
          <p>Serving a constellation of global subscribers Pension funds, Funds of Funds, Banks, Family offices, Asset managers, Wealth Managers</p>
        </div>
      </div>
    </div>
  )
}

export default About