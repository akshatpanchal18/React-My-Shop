import React, { useEffect } from "react";
import { useProductContext } from "./Contaxt/ProductContaxt";
import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";
import { FaTruck, FaShieldAlt, FaUndoAlt } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import AddtoCart from "./Components/AddtoCart";
import Comments from "./Components/Comments";

const URL = "https://fakestoreapi.com/products";
function SingleProduct() {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${URL}/${id}`);
  }, [id]);

  if (isSingleLoading || !singleProduct) {
    return <div>Loading...</div>;
  }

  const { price, title, description, rating, category, image } = singleProduct;
  const { rate, count } = rating || {};

  return (
    <Wrapper>
      
      <div className="body">
      <NavLink to="/products">
        <IoMdArrowRoundBack className="icon-back" />
      </NavLink>
        <div className="single-product">
          <div className="product-image-container">
            <img src={image} alt={title} className="product-image" />
          </div>
          <div className="product-details">
            <h1>{title}</h1>
            <p className="price">Price: ${price}</p>
            <p className="description">{description}</p>
            <p className="category">Category: {category}</p>
            <div className="rating">
              <span>Rating: {rate} </span>
              <span>({count} in stock)</span>
            </div>
            <div className="btns">
              <div className="btn">
                <AddtoCart product={singleProduct} />{" "}
                {/* Pass singleProduct here */}
              </div>
              {/* <button className="buy-btn">Place Order</button> */}
            </div>
            <div className="additional-info">
              <div className="info-item">
                <FaTruck className="icon" />
                <span>Free Delivery</span>
              </div>
              <div className="info-item">
                <FaShieldAlt className="icon" />
                <span>1-Year Warranty</span>
              </div>
              <div className="info-item">
                <FaUndoAlt className="icon" />
                <span>Easy Return</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Comments/>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .body {
    max-width: 1200px;
    margin: 0 auto;
    padding: 5rem;
  }
  .single-product {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2rem 0;
    background-color: #e9eef7;
    border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  .icon-back {
    font-size: 2rem;
    margin: 2rem 2rem 0;
    color: black;
  }
  .product-image-container {
    flex: 1;
    padding: 20px;
  }

  .product-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    background: transparent;
  }

  .product-details {
    flex: 2;
    padding: 20px;
  }

  .product-details h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .price {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #2563eb;
  }

  .description {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .category {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .rating {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  .additional-info {
    margin-top: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }
  .btn {
    display: flex;
    gap: 1rem;
    align-items: center; /* Ensures vertical alignment */
  }

  .buy-btn {
   padding: 1rem;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #4caf50;
    cursor: pointer;
  }

  .add-btn {
    background-color: #4caf50;
  }

  .buy-btn {
    background-color: #2563eb;
    display: flex;
    place-item: end;
  }
  .btns {
    display: flex;
    align-items: flex-end;
    gap: 1rem;
    padding:0 2.2rem;
  }
  .delivery-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.1rem;
  }

  .truck-icon {
    color: #4caf50;
    font-size: 1.5rem;
  }
  .additional-info {
    display: flex;
    gap: 2rem;
    margin-top: 1.5rem;
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    background-color: #f9f9f9;
    padding:1rem;
    border-radius:10px;
  }

  .icon {
    font-size: 2.5rem;
    color: black;
  }
  /* Responsive Layout for Smaller Screens */
  @media (max-width: 768px) {
  .body{
  padding: 1.5rem 1.5rem;
  }
    .single-product {
      flex-direction: column;
      align-items: center;
    }

    .product-image-container,
    .product-details {
      width: 100%;
      text-align: center;
    }

    .additional-info {
      flex-direction: column;
      align-items: center;
    }

    .icon {
      font-size: 2rem;
    }
     .btns {
    flex-direction: column; 
    max-width:180px;
    margin:0 auto; /* Stack buttons vertically on mobile */
  }

  .buy-btn {
    width: 100%;
    text-align:center;  /* Make the button full width on mobile */
  }
    .btn{
    max-width:100%;
    margin:0 auto;
    
    }
    .icon-back {
    font-size: 2rem;
    margin: 4rem 2rem;
    color: black;
  }
  }
`;
export default SingleProduct;
