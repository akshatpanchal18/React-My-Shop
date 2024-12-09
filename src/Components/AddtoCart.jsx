import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useCartContaxt } from "../Contaxt/CartContaxt";
import CartAmountToggel from "./CartAmountToggel";

function AddtoCart({ product }) {
  const { addToCart,placeOrder } = useCartContaxt();
  const { id = "", rating = 0 } = product || {};
  const { count } = rating;
  const [amount, setAmount] = useState(1);
  //  console.log("stoke",count);
  //  console.log(product);

  const setDecrease = () => {
    setAmount((prevAmount) => Math.max(prevAmount - 1, 1));
  };

  const setIncrease = () => {
    setAmount((prevAmount) => Math.min(prevAmount + 1, count));
  };

  if (!product) {
    return <div>Loading...</div>; // If product is not passed, show a loading state
  }

  return (
    <>
      <Wrapper>
        <div className="count">
          <CartAmountToggel
            amount={amount}
            setDecrease={setDecrease}
            setIncrease={setIncrease}
          />
        </div>
        <div className="b-data">
          <NavLink to="/cart" onClick={() => addToCart(id, amount, product)}>
            <button className="add-btn">Add to cart</button>
          </NavLink>
          {/* <NavLink to={`/checkout/${id}/${product.title}`} style={{ textDecoration:"none"}} onClick={()=>placeOrder(id,amount,product)}>
            <button className="buy-btn">Place Order</button>
          </NavLink> */}
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  .NavLink {
    text-decoration: none;
  }
  .add-btn {
    padding: 1rem;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #4caf50;
    cursor: pointer;
  }
  .count {
    max-width: 50%;
  }
  .b-data {
    display: flex;
    gap: 10px;
  }
  .add-btn:focus,
  .add-btn:hover {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    .btn {
      flex-direction: column;
    }
    .add-btn {
      width: 100%;
    }
  }
`;

export default AddtoCart;
