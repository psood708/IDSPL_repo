import React from 'react';
import './navbar.css'; // Import your CSS file
import img1 from '../images/logo.png'
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo_nav">
        <img src={img1} alt="IDSPL" />
      </div>
      <div className="nav-items">
        <ul className="nav">
          <li className="links_nav"><Link to="/">Home</Link></li>
          <li className="links_nav"><Link to="/about">About Us</Link></li>
          <li className="links_nav"><Link to="/team">Team</Link></li>
          <li className="links_nav"><Link to="/services">Services</Link> </li>
          <li className="links_nav"><Link to="/gallery">Gallery</Link> </li>
          <li className="links_nav"><Link to="/query">Query</Link></li>
          <li className="links_nav" ><Link to="/careers">Careers</Link> </li>
        </ul>
        <div className="contact-us">
          Contact Us
        </div>
      </div>
    </nav>
  );
};

export default Navbar;