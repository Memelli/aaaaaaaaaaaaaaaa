import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <>
        <div className="hero-container">
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>MAPLESTORY</h1>
            <p>Jogue agora o melhor servidor!</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    CADESTRE-SE 
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    DOWNLOAD <i className="fas fa-cloud-download-alt"></i>
                </Button>
            </div>
        </div>
        </>
    )
}

export default HeroSection
