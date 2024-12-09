import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wraper>
      <div className="about-us">
        <section className="about-us-intro">
          <div className="intro-content">
            <h1>About Our Brand</h1>
            <p>
              We started with a mission to bring quality products to our
              customers. Today, we are proud to serve thousands of customers
              globally with a wide range of curated products.
            </p>
          </div>
          <img src="about.jpg" alt="Our Brand" className="brand-image" />
        </section>

        <section className="about-us-stats">
          <div className="stat-item">
            <h2>1M+</h2>
            <p>Products Sold</p>
          </div>
          <div className="stat-item">
            <h2>99%</h2>
            <p>Customer Satisfaction</p>
          </div>
          <div className="stat-item">
            <h2>100+</h2>
            <p>Countries Reached</p>
          </div>
        </section>

        <section className="about-us-team">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {/* Example of team member cards */}
            <div className="team-member">
              <img src="emp.jpg" alt="Team Member 1" />
              <h3>Jane Doe</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <img src="emp1.jpg" alt="Team Member 2" />
              <h3>John Smith</h3>
              <p>Head of Operations</p>
            </div>
          </div>
        </section>
      </div>
    </Wraper>
  );
};
const Wraper = styled.section`
  .about-us {
    font-family: Arial, sans-serif;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .about-us-intro {
    text-align: center;
    margin-bottom: 2rem;
    // background-color: #e9eef7;
    padding: 10px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    gap: 2rem;
    position: relative;
  }
  .about-us-intro h1{
    text-align:start;
    font-size:36px;
    color:#2563eb;
  }
  .about-us-intro p{
  font-size:22px;
  text-align:start;
  margin-top:1rem;
  }
  .intro-content {
    flex: 1;
  }
  .brand-image {
    max-width: 55%;
    height: auto;
    border-radius: 87% 13% 81% 19% / 26% 76% 24% 74%;
    margin-top: 1rem;
  }

  .about-us-stats {
    display: flex;
    justify-content: space-around;
    margin: 2rem 0;
    text-align: center;
  }

  .stat-item h2 {
    font-size: 2.5rem;
    // color: #4caf50;
    color:#2563eb;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 2rem;
    margin-top: 1rem;
  }

  .team-member {
    text-align: center;
  }

  .team-member img {
    width: 100%;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    .about-us-stats {
      flex-direction: column;
    }
       .about-us-intro {
    flex-direction: column;
    text-align: center;
  }
  
  .brand-image {
    max-width: 80%;
    margin-top: 1rem;
    border-radius: 87% 13% 81% 19% / 26% 76% 24% 74%;
  }
  }
`;
export default About;
