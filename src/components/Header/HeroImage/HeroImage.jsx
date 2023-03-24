import React from 'react';
import img from './images/image-1.jpg';
import './HeroStyle.css';


const HeroImage = () => {
  return (
    <div className='hero-container'>
        <div className='hero-background'>
           <img className='hero-image' alt='A table served with six bowls with different vegetables' src={img}/>
        </div>
        <div className='hero-content'>
            <h1 className='hero-heading'>
            Food is our common ground, a universal experience.
            </h1>
            <p className='hero-para'>
            The joys of the table belong equally to all ages, 
            conditions, countries and times; they mix with all other pleasures, 
            and remain the last to console us for their loss - Food Cuisine
            </p>
        </div>
    </div>
  )
}

export default HeroImage;