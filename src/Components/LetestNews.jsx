// LatestNews.js
import React from "react";
import styled from "styled-components";

const newsItems = [
  {
    id: 1,
    category: "Fashion Tips",
    title: "What Curling Irons Are The Best Ones",
    description:
      "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..",
    imageUrl:
      "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/blog1.jpg",
  },
  {
    id: 2,
    category: "Fashion Tips",
    title: "Vogue's Ultimate Guide To Autumn/Winter 2019 Shoes",
    description:
      "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..",
    imageUrl:
      "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/blog2.jpg",
  },
  {
    id: 3,
    category: "Fashion Tips",
    title: "What Curling Irons Are The Best Ones",
    description:
      "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..",
    imageUrl:
      "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/blog3.jpg",
  },
];

const LatestNews = () => {
  return (
    <Wraper>
      <section className="latest-news-section">
        <h2>Latest News</h2>
        <div className="news-grid">
          {newsItems.map((news) => (
            <div className="news-card" key={news.id}>
              <img
                src={news.imageUrl}
                alt={news.title}
                className="news-image"
              />
              <div className="news-content">
                <span className="news-category">{news.category}</span>
                <h3>{news.title}</h3>
                <p>{news.description}</p>
                <a href="/" className="read-more">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Wraper>
  );
};
const Wraper = styled.section`
  /* LatestNews.css */
  .latest-news-section {
    padding: 2rem;
    background-color: #ffffff;
    margin: 1.5rem 0;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .latest-news-section h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #333;
  }

  .news-grid {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
  }

  .news-card {
    //   background-color: #f9f9f9;
    background-color: #e9eef7;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 300px;
  }

  .news-image {
    width: 100%;
    height: auto;
  }

  .news-content {
    padding: 1rem;
  }

  .news-category {
    display: block;
    font-size: 0.8rem;
    color: #666;
    margin-bottom: 0.5rem;
  }

  .news-content h3 {
    font-size: 1.1rem;
    color: #333;
    margin: 0.5rem 0;
  }

  .news-content p {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 1rem;
  }

  .read-more {
    font-size: 0.9rem;
    color: #333;
    font-weight: bold;
    text-decoration: underline;
  }
  @media (max-width: 768px) {
  .latest-news-section h2 {
    font-size: 1.6rem;
    text-align: center; /* Center the heading for mobile */
  }

  .news-grid {
    display: flex;
    flex-direction: column; /* Stack cards vertically */
    gap: 1.5rem; /* Space between each card */
    align-items: center; /* Center-align the cards */
  }

  .news-card {
    width: 100%; /* Cards will take the full width */
    max-width: 500px; /* Limit the width to 500px for readability */
    margin: 0 auto; /* Center the cards */
    background-color: #e9eef7;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .news-image {
    width: 100%; /* Make the image take the full width of the card */
    height: auto;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .news-content {
    padding: 1rem;
  }

  .news-category {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 0.5rem;
  }

  .news-content h3 {
    font-size: 1.1rem;
    color: #333;
  }

  .news-content p {
    font-size: 0.85rem;
    color: #666;
    margin-bottom: 1rem;
  }

  .read-more {
    font-size: 0.9rem;
    color: #333;
    font-weight: bold;
    text-decoration: underline;
  }
}

`;
export default LatestNews;
