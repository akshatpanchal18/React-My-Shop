// Navbar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../src/Components/Logo";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useCartContaxt } from "../src/Contaxt/CartContaxt";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const{total_item}=useCartContaxt();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Wraper>
      <nav className="navbar">
        <div className="navbar-logo">
          <Logo />
        </div>

        <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <NavLink end to="/" className="nav-link" onClick={closeMobileMenu}>
            Home
          </NavLink>
          <NavLink
            to="/products"
            exact
            className="nav-link"
            onClick={closeMobileMenu}
          >
            Products
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeMobileMenu}>
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link" onClick={closeMobileMenu}>
            Contact
          </NavLink>
        </div>

        {/* Always show on desktop; hides only on mobile when menu is open */}
        <div className="navbar-icons">
          <FaUser className="icon" />
          {/* <FaShoppingCart className="icon" /> */}
          <NavLink to='/cart'>
          <div className="cart-icon"> 
            <FaShoppingCart className="icon" />
            <span className="cart-count">{total_item}</span>
          </div>
          </NavLink>
        </div>

        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <span className="close-icon">
              <AiOutlineClose />
            </span>
          ) : (
            <>
              <AiOutlineMenu className="bar" />
            </>
          )}
        </div>
        {/* <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <span className="close-icon">✕</span> : (
          <>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </>
        )}
      </div> */}
      </nav>
    </Wraper>
  );
};
const Wraper = styled.section`
  /* Navbar.css */

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    //   background-color: #333;
    // background-color: #4e81de;//blue 1
    background-color: #2e78ff;

    color: #fff;
  }

  .navbar-logo h2 {
    margin: 0;
    color: #fff;
  }

  .navbar-links {
    display: flex;
    gap: 1.5rem;
  }
  .navbar-links .nav-link {
    font-size: 1.4rem; /* Adjust this value as needed */
    font-weight: 600;
  }

  .nav-link {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .nav-link:hover {
    //   color: #f0a500;
    color: #333;
  }
  .active-link {
    color: #333;
    font-weight: bold;
  }
  /* Icons Section */
  .navbar-icons {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .icon {
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .cart-icon {
    position: relative;
    display: flex;
    align-items: center;
  }

  /* Cart icon style */
  .cart-icon .icon {
    font-size: 1.8rem;
    color: #fff;
    cursor: pointer;
  }

  /* Cart count badge style */
  .cart-count {
    font-size: 0.9rem;
    color: #fff;
    background-color: #e74c3c; /* Red background for the badge */
    border-radius: 50%;
    padding: 0.2rem 0.5rem;
    position: absolute;
    top: -5px;
    right: -10px;
  }
  /* Mobile Menu Icon */
  .mobile-menu-icon {
    display: none;
    cursor: pointer;
    flex-direction: column;
    gap: 4px;
  }
  .cart-count {
    font-size: 0.9rem;
    color: #fff;
    background-color: #e74c3c; /* Red background for cart count */
    border-radius: 50%;
    padding: 0.2rem 0.5rem;
    position: absolute;
    top: -5px;
    right: -10px;
  }
  // .bar {
  //   width: 25px;
  //   height: 3px;
  //   background-color: #fff;
  //   transition: 0.3s;
  // }
  .bar {
    font-size: 1.5rem;
  }
  /* Navbar.css */

  .navbar-icons {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .hidden {
    display: none;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .navbar-links {
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: #333;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem;
      align-items: center;
      // border-radius: 5px;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
      z-index: 10;
    }

    /* Show navbar-links when active */
    .navbar-links.active {
      display: flex;
    }

    .mobile-menu-icon {
      display: flex;
      z-index: 20; /* Ensure it stays above the overlay */
      cursor: pointer;
    }

    .close-icon {
      color: #fff;
      font-size: 1.5rem;
    }
  }

  // designe-2

  // @media (max-width: 768px) {
  // .navbar-links {
  //   display: none; /* Hide nav links */
  // }

  // .navbar-links.active {
  //   display: flex;
  //   flex-direction: column;
  //   position: fixed;
  //   top: 0;
  //   right: 0;
  //   height: 100%;
  //   width: 70%;
  //   background-color: rgba(0, 0, 0, 0.9);
  //   justify-content: center;
  //   align-items: center;
  //   z-index: 1000;
  // }

  // .mobile-menu-icon {
  //   display: block;
  //   cursor: pointer;
  // }

  // .navbar-icons {
  //   order: 3;
  // }

  // .navbar-logo {
  //   order: 2;
  //   text-align: center;
  // }
  // }
`;
export default Navbar;


<!-- nav mobile view(menu-logo-cart) -->
@media (max-width: 768px) {
  .navbar-links {
    display: none; /* Hide nav links */
  }

  .navbar-links.active {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 70%;
    background-color: rgba(0, 0, 0, 0.9);
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .mobile-menu-icon {
    display: block;
    cursor: pointer;
  }

  .navbar-icons {
    order: 3;
  }

  .navbar-logo {
    order: 2;
    text-align: center;
  }
}