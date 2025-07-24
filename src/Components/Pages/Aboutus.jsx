import React from 'react';
import './Aboutus.css';

const About = () => {
  return (
    <div className="about-container">

      {/* Hero Section */}
      <div className="about-hero">
        <img src="/first_image.jpg" alt="About Us" />
        <h1>About Us</h1>
      </div>

      {/* Intro Section */}
      <div className="about-intro">
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsam animi quis autem, iure fugiat assumenda
          quod non necessitatibus! Perspiciatis vitae dicta natus eaque, facilis iusto minima voluptates consequuntur a.
        </p>
      </div>

      {/* First Section - Text Left, Image Right */}
      <div className="about-section">
        <div className="about-text-card">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ratione voluptatem voluptate!
            At UClean, we bring best-in-class cleaning services at your doorstep!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quos expedita fugit qui nostrum, fugiat porro tempora provident quisquam voluptas maxime, dignissimos mollitia placeat?
          </p>
        </div>
        <div className="about-img">
          <img src="/first_image.jpg" alt="Service" />
           
        </div>
      </div>

      {/* ✅ Second Section - Image Left, Text Right */}
      <div className="about-section">  {/* Removed .reverse */}
        <div className="about-img">
          <img src="/first_image.jpg" alt="Donation" />
        </div>
        <div className="about-text-card">
          <p>
            Blood is life. Donating blood saves lives. It helps during emergencies, surgeries, and treatments.
            One unit of blood can save up to three lives! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque asperiores soluta iusto sint laudantium, eligendi quasi ipsum consequatur, ea laborum nam sunt molestiae accusantium?
          </p>
        </div>
      </div>

      <div className="all">
    <div className="our-promise">
      <h2>OUR PROMISE</h2>
      <div className="promise-boxes">
        <div className="promise">
          <div className="promise-icon">
            <img src="/badge.png" alt="Badge" width="60" />
          </div>
          <h3>QUALITY</h3>
          <p>Quality People Donate Quality Blood</p>
        </div>
        <div className="promise">
          <div className="promise-icon">
            <img src="/badge.png" alt="Transparency" width="60" />
          </div>
          <h3>TRANSPARENCY</h3>
          <p>Our Service is Fully Transparent</p>
        </div>
        <div className="promise">
          <div className="promise-icon">
            <img src="/badge.png" alt="Speed" width="60" />
          </div>
          <h3>SPEED</h3>
          <p>Faster Donations Help Save Lives</p>
        </div>
      </div>
    </div>
    </div>

    </div>
  );
};

export default About;
