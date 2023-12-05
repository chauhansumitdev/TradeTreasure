import './ReachUs.css';
import React, { useState } from 'react';
import { TbMessage2Check } from "react-icons/tb";
const ReachUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // db.connect <<-pending err
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <div className="buffer"></div>
      <div className="description">
      <div>
      <h4>Reach Us <TbMessage2Check /></h4>
      <p className='paras'>
        Have questions, suggestions, or just want to get in touch with us? We're here to help! Follow the instructions below to reach out:
      </p>
      <ol>
        <li className='paras'>
          <strong>Name:</strong> Enter your full name in the "Name" field.
        </li>
        <li className='paras'>
          <strong>Email:</strong> Provide a valid email address in the "Email" field.
        </li>
        <li className='paras'>
          <strong>Message:</strong> Type your message or inquiry in the "Message" field.
        </li>
      </ol>
      <p className='paras'>
        Once you've filled in the required details, click the "Submit" button, and we'll get back to you as soon as possible.
      </p>
      <p>
        <strong>Thank you for reaching out !</strong>
      </p>
    </div>
      </div>
      <div className="contact-container">
        <h4>Contact Us</h4>
        <br />
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="buffer"></div>
    </div>
  );
};

export default ReachUs;

