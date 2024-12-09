import React from 'react'
import { useProductContext } from '../Contaxt/ProductContaxt';
import styled from 'styled-components';
import Product from './Product';


function FeatureProducts() {
    const { isLoading, featureProducts } = useProductContext();
    // console.log(featureProducts);
    
    if (isLoading) {
        return <div> ......Loading </div>;
      }
  return (
    <Wraper>
        <div>
        <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
            {featureProducts.length > 0 ? (
              featureProducts.map((curElem) => (
                <Product key={curElem.id} {...curElem} />
              ))
            ) : (
              <div>No products available.</div>
            )}
        </div>
      </section>
    </div>
    </Wraper>
  )
}
const Wraper=styled.section`
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
`
export default FeatureProducts