import React from "react";
import './FooterStyle.css';

const Footer = ({setPage}) => {
  return (
    <footer className="footer">
    <div className="footer-section">
      <div className="footer-left">
       <div><i className="footer-icon"></i></div>
       <p className="footer-left-para">World food Cuisine</p>
       <p className="footer-left-note">Recipes are designed for real, actual, every day life, and we try to focus on real foods and healthy recipes.
           This is the place to find those recipes — everything from our most popular, to meal prep, to Instant Pot recipes, or if you just, like, 
           have some sad greens in your fridge to use up and you need some inspiration. 
           You’re here! Have fun. We hope you find something (many things) you love.</p>
      </div>
      <ul className="footer-right">
      <li>
          <h2>Information</h2>
          <ul className="footer-column">
            <li><a href="https://www.rawpixel.com/image/442973/vegan-dinner">Hero Image (Rawpixel Ltd)</a></li>
            <li><a href="https://www.rawpixel.com/search/food">Features and Top cuisine Images (Rawpixel Ltd)</a></li>
            <li><a href="https://undraw.co/license">Top Cuisine and PostedRecipe illutrstion(unDraw)</a></li>
            <li><a href="https://fontawesome.com/license#license">Icons (FontAwesome Css only)</a></li>
            <li><a href="https://css.gg/doc/licence">Spinner (Css Gig)</a></li> 
          </ul>
        </li>
        <li>
          <h2>Browse</h2>
          <ul className="footer-column">
            <li><a onClick={()=> setPage('About')} href="#About">About Us</a></li>
            <li><a onClick={()=> setPage('Feature')} href="#Feature">Feature Recipe</a> </li>
            <li><a onClick={()=> setPage('Cuisine')} href="#Cuisine">Top Cusine</a></li>
          </ul>
        </li>
        <li>
          <h2>Contact Us</h2>
          <ul className="footer-column">
            <li><a onClick={()=> setPage('Privacy')} href="#Privacy">Privacy Policy</a></li>
            <li><a onClick={()=> setPage('Recipe')} href="#Recipe">Write for Us</a></li>
          </ul>
        </li>
      </ul>
      </div>
      <div className="footer-bottom">
        <p>All rights reserved by ©World Food Cuisine 2022 </p>
      </div>
    </footer>
  );
};

export default Footer;
