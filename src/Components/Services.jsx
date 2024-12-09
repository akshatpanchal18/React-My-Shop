import React from 'react'
import styled from 'styled-components'
import { FaShippingFast, FaLock, FaUndo, FaHeadset } from 'react-icons/fa';

function Services() {
  return (
    <Wraper>
        <div>
        <section className="features-section">
    <div className="feature">
      <FaShippingFast className="feature-icon" />
      <h3>Fast & Free Delivery</h3>
      {/* <p>Free delivery on all orders</p> */}
    </div>
    <div className="feature">
      <FaLock className="feature-icon" />
      <h3>Secure Payment</h3>
      {/* <p>Free delivery on all orders</p> */}
    </div>
    <div className="feature">
      <FaUndo className="feature-icon" />
      <h3>Money Back Guarantee</h3>
      {/* <p>Free delivery on all orders</p> */}
    </div>
    <div className="feature">
      <FaHeadset className="feature-icon" />
      <h3>Online Support</h3>
      {/* <p>Free delivery on all orders</p> */}
    </div>
  </section>
  </div>
    </Wraper>
    
  )
}
const Wraper=styled.section`
.features-section {
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  background-color: #f9f9f9;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  margin:1.5rem 0;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.feature {
  text-align: center;
  padding: 1rem;
}

.feature-icon {
  font-size: 2.4rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.5rem 0;
  color: #333;
}

p {
  font-size: 0.9rem;
  color: #666;
}
  @media (max-width: 768px) {
  .features-section {
    display: flex;
    flex-wrap: wrap; /* Allow wrapping to create multiple rows */
    gap: 1.5rem; /* Space between features */
    justify-content: center; /* Center align the items */
  }

  .feature {
    width: 45%; /* Set each feature to take up 45% of the row (2 items per row) */
    text-align: center;
    background-color: #e9eef7;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .feature-icon {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .feature h3 {
    font-size: 1.1rem;
    color: #333;
    margin: 0.5rem 0;
  }

  .feature p {
    font-size: 0.9rem;
    color: #666;
  }
}

`
export default Services