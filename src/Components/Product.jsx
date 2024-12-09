import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {truncate} from '../Helper/Util'

function Product({ id, title, price,image}) {
  return (
    <Warper>
        <div>
        <NavLink className="decor" to={`/singleproduct/${id}`}>
          <div key={id} className="product-card">
            <img src={image} alt="Product 1" />
            <h3>{truncate(title, 10)}</h3>
            <p><strong>$ {price}</strong></p>
            {/* <button className="btn-view-product">View Product</button> */}
          </div>
          </NavLink>
        </div>
    </Warper>
  )
}
const Warper= styled.section`
strong {
  color:#2563eb;
  font-size:22px;
  
}
  .product-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  
}

.product-card {
  // border: 1px solid #ccc;
  padding: 20px; /* Padding for spacing inside the card */
  text-align: center;
  width: 250px; /* Width of the product card */
  height: 350px; /* Set a fixed height for the card */
  margin: 15px; /* Margin for spacing between cards */
  border-radius: 8px;
  background-color: #fff;
  // box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  box-shadow: -5px 0 5px rgba(0, 0, 0, 0.1), 5px 0 5px rgba(0, 0, 0, 0.1);

  transition: transform 0.2s;
  display: flex; /* Use flexbox for vertical alignment */
  flex-direction: column; /* Stack children vertically */
  justify-content: space-between; /* Distribute space evenly */
}
.decor{
 text-decoration:none;
 color:black;
}
.product-card img {
  width: 100%;
  border-radius: 5px;
  height: 220px; 
  object-fit:cover;/* Maintain aspect ratio */
  // filter: brightness(1,1) contrast(1.1);
}

.product-card h3 {
  margin: 10px 0; /* Space above and below the product title */
}

.product-card p {
  margin: 10px 0; /* Space above and below the price */
}

.product-card:hover {
  transform: scale(1.05); /* Slightly larger on hover */
}

.btn-view-product {
  padding: 10px 20px;
  background-color:#2563eb;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  margin-top: 10px;
  border:none;
}

.btn-view-product a{
text-decoration:none;
}
.btn-view-product:hover
:hover {
  background-color: #6288da;
}
  @media(max-widht:768px){
  
  }
`
export default Product