import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaExclamationTriangle } from "react-icons/fa";

function Error() {
  return (
    <Wraper>
      <div className="error-page">
        {/* <img src="./error.jpg" alt="" /> */}
        <FaExclamationTriangle className='icon'/>
        <p className='icon-p'>404</p>
      <h1>Oops! Page Not Found</h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="error-link">Go back to Home</Link>
    </div>
    </Wraper>
  );
}
const Wraper=styled.section`
/* ErrorPage.css */
.icon{
font-size:13rem;
color:red;
margin:0 auto;
}
.error-page .icon-p{
font-size:5rem; 
}
.error-page {
  text-align: center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-item:center;
  padding: 2rem;
  font-family: Arial, sans-serif;
  height:70vh;
}

.error-page h1 {
  font-size: 3rem;
  color: #e74c3c;
}

.error-page p {
  font-size: 1.2rem;
  margin: 1rem 0;
}

.error-link {
  font-size: 1.2rem;
  color: #3498db;
  text-decoration: none;
}

.error-link:hover {
  text-decoration: underline;
}
@media(max-width:768px){
img{
max-width:100%;
}
}
`
export default Error