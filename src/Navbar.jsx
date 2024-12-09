// Navbar.js
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Components/Logo.jsx";
import { FaShoppingCart, FaUser, FaUserAltSlash } from "react-icons/fa";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useCartContaxt } from "./Contaxt/CartContaxt.jsx";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { total_item } = useCartContaxt();
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  useEffect(() => {
    if (isAuthenticated && user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [isAuthenticated, user]);
  return (
    <Wraper>
      <nav className="navbar">
        <div className="navbar-logo">
          <Logo />
        </div>

        <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMobileMenu}
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMobileMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
        </div>

        {/* Always show on desktop; hides only on mobile when menu is open */}
        <div className="navbar-icons">
        {isAuthenticated && (
        <p className="user-name">{user ? user.name : storedUser?.name}</p>
      )}
          {isAuthenticated ? (
            <div>
              <p
                style={{
                  border: "solid 3px #f0a500",
                  borderRadius: "50%",
                  padding: "5px",
                  
                }}
              >
                <FaUser
                  className="icon"
                  style={{ fontSize: "22px", color: "#f0a500" }}
                  onClick={() => logout({ returnTo: window.location.origin })}
                  // onClick={handleLogout}
                />
              </p>
            </div>
          ) : (
            <div>
              <p
                style={{
                  border: "solid 3px white",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              >
                {/* <img src={user.picture} style={{height:"40px",width:"40px",borderRadius:"50%"}}  onClick={()=>loginWithRedirect()}/> */}
                <FaUserAltSlash
                  className="icon"
                  style={{ fontSize: "22px" }}
                  onClick={() => loginWithRedirect()}
                />
              </p>
            </div>
          )}
          <NavLink to="/cart">
            <div className="cart-icon">
              <FaShoppingCart className="icon" />
              <span className="cart-count">{total_item}</span>
            </div>
          </NavLink>
        </div>

        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <span className="close-icon">
              <AiOutlineClose style={{ fontSize: "2rem" }} />
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
.nav-link.active {
    color: #f0a500; /* Example active color */
    font-weight: bold;
}
  .navbar {
    // position: fixed;//sticy navbar
    // width: 100%;
    // z-index: 99;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    //   background-color: #333;
    // background-color: #4e81de;//blue 1
    // background-color: #2e78ff;
    background-color: #222;
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
    color: #f0a500;
    // color: #333;
  }
  /* Icons Section */
  .navbar-icons {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .user-name{
  color: #f0a500;
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
    font-sixe: 2rem;
    color: #f0a500;
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
    color: #f0a500;
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
  // @media (max-width: 768px) {
  //   .navbar-links {
  //     display: none;
  //     position: absolute;
  //     top: 0;
  //     right: 0;
  //     width: 100%;
  //     height: 100%;
  //     background-color: #333;
  //     flex-direction: column;
  //     gap: 1rem;
  //     padding: 2rem;
  //     align-items: center;
  //     // border-radius: 5px;
  //     box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  //     z-index: 10;
  //   }

  //   /* Show navbar-links when active */
  //   .navbar-links.active {
  //     display: flex;
  //   }

  //   .mobile-menu-icon {
  //     display: flex;
  //     z-index: 20; /* Ensure it stays above the overlay */
  //     cursor: pointer;
  //   }

  //   .close-icon {
  //     color: #fff;
  //     font-size: 1.5rem;
  //   }
  // }

  // designe-2

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
      // background-color: rgba(1, 27, 74, 0.9);
      background-color: rgba(0, 0, 0, 0.9);
      backdrop-filter: blur(3px);
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
    .user-name {
      font-size: 0.5rem;
      position: absolute;
      top: 9%;
      right: 22%;
      color:#f0a500;
    }
  }
`;
export default Navbar;
