import React from 'react';
import './footer.css'; // Import your CSS file
import logo from "../images/logo.png"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo} alt="IDSPL" />
      </div>
      <div className="section-2">
        <div className="partitions">
          <h3 className="main-title">Resources</h3>
          <ul className="lst-elem">
            <li className="links">FAQs</li>
            <li className="links">Blogs</li>
            <li className="links">Guides</li>
            <li className="links">Tools</li>
          </ul>
        </div>
        <div className="partitions">
          <h3 className="main-title">Company</h3>
          <ul className="lst-elem">
            <li className="links">About Us</li>
            <li className="links">Careers</li>
            <li className="links">Contact Us</li>
          </ul>
        </div>
        <div className="partitions">
          <h3 className="main-title">Partners</h3>
          <ul className="lst-elem">
            <li className="links">Bankruptcy for Corporations</li>
            <li className="links">Bookkeeping for Accountants</li>
            <li className="links">Refer a Friend</li>
          </ul>
        </div>
        <div className="partitions">
          <h3 className="main-title">Countries</h3>
          <ul className="lst-elem">
            <li className="links">USA</li>
            <li className="links">UK</li>
            <li className="links">Australia</li>
            <li className="links">UAE | Dubai</li>
          </ul>
        </div>
        <div className="partitions">
          <h3 className="main-title">Our Offices</h3>
          <ul className="lst-elem">
            <li className="links">C\505-506, The First, B/h ITC Narmada, Nr. Keshav Baug Party Plot, Vastrapur, Ahmedabad - 380015.</li>
            <li className="links">F/2104 Trump Tower New York, USA</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;