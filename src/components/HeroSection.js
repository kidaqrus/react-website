import React from 'react'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='../videos/video-1.mp4' autoPlay loop muted />
        <h1>Adventure Awaits</h1>
        
            
        
        <p>what you waiting for</p>
        <div className='hero-btns'>
            <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
                Get started
            </Button>
            <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large'>
                watch trailer <i className='far fa-play-circle'></i>
            </Button>
        </div>

    </div>
  )
}

export default HeroSection