// Testimonial.js
import React, { useState } from "react";
import styled from "styled-components";

const testimonials = [
  {
    name: "Petey Cruiser",
    title: "Designer at Colorlib",
    message: "Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.",
    image: "https://img.freepik.com/free-photo/smiling-girl-with-american-flag-tree_23-2147824398.jpg", // Replace with actual image URL
  },
  {
    name: "Anna Sthesia",
    title: "Developer at CodeLab",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    image: "https://plus.unsplash.com/premium_photo-1665663927708-e3287b105c44?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYW4lMjBnaXJsfGVufDB8fDB8fHww",
  },
  {
    name: "Paul Molive",
    title: "Photographer at PhotoStudio",
    message: "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
    image: "https://w0.peakpx.com/wallpaper/692/434/HD-wallpaper-%E2%80%8Echris-evans-hollywood-2017-american-actor-celebrity-guys.jpg",
  },
  {
    name: "Gail Forcewind",
    title: "Manager at BizWorld",
    message: "Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.",
    image: "https://w0.peakpx.com/wallpaper/457/690/HD-wallpaper-matt-damon-american-actor-portrait-man-in-suit.jpg",
  },
  {
    name: "Paige Turner",
    title: "Author at BookHub",
    message: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    image: "https://e0.pxfuel.com/wallpapers/618/1009/desktop-wallpaper-american-girl-american-girl-beautiful-thumbnail.jpg",
  },
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Wraper>
    <div className="testimonial-container">
      <div className="testimonial-data">
      <h2>Customer Testimonial</h2>
      <div className="testimonial-card">
        <p>{testimonials[currentIndex].message}</p>
        <div className="testimonial-info">
          <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
          <div>
            <h3>{testimonials[currentIndex].name}</h3>
            <p>{testimonials[currentIndex].title}</p>
          </div>
        </div>
      </div>
      <div className="testimonial-navigation">
        <button onClick={handlePrev}>←</button>
        <button onClick={handleNext}>→</button>
      </div>
      </div>
    </div>
    </Wraper>
  );
};

const Wraper=styled.section`
.testimonial-container {
  text-align: center;
//   background-color: #e9eef7;
//   background-color: #f6f2e9;
background-color: #e9f7ef;
  padding: 40px;
  border-radius: 8px;
  max-width: 1200px;
  // margin: auto;
  margin:1.5rem 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.testimonial-data{
max-width:60%;
margin:0 auto;
}
.testimonial-card {
  margin: 20px 0;
}

.testimonial-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.testimonial-info img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
.testimonial-navigation{
display:flex;
justify-content:space-between;
}
.testimonial-navigation button {
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
}

.testimonial-navigation button:hover {
  color: #000;
}

@media (max-width: 768px) {
  .testimonials h2 {
    font-size: 1.5rem;
  }
.testimonial-data{
max-width:100%;
margin:0 auto;
}
  .testimonial-text {
    font-size: 0.9rem;
  }

  .testimonial-author-name {
    font-size: 0.9rem;
  }

  .testimonial-author-title {
    font-size: 0.8rem;
  }

  .navigation-buttons button {
    font-size: 1.3rem;
  }
}
`
export default Review;
