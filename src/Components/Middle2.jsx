import React from 'react';
import './Middle2.css';

const Middle2 = () => {
  return (
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
    <div className="white-line"></div>

    {/* features strip */}
    <div className="features-strip">
        {[
            { icon: '💉', text: 'Affordable rates' },
          { icon: '💲', text: 'Skin Friendly' },
          { icon: '3️⃣K️+', text: 'UV Safe Air Drying' },
          { icon: '👥', text: 'Uses less & Fresh Water' },
          { icon: '❤️', text: 'Uses less & Fresh Water' },
          { icon: '🖐💧', text: 'Uses less & Fresh Water' },
        ].map((item, index) => (
            <div className="feature" key={index}>
                <div className="icon">{item.icon}</div>
                <p>{item.text}</p>
            </div>
        ))}
        
    </div>
    <div className="white-line"></div>

        
    </div>
    
  );
};

export default Middle2;
