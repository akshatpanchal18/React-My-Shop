import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import styled from 'styled-components';

function CartAmountToggel({ amount, setDecrease, setIncrease }) {
    // console.log("Rendering CartAmountToggel with amount:", amount);
  return (
    <Wraper>
      <div className='cart-button'>
      <div className="amount-toggle">
        <button onClick={setDecrease}>
          <FaMinus/>
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={setIncrease}>
          <FaPlus />
        </button>
      </div>
    </div>
    </Wraper>
  );
}
const Wraper=styled.section`
.amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    // margin:3rem 2rem 1rem 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    background-color: transparent
}
    button {
      border: none;
      background-color: transparent
      cursor: pointer;
    }

    .amount-style {
      font-size: 1.3rem;
      margin: 0 2rem 0 2rem;
      color: black;
    }
  }
`
export default CartAmountToggel;
