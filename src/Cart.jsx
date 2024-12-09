import React from 'react'
import CartItem from './Components/CartItem'
import styled from 'styled-components'
import { useCartContaxt } from './Contaxt/CartContaxt'
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Cart() {
  const{total_price,total_item,shipping_fee}=useCartContaxt();
  const {user,isAuthenticated}=useAuth0();
  // console.log(total_item);
  
  return (
    <Wraper>
    <div>
    {
          isAuthenticated && (
            <div className='cart-user' ><img style={{height:"50px",width:"50px",borderRadius:"50%"}} src={user.picture} alt={user.name} />
            <h2 style={{fontSize:"18px"}}>{user.name}'s Cart</h2></div>
          )
        }
      <CartItem/>
      <div className="total">
          <div className='ship-total'>
          <p>Shipping Charge: <strong>${shipping_fee}</strong></p>
          <p>Sub Total: <strong>${(Number(total_price)).toFixed(2)}</strong></p>
          </div>
          {/* <h3>Total Price: ${(shipping_fee + total_price).toFixed(2)}</h3> */}
          <h3>Total Price: ${(Number(shipping_fee) + Number(total_price) || 0).toFixed(2)}</h3>
          <NavLink to='/checkout'>
          <button className="checkout">Proceed to Checkout</button>
          </NavLink>
        </div>
    </div>
    </Wraper>
  )
}
const Wraper = styled.section`
.total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e9eef7;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    padding:1rem;
    max-width:750px;
    margin:2rem auto;
    border-radius:10px;
  }
  .checkout {
    padding: 12px 25px;
    background-color: #2563eb;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
    .cart-user{
    display:flex;
    justify-content:center;
    align-items: center;
    gap:1rem;
    margin: 1.5rem auto;
    }
     @media (max-width: 768px){
    .total {
      flex-direction: column;
      align-items: center;
      gap:1rem;
      margin:1rem 2rem;
    }

    .checkout {
      width: 100%;
    }
    }
`
export default Cart