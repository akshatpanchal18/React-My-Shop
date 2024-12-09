import React from "react";
import styled from "styled-components";
import Filter from "./Components/Filter";
import Productlist from "./Components/Productlist";
import Pagination from "./Components/Pagination";

function Products() {
  return (
    <Wraper>
      <div className="body">
      <div className="container">
        <div className="filter"><Filter/></div>
        <div className="main-content">
          {/* <div className="product-info">Product Info</div> */}
          <div className="product-list"><Productlist/></div>
        </div>
      </div>
      <Pagination/>
      </div>
    </Wraper>
  );
}
const Wraper = styled.section`
.body{
max-width:1300px;
margin:0 auto;
}
  .container {
    display: flex; /* Use flexbox for layout */
    min-height: 100vh; /* Full height of the viewport */
    padding:20px;
  }

  .filter {
    flex: 0 0 250px; /* Fixed width for filter */
    padding: 20px; /* Add padding */
    background-color: #e9eef7;
    margin-right:20px;
    border-radius:10px;
    height:500px;
  }

  .main-content {
    flex: 1; /* Take the remaining space */
    display: flex; /* Use flexbox for main content layout */
    flex-direction: column; /* Stack children vertically */
  }

  .product-info {
    flex: 0 1 auto; /* Allow it to grow and shrink based on content */
    padding: 20px; /* Add padding */
    background-color: #e9eef7;
    border-radius:10px;
  }

  .product-list {
    flex: 1;
    padding: 20px; /* Add padding */
    overflow-y: auto; /* Allow scrolling if content overflows */
    background-color: #e9eef7;
    border-radius:10px;
    // margin-top:20px;
  }

 @media (max-width: 768px) {
    .container {
      flex-direction: column; /* Stacks filter on top for mobile */
    }

    .filter {
      margin-right: 0;
      margin-bottom: 20px; /* Adds space below filter in mobile view */
      width: 100%; /* Ensures filter takes full width on mobile */
    }

    .main-content {
      width: 100%; /* Ensures main content takes full width on mobile */
    }
  }
`;
export default Products;
