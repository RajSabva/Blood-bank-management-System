import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="quote-box">
        <h1>Want to watch a miracle? <br />Go and donate blood.</h1>
      </div>

      <div className="form-box">
        <h3>Contact Us</h3>
        <p>Fill up the form and our team will get back to you within 24 hours.</p>
        
        <form>
          <div className="name-row">
            <input type="text" placeholder="First Name *" required />
            <input type="text" placeholder="Last Name *" required />
          </div>
          <input type="email" placeholder="Email *" required />
          <input type="tel" placeholder="Phone *" required />
          <textarea placeholder="Message *" required></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
