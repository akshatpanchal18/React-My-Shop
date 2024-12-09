import React from "react";
import styled from "styled-components";

function Comments() {
  const comments = [
    {
      id: 1,
      name: "Jane Doe",
      email: "jane.doe@example.com",
      comment:
        "Great quality products! Shipping was fast, and everything arrived in perfect condition.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*D0fy9_987iQB2INzSfZ_Hg.png",
    },
    {
      id: 2,
      name: "Sarah Lee",
      email: "sarah.lee@example.com",
      comment:
        "Amazing shopping experience. User-friendly site and excellent customer service!",
      image:
        "https://media.istockphoto.com/id/862664362/photo/young-tourist-with-camera-in-the-old-town.jpg?s=612x612&w=0&k=20&c=lQlFOenQ4vDpxz7Sy-5oYcLatcUkp_zoHoIfb58kydU=",
    },
    {
      id: 3,
      name: "Alex Kim",
      email: "alex.kim@example.com",
      comment:
        "Product quality exceeded my expectations, and I love the blue color scheme!",
      image:
        "https://thumb.photo-ac.com/cf/cf187884829392c03b1463c660fa61e4_t.jpeg",
    },
  ];
  return (
    <Wraper>
      <div>
        <div className="comments-section">
          <h2>Customer's Review</h2>
          <div className="comment-cards">
            {comments.map(({ id, name, email, comment, image }) => (
              <div key={id} className="comment-card">
                <img
                  src={image}
                  alt={`${name}'s Profile`}
                  className="comment-image"
                />
                <div className="comment-content">
                  <p className="comment-text">"{comment}"</p>
                  <p className="comment-info">
                    <strong>{name}</strong> <span>- {email}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wraper>
  );
}
const Wraper = styled.section`
  .comments-section {
    max-width: 900px;
    margin: 30px auto;
    padding: 20px;
    background-color: #e9eef7;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    //   background-color: #f9f9f9;
  }

  .comments-section h2 {
    font-size: 1.8rem;
    color: #003366;
    margin-bottom: 20px;
  }

  .comment-cards {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .comment-card {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 280px;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .comment-image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }

  .comment-content {
    text-align: left;
  }

  .comment-text {
    font-size: 0.95rem;
    color: #333;
    margin-bottom: 5px;
  }

  .comment-info {
    font-size: 0.85rem;
    color: #666;
  }

  .comment-info span {
    display: block;
    color: #003366;
    font-size: 0.85rem;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
  .comments-section{
  margin:1rem 1rem;
  }
    .comment-cards {
      flex-direction: column;
      align-items: center;
    }

    .comment-card {
      width: 100%;
    }
  }
`;
export default Comments;
