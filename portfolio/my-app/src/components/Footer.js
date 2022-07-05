import "./FooterStyles.css"

import React from 'react';
import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-container">
      <div className="left">
        <div className="location">
          <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          <div>
            <p>#3026, sector-17</p>
            <p>Rajpura,Punjab</p>
          </div>
        </div>
          <div className="phone">
          <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          +91-7009180210</h4>
          </div>
          <div className="email">
          <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          akshaybagai52@gmail.com</h4>
          </div>

      </div>
      <div className="right">
      <h4>About Me</h4>
      <p>This is Akshay Bagai. I am talented frontend Developer
       who can create websites from your ideas</p>
       <div className="social">
        <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
        <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
       </div>
            
       </div>
    </div>

    

    </div>
  )
}

export default Footer
