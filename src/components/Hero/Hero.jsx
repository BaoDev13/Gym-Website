import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import Calories from '../../assets/calories.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header/>
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>
        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span></div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
          </div>
        </div>
        {/*  */}
      <div className='a'>
        <div className='a1'>
          <span>+ 140</span>
          <span>expert coaches</span>
        </div>
        <div className='a1'>
          <span>+ 978</span>
          <span>menbers joined</span>
        </div>
        <div className='a1'>
          <span>+ 50</span>
          <span>fitness programs</span>
        </div>
        <div>
          <img src={Calories} alt="" />
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className='b'>
        <button>Get Started</button>
        <button>Learn More</button>
      </div>
    </div>
      

      <div className="right-h">right-size</div>
    </div>
    
  )
}

export default Hero