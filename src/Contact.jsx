import React, { useState } from 'react';
import styled from 'styled-components';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    alert(`Message sent from ${formData.name}`);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Wraper>
    <div className="home-container">
      <header className="hero-banner">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you!</p>
      </header>

      <section className="contact-content">
        <p>
          If you have any questions, feedback, or need assistance, please fill out the form below, and we will get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
    </Wraper>
  );
};
const Wraper=styled.section`
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.hero-banner {
  background-color: #e9eef7; /* Primary background color */
  color: black; /* Text color */
  text-align: center; /* Center align text */
  padding: 20px; /* Padding for spacing */
  border-radius: 8px; /* Rounded corners */
  margin-bottom: 20px; /* Space below the hero banner */
}

.hero-banner h1 {
  margin: 0; /* Remove default margin */
  font-size: 2.5rem; /* Font size for the heading */
}

.hero-banner p {
  margin: 10px 0 0; /* Margin for the paragraph */
  font-size: 1.2rem; /* Font size for the paragraph */
}

.contact-content {
  margin: 40px auto; /* Center the section with automatic left and right margins */
  padding: 30px; /* Padding inside the contact content */
  background-color: #f8f9fa; /* Light background for contrast */
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 600px; /* Limit maximum width for the contact form */
}

.contact-content h1 { /* Target the h1 element */
  text-align: center; /* Center the heading */
  margin-bottom: 20px; /* Space below the heading */
  font-size: 2rem; /* Adjusted font size for heading */
}

.contact-content p {
  font-size: 1rem; /* Slightly smaller font for paragraph */
  margin-bottom: 30px; /* Space below the paragraph */
  text-align: center; /* Center-align the text */
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.contact-form div {
  margin-bottom: 20px; /* Space between input fields */
}

.contact-form label {
  margin-bottom: 5px;
  font-weight: bold; /* Bold labels for better visibility */
}

.contact-form input,
.contact-form textarea {
  padding: 12px; /* Padding for inputs */
  border: 1px solid #ced4da; /* Subtle border color */
  border-radius: 5px;
  width: 100%;
  font-size: 1rem; /* Font size for better readability */
  transition: border-color 0.3s; /* Transition effect for focus */
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #007bff; /* Change border color on focus */
  outline: none; /* Remove default outline */
}

.contact-form textarea {
  min-height: 100px; /* Minimum height for the textarea */
  resize: vertical; /* Allow vertical resizing */
}

.contact-form button {
  padding: 12px;
  background-color: #007bff; /* Primary button color */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s; /* Transition for hover and click */
  font-size: 1rem; /* Font size for button */
}

.contact-form button:hover {
  background-color: #0056b3; /* Darker shade on hover */
  transform: scale(1.05); /* Slight scaling effect on hover */
}

.contact-form button:active {
  transform: scale(0.95); /* Slight scaling effect on click */
}


`
export default Contact;
