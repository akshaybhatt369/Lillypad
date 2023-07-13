import React from 'react'
import Header from './Header'
import About from './About'
import Footer from './Footer'
import './MainContainer.css'
import Mobile1 from '../img/gemini.png'
import Mobile2 from '../img/Group 2.png'
import {BsArrowRightShort} from 'react-icons/bs'

const MainContainer = () => {
  return (
    <div className='Main-container'>
        <Header/>
        <div className='container'>
          <div className='left'>
            <div style={{display: 'flex',    alignItems: 'center' , width:'25%'}}>
              <hr style={{
                width:'1.4rem',
                height:'3px',
                color: '#9E2349',
                background: '#9E2349',
                marginRight:'1rem'
              }}/>
              <p style={{color: '#9E2349'}}>Welcome to the</p>
            </div>
            <div className='title'>
              <p style={{
                fontSize:'71px',
                margin: '0px 0px',
                fontFamily:'DM Serif Display'
              }}>
                Unprecedented Era of <span>Real Estate Investing</span>
              </p>
              <p style={{
                fontSize:'16px',
                fontFamily: 'Lexend',
                color : '#acacad',
                fontWeight : '500',
                margin: '2rem 0rem'
              }}>
              Lilypads uses sophisticated technologies for data-driven decisions in investing, managing and funding commercial real estate assets</p>
              <button className='StartNow'>Start Investing Now <BsArrowRightShort size={'1.8rem'}/></button>
            </div>
            <div className='numbers'>
              <div>
                <p className='nums'>658+</p>
                <p>Properties Registered</p>
              </div>
              <div>
                <p className='nums'>685+</p>
                <p>Deals Cracked</p>
              </div>
              <div>
                <p className='nums'>255+</p>
                <p>Investors</p>
              </div>
            </div>
          </div>
          <div className='right'>
            <img src={Mobile1} alt="" />
            <img src={Mobile2} alt="" />
          </div>
        </div>

        {/* About Section */}

        <About/>

        <Footer/>
    </div>
  )
}

export default MainContainer