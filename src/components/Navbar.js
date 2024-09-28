import React from 'react';
import './navbar.css'; // Import your CSS file
import img1 from '../images/logo.png'
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={img1} alt="IDSPL" />
      </div>
      <div className="nav-items">
        <ul className="nav">
          <li className="links"><Link to="/">Home</Link></li>
          <li className="links"><Link to="/about">About Us</Link></li>
          <li className="links"><Link to="/team">Team</Link></li>
          <li className="links"><Link to="/services">Services</Link> </li>
          <li className="links"><Link to="/gallery">Gallery</Link> </li>
          <li className="links"><Link to="/query">Query</Link></li>
          <li className="links" ><Link to="/careers">Careers</Link> </li>
        </ul>
        <div className="contact-us">
          Contact Us
        </div>
      </div>
    </nav>
  );
};

export default Navbar;