import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <image src='/images/img-home.mp4' />
            <h1> LIFE </h1>
            <p> LIVE </p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> GET STARTED </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'> MY BIO <i className='far fa-play-circle' /> </Button>
            </div>
        </div>
    )
}

export default HeroSection;
