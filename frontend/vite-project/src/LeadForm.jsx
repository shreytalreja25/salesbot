import React, { useState } from 'react';

const LeadForm = ({ setInitialMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Lead created:', data);
        setSubmitted(true);
        setInitialMessage(data.botResponse); // Set the initial message
        // Reset the form
        setFormData({
          name: '',
          phone: '',
          email: '',
          product: '',
          message: ''
        });
        // Clear the submitted message after a few seconds (optional)
        setTimeout(() => setSubmitted(false), 3000); // 3 seconds
      } else {
        console.error('Failed to create lead');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <h1>Get in touch</h1>
      <p>Fill out the form to learn more about our office supplies.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="product">Product of Interest:</label>
        <select
          id="product"
          name="product"
          value={formData.product}
          onChange={handleChange}
          required
        >
          <option value="">Select a product</option>
          <option value="Stationery">Stationery</option>
          <option value="Office Furniture">Office Furniture</option>
        </select>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Thank you! Your message has been sent.</p>}
    </div>
  );
};

export default LeadForm;
