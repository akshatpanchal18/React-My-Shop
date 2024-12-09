import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  };
  return (
    <Wraper>
         <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink onClick={handleScrollToTop} to='/'>Home</NavLink></li>
            <li><NavLink onClick={handleScrollToTop} to='/about'>About</NavLink></li>
            <li><NavLink onClick={handleScrollToTop} to='/contact'>Contact</NavLink></li>
            <li><NavLink onClick={handleScrollToTop} to='/products'>Products</NavLink></li>
          </ul>
        </div>
        <div className="footer-info">
          <h3>Contact Information</h3>
          <p>Email: support@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-company">
          <h3>My Store</h3>
          <p>123 Main St, Anytown, ST 12345</p>
          <p>&copy; {new Date().getFullYear()} <strong>mystore</strong>. All rights reserved.</p>
        </div>
      </div>
      <div className="footer-social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a className='fb' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a className='tw' href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a className='in' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a className='li' href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
    </Wraper>
  );
};
const Wraper=styled.section`
.footer {
  background-color: #222; /* Darker background color for better contrast */
  color: white; /* Text color */
  padding: 40px 0; /* Increased padding for more space */
  text-align: center; /* Center align text */
}

.footer-content {
  display: flex;
  justify-content: space-around; /* Space between sections */
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
  max-width: 1200px; /* Max width for the content */
  margin: 0 auto; /* Center the content */
  padding: 0 20px; /* Padding for inner spacing */
}

.footer-links,
.footer-info,
.footer-company {
  flex: 1; /* Allow equal space distribution */
  min-width: 200px; /* Minimum width for responsiveness */
  margin: 10px; /* Space between sections */
}

.footer-links ul {
  list-style-type: none; /* Remove bullet points */
  padding: 0; /* Remove padding */
}

.footer-links li {
  margin: 10px 0; /* Space between links */
}

.footer-links a {
  // color: #66b3ff; /* Lighter link color for better visibility */
  color:#f0a500;
  text-decoration: none; /* Remove underline */
  transition: color 0.3s; /* Transition effect for hover */
}

.footer-links a:hover {
  // color: #007bff; /* Change color on hover */
  color: #66b3ff
}

.footer-bottom {
  margin-top: 20px; /* Space above the copyright */
  font-size: 0.9rem; /* Smaller font size for copyright */
}

.footer-company h3 {
  margin-bottom: 10px; /* Space below the company name */
  // color:#2e78ff;
  color:#f0a500;
}

.footer-info p,
.footer-company p {
  margin: 5px 0; /* Space between paragraphs */
}

/* Social Media Section */
.footer-social {
  margin-top: 20px; /* Space above social icons */
}

.footer-social h3 {
  margin-bottom: 10px; /* Space below heading */
}

.social-icons {
  display: flex;
  justify-content: center; /* Center align the icons */
  gap: 15px; /* Space between icons */
}

.social-icons a {
  color: white; /* Icon color */
  font-size: 1.5rem; /* Size of the icons */
  transition: color 0.3s; /* Transition effect for hover */
}

// .social-icons a:hover {
//   color: #007bff; /* Change icon color on hover */
// }
.fb:hover { color: #1877F2; } 
.tw:hover { color: #1DA1F2; } 
.li:hover { color: #0A66C2; } 
.in:hover { color: #E4405F; } 
@media(max-width:768px){
.social-icons .fb{
color:#1877F2;
}
.social-icons .tw{
color:#1DA1F2;
}
.social-icons .in{

color:#E4405F;
}
.social-icons .li{
color:#0A66C2;
}
}

`
export default Footer;
