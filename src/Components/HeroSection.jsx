import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <Wraper>
    <div>
        <header className="hero-banner">
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Your one-stop shop for amazing products!</p>
        <Link to="/products" className="btn-shop-now">Shop Now</Link>
      </header>
    </div>
    </Wraper>
  )
}
const Wraper = styled.section`
.hero-banner {
  background-color: #e9eef7;
  color: Black;
  text-align: center;
  padding: 60px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin:1.5rem 0;
}

.hero-banner h1 {
  font-size: 2.5rem;
  margin: 0 0 10px;
}

.hero-banner p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
.btn-shop-now {
  padding: 10px 20px;
  background-color:#2563eb;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  margin-top: 10px;
}

.btn-shop-now:hover {
  background-color: #6288da;
}

`
export default HeroSection