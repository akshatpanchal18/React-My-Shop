import React from "react";
import styled from "styled-components";
import HeroSection from './Components/HeroSection'
import FeatureProducts from './Components/FeatureProduct'
import Review from './Components/Review'
import Promotions from './Components/Promotion'
import Services from './Components/Services'
import LatestNews from './Components/LetestNews'

function Home() {
  return (
    <Wraper>
      <div className="home-container">
        <HeroSection/>
        <FeatureProducts/>
        <Promotions/>
        <LatestNews/>
        <Review/>
        <Services/>
      </div>
    </Wraper>
  );
}
const Wraper = styled.section`
  .home-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
    @media (max-width: 768px) {
    .home-container{
    padding: 1.5rem 1.5rem;
    }
    }
`;
export default Home;
