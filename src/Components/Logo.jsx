import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


function Logo() {
  return (
    <Wraper>
    <div>
      <div className="navbar-logo">
        <NavLink to="/">MyStore</NavLink>
      </div>
    </div>
    </Wraper>
  );
}
const Wraper= styled.section`
.navbar-logo a {
    font-size: 1.5rem;
    // color: white;
    color: #f0a500;
    text-decoration: none;
    font-weight: bold;
  }
`
export default Logo;
