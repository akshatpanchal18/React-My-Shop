import React from 'react'
import Product from './Product'
import { useProductContext } from '../Contaxt/ProductContaxt'
import styled from 'styled-components';
import { useFiltercontext } from '../Contaxt/FilterContaxt';

function ProductList() {
    // const {products}=useProductContext();
    const { filterProducts, page, itemsPerPage } = useFiltercontext();
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedProducts = filterProducts.slice(startIndex, startIndex + itemsPerPage);
  return (
    <Wraper>
      <div className="body">
        <div className="featured-products"><p><strong>{filterProducts.length}</strong> Products avilable </p></div>
        <div className='product-list'>
        {
            paginatedProducts.map((curElem)=>{
                return <Product key={curElem.id} {...curElem}/>
            })
          }
    </div>
    </div>
    </Wraper>
  )
}
const Wraper = styled.section`
  .featured-products {
    margin: 40px 0;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .featured-products h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .product-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    .body {
      max-width: 100%;
      margin: 0 auto;
    }
    
    .product-list {
      justify-content: space-between;
    }
  }
`;


export default ProductList