import React, {useState} from "react";
import "./NavbarStyle.css";

const Navbar = ({setPage}) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  };


  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo"> 
            <div><i className="logo-icon"></i></div>
          <div className="nav-logo-head">World Food Cuisine</div>
          </div>
          <a className="skip-link" href="#main-id">Skip Navigation Links</a>
          <div className="nav-mobile-icon"  onClick={toggle}>
            <i className="icon"></i>
          </div>
          <aside className={`sidebar-container ${isOpen ? "open" : "close"}`} >
           <div className='sidebar-icon'>
              <i className="icon"  onClick={toggle}></i>
           </div>
           <div className='sidebar-wrapper'>
             <ul className='sidebar-menu'>
               <li className='sidebar-link'><a onClick={()=> setPage('About') || setIsOpen(!isOpen)} href="#About">About</a></li>
               <li className='sidebar-link'><a onClick={()=> setPage('Feature') || setIsOpen(!isOpen)} href="#Feature">Feature Recipe</a></li>
               <li className='sidebar-link'><a onClick={()=> setPage('Cuisine') || setIsOpen(!isOpen)} href="#Cuisine">Top Cuisine</a></li>
               <li className='sidebar-link'><a onClick={()=> setPage('Privacy') || setIsOpen(!isOpen)} href="#Privacy">Privacy Policy</a></li>
             </ul>
              <div className='sidebar-btn'>
                <div className='sidebar-text' onClick={()=> setPage('Recipe') || setIsOpen(!isOpen)}> Write for us</div>
              </div>
           </div>
         </aside>
          <ul className="nav-menu">
            <li className="nav-item">
              <a className="nav-links" onClick={()=> setPage('About')} href="#About">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-links" onClick={()=> setPage('Feature')} href="#Feature">
                Feature Recipe
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-links" onClick={()=> setPage('Cuisine')} href="#Cuisine">
                Top Cuisine
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-links" onClick={()=> setPage('Privacy')} href="#Privacy">
                Privacy Policy
              </a>
            </li>
          </ul>
          <div className="nav-btn">
            <a className="nav-btn-link" onClick={()=> setPage('Recipe')} href="#Recipe">
              Write for us
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
