import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Promotions = () => {
  const promoItems = [
    {
      id: 1,
      title: "50% Off on Winter Collection",
      description: "Stay warm and stylish with our latest winter collection.",
      discount: "50%",
      image: "https://oc.kosha.co/journal/wp-content/uploads/2022/08/word-image-7842-3.jpeg", // Replace with actual image URL
    },
    {
      id: 2,
      title: "30% Off on Electronics",
      description: "Grab your favorite gadgets at unbelievable prices.",
      discount: "30%",
      image: "https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg",
    },
    {
      id: 3,
      title: "Buy 1 Get 1 Free on Shoes",
      description: "Buy one pair of shoes and get another pair absolutely free!",
      discount: "Buy 1 Get 1 Free",
      image: "https://preview.colorlib.com/theme/karma/img/product/p2.jpg",
    },
  ];

  return (
    <Wraper>
        <section className="promotions">
      <h2>Special Promotions</h2>
      <p>Don't miss out on our limited-time offers! Get up to 50% off on selected items.</p>
      <Link to="/promotions" className="btn-view-promotions">View Promotions</Link>

      <div className="promotion-cards">
        {promoItems.map((item) => (
          <div key={item.id} className="promo-card">
            <img src={item.image} alt={item.title} className="promo-image" />
            <div className="promo-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="promo-discount">{item.discount}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
    </Wraper>
  );
};
const Wraper=styled.section`
.promotions {
  text-align: center;
  padding: 40px;
  background-color: #f6f2e9;
  margin:1.5rem 0;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.promotions h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.promotions p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
}

.btn-view-promotions {
  display: inline-block;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  margin-bottom: 30px;
}

.promotion-cards {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.promo-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease;
}

.promo-card:hover {
  transform: translateY(-5px);
}

.promo-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.promo-content h3 {
  font-size: 1.25rem;
  margin: 10px 0;
  color: #333;
}

.promo-content p {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 10px;
}

.promo-discount {
  font-weight: bold;
  color: #e63946;
  font-size: 1.1rem;
}
@media (max-width: 768px) {
  .promotion-cards {
    display: flex;
    flex-direction: column; /* Stack promotion cards vertically */
    gap: 1.5rem; /* Spacing between the cards */
    align-items: center; /* Center-align the cards */
  }

  .promo-card {
    width: 100%; /* Make each card take full width */
    max-width: 500px; /* Optional: Limit the width for readability */
    margin: 0 auto; /* Center the card */
    background-color: #e9eef7;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .promo-image {
    width: 100%; /* Make image take full width of the card */
    height: auto;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .promo-content {
    padding: 1rem;
  }

  .promo-content h3 {
    font-size: 1.1rem;
    color: #333;
  }

  .promo-content p {
    font-size: 0.85rem;
    color: #666;
    margin-bottom: 1rem;
  }

  .promo-discount {
    font-size: 1rem;
    color: #333;
    font-weight: bold;
  }
}

`
export default Promotions;
