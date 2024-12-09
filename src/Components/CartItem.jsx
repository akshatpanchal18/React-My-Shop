import React, { useState } from 'react';
import styled from 'styled-components';
import { useCartContaxt } from '../Contaxt/CartContaxt';
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from 'react-router-dom';

function CartItem() {
  const { cart_m, removeItem, setIncrease, setDecrease } =useCartContaxt();
// console.log(cart);
  return (
    <Wrapper>
      <div className="cart-container">
  {/* <h2>Your Cart</h2> */}
  <NavLink className='arrow' to='/products'>
        <IoMdArrowRoundBack/>
      </NavLink>
  {cart_m.length === 0 ? (
    <div className="empty-cart-message">
      <h1>Your cart is currently empty. Start adding items!</h1>
      {/* <NavLink to="/">
        <button className="checkout">Continue Shopping</button>
      </NavLink> */}
    </div>
  ) : (
    <div className="cart-items">
      {cart_m.map((item) => (
        <div className="cart-item" key={item.id}>
          <div className="product-image">
            <img src={item.image} alt={item.name} />
            <div className="quantity">{item.amount}</div>
          </div>
          <div className="product-details">
            <h3>{item.name}</h3>
            <p className="price">${item.price}</p>
            <div className="quantity-control">
              <button onClick={() => setDecrease(item.id)}>-</button>
              <span>{item.amount}</span>
              <button onClick={() => setIncrease(item.id)}>+</button>
            </div>
            <button className="remove" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <NavLink to='/products'>
        <button className="checkout">Continue Shopping</button>
      </NavLink>
    </div>
  )}
</div>

    </Wrapper>
  );
}

const Wrapper = styled.section`
  .cart-container {
    // max-width: 1200px;
    max-width: 1000px;
    margin: 2rem auto;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
  }
    .arrow{
    font-size:22px;
    color:black;
    }
 .icon-back {
    font-size: 2rem;
    margin: 2rem 2rem 0;
    color: black;
  }
  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
.empty-cart-message {
  text-align: center;
  padding: 20px;
  font-size: 1.2rem;
}

.empty-cart-message .checkout {
  margin-top: 10px;
}
  .cart-items {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .cart-item {
    display: flex;
    gap: 1rem;
    padding: 15px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .product-image {
    position: relative;
    width: 150px;
    height: 150px;
    overflow: hidden;
    flex-shrink: 0;
    border-radius: 8px;
  }

  .product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .quantity {
    position: absolute;
    top: 10px;
    right: 10px;
    // background-color: #2563eb;
    // background-color: #f87171;
    background-color:#e74c3c;
    color: white;
    padding: 7px;
    border-radius: 50%;
    font-size: 1rem;
  }

  .product-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin:0 2rem;
  }

  .product-details h3 {
    font-size: 1.2rem;
    margin: 0;
    
  }

  .price {
    font-size: 1.1rem;
    color: #2563eb;
  }

  .quantity-control {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .quantity-control button {
    padding: 5px 10px;
    background-color: #2563eb;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .remove {
  margin-top: 10px;
  padding: 8px 16px; /* Adjust padding */
  background-color: #f87171;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width:30%;
  font-size: 0.9rem; /* Reduce font size for better desktop appearance */
}

  .total {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    align-items: center;
    background-color: #e9eef7;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    padding:1rem;
  }

  .checkout {
    padding: 12px 25px;
    background-color: #2563eb;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .cart-items {
      flex-direction: column;
    }

    .cart-item {
      flex-direction: column;
      gap: 1rem;
    }

    .product-image {
      width: 100px;
      height: 100px;
    }

    .product-details {
      text-align: center;
      margin:0;
    }

    .total {
      flex-direction: column;
      align-items: center;
      gap:1rem;
    }

    .checkout {
      width: 100%;
    }
      .remove {
    padding: 6px 12px; /* Adjust padding for desktop */
    font-size: 0.8rem;  /* Smaller font size for desktop */
    width:100%;
  }
  }
`;

export default CartItem;
