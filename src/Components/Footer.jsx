import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    
    <div className="fo">
        {/* footer */}
        <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3><i className="fa fa-home"></i> Laundry</h3>
            <p>
              Ut tellus elementum sagittis vitae et leo duis ut.<br />
              Sit amet consectetur adipiscing elit duis.<br />
              Ultrices gravida dictum fusce ut placerat orci nulla pellentesque
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Blood Bank</li>
              <li>Cause</li>
              <li>Contact Us</li>
              <li>Donate Us</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>📍 54326 Fadel Circles Darrylstade, AZ 90995</p>
            <p>📞 (329) 580-7077, (650) 382-5020</p>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <p>Venenatis urna cursus eget nunc scelerisque</p>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-whatsapp"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer