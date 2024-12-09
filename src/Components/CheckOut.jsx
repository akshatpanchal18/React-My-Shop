import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { useCartContaxt } from "../Contaxt/CartContaxt";
import { NavLink,useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import ConfirmPage from "./ConfirmPage";

function CheckOut() {
  const { cart_m, total_price, shipping_fee,oneProduct } = useCartContaxt();
  const total = (Number(shipping_fee) + Number(total_price) || 0).toFixed(2)
  //-------------------------------------------------------
  // console.log(oneProduct);
  
  const customer = {
    name: "John Doe",
    email: "john.doe@example.com",
    number: "+1 (415) 555-1234",
    address: "1234 Blue Street, Apt 12, Los Angeles, CA, 90001",
    img: "https://static.vecteezy.com/system/resources/thumbnails/048/378/864/small_2x/a-young-happy-pretty-smiling-professional-business-woman-free-photo.jpg",
  };
  
  return (
    <Wraper>
      <div className="checkout-page">
        <div className="navigation">
          <NavLink to="/cart">
            <FaShoppingCart className="cart" />
          </NavLink>
          /<p>CheckOut</p>
        </div>
       

        <div className="checkout-columns">
          {/* Column 1: Customer Details */}
          <div className="checkout-column customer-details">
            <h3>Customer Details</h3>
            <img src={customer.img} alt="" />
            <p>
              <strong>{customer.name}</strong>{" "}
            </p>
            <p>
              <strong>{customer.email}</strong>{" "}
            </p>
            <p>
              <strong>{customer.number}</strong>{" "}
            </p>

            <h4>Shipping Address</h4>
            <p><strong>Address:</strong></p>
            <p>{customer.address}</p>

            <div className="gift">
                
                <input type="text" placeholder="Add Gift Code"  />
                <button>Apply</button>
              </div>
              
          </div>

          {/* Column 2: Item Details */}
          <div className="checkout-column item-details">
            <h3>Item Details</h3>
            {cart_m.map((product) => (
              <div className="item" key={product.id}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-info">
                  <p>
                    <strong>{product.name}</strong>
                  </p>
                  <p>
                    Quantity: <span className="quantity">{product.amount}</span>
                  </p>
                  <p>
                    Price:{" "}
                    <span className="price">${product.price.toFixed(2)}</span>
                  </p>
                </div>
              </div>
            ))}
            <div className="item-total">
              <hr />
              <div className="flex">
              <p>
                <strong>Total:</strong> $
                {total}
              </p>
              <NavLink to='/confirmpage'>
              <button
          type="button"
          className="pay-button"
        >
          Proceed to Pay
        </button>
              </NavLink>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </Wraper>
  );
}
const Wraper = styled.section`
  .checkout-page {
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
    // background-color: #f9f9f9;
    background-color: #e9eef7;
    border-radius: 8px;
  }
  .navigation {
    display: flex;
    font-size: 28px;
    margin: 1rem 1.5rem;
  }
  .navigation .cart {
    color: black;
  }
  .navigation p {
    color: #4e81de;
  }
  .checkout-page h2 {
    font-size: 2rem;
    color: #003366;
    text-align: center;
    margin-bottom: 20px;
  }

  .checkout-columns {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .checkout-column {
    background-color: #fff;
    // border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    flex: 1;
    min-width: 280px;
  }

  .checkout-column h3,
  .checkout-column h4 {
    font-size: 1.5rem;
    color: #003366;
    margin-bottom: 15px;
  }

  .customer-details p,
  .item-details .item p {
    font-size: 1rem;
    color: #333;
    margin: 5px 0;
  }
  .customer-details img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
  .item-details .item {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
  }

  .product-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
  }
  .quantity {
    // background-color: #2563eb;
    // background-color: #f87171;
    color: #e74c3c;
    // color: white;
    padding: 6px;
    // border-radius: 50%;
    font-size: 1rem;
    font-weight: bold;
  }
  .product-info p {
    margin: 0;
  }
  .price {
    color: #003366;
  }
  .product-info hr {
    border-bottom: 1px solid #333;
  }
  .item-total {
    font-size: 1.2rem;
    color: #333;
    font-weight: bold;
  }
  .item-total p {
    margin: 0.5rem 0;
    color: #4e81de;
  }
.flex{
display:flex;
margin:1rem 1rem;
justify-content: space-between;
}
  .pay-button {
    // margin-top: 20px;
    padding: 10px 15px;
    // background-color: #003366;
    background-color: #4e81de;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }
  /* Existing CSS... */

  .loading-spinner {
    margin-top: 20px;
    width: 30px;
    height: 30px;
    border: 4px solid #ccc;
    border-top: 4px solid #003366;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
/* Existing CSS... */

.success-message {
  margin-top: 15px;
  color: green;
  font-size: 1.1rem;
  font-weight: bold;
}

.gift{
display:flex;
// flex-direction:column;
margin:2rem 2rem;
// gap:12px;
}
.gift input{
width:50%;
padding:0.5rem;
border:none;
outline:none;
background-color: #e9eef7;
border-radius:10px 0 0 10px;
text-transform:uppercase;
}
.gift button{
padding:0.5rem;
border:none;
outline:none;
border-radius:0 10px 10px 0;
background-color: #4CAF50;
color:white;
}
.gift p{
margin:12px;
}
.gift strong{
color:#4e81de;
}
  /* Responsive Design */
  @media (max-width: 768px) {
    .checkout-columns {
      flex-direction: column;
    }
  }
`;
export default CheckOut;
